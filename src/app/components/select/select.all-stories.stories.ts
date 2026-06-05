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
  title: 'Components/Select/All Stories',
  component: SelectComponent,
};

export default meta;
type Story = StoryObj<SelectComponent>;

export const MultiSelect: Story = {
  render: () => ({
    props: { options: fruitOptions, value: ['apple', 'cherry'] },
    template: `
      <div style="width: 320px; padding: 16px;">
        <sp-select
          [options]="options"
          [value]="value"
          [multiple]="true"
          label="Favourite fruits"
          placeholder="Pick some fruits"
          (valueChange)="value = $event"
        ></sp-select>
      </div>
    `,
    moduleMetadata: { imports: [SelectComponent] },
  }),
};

export const WithValidation: Story = {
  render: () => ({
    props: { options: fruitOptions, value: null },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; width: 280px; padding: 16px;">
        <sp-select
          [options]="options"
          [value]="null"
          label="Error state"
          state="error"
          errorText="Please select an option"
        ></sp-select>
        <sp-select
          [options]="options"
          [value]="null"
          label="Disabled state"
          placeholder="Cannot select"
          state="disabled"
        ></sp-select>
      </div>
    `,
    moduleMetadata: { imports: [SelectComponent] },
  }),
};
