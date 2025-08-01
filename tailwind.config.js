// /** @type {import('tailwindcss').Config} */

// const config = {
//   darkMode: ["class", "class"], // or 'media' for system preference
//   content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
//   theme: {
//   	extend: {
//   		colors: {
//   			background: 'hsl(var(--background))',
//   			'lighter-background': 'var(--color-lighter-background)',
//   			'auth-background': 'var(--color-auth-background)',
//   			'auth-card-background': 'var(--color-auth-card-background)',
//   			'sidebar-background': 'var(--color-sidebar-background)',
//   			'header-background': 'var(--color-header-background)',
//   			'content-background': 'var(--color-content-background)',
//   			'selected-background': 'var(--color-selected-background)',
//   			'button-background': 'var(--color-button-background)',
//   			'icon-background': 'var(--color-icon-background)',
//   			'auth-form-input-background': 'var(--color-auth-form-input-background)',
//   			foreground: 'hsl(var(--foreground))',
//   			'lighter-foreground': 'var(--color-lighter-foreground)',
//   			'sidebar-foreground': 'var(--color-sidebar-foreground)',
//   			'header-foreground': 'var(--color-foreground)',
//   			'content-foreground': 'var(--color-foreground)',
//   			'auth-form-foreground': 'var(--color-auth-form-foreground)',
//   			border: 'hsl(var(--border))',
//   			'header-border': 'var(--color-header-border)',
//   			'sidebar-border': 'var(--color-sidebar-border)',
//   			card: {
//   				DEFAULT: 'hsl(var(--card))',
//   				foreground: 'hsl(var(--card-foreground))'
//   			},
//   			'card-foreground': 'var(--color-card-foreground)',
//   			'bg-card-foreground': 'var(--color-bg-card-foreground)',
//   			'no-bg-card-foreground': 'var(--color-no-bg-card-foreground)',
//   			'bg-card': 'var(--color-bg-card-background)',
//   			'no-bg-card': 'var(--color-no-bg-card-background)',
//   			'bg-card-header': 'var(--color-bg-card-header-background)',
//   			'bg-card-body': 'var(--color-bg-card-body-background)',
//   			'border-item': 'var(--color-border-item)',
//   			'welcome-background': 'var(--color-welcome-background)',
//   			'welcome-foreground': 'var(--color-welcome-foreground)',
//   			'welcome-secondary': 'var(--color-welcome-secondary)',
//   			'welcome-border': 'var(--color-welcome-border)',
//   			'welcome-button': 'var(--color-welcome-button)',
//   			'welcome-button-text': 'var(--color-welcome-button-text)',
//   			popover: {
//   				DEFAULT: 'hsl(var(--popover))',
//   				foreground: 'hsl(var(--popover-foreground))'
//   			},
//   			'popover-foreground': 'var(--color-popover-foreground)',
//   			primary: {
//   				DEFAULT: 'hsl(var(--primary))',
//   				foreground: 'hsl(var(--primary-foreground))'
//   			},
//   			'primary-foreground': 'var(--color-primary-foreground)',
//   			secondary: {
//   				DEFAULT: 'hsl(var(--secondary))',
//   				foreground: 'hsl(var(--secondary-foreground))'
//   			},
//   			'secondary-foreground': 'var(--color-secondary-foreground)',
//   			muted: {
//   				DEFAULT: 'hsl(var(--muted))',
//   				foreground: 'hsl(var(--muted-foreground))'
//   			},
//   			'muted-foreground': 'var(--color-muted-foreground)',
//   			accent: {
//   				DEFAULT: 'hsl(var(--accent))',
//   				foreground: 'hsl(var(--accent-foreground))'
//   			},
//   			'accent-foreground': 'var(--color-accent-foreground)',
//   			destructive: {
//   				DEFAULT: 'hsl(var(--destructive))',
//   				foreground: 'hsl(var(--destructive-foreground))'
//   			},
//   			'destructive-foreground': 'var(--color-destructive-foreground)',
//   			input: 'hsl(var(--input))',
//   			ring: 'hsl(var(--ring))',
//   			'chart-1': 'var(--color-chart-1)',
//   			'chart-2': 'var(--color-chart-2)',
//   			'chart-3': 'var(--color-chart-3)',
//   			'chart-4': 'var(--color-chart-4)',
//   			'chart-5': 'var(--color-chart-5)',
//   			sidebar: 'var(--color-sidebar)',
//   			'sidebar-primary': 'var(--color-sidebar-primary)',
//   			'sidebar-primary-foreground': 'var(--color-sidebar-primary-foreground)',
//   			'sidebar-accent': 'var(--color-sidebar-accent)',
//   			'sidebar-accent-foreground': 'var(--color-sidebar-accent-foreground)',
//   			'sidebar-ring': 'var(--color-sidebar-ring)',
//   			chart: {
//   				'1': 'hsl(var(--chart-1))',
//   				'2': 'hsl(var(--chart-2))',
//   				'3': 'hsl(var(--chart-3))',
//   				'4': 'hsl(var(--chart-4))',
//   				'5': 'hsl(var(--chart-5))'
//   			}
//   		},
//   		boxShadow: {
//   			custom: 'var(--shadow-custom)',
//   			'custom-lg': 'var(--shadow-custom-lg)',
//   			card: 'var(--color-card-shadow)'
//   		},
//   		keyframes: {
//   			shine: {
//   				'0%': {
//   					'background-position': '100%'
//   				},
//   				'100%': {
//   					'background-position': '-100%'
//   				}
//   			}
//   		},
//   		animation: {
//   			shine: 'shine 5s linear infinite'
//   		},
//   		fontFamily: {
//   			sans: [
//   				'Montserrat',
//   				'sans-serif'
//   			]
//   		},
//   		borderRadius: {
//   			lg: 'var(--radius)',
//   			md: 'calc(var(--radius) - 2px)',
//   			sm: 'calc(var(--radius) - 4px)'
//   		}
//   	}
//   },
//   plugins: [require("tailwindcss-animate")],
// };

// export default config;


module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "Montserrat",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
