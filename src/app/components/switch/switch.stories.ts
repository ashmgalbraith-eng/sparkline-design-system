import type { Meta, StoryObj } from '@storybook/angular';
import { SwitchComponent } from './switch.component';

const meta: Meta<SwitchComponent> = {
  title: 'Components/Switch',
  component: SwitchComponent,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    checked: false,
    disabled: false,
    label: 'Toggle',
  },
};

export default meta;
type Story = StoryObj<SwitchComponent>;

export const Default: Story = {
  args: { checked: false, label: 'Toggle' },
};

export const Checked: Story = {
  args: { checked: true, label: 'Toggle' },
};

export const Disabled: Story = {
  args: { checked: false, disabled: true, label: 'Toggle' },
};

export const DisabledChecked: Story = {
  name: 'Disabled / Checked',
  args: { checked: true, disabled: true, label: 'Toggle' },
};

export const NoLabel: Story = {
  name: 'No Label',
  args: { checked: false, label: '' },
};
