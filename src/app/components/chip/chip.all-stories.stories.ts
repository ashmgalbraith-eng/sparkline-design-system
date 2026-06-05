import type { Meta, StoryObj } from '@storybook/angular';
import { ChipComponent } from './chip.component';

const meta: Meta<ChipComponent> = {
  title: 'Components/Chip/All Stories',
  component: ChipComponent,
};

export default meta;
type Story = StoryObj<ChipComponent>;

export const Types: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <sp-chip type="plain" label="Plain"></sp-chip>
        <sp-chip type="clearable" label="Clearable"></sp-chip>
        <sp-chip type="plain" label="With left icon" [showLeftIcon]="true" leftIconName="account-outline"></sp-chip>
        <sp-chip type="clearable" label="With icon" [showLeftIcon]="true" leftIconName="account-outline"></sp-chip>
      </div>
    `,
    moduleMetadata: { imports: [ChipComponent] },
  }),
};

export const States: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <sp-chip type="plain" label="Default" state="default"></sp-chip>
        <sp-chip type="plain" label="Hover" state="hover"></sp-chip>
        <sp-chip type="plain" label="Pressed" state="pressed"></sp-chip>
        <sp-chip type="plain" label="Focus" state="focus"></sp-chip>
        <sp-chip type="plain" label="Disabled" state="disabled"></sp-chip>
      </div>
    `,
    moduleMetadata: { imports: [ChipComponent] },
  }),
};
