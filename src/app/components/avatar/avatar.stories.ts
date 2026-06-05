import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';

const meta: Meta<AvatarComponent> = {
  title: 'Components/Avatar',
  component: AvatarComponent,
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    type: { control: 'select', options: ['text', 'icon', 'image'] },
    initials: { control: 'text' },
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    showNotification: { control: 'boolean' },
    notificationCount: { control: 'text' },
    showStatus: { control: 'boolean' },
    statusColor: { control: 'select', options: ['success', 'error', 'warning', 'info', 'notification'] },
  },
  args: {
    size: 'medium',
    type: 'text',
    initials: 'AB',
    imageSrc: 'https://i.pravatar.cc/96',
    imageAlt: 'Avatar',
    showNotification: false,
    notificationCount: '9+',
    showStatus: false,
    statusColor: 'success',
  },
};

export default meta;
type Story = StoryObj<AvatarComponent>;

export const Playground: Story = {
  name: 'Properties',
};
