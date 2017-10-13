import { createMuiTheme } from 'material-ui/styles';
import {grey, cyan, red} from 'material-ui/colors';

export const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: grey, // Purple and green play nicely together.
      secondary: cyan,
      error: red,
    }
  });