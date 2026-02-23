import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ICON_REGISTRY } from '../icon/icon-registry';

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
    leftIconName: {
      control: 'select',
      options: Object.keys(ICON_REGISTRY),
    },
    rightIconName: {
      control: 'select',
      options: Object.keys(ICON_REGISTRY),
    },
  },
  args: {
    label: 'Button',
    type: 'filled',
    size: 'large',
    state: 'default',
    showLeftIcon: true,
    showRightIcon: true,
    showText: true,
    leftIconName: 'arrow-left',
    rightIconName: 'arrow-right',
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Filled: Story = {
  args: { type: 'filled' },
};

export const Outlined: Story = {
  args: { type: 'outlined' },
};

export const Text: Story = {
  args: { type: 'text' },
};

export const IconOnly: Story = {
  args: {
    type: 'filled',
    showText: false,
    showLeftIcon: false,
    showRightIcon: true,
  },
};
