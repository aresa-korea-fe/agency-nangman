/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  eslint: {
    dirs: ["app", "components", "lib"],
  },
  images: {
    deviceSizes: [640, 1080],
  },
};

export default nextConfig;
