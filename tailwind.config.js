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
        'custom-height': 'calc(100vh - 7.5rem)',
      },
      backgroundImage: theme => ({
        'tech-nodejs': "url('/img/techs/nodejs.svg')",
        'tech-typescript': "url('/img/techs/typescript.svg')",
        'tech-bootstrap': "url('/img/techs/bootstrap.svg')",
        'tech-css3': "url('/img/techs/css3.svg')",
        'tech-html5': "url('/img/techs/html5.svg')",
        'tech-javascript': "url('/img/techs/javascript.svg')",
        'tech-reactjs': "url('/img/techs/reactjs.svg')",
        'tech-php': "url('/img/techs/php.svg')",
        'tech-materialize-css': "url('/img/techs/materialize-css.svg')",
        'tech-mysql': "url('/img/techs/mysql.svg')",
        'tech-postgresql': "url('/img/techs/postgresql.svg')",
        'tech-docker': "url('/img/techs/docker.svg')",
        'tech-ant-design': "url('/img/techs/ant-design.svg')",
        'tech-nextjs': "url('/img/techs/nextjs.svg')",
        'tech-firebase': "url('/img/techs/firebase.svg')",
        'tech-tailwind': "url('/img/techs/tailwind.svg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
