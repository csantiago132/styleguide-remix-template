/* eslint import/no-default-export: 0 */
import { type Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,mdx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
