import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';

const meta: Meta<AvatarComponent> = {
  title: 'Components/Avatar/All Stories',
  component: AvatarComponent,
};

export default meta;
type Story = StoryObj<AvatarComponent>;

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <sp-avatar size="small" type="text" initials="S"></sp-avatar>
        <sp-avatar size="medium" type="text" initials="M"></sp-avatar>
        <sp-avatar size="large" type="text" initials="LG"></sp-avatar>
      </div>
    `,
    moduleMetadata: { imports: [AvatarComponent] },
  }),
};

export const Types: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <sp-avatar size="medium" type="text" initials="AB"></sp-avatar>
        <sp-avatar size="medium" type="icon"></sp-avatar>
        <sp-avatar size="medium" type="image" imageSrc="https://i.pravatar.cc/96" imageAlt="User"></sp-avatar>
      </div>
    `,
    moduleMetadata: { imports: [AvatarComponent] },
  }),
};

export const WithBadge: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 20px; align-items: center;">
        <sp-avatar size="medium" type="text" initials="A" [showNotification]="true" notificationCount="3"></sp-avatar>
        <sp-avatar size="medium" type="text" initials="B" [showNotification]="true" notificationCount="9+"></sp-avatar>
        <sp-avatar size="medium" type="text" initials="C" [showStatus]="true" statusColor="success"></sp-avatar>
        <sp-avatar size="medium" type="text" initials="D" [showStatus]="true" statusColor="error"></sp-avatar>
      </div>
    `,
    moduleMetadata: { imports: [AvatarComponent] },
  }),
};
