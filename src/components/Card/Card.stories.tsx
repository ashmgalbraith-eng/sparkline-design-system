import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: 'This is the card content. It can contain any text or components you need.',
  },
};

export const Elevated: Story = {
  args: {
    title: 'Elevated Card',
    variant: 'elevated',
    children: 'This card has a shadow elevation effect.',
  },
};

export const Outlined: Story = {
  args: {
    title: 'Outlined Card',
    variant: 'outlined',
    children: 'This card has a border outline.',
  },
};

export const Filled: Story = {
  args: {
    title: 'Filled Card',
    variant: 'filled',
    children: 'This card has a filled background.',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    imageSrc: 'https://via.placeholder.com/400x200',
    imageAlt: 'Placeholder image',
    children: 'This card includes an image at the top.',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Card with Footer',
    children: 'This card has action buttons in the footer.',
    footer: (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button label="Cancel" variant="text" size="medium" />
        <Button label="Confirm" variant="filled" size="medium" />
      </div>
    ),
  },
};

export const Complete: Story = {
  args: {
    title: 'Complete Card',
    imageSrc: 'https://via.placeholder.com/400x200',
    imageAlt: 'Placeholder image',
    children: 'This is a complete card with all features: image, title, content, and footer actions.',
    footer: (
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', width: '100%' }}>
        <Button label="Learn More" variant="text" size="medium" />
        <Button label="Get Started" variant="filled" size="medium" />
      </div>
    ),
  },
};
