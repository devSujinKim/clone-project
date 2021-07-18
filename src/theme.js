import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'h1, h2, h3, h4, p, ul': {
          margin: 0,
          padding: 0,
        },
        li: {
          listStyle: 'none',
        },
        a: {
          textDecoration: 'none',
        },
      },
    },
    MuiIconButton: {
      root: {
        color: 'inherit',
      },
    },
    MuiTypography: {
      h1: {
        fontSize: '20px',
        fontWeight: 'bold',
      },
      h2: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
      h3: {
        fontSize: '16px',
      },
      h4: {
        fontSize: '14px',
      },
      h5: {
        fontSize: '12px',
      },
      h6: {
        fontSize: '12px',
      },
    },
  },
  palette: {
    primary: {
      main: '#0087D1',
    },
    secondary: {
      main: '#56BAEB',
    },
    grey: {
      100: '#F9F9F9',
      200: '#F5F5F5',
      500: '#CCCCCC',
      600: '#AAAAAA',
      700: '#777777',
      900: '#333333',
    },
    text: {
      primary: 'rgba(0, 0, 0, 1)',
      secondary: 'rgba(255, 255, 255, 1)',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

export default theme;
