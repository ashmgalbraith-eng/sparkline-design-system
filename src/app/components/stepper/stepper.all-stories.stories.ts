import type { Meta, StoryObj } from '@storybook/angular';
import { StepperComponent } from './stepper.component';

const defaultSteps = [
  { label: 'Account', description: 'Create your account' },
  { label: 'Profile', description: 'Set up your profile' },
  { label: 'Billing', description: 'Add payment details' },
  { label: 'Confirm', description: 'Review and confirm' },
];

const meta: Meta<StepperComponent> = {
  title: 'Components/Stepper/All Stories',
  component: StepperComponent,
};

export default meta;
type Story = StoryObj<StepperComponent>;

export const Vertical: Story = {
  render: () => ({
    props: { steps: defaultSteps },
    template: `
      <div style="padding: 24px; width: 280px;">
        <sp-stepper
          [steps]="steps"
          [activeStep]="2"
          orientation="vertical"
        ></sp-stepper>
      </div>
    `,
    moduleMetadata: { imports: [StepperComponent] },
  }),
};

export const WithError: Story = {
  render: () => ({
    props: {
      steps: [
        { label: 'Account', description: 'Create your account' },
        { label: 'Profile', description: 'Fix the errors below', state: 'error' },
        { label: 'Billing', description: 'Add payment details' },
        { label: 'Confirm', description: 'Review and confirm' },
      ],
    },
    template: `
      <div style="padding: 24px; max-width: 640px;">
        <sp-stepper [steps]="steps" [activeStep]="1" orientation="horizontal"></sp-stepper>
      </div>
    `,
    moduleMetadata: { imports: [StepperComponent] },
  }),
};

export const AllCompleted: Story = {
  render: () => ({
    props: { steps: defaultSteps },
    template: `
      <div style="padding: 24px; max-width: 640px;">
        <sp-stepper [steps]="steps" [activeStep]="4" orientation="horizontal"></sp-stepper>
      </div>
    `,
    moduleMetadata: { imports: [StepperComponent] },
  }),
};
