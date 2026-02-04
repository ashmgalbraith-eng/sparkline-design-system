// import type { Meta, StoryObj } from '@storybook/react';
// import { Button } from './Button';

// const meta: Meta<typeof Button> = {
//   title: 'Components/Button',
//   component: Button,
//   parameters: {
//     layout: 'centered',
//   },
//   tags: ['autodocs'],
//   argTypes: {
//     variant: {
//       control: 'select',
//       options: ['filled', 'outlined', 'text'],
//       description: 'Button type/style variant',
//     },
//     size: {
//       control: 'select',
//       options: ['small', 'medium', 'large'],
//       description: 'Size of the button',
//     },
//     showLeftIcon: {
//       control: 'boolean',
//       description: 'Show left icon',
//     },
//     showRightIcon: {
//       control: 'boolean',
//       description: 'Show right icon',
//     },
//     label: {
//       control: 'text',
//       description: 'Button label text',
//     },
//     disabled: {
//       control: 'boolean',
//       description: 'Disabled state',
//     },
//   },
// };

// export default meta;
// type Story = StoryObj<typeof Button>;

// export const Playground: Story = {
//   args: {
//     label: 'Button',
//     variant: 'filled',
//     size: 'large',
//     showLeftIcon: false,
//     showRightIcon: false,
//     disabled: false,
//   },
// };
// parameters: {
//   design: {
//     type: 'figma',
//     url: 'Implement this design from Figma.
// @https://www.figma.com/design/aY6PTxhYjhJhxUgH77u0b1/Sparkline-Design-System?node-id=76-249&m=dev',
//   },
// }
// import type { Meta, StoryObj } from '@storybook/react';
// import { Button } from './Button';

// const meta: Meta<typeof Button> = {
//   title: 'Components/Button',
//   component: Button,
//   parameters: {
//     layout: 'centered',
//     design: {
//       type: 'figma',
//       url: 'https://www.figma.com/design/aY6PTxhYjhJhxUgH77u0b1/Sparkline-Design-System?node-id=76-249',
//     },
//   },
//   tags: ['autodocs'],
//   argTypes: {
//     variant: {
//       control: 'select',
//       options: ['filled', 'outlined', 'text'],
//       description: 'Button type/style variant',
//     },
//     size: {
//       control: 'select',
//       options: ['small', 'medium', 'large'],
//       description: 'Size of the button',
//     },
//     showLeftIcon: {
//       control: 'boolean',
//       description: 'Show left icon',
//     },
//     showRightIcon: {
//       control: 'boolean',
//       description: 'Show right icon',
//     },
//     label: {
//       control: 'text',
//       description: 'Button label text',
//     },
//     disabled: {
//       control: 'boolean',
//       description: 'Disabled state',
//     },
//   },
// };

// export default meta;

// type Story = StoryObj<typeof Button>;

// export const Playground: Story = {
//   args: {
//     label: 'Button',
//     variant: 'filled',
//     size: 'large',
//     showLeftIcon: false,
//     showRightIcon: false,
//     disabled: false,
//   },
// };
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/abcd1234/Sparkline-Design-System?node-id=1234:56',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'text'],
      description: 'Button type/style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
    },
    showLeftIcon: {
      control: 'boolean',
      description: 'Show left icon',
    },
    showRightIcon: {
      control: 'boolean',
      description: 'Show right icon',
    },
    label: {
      control: 'text',
      description: 'Button label text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    label: 'Button',
    variant: 'filled',
    size: 'large',
    showLeftIcon: false,
    showRightIcon: false,
    disabled: false,
  },
};
