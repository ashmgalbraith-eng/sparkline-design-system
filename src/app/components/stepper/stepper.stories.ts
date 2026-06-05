import type { Meta, StoryObj } from '@storybook/angular';
import { StepperComponent } from './stepper.component';

const defaultSteps = [
  { label: 'Account', description: 'Create your account' },
  { label: 'Profile', description: 'Set up your profile' },
  { label: 'Billing', description: 'Add payment details' },
  { label: 'Confirm', description: 'Review and confirm' },
];

const meta: Meta<StepperComponent> = {
  title: 'Components/Stepper',
  component: StepperComponent,
  argTypes: {
    activeStep: { control: { type: 'number', min: 0, max: 3 } },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    steps: { table: { disable: true } },
  },
  args: {
    activeStep: 1,
    orientation: 'horizontal',
  },
};

export default meta;
type Story = StoryObj<StepperComponent>;

export const Playground: Story = {
  name: 'Properties',
  render: (args) => ({
    props: { ...args, steps: defaultSteps },
    template: `
      <div style="padding: 24px; max-width: 640px;">
        <sp-stepper
          [steps]="steps"
          [activeStep]="activeStep"
          [orientation]="orientation"
        ></sp-stepper>
      </div>
    `,
    moduleMetadata: { imports: [StepperComponent] },
  }),
};
