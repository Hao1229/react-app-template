/**
 * config type
 * @see https://stackoverflow.com/questions/40075269/is-it-possible-to-write-webpack-config-in-typescript
 *
 * TypeScript settings
 * @see https://webpack.js.org/configuration/configuration-languages/#typescript
 *
 * webpack-dev-server type
 * @see https://www.npmjs.com/package/webpack-dev-server#with-typescript
 */

import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { Configuration } from 'webpack';

const config: Configuration = {
  entry: './src/_app.tsx',
  module: {
    rules: [
      {
        test: /.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/typescript', '@babel/preset-env'],
          },
        },
      },
      {
        test: /.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/typescript',
              /**
               * react 自動 import
               * @see https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#manual-babel-setup
               */
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
              '@babel/preset-env',
            ],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, './dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    port: 8080,
  } as DevServerConfiguration,
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-app-template',
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};

export default config;
