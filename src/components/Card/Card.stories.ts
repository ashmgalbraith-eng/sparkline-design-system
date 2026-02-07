import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './Card.component';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['elevated', 'outlined', 'filled'] },
    title: { control: 'text' },
    bodyText: { control: 'text' },
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    clickable: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    bodyText: 'This is the card content. It can contain any text or components you need.',
  },
};

export const Elevated: Story = {
  args: { title: 'Elevated Card', variant: 'elevated', bodyText: 'This card has a shadow elevation effect.' },
};

export const Outlined: Story = {
  args: { title: 'Outlined Card', variant: 'outlined', bodyText: 'This card has a border outline.' },
};

export const Filled: Story = {
  args: { title: 'Filled Card', variant: 'filled', bodyText: 'This card has a filled background.' },
};

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    imageSrc: 'https://via.placeholder.com/400x200',
    imageAlt: 'Placeholder image',
    bodyText: 'This card includes an image at the top.',
  },
};
