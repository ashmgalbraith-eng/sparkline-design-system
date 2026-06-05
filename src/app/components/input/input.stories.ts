import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';
import { ICON_REGISTRY } from '../icon/icon-registry';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorText: { control: 'text' },
    state: { control: 'select', options: ['default', 'focus', 'error', 'success', 'disabled'] },
    showOptional: { control: 'boolean' },
    type: { control: 'select', options: ['text', 'password', 'email', 'number', 'search'] },
    showLeftIcon: { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
    leftIconName: { control: 'select', options: Object.keys(ICON_REGISTRY) },
    rightIconName: { control: 'select', options: Object.keys(ICON_REGISTRY) },
  },
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper text',
    errorText: 'Error message',
    state: 'default',
    showOptional: true,
    type: 'text',
    showLeftIcon: false,
    showRightIcon: false,
    leftIconName: 'account-outline',
    rightIconName: 'close-circle-outline',
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Playground: Story = {
  name: 'Properties',
};
