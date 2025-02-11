import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {RuleSetRule} from 'webpack';

import {BuildOption} from './types/config';

function buildLoaders({isDev}: BuildOption): RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    options: {
      transpileOnly: true,
    },
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s(a|c)ss$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string) =>
              Boolean(resourcePath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]'
              : '[path][name]__[local]--[hash:base64:5]',
          },
        },
      },
      'sass-loader',
    ],
  };
  return [typescriptLoader, cssLoader];
}

export default buildLoaders;
