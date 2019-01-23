const webpack = require('webpack');
module.exports = {
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: 'lodash',
          libraryDirectory: '',
          camel2DashComponentName: false, // default: true
        },
      ],
    ],
  },
  webpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.browser': 'true',
      }),
    ],
  },
};
