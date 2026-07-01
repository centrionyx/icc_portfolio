const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_key_for_icc_website_admin";

// 2. Web Crypto Helper for HMAC (safe for Next.js Edge Middleware & Serverless routes)
async function generateSignature(message, secret) {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secret);
  const messageData = encoder.encode(message);

  const cryptoObj = typeof window === "undefined" ? globalThis.crypto : window.crypto;

  const key = await cryptoObj.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signatureBuffer = await cryptoObj.subtle.sign(
    "HMAC",
    key,
    messageData
  );

  const signatureArray = Array.from(new Uint8Array(signatureBuffer));
  return signatureArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

// 3. Token Sign / Verify (safe for Edge runtime)
export async function signToken(username) {
  const timestamp = Date.now();
  const message = `${username}:${timestamp}`;
  const signature = await generateSignature(message, JWT_SECRET);
  return `${username}:${timestamp}:${signature}`;
}

export async function verifyToken(token) {
  if (!token) return null;
  const parts = token.split(":");
  if (parts.length !== 3) return null;
  const [username, timestamp, signature] = parts;

  // Verify expiration (1 day = 86,400,000 ms)
  const isExpired = Date.now() - parseInt(timestamp, 10) > 86400000;
  if (isExpired) return null;

  const message = `${username}:${timestamp}`;
  const expectedSignature = await generateSignature(message, JWT_SECRET);

  if (signature === expectedSignature) {
    return { username };
  }
  return null;
}
