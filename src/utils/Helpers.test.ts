import { describe, expect, it } from 'vitest';
import { getCanonicalUrl } from '@/lib/seo/site';

describe('Helpers', () => {
  describe('Canonical URL helper', () => {
    it('returns the home canonical URL', () => {
      expect(getCanonicalUrl('/')).toBe('https://watchable-ai.com/');
    });

    it('returns canonical URLs for public routes', () => {
      expect(getCanonicalUrl('/use-cases/beauty-skincare')).toBe(
        'https://watchable-ai.com/use-cases/beauty-skincare',
      );
    });
  });
});
