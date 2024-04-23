/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  eslint: {
    dirs: ["app", "components", "lib"],
  },
  images: {
    deviceSizes: [1080, 1440],
    imageSizes: [64],
  },
  redirects: async () => [
    {
      source: "/growth",
      destination: "/growth/verbal-branding",
      permanent: true,
    },
  ],
};

export default nextConfig;
