import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Components/Input/All Stories',
  component: InputComponent,
};

export default meta;
type Story = StoryObj<InputComponent>;

export const States: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 320px;">
        <sp-input label="Default" placeholder="Default state" state="default" helperText="Helper text"></sp-input>
        <sp-input label="Error" placeholder="Error state" state="error" errorText="This field is required"></sp-input>
        <sp-input label="Success" placeholder="Success state" state="success" helperText="Looks good!"></sp-input>
        <sp-input label="Disabled" placeholder="Disabled state" state="disabled"></sp-input>
      </div>
    `,
    moduleMetadata: { imports: [InputComponent] },
  }),
};

export const WithIcons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 320px;">
        <sp-input label="Left icon" placeholder="Search…" [showLeftIcon]="true" leftIconName="magnify"></sp-input>
        <sp-input label="Right icon" placeholder="Enter email" [showRightIcon]="true" rightIconName="email-outline"></sp-input>
        <sp-input label="Both icons" placeholder="Username" [showLeftIcon]="true" leftIconName="account-outline" [showRightIcon]="true" rightIconName="close-circle-outline"></sp-input>
      </div>
    `,
    moduleMetadata: { imports: [InputComponent] },
  }),
};
