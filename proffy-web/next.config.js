//https://nextjs.org/docs/api-reference/next.config.js/rewrites
const withImages = require('next-images')
module.exports = {
  distDir: '.next',
  pageExtensions: ['tsx'],
  /*
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/Landing',
      },
      {
        source: '/study',
        destination: '/TeacherList/index.tsx',
      },
    ]
  },*/
  /*
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },*/

  //excludeFile: (str) => /\*.{styles}.ts/.test(str),

};

module.exports = withImages({
  webpack(config, options) {
    return config
  }
})
