import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    }
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif'
  },
  palette: {
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#000'
    },
    error: {
      main: red.A400
    }
  }
});

export default theme;
