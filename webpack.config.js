const path = require('path');

module.exports = {
  entry: './src/cli/index.ts',
  mode: 'production',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'binbin', 'test'),
    publicPath: '.'
  },
};
