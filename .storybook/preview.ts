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
          'Design System Governance',
          ['Working with the Design System', 'Versioning & Releases', 'Communication & Enforcement'],
          'Foundations',
          'Components',
          [
            'Avatar', ['Overview', 'Variations', 'Accessibility', 'Properties', 'Development', 'All Stories'],
            'Badge', ['Overview', 'Variations', 'Accessibility', 'Properties', 'Development', 'All Stories'],
            'Button', ['Overview', 'Variations', 'Accessibility', 'Properties', 'Development', 'All Stories'],
            'ButtonGroup', ['Overview', 'Variations', 'Accessibility', 'Properties', 'Development', 'All Stories'],
            'Card', ['Overview', 'Variations', 'Accessibility', 'Properties', 'Development', 'All Stories'],
            'Checkbox', ['Overview', 'Variations', 'Accessibility', 'Properties', 'Development', 'All Stories'],
            'Chip', ['Overview', 'Variations', 'Accessibility', 'Properties', 'Development', 'All Stories'],
            'Input', ['Overview', 'Variations', 'Accessibility', 'Properties', 'Development', 'All Stories'],
            'Radio', ['Overview', 'Variations', 'Accessibility', 'Properties', 'Development', 'All Stories'],
            'Select', ['Overview', 'Variations', 'Accessibility', 'Properties', 'Development', 'All Stories'],
            'Slider', ['Overview', 'Variations', 'Accessibility', 'Properties', 'Development', 'All Stories'],
            'Stepper', ['Overview', 'Variations', 'Accessibility', 'Properties', 'Development', 'All Stories'],
            'Switch', ['Overview', 'Variations', 'Accessibility', 'Properties', 'Development', 'All Stories'],
            '*',
          ],
          'Resources',
          ['Downloads', 'Planning & Requests', 'Figma Release Notes', 'Repo Release Notes'],
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
