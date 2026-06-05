import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Components/Badge/All Stories',
  component: BadgeComponent,
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Types: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <sp-badge type="numeric" status="notification" label="9"></sp-badge>
        <sp-badge type="numeric" status="notification" label="99"></sp-badge>
        <sp-badge type="dot" status="notification"></sp-badge>
      </div>
    `,
    moduleMetadata: { imports: [BadgeComponent] },
  }),
};

export const StatusColors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <sp-badge type="numeric" status="notification" label="1"></sp-badge>
        <sp-badge type="numeric" status="success" label="2"></sp-badge>
        <sp-badge type="numeric" status="error" label="3"></sp-badge>
        <sp-badge type="numeric" status="warning" label="4"></sp-badge>
        <sp-badge type="numeric" status="info" label="5"></sp-badge>
      </div>
    `,
    moduleMetadata: { imports: [BadgeComponent] },
  }),
};
