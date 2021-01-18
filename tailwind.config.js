module.exports = {
  purge: [
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.css',
  ],
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
        'custom-height': 'calc(100vh - 7.5rem)',
      },
      backgroundImage: theme => ({
        'tech-nodejs': "url('/img/techs/nodejs.svg')",
        'tech-typescript': "url('/img/techs/typescript.svg')",
        'tech-reactjs': "url('/img/techs/reactjs.svg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
