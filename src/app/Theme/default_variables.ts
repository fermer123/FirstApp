import {createTheme} from '@mui/material';
import {blue, blueGrey, grey} from '@mui/material/colors';

export const darkMode = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blueGrey[100],
    },
    secondary: {
      main: blueGrey[100],
    },
    background: {
      default: grey[900],
    },
  },
});

export const lightMode = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: grey[900],
    },
    secondary: {
      main: blue[300],
    },
    background: {
      default: grey[50],
    },
  },
});
