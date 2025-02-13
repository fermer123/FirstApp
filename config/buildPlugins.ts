import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, {WebpackPluginInstance} from 'webpack';

import {ModuleFederationPlugin} from '@module-federation/enhanced/webpack';

import packageJson from '../package.json';

import {BuildOption} from './types/config';

function buildPlugins({paths, isDev}: BuildOption): WebpackPluginInstance[] {
  const federationConfig = {
    // Имя
    name: 'firstApp',
    // Это имя файла для использования в качестве файла удаленной записи.
    filename: 'remoteEntry.js',
    // Это файлы, которые это приложение будет предоставлять как удаленные объекты другим приложениям.
    exposes: {
      './BusinessСard': './src/exposes/BusinessСard/BusinessСard.tsx',
    },
    shared: {
      ...packageJson?.dependencies,
      react: {
        singleton: true,
        eager: true,
        requiredVersion: packageJson.dependencies.react,
      },
      'react-dom': {
        eager: true,
        singleton: true,
        requiredVersion: packageJson.dependencies['react-dom'],
      },
      '@mui/material': {
        singleton: true,
        eager: true,
        requiredVersion: packageJson.dependencies['@mui/material'],
      },
      '@emotion/react': {
        singleton: true,
        eager: true,
        requiredVersion: packageJson.dependencies['@emotion/react'],
      },

      '@emotion/styled': {
        singleton: true,
        eager: true,
        requiredVersion: packageJson.dependencies['@emotion/styled'],
      },
    },
  };
  return [
    new ModuleFederationPlugin({
      ...federationConfig,
      dts: {
        generateTypes: {
          extractRemoteTypes: true,
          extractThirdParty: true,
          deleteTypesFolder: true,
          generateAPITypes: true,
          compileInChildProcess: true,
        },
        consumeTypes: {
          consumeAPITypes: true,
          deleteTypesFolder: true,
          maxRetries: 3,
        },
      },
    }),

    new HtmlWebpackPlugin({
      title: 'firstApp',
      template: paths.template,
      publicPath: '/',
      base: '/',
      chunks: ['main'],
      favicon: paths.favicon,
    }),
    new webpack.DefinePlugin({
      isDev: JSON.stringify(isDev),
      baseURL: JSON.stringify('http://localhost:3000/'),
    }),
    isDev ? new webpack.HotModuleReplacementPlugin() : undefined,
  ];
}

export default buildPlugins;
