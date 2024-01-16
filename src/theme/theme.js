import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import breakpoints from './breakpoints';
import componentsOverride from './overrides';
import palette from './palette';
import typography from './typography';

const theme = responsiveFontSizes(createTheme({ palette, typography, breakpoints }));
// apply global components overrides
theme.components = componentsOverride(theme);

export default theme;
