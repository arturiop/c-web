import arcjet, { shield } from '@arcjet/next';

// Base Arcjet instance for optional request protection on the public site.
export default arcjet({
  // Use `process.env` instead of Env to reduce bundle size in middleware
  key: process.env.ARCJET_KEY ?? '',
  characteristics: ['ip.src'],
  rules: [
    shield({
      mode: 'LIVE',
    }),
  ],
});
