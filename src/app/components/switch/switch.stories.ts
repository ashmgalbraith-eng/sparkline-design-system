import type { Meta, StoryObj } from '@storybook/angular';
import { SwitchComponent } from './switch.component';

const meta: Meta<SwitchComponent> = {
  title: 'Components/Switch',
  component: SwitchComponent,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    checkedChange: { table: { disable: true } },
  },
  args: {
    checked: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<SwitchComponent>;

export const Playground: Story = {
  name: 'Properties',
  render: (args) => ({
    props: args,
    template: `<sp-switch [checked]="checked" [disabled]="disabled" (checkedChange)="checked = $event"></sp-switch>`,
    moduleMetadata: { imports: [SwitchComponent] },
  }),
};
