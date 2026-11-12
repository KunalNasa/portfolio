import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
};

module.exports = {
  allowedDevOrigins: ["127.0.2.2"],
};

export default nextConfig;
