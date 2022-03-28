/**
 * ? NO COMPONENTS USING THIS, JUST FOR REFERENCE IN CASE NEEDED
 * (check ColorBox.stories.tsx)
 */

import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    // background: {
    //   default: '#fff',
    // },
  },
});

export default theme;
