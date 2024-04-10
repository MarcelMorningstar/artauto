/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate-plugin');

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.sanity.io'],
  },
  ...nextTranslate(),
};

module.exports = nextConfig
