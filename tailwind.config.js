/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        'success': '#0ABF30',
        'error': '#E24D4C',
        'info': '#3498DB'
      },
      keyframes: {
        show_alert: {
          '0%': { transform: 'translateY(-20%)' },
          '50%': { transform: 'translatY(-5%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        hide_alert: {
          '0%': { transform: 'translateX(-10px)' },
          '40%': { transform: 'translateX(0%)' },
          '80%': { transform: 'translateX(-5%)' },
          '100%': { transform: 'translateX(calc(100% + 20px))' },
        },
        text_change: {
          '0%': { color: 'red' },
          '25%': { color: 'green' },
          '50%': { color: 'blue' },
          '75%': { color: 'purple' },
          '100%': { color: 'red' },
        }
      },
      animation: {
        'alert_show_alert': 'show_alert 0.5s ease forwards',
        'alert_hide_alert': 'hide_alert 0.5s ease forwards',
        'text_animation': 'text_change 10s ease infinite'
      },
    },
  },
  plugins: [],
}
