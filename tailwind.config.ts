import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gray-800': '#363434',
        'gray-600': '#484646',
        'gray-400': '#5A5757',
        'gray-200': '#9C9A9A',
        'gray-50': '#F1F1F1',
        'white': '#FFFFFF',
        'beige': '#FFFFFc',
        'berkley-blue': '#1D3557',
        'cerulean': '#457B9D',
        'red-desire': '#E63946',
        'red-desire-light': '#FAD7DA',
        'burnt-sienna': '#E56D4A',
        'burnt-sienna-light': '#FAE2DB',
        'north-texas-green': '#189542',
        'north-texas-green-light': 'D1EAD9',
      },
      spacing: {
        'bottom-card-sm': '312px',
        'bottom-card-md': '324px',
        'bottom-card-lg': '357px',
        'image-card-sm': '328px',
        'image-card-md': '340px',
        'image-card-lg': '210px',
        'card-md': '340px',
        'card-sm': '328px',
        'logo': '104px',

        'img-lg-w': '442px',
        'img-md-w': '340px',
      },
      animation: {
        fadeIn: "fadeIn 1.5s",
        bounce:
          "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
        slideUp: "slideUp 0.5s",
        slideUpEaseInOut: "slideUp 0.5s ease-in-out",
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      animationDelay: {
        0: "0s",
        2: "0.2s",
        4: "0.4s",
        6: "0.6s",
      },
      keyframes: {
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
export default config
