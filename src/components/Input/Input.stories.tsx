import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

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
};

export default meta;
type Story = StoryObj<typeof Input>;

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18.5 18.5l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 5.5L7.5 14.5L3.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const Required: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    helperText: 'Must be at least 8 characters long',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    state: 'error',
    errorMessage: 'Please enter a valid email address',
    value: 'invalid-email',
  },
};

export const Success: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    state: 'success',
    value: 'johndoe',
    helperText: 'Username is available',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    state: 'disabled',
    value: 'Disabled value',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    iconLeft: <SearchIcon />,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    value: 'johndoe',
    state: 'success',
    iconRight: <CheckIcon />,
  },
};

export const Small: Story = {
  args: {
    label: 'Small Input',
    placeholder: 'Small size',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Input',
    placeholder: 'Medium size',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Input',
    placeholder: 'Large size',
    size: 'large',
  },
};
