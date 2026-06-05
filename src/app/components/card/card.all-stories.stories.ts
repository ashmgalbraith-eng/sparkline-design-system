import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Components/Card/All Stories',
  component: CardComponent,
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: flex-start;">
        <sp-card variant="elevated" padding="md" style="width: 240px;">
          <p style="margin: 0 0 4px; font-weight: 700; color: var(--color-text-primary);">Elevated</p>
          <p style="margin: 0; font-size: 14px; color: var(--color-text-secondary);">Uses shadow for depth.</p>
        </sp-card>
        <sp-card variant="outlined" padding="md" style="width: 240px;">
          <p style="margin: 0 0 4px; font-weight: 700; color: var(--color-text-primary);">Outlined</p>
          <p style="margin: 0; font-size: 14px; color: var(--color-text-secondary);">Uses a border for separation.</p>
        </sp-card>
        <sp-card variant="filled" padding="md" style="width: 240px;">
          <p style="margin: 0 0 4px; font-weight: 700; color: var(--color-text-primary);">Filled</p>
          <p style="margin: 0; font-size: 14px; color: var(--color-text-secondary);">Uses a subtle background fill.</p>
        </sp-card>
      </div>
    `,
    moduleMetadata: { imports: [CardComponent] },
  }),
};
