import type { Meta, StoryObj } from '@storybook/angular';
import { SliderComponent } from './slider.component';

const meta: Meta<SliderComponent> = {
  title: 'Components/Slider/All Stories',
  component: SliderComponent,
};

export default meta;
type Story = StoryObj<SliderComponent>;

export const Stepped: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; width: 320px; padding: 16px;">
        <div>
          <p style="margin: 0 0 8px; font-size: 12px; color: var(--color-text-secondary);">Step 10</p>
          <sp-slider [value]="30" [min]="0" [max]="100" [step]="10" [showValue]="true"></sp-slider>
        </div>
        <div>
          <p style="margin: 0 0 8px; font-size: 12px; color: var(--color-text-secondary);">Step 25</p>
          <sp-slider [value]="50" [min]="0" [max]="100" [step]="25" [showValue]="true"></sp-slider>
        </div>
      </div>
    `,
    moduleMetadata: { imports: [SliderComponent] },
  }),
};

export const Disabled: Story = {
  render: () => ({
    template: `
      <div style="width: 320px; padding: 16px;">
        <sp-slider [value]="40" [disabled]="true" [showValue]="true"></sp-slider>
      </div>
    `,
    moduleMetadata: { imports: [SliderComponent] },
  }),
};
