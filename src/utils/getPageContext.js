/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#FDDCA5",
      main: "#FCB239", // yellow
      dark: "#B8822A",
    },
    secondary: {
      light: "#73A796",
      main: "#005E3F", // green
      dark: "941c5b",
    },
    error: {
      light: "#FB9D5D",
      main: "#FA7921", // orange
      dark: "#A83512",
    },
    background: {
      default: "#fff",
    }
  },
  typography: {
    fontFamily: `'Roboto', Helvetica, Arial, sans-serif`,
    fontSize: 18,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    color: '#2F4858',
    display1: {
      fontFamily: `'Roboto Condensed', cursive`,
      letterSpacing: "0.05rem",
      textTransform: "uppercase",
      fontSize: "3.333em",
      color: '#DA900A',
      fontWeight: 700,
    },
    display2: {
      fontFamily: `'Roboto Condensed', cursive`,
      letterSpacing: "0.05rem",
      textTransform: "uppercase",
      fontSize: "2.222em",
      color: '#DA900A',
      fontWeight: 700,
    },
    display3: {
      fontFamily: `'Roboto Condensed', cursive`,
      letterSpacing: "0.05rem",
      textTransform: "uppercase",
      fontSize: "1.667em",
      color: '#DA900A',
      fontWeight: 700,
    },
    display4: {
      fontFamily: `'Roboto Condensed', cursive`,
      textTransform: "none",
      fontSize: "1.14em",
      color: '#DA900A',
      fontWeight: 700,
    },
    title: {
      fontFamily: `'Roboto Condensed', cursive`,
      letterSpacing: "0.05rem",
      textTransform: "uppercase",
      color: '#DA900A',
      fontWeight: 700,
    },
    headline: {
      fontFamily: `'Roboto Condensed', cursive`,
      letterSpacing: "0.05rem",
      textTransform: "uppercase",
      fontSize: "1.667em",
      color: '#DA900A',
      fontWeight: 700,
      borderBottom: "2px solid #e70094",
      marginBottom: "1em",
    },
    button: {
      textTransform: "none",
      color: "#fff",
    },
    body1: {
      fontFamily: `'Roboto', Helvetica, Arial, sans-serif`,
      fontSize: 18,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      color: '#2F4858',
    },
  },
  status: {
    danger: "#FA7921",
  }
});


function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}