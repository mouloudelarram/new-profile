/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '',       // your repo name
  assetPrefix: './',   // prepend subpath to all assets
}

module.exports = nextConfig
