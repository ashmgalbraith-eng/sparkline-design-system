import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonGroupComponent } from './ButtonGroup.component';

const meta: Meta<ButtonGroupComponent> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroupComponent,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['small', 'large'] },
    variant: { control: 'radio', options: ['primary', 'secondary'] },
    showLeftIcons: { control: 'boolean' },
    showRightIcons: { control: 'boolean' },
    disabled: { control: 'boolean' },
    buttons: { control: 'object' },
  },
};
export default meta;
type Story = StoryObj<ButtonGroupComponent>;

export const Playground: Story = {
  args: {
    buttons: [
      { label: 'First', selected: true },
      { label: 'Second' },
      { label: 'Third' },
    ],
    size: 'large',
    variant: 'primary',
    showLeftIcons: false,
    showRightIcons: false,
    disabled: false,
  },
};
