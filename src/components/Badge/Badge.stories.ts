import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './Badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Components/Badge',
  component: BadgeComponent,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/aY6PTxhYjhJhxUgH77u0b1/Sparkline-Design-System?node-id=213-283&m=dev',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['success', 'info', 'warning', 'error'] },
    dot: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};
export default meta;
type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
  args: { content: '5', variant: 'success' },
};
