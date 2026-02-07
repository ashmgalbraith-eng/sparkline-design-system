import type { Meta, StoryObj } from '@storybook/angular';
import { TooltipComponent } from './Tooltip.component';

const meta: Meta<TooltipComponent> = {
  title: 'Components/Tooltip',
  component: TooltipComponent,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['plain', 'rich'] },
    text: { control: 'text' },
    showHeadline: { control: 'boolean' },
    showBodyText: { control: 'boolean' },
    showTextLink: { control: 'boolean' },
    headline: { control: 'text' },
    bodyText: { control: 'text' },
    linkText: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<TooltipComponent>;

export const Playground: Story = {
  args: {
    variant: 'plain',
    text: 'Tooltip',
    headline: 'This is a headline.',
    bodyText: 'Tooltip text that is very long and can wrap to two lines.',
    linkText: 'This is a text link',
    showHeadline: true,
    showBodyText: true,
    showTextLink: true,
  },
};
