/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

// const nextConfig = {
//   images: {
//     domains: ["ik.imagekit.io"],
//   },
// };
