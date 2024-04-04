/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  eslint: {
    dirs: ["app", "components", "lib"],
  },
};

export default nextConfig;
