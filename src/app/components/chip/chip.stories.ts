import type { Meta, StoryObj } from '@storybook/angular';
import { ChipComponent } from './chip.component';

const meta: Meta<ChipComponent> = {
  title: 'Components/Chip',
  component: ChipComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    type: { control: 'select', options: ['clearable', 'plain'] },
    style: { control: 'select', options: ['outlined', 'filled'] },
    state: { control: 'select', options: ['default', 'hover', 'pressed', 'focus', 'disabled'] },
    showLeftIcon: { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
  },
  args: {
    label: 'Chip',
    type: 'plain',
    style: 'outlined',
    state: 'default',
    showLeftIcon: false,
    showRightIcon: false,
  },
};

export default meta;
type Story = StoryObj<ChipComponent>;

export const Outlined: Story = {
  args: { style: 'outlined', type: 'plain' },
};

export const Filled: Story = {
  args: { style: 'filled', type: 'plain' },
};

export const Clearable: Story = {
  args: { type: 'clearable', style: 'outlined', showLeftIcon: true },
};

export const WithIcons: Story = {
  name: 'With Icons',
  args: { type: 'plain', style: 'outlined', showLeftIcon: true, showRightIcon: true },
};

export const Disabled: Story = {
  args: { state: 'disabled', style: 'outlined' },
};
