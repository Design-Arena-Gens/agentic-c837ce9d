import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A1A2F',
          900: '#050B12',
          800: '#0A1A2F',
          700: '#0F2A4A'
        },
        accent: {
          cyan: '#00E5FF',
          blue: '#4FC3F7',
          green: '#00FF88'
        }
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'radial-fade': 'radial-gradient(circle at 50% -20%, rgba(79,195,247,0.25), rgba(0,0,0,0))',
        'led-gradient': 'linear-gradient(135deg, #00E5FF 0%, #00FF88 100%)'
      },
      boxShadow: {
        neon: '0 0 20px rgba(0,229,255,0.25), 0 0 30px rgba(0,255,136,0.2)'
      }
    }
  },
  plugins: []
}

export default config
