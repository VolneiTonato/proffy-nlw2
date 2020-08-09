//https://nextjs.org/docs/api-reference/next.config.js/rewrites

module.exports = {
  distDir: '.next',
  pageExtensions: ['tsx'],
  
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
  },

  //excludeFile: (str) => /\*.{styles}.ts/.test(str),

};
