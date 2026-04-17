const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 600000;
const RATE_LIMIT_MAX = 3;

function corsHeaders(origin) {
  const allowed = origin === 'https://joshlake.ai' || origin === 'http://localhost:8788';
  return {
    'Access-Control-Allow-Origin': allowed ? origin : '',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry) {
    rateLimitMap.set(ip, [now]);
    return false;
  }
  const recent = entry.filter(t => now - t < RATE_LIMIT_WINDOW);
  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

export async function onRequestOptions(context) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(context.request.headers.get('Origin')),
  });
}

export async function onRequestPost(context) {
  const origin = context.request.headers.get('Origin');
  const headers = { ...corsHeaders(origin), 'Content-Type': 'application/json' };

  try {
    const ip = context.request.headers.get('CF-Connecting-IP');
    if (isRateLimited(ip)) {
      return new Response(JSON.stringify({ success: false, error: 'Too many requests. Try again later.' }), { status: 429, headers });
    }

    const { email, turnstileToken, source } = await context.request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ success: false, error: 'Please enter a valid email.' }), { status: 400, headers });
    }

    if (context.env.TURNSTILE_SECRET_KEY) {
      const tsRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: context.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken || '',
          remoteip: ip,
        }),
      });
      const tsData = await tsRes.json();
      if (!tsData.success) {
        return new Response(JSON.stringify({ success: false, error: 'Verification failed. Please try again.' }), { status: 400, headers });
      }
    }

    const webhookRes = await fetch(context.env.SHEETS_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        email: email.toLowerCase().trim(),
        source: source || 'unknown',
      }),
    });

    if (!webhookRes.ok) {
      return new Response(JSON.stringify({ success: false, error: 'Subscription failed. Please try again.' }), { status: 500, headers });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: 'Server error.' }), { status: 500, headers });
  }
}
