import type { Meta, StoryObj } from '@storybook/angular';
import { SwitchComponent } from './switch.component';

const meta: Meta<SwitchComponent> = {
  title: 'Components/Switch/All Stories',
  component: SwitchComponent,
};

export default meta;
type Story = StoryObj<SwitchComponent>;

export const States: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <sp-switch [checked]="false" [disabled]="false" (checkedChange)="null"></sp-switch>
        <sp-switch [checked]="true" [disabled]="false" (checkedChange)="null"></sp-switch>
        <sp-switch [checked]="false" [disabled]="true" (checkedChange)="null"></sp-switch>
        <sp-switch [checked]="true" [disabled]="true" (checkedChange)="null"></sp-switch>
      </div>
    `,
    moduleMetadata: { imports: [SwitchComponent] },
  }),
};
