/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mtap-assets-prod.s3.amazonaws.com',
        port: '',
        pathname: '/s3fs-public/**',
      },
    ],
  },};

export default nextConfig;
