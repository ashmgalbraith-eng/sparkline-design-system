---
name: Project Version Guard
alwaysApply: true
---
You must strictly adhere to the project's existing dependencies.
- **Angular Version:** [Insert your version, e.g., 16.2]
- **Storybook Version:** [Insert your version, e.g., 7.0]
- **Styling:** [e.g., Tailwind / SCSS]

### CRITICAL RULES:
1. NEVER suggest or use features from newer versions of Angular or Storybook than what is defined in `package.json`.
2. Before writing a component, check `package.json` for allowed peer dependencies.
3. If you are unsure of a syntax, ask me or search the `@Codebase` for existing examples first.
4. Do not use standalone components if the project is still using NgModules (or vice-versa).