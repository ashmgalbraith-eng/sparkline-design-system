import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './Button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/abcd1234/Sparkline-Design-System?node-id=1234:56',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['filled', 'outlined', 'text'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    showLeftIcon: { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Playground: Story = {
  args: {
    label: 'Button',
    variant: 'filled',
    size: 'large',
    showLeftIcon: false,
    showRightIcon: false,
    disabled: false,
  },
};
