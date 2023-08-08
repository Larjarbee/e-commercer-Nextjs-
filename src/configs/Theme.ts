import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#E57C23',
      dark: '#025464',
      light: '#E8AA42',
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
    },
  },
});

export default theme;
