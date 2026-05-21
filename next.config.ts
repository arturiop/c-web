import './src/libs/Env';
import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';

const baseConfig: NextConfig = {
  devIndicators: {
    position: 'bottom-right',
  },
  poweredByHeader: false,
  reactStrictMode: true,
  reactCompiler: process.env.NODE_ENV === 'production',
  logging: {
    browserToTerminal: process.env.BROWSER_TO_TERMINAL_DISABLED !== 'true',
  },
};

let configWithPlugins = baseConfig;

if (!process.env.NEXT_PUBLIC_SENTRY_DISABLED) {
  configWithPlugins = withSentryConfig(configWithPlugins, {
    org: process.env.SENTRY_ORGANIZATION,
    project: process.env.SENTRY_PROJECT,

    silent: !process.env.CI,
    widenClientFileUpload: true,
    tunnelRoute: '/monitoring',

    webpack: {
      reactComponentAnnotation: {
        enabled: true,
      },
      treeshake: {
        removeDebugLogging: true,
      },
    },
    telemetry: false,
  });
}

const nextConfig = configWithPlugins;
export default nextConfig;
