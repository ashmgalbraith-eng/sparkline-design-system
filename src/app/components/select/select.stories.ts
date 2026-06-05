import type { Meta, StoryObj } from '@storybook/angular';
import { SelectComponent } from './select.component';

const fruitOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Durian', value: 'durian', disabled: true },
  { label: 'Elderberry', value: 'elderberry' },
  { label: 'Fig', value: 'fig' },
];

const meta: Meta<SelectComponent> = {
  title: 'Components/Select',
  component: SelectComponent,
  argTypes: {
    multiple: { control: 'boolean' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
    helperText: { control: 'text' },
    errorText: { control: 'text' },
    state: {
      control: 'select',
      options: ['default', 'error', 'disabled'],
    },
    valueChange: { table: { disable: true } },
    options: { table: { disable: true } },
    value: { table: { disable: true } },
  },
  args: {
    multiple: false,
    placeholder: 'Select a fruit',
    label: 'Fruit',
    helperText: '',
    errorText: '',
    state: 'default',
  },
};

export default meta;
type Story = StoryObj<SelectComponent>;

export const Playground: Story = {
  name: 'Properties',
  render: (args) => ({
    props: { ...args, options: fruitOptions, value: null },
    template: `
      <div style="width: 280px; padding: 16px;">
        <sp-select
          [options]="options"
          [value]="value"
          [multiple]="multiple"
          [placeholder]="placeholder"
          [label]="label"
          [helperText]="helperText"
          [errorText]="errorText"
          [state]="state"
          (valueChange)="value = $event"
        ></sp-select>
      </div>
    `,
    moduleMetadata: { imports: [SelectComponent] },
  }),
};
