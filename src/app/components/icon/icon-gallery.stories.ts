import type { Meta, StoryObj } from '@storybook/angular';
import { IconGalleryComponent } from './icon-gallery.component';

const PRIMITIVE_COLORS = [
  'var(--neutral-10)',
  'var(--neutral-20)',
  'var(--neutral-30)',
  'var(--neutral-40)',
  'var(--neutral-50)',
  'var(--neutral-60)',
  'var(--neutral-70)',
  'var(--neutral-80)',
  'var(--neutral-90)',
  'var(--primary-10)',
  'var(--primary-20)',
  'var(--primary-30)',
  'var(--primary-40)',
  'var(--primary-50)',
  'var(--primary-60)',
  'var(--primary-70)',
  'var(--primary-80)',
  'var(--primary-90)',
  'var(--secondary-10)',
  'var(--secondary-20)',
  'var(--secondary-30)',
  'var(--secondary-40)',
  'var(--secondary-50)',
  'var(--secondary-60)',
  'var(--secondary-70)',
  'var(--secondary-80)',
  'var(--secondary-90)',
  'var(--alert-info)',
  'var(--alert-success)',
  'var(--alert-warning)',
  'var(--alert-error)',
];

const meta: Meta<IconGalleryComponent> = {
  title: 'Foundations/Icon Gallery',
  component: IconGalleryComponent,
  decorators: [
    (story, context) => {
      const isDark = (context.globals?.['theme'] ?? 'Light') === 'Dark';
      const themeDefault = isDark ? 'var(--neutral-10)' : 'var(--neutral-90)';
      if (!context.args['color']) {
        context.args = { ...context.args, color: themeDefault };
      }
      return story();
    },
  ],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [16, 24, 32, 40, 48, 56, 64],
      description: 'Icon size in pixels (8px increments)',
    },
    color: {
      control: { type: 'select' },
      options: PRIMITIVE_COLORS,
      description: 'Icon color — select from design system primitives (defaults to neutral-90 in light, neutral-10 in dark)',
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
