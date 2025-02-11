import {CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import {useTheme} from '@provider/ThemeProvider';

import {darkMode, lightMode} from './default_variables';

const Theme = ({children}: {children: React.ReactNode}) => {
  const {theme} = useTheme();
  return (
    <ThemeProvider theme={theme === 'LIGHT' ? lightMode : darkMode}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export default Theme;
