import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Checkbox',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked',
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Unchecked',
    checked: false,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate',
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked',
    checked: true,
    disabled: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: false,
  },
};
