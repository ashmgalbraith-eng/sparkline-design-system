import type { Preview } from '@storybook/angular';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

const withThemeBackground = (Story: any, context: any) => {
  const theme = context.globals?.theme || 'Light';
  const bg = theme === 'Dark' ? '#000000' : '#ffffff';
  const el = document.querySelector('.sb-show-main') as HTMLElement | null;
  if (el) el.style.backgroundColor = bg;
  return Story();
};

const preview: Preview = {
  decorators: [
    withThemeBackground,
    withThemeByDataAttribute({
      themes: {
        Light: 'light',
        Dark: 'dark',
      },
      defaultTheme: 'Light',
      attributeName: 'data-theme',
    }),
  ],
  parameters: {
    options: {
      storySort: {
        order: [
          'Foundations',
          'Components',
          [
            'Avatar', ['Overview', 'Variations', 'Accessibility', 'Properties', 'All Stories'],
            'Badge', ['Overview', 'Variations', 'Accessibility', 'Properties', 'All Stories'],
            'Button', ['Overview', 'Variations', 'Accessibility', 'Properties', 'All Stories'],
            'ButtonGroup', ['Overview', 'Variations', 'Accessibility', 'Properties', 'All Stories'],
            'Card', ['Overview', 'Variations', 'Accessibility', 'Properties', 'All Stories'],
            'Checkbox', ['Overview', 'Variations', 'Accessibility', 'Properties', 'All Stories'],
            'Chip', ['Overview', 'Variations', 'Accessibility', 'Properties', 'All Stories'],
            'Input', ['Overview', 'Variations', 'Accessibility', 'Properties', 'All Stories'],
            'Radio', ['Overview', 'Variations', 'Accessibility', 'Properties', 'All Stories'],
            'Select', ['Overview', 'Variations', 'Accessibility', 'Properties', 'All Stories'],
            'Slider', ['Overview', 'Variations', 'Accessibility', 'Properties', 'All Stories'],
            'Stepper', ['Overview', 'Variations', 'Accessibility', 'Properties', 'All Stories'],
            'Switch', ['Overview', 'Variations', 'Accessibility', 'Properties', 'All Stories'],
            '*',
          ],
          '*',
        ],
        includeNames: true,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
