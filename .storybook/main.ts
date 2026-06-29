import type { StorybookConfig } from '@storybook/angular';
import type { Configuration } from 'webpack';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-docs', '@storybook/addon-themes'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  webpackFinal: (config: Configuration) => {
    // Suppress the "Conflicting values for 'process.env.NODE_ENV'" warning.
    //
    // This is a known Storybook 10 + Angular issue: Storybook's preview-preset
    // creates a DefinePlugin with both 'process.env' (as a JSON object string)
    // AND individual 'process.env.NODE_ENV' keys. Webpack 5 walks the object
    // recursively and finds the same key defined twice, emitting a warning on
    // every compilation — including every watch rebuild.
    //
    // webpackFinal only runs once at startup, so plugin-level fixes don't help
    // on watch rebuilds. The only persistent fix is ignoreWarnings.
    config.ignoreWarnings = [
      ...(config.ignoreWarnings ?? []),
      (warning) =>
        warning.message.includes('DefinePlugin') &&
        warning.message.includes('Conflicting values for'),
    ];
    return config;
  },
};

export default config;
