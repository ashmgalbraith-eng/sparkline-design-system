import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';

const meta: Meta<AvatarComponent> = {
  title: 'Components/Avatar',
  component: AvatarComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['medium', 'small'],
    },
    type: {
      control: 'select',
      options: ['text', 'image', 'icon'],
    },
    initials: { control: 'text' },
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    showNotification: { control: 'boolean' },
    notificationCount: { control: 'text' },
    showStatus: { control: 'boolean' },
  },
  args: {
    size: 'medium',
    type: 'text',
    initials: 'A',
    imageSrc: 'https://i.pravatar.cc/80',
    imageAlt: 'Avatar',
    showNotification: true,
    notificationCount: '999+',
    showStatus: true,
  },
};

export default meta;
type Story = StoryObj<AvatarComponent>;

// ─── Text variants ──────────────────────────────────────────────────

export const TextMedium: Story = {
  name: 'Text / Medium',
  args: {
    type: 'text',
    size: 'medium',
    initials: 'A',
    showNotification: true,
    notificationCount: '999+',
    showStatus: true,
  },
};

export const TextSmall: Story = {
  name: 'Text / Small',
  args: {
    type: 'text',
    size: 'small',
    initials: 'A',
    showNotification: true,
    notificationCount: '999+',
    showStatus: true,
  },
};

// ─── Image variants ─────────────────────────────────────────────────

export const ImageMedium: Story = {
  name: 'Image / Medium',
  args: {
    type: 'image',
    size: 'medium',
    imageSrc: 'https://i.pravatar.cc/80',
    showNotification: true,
    notificationCount: '777+',
    showStatus: true,
  },
};

export const ImageSmall: Story = {
  name: 'Image / Small',
  args: {
    type: 'image',
    size: 'small',
    imageSrc: 'https://i.pravatar.cc/80',
    showNotification: true,
    notificationCount: '777+',
    showStatus: true,
  },
};

// ─── Icon variants ──────────────────────────────────────────────────

export const IconMedium: Story = {
  name: 'Icon / Medium',
  args: {
    type: 'icon',
    size: 'medium',
    showNotification: true,
    notificationCount: '999+',
    showStatus: true,
  },
};

export const IconSmall: Story = {
  name: 'Icon / Small',
  args: {
    type: 'icon',
    size: 'small',
    showNotification: true,
    notificationCount: '999+',
    showStatus: true,
  },
};

// ─── Without notification / status ──────────────────────────────────

export const NoNotification: Story = {
  name: 'Without Notification',
  args: {
    type: 'text',
    size: 'medium',
    initials: 'A',
    showNotification: false,
    showStatus: true,
  },
};

export const NoStatus: Story = {
  name: 'Without Status',
  args: {
    type: 'text',
    size: 'medium',
    initials: 'A',
    showNotification: true,
    notificationCount: '777+',
    showStatus: false,
  },
};

export const Plain: Story = {
  name: 'Plain (No Badge / No Status)',
  args: {
    type: 'icon',
    size: 'medium',
    showNotification: false,
    showStatus: false,
  },
};
