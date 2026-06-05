import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonGroupComponent } from './button-group.component';
import type { ButtonGroupItem } from './button-group.component';

const defaultItems: ButtonGroupItem[] = [
  { label: 'Button', leftIconName: 'arrow-left', rightIconName: 'arrow-right' },
  { label: 'Button', leftIconName: 'arrow-left', rightIconName: 'arrow-right' },
  { label: 'Button', leftIconName: 'arrow-left', rightIconName: 'arrow-right' },
];

const meta: Meta<ButtonGroupComponent> = {
  title: 'Components/ButtonGroup/All Stories',
  component: ButtonGroupComponent,
};

export default meta;
type Story = StoryObj<ButtonGroupComponent>;

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; align-items: flex-start;">
        <div>
          <p style="font-family: inherit; font-size: 12px; color: #666; margin: 0 0 8px;">Large</p>
          <sp-button-group
            [items]="items"
            size="large"
            [showLabel]="true"
            [activeIndex]="0"
          ></sp-button-group>
        </div>
        <div>
          <p style="font-family: inherit; font-size: 12px; color: #666; margin: 0 0 8px;">Small</p>
          <sp-button-group
            [items]="items"
            size="small"
            [showLabel]="true"
            [activeIndex]="0"
          ></sp-button-group>
        </div>
      </div>
    `,
    props: { items: defaultItems },
    moduleMetadata: { imports: [ButtonGroupComponent] },
  }),
};

export const IconVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; align-items: flex-start;">
        <div>
          <p style="font-family: inherit; font-size: 12px; color: #666; margin: 0 0 8px;">Label only</p>
          <sp-button-group
            [items]="items"
            size="large"
            [showLabel]="true"
            [showLeftIcon]="false"
            [showRightIcon]="false"
            [activeIndex]="0"
          ></sp-button-group>
        </div>
        <div>
          <p style="font-family: inherit; font-size: 12px; color: #666; margin: 0 0 8px;">Left icon + Label</p>
          <sp-button-group
            [items]="items"
            size="large"
            [showLabel]="true"
            [showLeftIcon]="true"
            [showRightIcon]="false"
            [activeIndex]="0"
          ></sp-button-group>
        </div>
        <div>
          <p style="font-family: inherit; font-size: 12px; color: #666; margin: 0 0 8px;">Label + Right icon</p>
          <sp-button-group
            [items]="items"
            size="large"
            [showLabel]="true"
            [showLeftIcon]="false"
            [showRightIcon]="true"
            [activeIndex]="0"
          ></sp-button-group>
        </div>
        <div>
          <p style="font-family: inherit; font-size: 12px; color: #666; margin: 0 0 8px;">Left icon + Label + Right icon</p>
          <sp-button-group
            [items]="items"
            size="large"
            [showLabel]="true"
            [showLeftIcon]="true"
            [showRightIcon]="true"
            [activeIndex]="0"
          ></sp-button-group>
        </div>
        <div>
          <p style="font-family: inherit; font-size: 12px; color: #666; margin: 0 0 8px;">Icon only</p>
          <sp-button-group
            [items]="items"
            size="large"
            [showLabel]="false"
            [showLeftIcon]="true"
            [showRightIcon]="false"
            [activeIndex]="0"
          ></sp-button-group>
        </div>
      </div>
    `,
    props: { items: defaultItems },
    moduleMetadata: { imports: [ButtonGroupComponent] },
  }),
};

export const Disabled: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; align-items: flex-start;">
        <div>
          <p style="font-family: inherit; font-size: 12px; color: #666; margin: 0 0 8px;">Enabled</p>
          <sp-button-group
            [items]="items"
            size="large"
            [showLabel]="true"
            [disabled]="false"
            [activeIndex]="0"
          ></sp-button-group>
        </div>
        <div>
          <p style="font-family: inherit; font-size: 12px; color: #666; margin: 0 0 8px;">Disabled</p>
          <sp-button-group
            [items]="items"
            size="large"
            [showLabel]="true"
            [disabled]="true"
            [activeIndex]="0"
          ></sp-button-group>
        </div>
      </div>
    `,
    props: { items: defaultItems },
    moduleMetadata: { imports: [ButtonGroupComponent] },
  }),
};

export const ButtonCounts: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; align-items: flex-start;">
        <div>
          <p style="font-family: inherit; font-size: 12px; color: #666; margin: 0 0 8px;">2 Buttons</p>
          <sp-button-group
            [items]="items2"
            size="large"
            [showLabel]="true"
            [activeIndex]="0"
          ></sp-button-group>
        </div>
        <div>
          <p style="font-family: inherit; font-size: 12px; color: #666; margin: 0 0 8px;">3 Buttons</p>
          <sp-button-group
            [items]="items3"
            size="large"
            [showLabel]="true"
            [activeIndex]="0"
          ></sp-button-group>
        </div>
        <div>
          <p style="font-family: inherit; font-size: 12px; color: #666; margin: 0 0 8px;">4 Buttons</p>
          <sp-button-group
            [items]="items4"
            size="large"
            [showLabel]="true"
            [activeIndex]="0"
          ></sp-button-group>
        </div>
        <div>
          <p style="font-family: inherit; font-size: 12px; color: #666; margin: 0 0 8px;">5 Buttons</p>
          <sp-button-group
            [items]="items5"
            size="large"
            [showLabel]="true"
            [activeIndex]="0"
          ></sp-button-group>
        </div>
      </div>
    `,
    props: {
      items2: [
        { label: 'Button', leftIconName: 'arrow-left', rightIconName: 'arrow-right' },
        { label: 'Button', leftIconName: 'arrow-left', rightIconName: 'arrow-right' },
      ],
      items3: defaultItems,
      items4: [
        { label: 'Button', leftIconName: 'arrow-left', rightIconName: 'arrow-right' },
        { label: 'Button', leftIconName: 'arrow-left', rightIconName: 'arrow-right' },
        { label: 'Button', leftIconName: 'arrow-left', rightIconName: 'arrow-right' },
        { label: 'Button', leftIconName: 'arrow-left', rightIconName: 'arrow-right' },
      ],
      items5: [
        { label: 'Button', leftIconName: 'arrow-left', rightIconName: 'arrow-right' },
        { label: 'Button', leftIconName: 'arrow-left', rightIconName: 'arrow-right' },
        { label: 'Button', leftIconName: 'arrow-left', rightIconName: 'arrow-right' },
        { label: 'Button', leftIconName: 'arrow-left', rightIconName: 'arrow-right' },
        { label: 'Button', leftIconName: 'arrow-left', rightIconName: 'arrow-right' },
      ],
    },
    moduleMetadata: { imports: [ButtonGroupComponent] },
  }),
};
