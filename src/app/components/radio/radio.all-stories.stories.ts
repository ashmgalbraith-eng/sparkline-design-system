import type { Meta, StoryObj } from '@storybook/angular';
import { RadioComponent } from './radio.component';

const meta: Meta<RadioComponent> = {
  title: 'Components/Radio/All Stories',
  component: RadioComponent,
};

export default meta;
type Story = StoryObj<RadioComponent>;

export const States: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <sp-radio [checked]="false" label="Unchecked"></sp-radio>
        <sp-radio [checked]="true" label="Checked"></sp-radio>
        <sp-radio [checked]="false" label="Disabled" [disabled]="true"></sp-radio>
        <sp-radio [checked]="true" label="Disabled checked" [disabled]="true"></sp-radio>
      </div>
    `,
    moduleMetadata: { imports: [RadioComponent] },
  }),
};
