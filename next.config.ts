import path from "path";

import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Dev (next dev) relies on eval() for React Refresh and a WebSocket for HMR.
// Production never uses eval — keep it strict there.
const scriptSrc = isProd
  ? "script-src 'self' 'unsafe-inline'"
  : "script-src 'self' 'unsafe-inline' 'unsafe-eval'";
const connectSrc = isProd
  ? "connect-src 'self'"
  : "connect-src 'self' ws: wss:";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      scriptSrc,
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      connectSrc,
      "img-src 'self' data: https://avatars.githubusercontent.com",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
