import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './Checkbox.component';

const meta: Meta<CheckboxComponent> = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Playground: Story = {
  args: {
    label: 'Checkbox label',
    checked: false,
    disabled: false,
    indeterminate: false,
  },
};
