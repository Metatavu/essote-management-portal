import { createTheme, darkScrollbar } from "@mui/material";

/**
 * Values from default theme to use in custom theme
 */
const { breakpoints, palette } = createTheme();

/**
 * Custom theme for Material UI
 */
export default createTheme({

  palette: {
    primary: {
      main: "#375AA3"
    },
    secondary: {
      main: "#4FA3DF"
    },
    text: {
      primary: "#333333",
      secondary: "#ffffff"
    },
    background: {
      default: "#405da3",
      paper: "#ffffff"
    }
  },

  typography: {
    allVariants: {
      fontFamily: "poppins, sans-serif"
    },
    h1: {
      fontWeight: 600,
      fontSize: 24,
      [breakpoints.down("sm")]: {
        fontSize: "1.75rem"
      }
    },
    h2: {
      fontWeight: 600,
      fontSize: 20
    },
    h3: {
      fontWeight: 100,
      fontSize: 20
    },
    h4: {
      fontWeight: 100,
      fontSize: 16,
      color: "rgba(0, 0, 0, 0.5)"
    },
    body1: {
      fontSize: 16
    },
    h5: {
      fontSize: 16
    },
    h6: {
      fontSize: 12
    },
    body2: {
      fontSize: 14
    },
    subtitle2: {
      fontSize: 14,
      color: "#fff",
      fontWeight: 600
    }
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          a: {
            textDecoration: "none"
          }
        },
        body: palette.mode === "dark" ? darkScrollbar() : null
      }
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: "fixed"
      },
      styleOverrides: {
        root: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        },
        colorPrimary: {
          backgroundColor: "#000"
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          width: "100%"
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "rgba(0, 0, 0, 0.54)"
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small"
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          alignItems: "center",
          justifyContent: "space-between"
        }
      }
    }
  }

});