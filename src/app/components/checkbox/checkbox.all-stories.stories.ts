import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

const meta: Meta<CheckboxComponent> = {
  title: 'Components/Checkbox/All Stories',
  component: CheckboxComponent,
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const AllStates: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <sp-checkbox [checked]="false" label="Unchecked"></sp-checkbox>
        <sp-checkbox [checked]="true" label="Checked"></sp-checkbox>
        <sp-checkbox [indeterminate]="true" label="Indeterminate"></sp-checkbox>
        <sp-checkbox [checked]="false" [disabled]="true" label="Disabled"></sp-checkbox>
        <sp-checkbox [checked]="true" [disabled]="true" label="Disabled checked"></sp-checkbox>
        <sp-checkbox [indeterminate]="true" [disabled]="true" label="Disabled indeterminate"></sp-checkbox>
      </div>
    `,
    moduleMetadata: {
      imports: [CheckboxComponent],
    },
  }),
};
