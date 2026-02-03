import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'icon', 'image'],
      description: 'Avatar display type',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Avatar size',
    },
    initials: {
      control: 'text',
      description: 'Initials to display (only for type="text")',
      if: { arg: 'type', eq: 'text' },
    },
    imageSrc: {
      control: 'text',
      description: 'Image URL (only for type="image")',
      if: { arg: 'type', eq: 'image' },
    },
    showStatus: {
      control: 'boolean',
      description: 'Show status indicator',
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy'],
      description: 'Status indicator color',
      if: { arg: 'showStatus', truthy: true },
    },
    showNotification: {
      control: 'boolean',
      description: 'Show notification badge',
    },
    notificationCount: {
      control: 'text',
      description: 'Notification count (e.g., "5", "99+")',
      if: { arg: 'showNotification', truthy: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    type: 'text',
    size: 'medium',
    initials: 'AB',
    showStatus: false,
    showNotification: false,
  },
};