module.exports = {
  plugins: {
    // 'postcss-processor-order': {},
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
    // '@fullhuman/postcss-purgecss': {
    //   content: ['./src/*.html']
    // },
    'postcss-simple-vars': {},
    'postcss-mixins': {
    },
    'postcss-define-function': {
      silent: true
    },
    'postcss-calc': {},
    'postcss-hexrgba': {},
    'postcss-nested': {},
    'cssnano': {},
  },
};