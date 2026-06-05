import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Components/Badge',
  component: BadgeComponent,
  argTypes: {
    type: { control: 'select', options: ['numeric', 'dot'] },
    status: { control: 'select', options: ['notification', 'success', 'error', 'warning', 'info'] },
    label: { control: 'text' },
  },
  args: {
    type: 'numeric',
    status: 'notification',
    label: '9',
  },
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Playground: Story = {
  name: 'Properties',
};
