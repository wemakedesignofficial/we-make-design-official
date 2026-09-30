import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { bg: '#0c0b0a', alt: '#1f1a16', card: '#141210', text: '#f1e9dd', muted: '#a89e91', gold: '#c9a26b' }, maxWidth: { container: '1440px' }, fontFamily: { display: ['var(--font-display)'], body: ['var(--font-body)'] } } }, plugins: [] };
export default config;
