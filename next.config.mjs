// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          perf_hooks: false,
          // Add other Node.js-specific modules here if needed
        };
      }
      return config;
    },
  };
  
  export default nextConfig;
  