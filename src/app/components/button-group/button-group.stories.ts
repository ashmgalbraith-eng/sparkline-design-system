import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonGroupComponent } from './button-group.component';
import type { ButtonGroupSize, ButtonGroupItem } from './button-group.component';

const defaultItems: ButtonGroupItem[] = [
  { label: 'Button', leftIconName: 'arrow-left', rightIconName: 'arrow-right' },
  { label: 'Button', leftIconName: 'arrow-left', rightIconName: 'arrow-right' },
  { label: 'Button', leftIconName: 'arrow-left', rightIconName: 'arrow-right' },
];

const meta: Meta<ButtonGroupComponent> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroupComponent,
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'small'] as ButtonGroupSize[],
    },
    showLeftIcon: { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
    showLabel: { control: 'boolean' },
    disabled: { control: 'boolean' },
    activeIndex: { table: { disable: true } },
    items: { table: { disable: true } },
    selectionChange: { table: { disable: true } },
  },
  args: {
    size: 'large',
    showLeftIcon: false,
    showRightIcon: false,
    showLabel: true,
    disabled: false,
    activeIndex: 0,
    items: defaultItems,
  },
};

export default meta;
type Story = StoryObj<ButtonGroupComponent>;

// Extra args type for Playground's buttonCount control (not a component @Input())
type PlaygroundStory = Story & {
  args?: { buttonCount?: number };
  argTypes?: { buttonCount?: object };
};

export const Playground: PlaygroundStory = {
  name: 'Properties',
  argTypes: {
    buttonCount: {
      control: { type: 'number', min: 2, max: 5, step: 1 },
      description: 'Number of buttons (2–5)',
    },
  },
  args: { buttonCount: 3 },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => {
    const count: number = Math.max(2, Math.min(5, (args.buttonCount as number) ?? 3));
    const items: ButtonGroupItem[] = Array.from({ length: count }, () => ({
      label: 'Button',
      leftIconName: 'arrow-left',
      rightIconName: 'arrow-right',
    }));
    return {
      props: { ...args, items },
      template: `
        <sp-button-group
          [items]="items"
          [size]="size"
          [showLeftIcon]="showLeftIcon"
          [showRightIcon]="showRightIcon"
          [showLabel]="showLabel"
          [disabled]="disabled"
          [activeIndex]="activeIndex"
        ></sp-button-group>
      `,
      moduleMetadata: {
        imports: [ButtonGroupComponent],
      },
    };
  },
};
