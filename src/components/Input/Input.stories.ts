import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './Input.component';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (story) => ({
      ...story(),
      template: `<div style="width: 400px">${story().template || ''}</div>`,
    }),
  ],
  argTypes: {
    state: { control: 'select', options: ['default', 'error', 'success', 'disabled'] },
    optional: { control: 'boolean' },
    showIconLeft: { control: 'boolean' },
    showIconRight: { control: 'boolean' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    state: 'default',
    optional: true,
    helperText: 'Helper text',
    errorMessage: 'Error message',
    showIconLeft: true,
    showIconRight: true,
  },
};
