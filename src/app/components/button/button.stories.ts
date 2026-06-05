import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ICON_REGISTRY } from '../icon/icon-registry';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    label: { control: 'text' },
    type: { control: 'select', options: ['filled', 'outlined', 'text'] },
    size: { control: 'select', options: ['large', 'small'] },
    state: { control: 'select', options: ['default', 'hover', 'pressed', 'focus', 'disabled'] },
    showLeftIcon: { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
    showText: { control: 'boolean' },
    leftIconName: { control: 'select', options: Object.keys(ICON_REGISTRY) },
    rightIconName: { control: 'select', options: Object.keys(ICON_REGISTRY) },
  },
  args: {
    label: 'Button',
    type: 'filled',
    size: 'large',
    state: 'default',
    showLeftIcon: false,
    showRightIcon: false,
    showText: true,
    leftIconName: 'arrow-left',
    rightIconName: 'arrow-right',
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Playground: Story = {
  name: 'Properties',
};
