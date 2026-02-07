import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from './Avatar.component';

const meta: Meta<AvatarComponent> = {
  title: 'Components/Avatar',
  component: AvatarComponent,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/aY6PTxhYjhJhxUgH77u0b1/Sparkline-Design-System?node-id=219-440&m=dev',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'icon', 'image'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    text: { control: 'text' },
    imageSrc: { control: 'text' },
    showStatus: { control: 'boolean' },
    status: { control: 'select', options: ['online', 'offline', 'away', 'busy'] },
    showNotification: { control: 'boolean' },
    notificationCount: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<AvatarComponent>;

export const Default: Story = {
  args: {
    type: 'text',
    size: 'medium',
    text: 'AB',
    showStatus: false,
    showNotification: false,
  },
};
