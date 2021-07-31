import { createContext } from "react";
import { CssBaseline } from "@material-ui/core";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

const TemplateContext = createContext(null);

export const TemplateProvider = ({ children }) => {
  const theme = createMuiTheme({
    overrides: {
      MuiDialog: {
        paperWidthSm: {
          maxWidth: "unset",
        },
      },
      MuiDialogContent: {
        root: {
          padding: 0,
          "&:first-child": {
            paddingTop: 0,
          },
        },
      },
    },
  });
  return (
    <TemplateContext.Provider>
      <ThemeProvider>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </TemplateContext.Provider>
  );
};

export default TemplateProvider;
