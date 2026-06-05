import type { Meta, StoryObj } from '@storybook/angular';
import { RadioComponent } from './radio.component';

const meta: Meta<RadioComponent> = {
  title: 'Components/Radio',
  component: RadioComponent,
  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    checkedChange: { table: { disable: true } },
  },
  args: {
    checked: false,
    label: 'Radio',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<RadioComponent>;

export const Playground: Story = {
  name: 'Properties',
  render: (args) => ({
    props: args,
    template: `
      <sp-radio [checked]="checked" [label]="label" [disabled]="disabled" (checkedChange)="checked = $event"></sp-radio>
    `,
    moduleMetadata: { imports: [RadioComponent] },
  }),
};
