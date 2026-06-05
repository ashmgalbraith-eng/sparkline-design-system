import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
  args: {
    variant: 'elevated',
    padding: 'md',
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

const sampleContent = `
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <p style="margin: 0; font-weight: 700; font-size: 16px; color: var(--color-text-primary);">Card title</p>
    <p style="margin: 0; font-size: 14px; color: var(--color-text-secondary);">Supporting text that describes the content of this card.</p>
  </div>
`;

export const Playground: Story = {
  name: 'Properties',
  render: (args) => ({
    props: args,
    template: `
      <sp-card [variant]="variant" [padding]="padding" style="width: 320px;">
        ${sampleContent}
      </sp-card>
    `,
    moduleMetadata: { imports: [CardComponent] },
  }),
};
