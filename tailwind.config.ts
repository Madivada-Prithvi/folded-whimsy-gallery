
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Origami-inspired colors
				origami: {
					cream: '#FAF7F0',
					sakura: '#FFB7C5',
					sage: '#9CAF88',
					sky: '#B8E6FF',
					paper: '#F8F6F0',
					fold: '#E8E2D5',
					shadow: '#D6D0C4'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'paper-unfold': {
					'0%': {
						transform: 'rotateX(90deg) scale(0.8)',
						opacity: '0'
					},
					'100%': {
						transform: 'rotateX(0deg) scale(1)',
						opacity: '1'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'fold': {
					'0%': {
						transform: 'rotateY(0deg)'
					},
					'100%': {
						transform: 'rotateY(180deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'paper-unfold': 'paper-unfold 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'fold': 'fold 0.6s ease-in-out'
			},
			backgroundImage: {
				'paper-texture': 'linear-gradient(45deg, #faf7f0 25%, transparent 25%), linear-gradient(-45deg, #faf7f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #faf7f0 75%), linear-gradient(-45deg, transparent 75%, #faf7f0 75%)',
				'origami-gradient': 'linear-gradient(135deg, #FFB7C5 0%, #B8E6FF 50%, #9CAF88 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
