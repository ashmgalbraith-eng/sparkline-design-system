import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorText: { control: 'text' },
    state: { control: 'select', options: ['default', 'focus', 'error', 'disabled'] },
    showLeftIcon: { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
  },
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper text',
    errorText: 'Error message',
    state: 'default',
    showLeftIcon: false,
    showRightIcon: false,
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {};

export const WithIcons: Story = {
  name: 'With Icons',
  args: { showLeftIcon: true, showRightIcon: true },
};

export const Error: Story = {
  args: { state: 'error', errorText: 'This field is required' },
};

export const Disabled: Story = {
  args: { state: 'disabled' },
};
