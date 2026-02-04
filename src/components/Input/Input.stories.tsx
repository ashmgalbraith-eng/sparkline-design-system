import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'error', 'success', 'disabled'],
    },
    optional: {
      control: 'boolean',
    },
    iconLeft: {
      control: 'boolean',
      mapping: { true: <CloseIcon />, false: undefined },
    },
    iconRight: {
      control: 'boolean',
      mapping: { true: <CloseIcon />, false: undefined },
    },
    helperText: {
      control: 'text',
    },
    errorMessage: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    state: 'default',
    optional: true,
    helperText: 'Helper text',
    errorMessage: 'Error message',
    iconLeft: true as unknown as React.ReactNode,
    iconRight: true as unknown as React.ReactNode,
  },
};
