import { createMuiTheme } from '@material-ui/core';

/**
 * customize the material-ui theme.
 * @see https://material-ui.com/customization/themes/
 * @see https://material-ui.com/customization/default-theme/
 * @see https://material-ui.com/customization/themes/#createmuitheme-options---theme
 * @see https://material-ui.com/style/typography/#migration-to-typography-v2
 * @type {object}
 */
export default createMuiTheme({
  palette: {
    background: 'white',
    primary: {
      light: '#9A9791',
      dark: '#36384B',
      main: '#36384B',
      white: '#fff',
      contrastText: '#F9F7F6',
    },
    secondary: {
      light: '#D6A38B',
      dark: '#A04B4D',
      main: '#A04B4D',
      white: '#fff',
      contrastText: '#F9F7F6',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Montserrat, sans-serif',
  },
});
