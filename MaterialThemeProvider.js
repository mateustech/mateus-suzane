import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

export function MaterialThemeProvider(props) {
  const { children } = props;
  const theme = createMuiTheme(
    /**
     * @see https://material-ui.com/customization/themes/#theme-configuration-variables
     */
    {
      // direction: "rtl",
      typography: {
        button: {
          letterSpacing: ".8px",
          fontWeight: 700
        }


      },

      palette: {
        type: "light",
        primary: {
          // light: "#3b7e10",
          main: "#60001c",
          // dark: "#3b7e71",
          // contrastText: "#1F2937"
        },
        secondary: {
          // light: will be calculated from palette.primary.main,
          main: "#AAA"
          // dark: will be calculated from palette.primary.main,
          // contrastText: "#fff" //will be calculated to contrast with palette.primary.main
        },
        error: {
          light: "#ffb74d",
          main: "#f44336",
          dark: "#f57c00"
          // contrastText: "#fff" //will be calculated to contrast with palette.primary.main
        },
        warning: {
          light: "#ffb74d",
          main: "#ff9800",
          dark: "#f57c00"
        },
        success: {
          light: "#81c784",
          main: "#4caf50",
          dark: "#388e3c"
        },
        text: {
          main: "#333",
          dark: "#fff"
        }
      },

      /**
       * @see https://material-ui.com/customization/globals/#default-props
       */
      props: {
        // Name of the component ⚛️
        MuiButtonBase: {
          // The properties to apply
          disableRipple: false // No more ripple, on the whole application 💣!
        },

        // Set default elevation to 1 for popovers.
        MuiPopover: {
          elevation: 1
        }
      }
    }
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

let grays = {
  gray_50: "#F9FAFB",
  gray_100: "#F3F4F6",
  gray_200: "#E5E7EB",
  gray_300: "#D1D5DB",
  gray_400: "#9CA3AF",
  gray_500: "#6B7280",
  gray_600: "#4B5563",
  gray_700: "#374151",
  gray_800: "#1F2937",
  gray_900: "#111827",
}
