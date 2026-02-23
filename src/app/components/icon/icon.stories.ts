import type { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from './icon.component';
import { ICON_REGISTRY } from './icon-registry';

const meta: Meta<IconComponent> = {
  title: 'Foundations/Icons',
  component: IconComponent,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(ICON_REGISTRY),
      description: 'Icon name from the registry',
    },
    size: {
      control: { type: 'select' },
      options: [16, 24, 32, 40, 48, 56, 64],
      description: 'Icon size in pixels (8px increments)',
    },
    color: {
      control: 'color',
      description: 'Icon color (defaults to neutral-90)',
    },
  },
};

export default meta;
type Story = StoryObj<IconComponent>;

export const Default: Story = {
  args: {
    name: 'check',
    size: 24,
    color: 'var(--neutral-90)',
  },
};
