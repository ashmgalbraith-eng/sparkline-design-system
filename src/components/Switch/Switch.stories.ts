import type { Meta, StoryObj } from '@storybook/angular';
import { SwitchComponent } from './Switch.component';

const meta: Meta<SwitchComponent> = {
  title: 'Components/Switch',
  component: SwitchComponent,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
};
export default meta;
type Story = StoryObj<SwitchComponent>;

export const Default: Story = {
  args: { label: 'Switch' },
};

export const Checked: Story = {
  args: { label: 'Enabled', checked: true },
};

export const Unchecked: Story = {
  args: { label: 'Disabled', checked: false },
};

export const WithoutLabel: Story = {
  args: { checked: false },
};

export const Disabled: Story = {
  args: { label: 'Disabled', disabled: true },
};

export const DisabledChecked: Story = {
  args: { label: 'Disabled Checked', checked: true, disabled: true },
};

export const Small: Story = {
  args: { label: 'Small', size: 'small' },
};

export const Medium: Story = {
  args: { label: 'Medium', size: 'medium' },
};

export const Large: Story = {
  args: { label: 'Large', size: 'large' },
};
