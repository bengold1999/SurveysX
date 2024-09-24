/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				// Colors from the image
				neutral: {
					black: '#263238',
					dgrey: '#4D4D4D',
					grey: '#717171',
					lgrey: '#98939E',
					greyblue: '#A8BED1',
					silver: '#F5F7FA',
					white: '#FFFFFF',
				},
				primary: {
					DEFAULT: '#7AB2B2', // Custom primary color
				},
				secondary: {
					DEFAULT: '#263238',
				},
				bgTrue: {
					DEFAULT: '#F5F7FA',
				},
				info: {
					DEFAULT: '#2194f3',
				},
				colorShade: {
					shade1: '#7AB2B2',
					shade2: '#388E3B',
					shade3: '#D3F0F0',
				},
				action: {
					warning: '#FBC02D',
					error: '#E53835',
					success: '#2E7D31',
				},
				// Other existing colors based on CSS variables
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primaryVar: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},

				fontSize: {
					// Headline sizes
					'headline-1': ['64px', '76px'],
					'headline-2': ['36px', '44px'],
					'headline-3': ['28px', '36px'],
					'headline-4': ['20px', '28px'],
					// Body sizes
					'body-1': ['18px', '28px'],
					'body-2': ['16px', '24px'],
					'body-3': ['14px', '20px'],
					'body-4': ['12px', '16px'],
				},
				fontWeight: {
					regular: 400,
					medium: 500,
					semibold: 600,
				},
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
