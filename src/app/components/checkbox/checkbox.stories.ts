import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

const meta: Meta<CheckboxComponent> = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    checkedChange: { table: { disable: true } },
  },
  args: {
    checked: false,
    indeterminate: false,
    label: 'Checkbox',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Playground: Story = {
  name: 'Properties',
  render: (args) => ({
    props: args,
    template: `
      <sp-checkbox
        [checked]="checked"
        [indeterminate]="indeterminate"
        [label]="label"
        [disabled]="disabled"
        (checkedChange)="checked = $event"
      ></sp-checkbox>
    `,
    moduleMetadata: {
      imports: [CheckboxComponent],
    },
  }),
};
