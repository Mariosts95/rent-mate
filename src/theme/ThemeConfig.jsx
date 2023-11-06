import { CssBaseline } from '@mui/material';
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const ThemeConfig = ({ theme, children }) => {
  const defaultTheme = responsiveFontSizes(createTheme({}));

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme || defaultTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeConfig;
