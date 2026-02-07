import type { Meta, StoryObj } from '@storybook/angular';
import { ChipComponent } from './Chip.component';

const meta: Meta<ChipComponent> = {
  title: 'Components/Chip',
  component: ChipComponent,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['outlined', 'filled'] },
    label: { control: 'text' },
    closable: { control: 'boolean' },
    showIcon: { control: 'boolean' },
    disabled: { control: 'boolean' },
    clickable: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<ChipComponent>;

export const Outlined: Story = {
  args: { label: 'Chip outlined', variant: 'outlined' },
};

export const Filled: Story = {
  args: { label: 'Chip filled', variant: 'filled' },
};

export const WithIcon: Story = {
  args: { label: 'Chip outlined', variant: 'outlined', showIcon: true },
};

export const Closable: Story = {
  args: { label: 'Chip outlined', variant: 'outlined', closable: true },
};

export const WithIconAndClosable: Story = {
  args: { label: 'Chip outlined', variant: 'outlined', showIcon: true, closable: true },
};

export const Disabled: Story = {
  args: { label: 'Chip outlined', variant: 'outlined', disabled: true },
};
