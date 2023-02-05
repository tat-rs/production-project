import webpack from 'webpack';
import { BuildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolve } from './buildResolve';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions) {
  const { mode, paths, isDev } = options;
  const config: webpack.Configuration = {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? BuildDevServer(options) : undefined,
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolve(options),
  };

  return config;
}