import type { Meta, StoryObj } from '@storybook/angular';
import { IconGalleryComponent } from './icon-gallery.component';

const meta: Meta<IconGalleryComponent> = {
  title: 'Foundations/Icon Gallery',
  component: IconGalleryComponent,
  tags: ['autodocs'],
  argTypes: {
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
type Story = StoryObj<IconGalleryComponent>;

export const AllIcons: Story = {
  args: {
    size: 24,
    color: 'var(--neutral-90)',
  },
};
