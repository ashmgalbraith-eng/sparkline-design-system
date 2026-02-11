import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Components/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    color: {
      control: 'select',
      options: ['primary', 'success', 'error', 'warning', 'info'],
    },
    dot: { control: 'boolean' },
  },
  args: {
    label: '999+',
    color: 'primary',
    dot: false,
  },
};

export default meta;
type Story = StoryObj<BadgeComponent>;

// ─── Color variants ─────────────────────────────────────────────────

export const Primary: Story = {
  args: { color: 'primary', label: '999+' },
};

export const Success: Story = {
  args: { color: 'success', label: '12' },
};

export const Error: Story = {
  args: { color: 'error', label: '3' },
};

export const Warning: Story = {
  args: { color: 'warning', label: '5' },
};

export const Info: Story = {
  args: { color: 'info', label: '99+' },
};

// ─── Dot variant ────────────────────────────────────────────────────

export const DotPrimary: Story = {
  name: 'Dot / Primary',
  args: { color: 'primary', dot: true },
};

export const DotSuccess: Story = {
  name: 'Dot / Success',
  args: { color: 'success', dot: true },
};

export const DotError: Story = {
  name: 'Dot / Error',
  args: { color: 'error', dot: true },
};
