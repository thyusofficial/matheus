module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      background: 'var(--color-background)',
      green: 'var(--color-green)',
      red: 'var(--color-red)',
      orange: 'var(--color-orange)',
      yellow: 'var(--color-yellow)',
      'primary': 'var(--color-primary)',
      'primary-hover': 'var(--color-primary-hover)',
      secondary: 'var(--color-secondary)',
      text: 'var(--color-text)',
      support: 'var(--color-support)',
      shape: 'var(--color-shape)',
      'shape-hover': 'var(--color-shape-hover)',
      icons: 'var(--color-icons)',
      borders: 'var(--color-borders)',
      black: 'var(--color-black)',
      white: 'var(--color-white)',
    },
    extend: {
      minHeight: {
        'custom-tablet': 'calc(100vh - 7rem)',
        'custom-mobile': 'calc(100vh - 9rem)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
