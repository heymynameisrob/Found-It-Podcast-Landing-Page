module.exports = {
    plugins: [
      require('precss'),
      require('postcss-import'),
      require('autoprefixer'),
      process.env.NODE_ENV === 'production' && require('cssnano'),
    ],
  }