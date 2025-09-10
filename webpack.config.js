import path from 'path';
import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import getPackageJson from './scripts/getPackageJson.js';
import nodeExternals from 'webpack-node-externals';

const {
  version,
  name,
  license,
  repository,
  author,
} = getPackageJson('version', 'name', 'license', 'repository', 'author');

const banner = `
  ${name} v${version}
  ${repository.url}

  Copyright (c) ${author.replace(/ *<[^)]*> */g, " ")} and project contributors.

  This source code is licensed under the ${license} license found in the
  LICENSE file in the root directory of this source tree.
`;

export default {
  mode: "production",
  devtool: 'source-map',
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/lib/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(process.cwd(), 'build'),
    library: "smtp2go-nodejs",
    libraryTarget: 'umd',
    clean: true
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ extractComments: false }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(m|j|t)s$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
  plugins: [
    // new PrettierPlugin(),
    new webpack.BannerPlugin({ banner })
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }
};