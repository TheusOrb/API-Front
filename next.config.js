/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:5189/:path*',
      },
    ];
  },
};
