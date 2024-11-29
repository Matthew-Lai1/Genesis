// React Imports
import type { ReactNode } from "react";

// MUI Imports
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type {} from '@mui/material/themeCssVarsAugmentation'
import type {} from '@mui/lab/themeAugmentation';

// Component Imports
import ChangeMuiMode from "./ChangeMuiMode";

// Config Imports
import themeConfig from "@configs/themeConfig";

// Theme Overrides Imports
import overrides from "@core/theme/overrides";
import colorSchemes from '@core/theme/colorSchemes'
import spacing from "@core/theme/spacing";
import typography from "@core/theme/typography";

const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = createTheme({
    components: overrides(),
    colorSchemes: colorSchemes(),
    ...spacing,
    shape: {
      customBorderRadius: {
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10,
      },
    },
    typography: typography(''),
    cssVariables: {
      colorSchemeSelector: 'data'
    }
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider
        theme={theme}
        modeStorageKey={`${themeConfig.templateName.toLowerCase().split(' ').join('-')}-mui-docs-mode`}
      >
        <CssBaseline />
        <ChangeMuiMode />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default CustomThemeProvider;
