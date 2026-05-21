import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MarketingShell } from '@/shells/MarketingShell';

const meta = {
  title: 'Marketing/Layout/MarketingShell',
  component: MarketingShell,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MarketingShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseWithReactComponent: Story = {
  args: {
    children: <div>Children node</div>,
    leftNav: (
      <>
        <li>Link 1</li>
        <li>Link 2</li>
      </>
    ),
  },
};

export const BaseWithString: Story = {
  args: {
    ...BaseWithReactComponent.args,
    children: 'String',
  },
};
