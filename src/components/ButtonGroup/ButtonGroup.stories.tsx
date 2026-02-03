import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'large'],
      description: 'Button size',
    },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'Visual style variant',
    },
    showLeftIcons: {
      control: 'boolean',
      description: 'Show left icons on all buttons',
    },
    showRightIcons: {
      control: 'boolean',
      description: 'Show right icons on all buttons',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the entire button group',
    },
    buttons: {
      control: 'object',
      description: 'Array of button objects with label, selected, and optional icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Playground: Story = {
  args: {
    buttons: [
      { label: 'First', selected: true },
      { label: 'Second' },
      { label: 'Third' },
    ],
    size: 'large',
    variant: 'primary',
    showLeftIcons: false,
    showRightIcons: false,
    disabled: false,
  },
};
