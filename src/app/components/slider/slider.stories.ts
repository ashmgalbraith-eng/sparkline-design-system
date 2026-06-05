import type { Meta, StoryObj } from '@storybook/angular';
import { SliderComponent } from './slider.component';

const meta: Meta<SliderComponent> = {
  title: 'Components/Slider',
  component: SliderComponent,
  argTypes: {
    value: { control: { type: 'number' } },
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    step: { control: { type: 'number' } },
    disabled: { control: 'boolean' },
    showValue: { control: 'boolean' },
    valueChange: { table: { disable: true } },
  },
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValue: true,
  },
};

export default meta;
type Story = StoryObj<SliderComponent>;

export const Playground: Story = {
  name: 'Properties',
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 320px; padding: 16px;">
        <sp-slider
          [value]="value"
          [min]="min"
          [max]="max"
          [step]="step"
          [disabled]="disabled"
          [showValue]="showValue"
          (valueChange)="value = $event"
        ></sp-slider>
      </div>
    `,
    moduleMetadata: { imports: [SliderComponent] },
  }),
};
