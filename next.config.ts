import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // The jspawn Emscripten builds reference Node core modules behind
      // runtime environment guards; webpack still resolves them statically,
      // so stub them out of the browser/worker bundles.
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }
    return config;
  },
};

export default nextConfig;
