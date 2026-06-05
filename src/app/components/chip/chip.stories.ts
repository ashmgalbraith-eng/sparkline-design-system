import type { Meta, StoryObj } from '@storybook/angular';
import { ChipComponent } from './chip.component';
import { ICON_REGISTRY } from '../icon/icon-registry';

const meta: Meta<ChipComponent> = {
  title: 'Components/Chip',
  component: ChipComponent,
  argTypes: {
    label: { control: 'text' },
    type: { control: 'select', options: ['clearable', 'plain'] },
    state: { control: 'select', options: ['default', 'hover', 'pressed', 'focus', 'disabled'] },
    showLeftIcon: { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
    leftIconName: { control: 'select', options: Object.keys(ICON_REGISTRY) },
    rightIconName: { control: 'select', options: Object.keys(ICON_REGISTRY) },
  },
  args: {
    label: 'Chip',
    type: 'plain',
    state: 'default',
    showLeftIcon: false,
    showRightIcon: false,
    leftIconName: 'account-outline',
    rightIconName: 'close-circle-outline',
  },
};

export default meta;
type Story = StoryObj<ChipComponent>;

export const Playground: Story = {
  name: 'Properties',
};
