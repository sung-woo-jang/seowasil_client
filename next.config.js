/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'robohash.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.nike.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
