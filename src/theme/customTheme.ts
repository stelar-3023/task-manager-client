import { ThemeOptions, createTheme } from '@mui/material';

export const customTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: 'rgba(15,10,222,.80)',
      main: 'rgba(15,10,222,.65)',
      dark: 'rgba(15,10,222,.28)',
    },
    background: {
      paper: '#151515',
      default: 'rgba(0,0,0,.96)',
    },
  },
});
