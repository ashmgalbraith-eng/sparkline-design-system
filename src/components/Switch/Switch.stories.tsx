import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Switch',
  },
};

export const Checked: Story = {
  args: {
    label: 'Enabled',
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Disabled',
    checked: false,
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: false,
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

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'large',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Switch label="Small" size="small" />
      <Switch label="Medium" size="medium" />
      <Switch label="Large" size="large" />
    </div>
  ),
};
