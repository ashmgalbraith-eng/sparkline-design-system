import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Outlined: Story = {
  args: {
    label: 'Chip outlined',
    variant: 'outlined',
  },
};

export const Filled: Story = {
  args: {
    label: 'Chip filled',
    variant: 'filled',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Chip outlined',
    variant: 'outlined',
    icon: true,
  },
};

export const WithIconFilled: Story = {
  args: {
    label: 'Chip filled',
    variant: 'filled',
    icon: true,
  },
};

export const Closable: Story = {
  args: {
    label: 'Chip outlined',
    variant: 'outlined',
    closable: true,
  },
};

export const ClosableFilled: Story = {
  args: {
    label: 'Chip filled',
    variant: 'filled',
    closable: true,
  },
};

export const WithIconAndClosable: Story = {
  args: {
    label: 'Chip outlined',
    variant: 'outlined',
    icon: true,
    closable: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Chip outlined',
    variant: 'outlined',
    disabled: true,
  },
};

export const DisabledClosable: Story = {
  args: {
    label: 'Chip outlined',
    variant: 'outlined',
    closable: true,
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Chip label="Chip outlined" variant="outlined" />
      <Chip label="Chip outlined" variant="outlined" closable />
      <Chip label="Chip filled" variant="filled" />
      <Chip label="Chip filled" variant="filled" closable />
      <Chip label="With icon" variant="outlined" icon={true} />
      <Chip label="With icon" variant="outlined" icon={true} closable />
    </div>
  ),
};
