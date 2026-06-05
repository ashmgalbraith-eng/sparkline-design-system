import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button/All Stories',
  component: ButtonComponent,
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Types: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <sp-button type="filled" size="large" label="Filled" [showText]="true"></sp-button>
        <sp-button type="outlined" size="large" label="Outlined" [showText]="true"></sp-button>
        <sp-button type="text" size="large" label="Text" [showText]="true"></sp-button>
      </div>
    `,
    moduleMetadata: { imports: [ButtonComponent] },
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <sp-button type="filled" size="large" label="Large" [showText]="true"></sp-button>
        <sp-button type="filled" size="small" label="Small" [showText]="true"></sp-button>
      </div>
    `,
    moduleMetadata: { imports: [ButtonComponent] },
  }),
};

export const States: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <sp-button type="filled" size="large" label="Default" state="default" [showText]="true"></sp-button>
        <sp-button type="filled" size="large" label="Hover" state="hover" [showText]="true"></sp-button>
        <sp-button type="filled" size="large" label="Pressed" state="pressed" [showText]="true"></sp-button>
        <sp-button type="filled" size="large" label="Focus" state="focus" [showText]="true"></sp-button>
        <sp-button type="filled" size="large" label="Disabled" state="disabled" [showText]="true"></sp-button>
      </div>
    `,
    moduleMetadata: { imports: [ButtonComponent] },
  }),
};

export const WithIcons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <sp-button type="filled" size="large" label="Left icon" [showText]="true" [showLeftIcon]="true" leftIconName="arrow-left"></sp-button>
        <sp-button type="filled" size="large" label="Right icon" [showText]="true" [showRightIcon]="true" rightIconName="arrow-right"></sp-button>
        <sp-button type="filled" size="large" label="Both icons" [showText]="true" [showLeftIcon]="true" [showRightIcon]="true" leftIconName="arrow-left" rightIconName="arrow-right"></sp-button>
        <sp-button type="filled" size="large" label="Icon only" [showText]="false" [showLeftIcon]="true" leftIconName="account-outline"></sp-button>
      </div>
    `,
    moduleMetadata: { imports: [ButtonComponent] },
  }),
};
