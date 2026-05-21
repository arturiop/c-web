import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';
import { MarketingShell } from '@/shells/MarketingShell';

describe('Marketing shell', () => {
  describe('Render method', () => {
    it('should have 3 menu items', async () => {
      await render(
        <MarketingShell
          leftNav={
            <>
              <li>link 1</li>
              <li>link 2</li>
              <li>link 3</li>
            </>
          }
        >
          {null}
        </MarketingShell>,
      );

      const menuItemList = page
        .getByRole('navigation', { name: 'Main navigation' })
        .getByRole('listitem');

      expect(menuItemList.elements()).toHaveLength(3);
    });

    it('should link the footer to the product app', async () => {
      await render(<MarketingShell leftNav={<li>1</li>}>{null}</MarketingShell>);

      const signUpLink = page.getByRole('link', { name: 'Start in the app' });

      expect(signUpLink).toHaveAttribute('href', 'https://app.watchable-ai.com/signup');
    });
  });
});
