import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    type: {
      control: 'select',
      options: ['filled', 'outlined', 'text'],
    },
    size: {
      control: 'select',
      options: ['large', 'small'],
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'pressed', 'focus', 'disabled'],
    },
    showLeftIcon: { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
    showText: { control: 'boolean' },
  },
  args: {
    label: 'Button',
    type: 'filled',
    size: 'large',
    state: 'default',
    showLeftIcon: true,
    showRightIcon: true,
    showText: true,
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// ─── Primary stories ────────────────────────────────────────────────

export const FilledDefault: Story = {
  name: 'Filled / Default',
  args: {
    type: 'filled',
    state: 'default',
  },
};

export const FilledHover: Story = {
  name: 'Filled / Hover',
  args: {
    type: 'filled',
    state: 'hover',
  },
};

export const FilledPressed: Story = {
  name: 'Filled / Pressed',
  args: {
    type: 'filled',
    state: 'pressed',
  },
};

export const FilledFocus: Story = {
  name: 'Filled / Focus',
  args: {
    type: 'filled',
    state: 'focus',
  },
};

export const FilledDisabled: Story = {
  name: 'Filled / Disabled',
  args: {
    type: 'filled',
    state: 'disabled',
  },
};

export const FilledSmall: Story = {
  name: 'Filled / Small',
  args: {
    type: 'filled',
    size: 'small',
  },
};

// ─── Outlined stories ───────────────────────────────────────────────

export const OutlinedDefault: Story = {
  name: 'Outlined / Default',
  args: {
    type: 'outlined',
    state: 'default',
  },
};

export const OutlinedHover: Story = {
  name: 'Outlined / Hover',
  args: {
    type: 'outlined',
    state: 'hover',
  },
};

export const OutlinedPressed: Story = {
  name: 'Outlined / Pressed',
  args: {
    type: 'outlined',
    state: 'pressed',
  },
};

export const OutlinedFocus: Story = {
  name: 'Outlined / Focus',
  args: {
    type: 'outlined',
    state: 'focus',
  },
};

export const OutlinedDisabled: Story = {
  name: 'Outlined / Disabled',
  args: {
    type: 'outlined',
    state: 'disabled',
  },
};

export const OutlinedSmall: Story = {
  name: 'Outlined / Small',
  args: {
    type: 'outlined',
    size: 'small',
  },
};

// ─── Text stories ───────────────────────────────────────────────────

export const TextDefault: Story = {
  name: 'Text / Default',
  args: {
    type: 'text',
    state: 'default',
  },
};

export const TextHover: Story = {
  name: 'Text / Hover',
  args: {
    type: 'text',
    state: 'hover',
  },
};

export const TextPressed: Story = {
  name: 'Text / Pressed',
  args: {
    type: 'text',
    state: 'pressed',
  },
};

export const TextFocus: Story = {
  name: 'Text / Focus',
  args: {
    type: 'text',
    state: 'focus',
  },
};

export const TextDisabled: Story = {
  name: 'Text / Disabled',
  args: {
    type: 'text',
    state: 'disabled',
  },
};

export const TextSmall: Story = {
  name: 'Text / Small',
  args: {
    type: 'text',
    size: 'small',
  },
};

// ─── Icon-only & label-only ─────────────────────────────────────────

export const IconOnly: Story = {
  name: 'Icon Only',
  args: {
    type: 'filled',
    showText: false,
    showLeftIcon: false,
    showRightIcon: true,
  },
};

export const LabelOnly: Story = {
  name: 'Label Only',
  args: {
    type: 'filled',
    showLeftIcon: false,
    showRightIcon: false,
  },
};
