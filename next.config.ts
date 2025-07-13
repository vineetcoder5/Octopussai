const isProd = process.env.NODE_ENV === 'production';
const repo = 'vineet-website';
const assetPrefix = isProd ? `/${repo}/` : '';
const basePath = isProd ? `/${repo}` : '';

const nextConfig = {
  output: 'export',
  assetPrefix,
  basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
