// import { createTheme } from "@mui/material";

// declare module "@mui/material/styles" {
//   interface Palette {
//     done: Palette["primary"];
//     progress: Palette["primary"];
//     hold: Palette["primary"];
//   }
//   interface PaletteOptions {
//     done?: PaletteOptions["primary"];
//     progress?: PaletteOptions["primary"];
//     hold?: PaletteOptions["primary"];
//   }

//   interface PaletteColor {
//     success600?: string;
//     success500?: string;
//     warning300?: string;
//     primary500?: string;
//     highEmphasis?: string;
//     mediumEmphasis?: string;
//     grey50?: string;
//     grey500?: string;
//     grey400?: string;
//     grey200?: string;
//     grey100?: string;
//     white?: string;
//     linear1?: string;
//     linear2?: string;
//     color1?: string;
//     color2?: string;
//     color3?: string;
//     color4?: string;
//     color5?: string;
//     color6?: string;
//     done?: string;
//     progress?: string;
//     hold?: string;
//   }

//   interface SimplePaletteColorOptions {
//     success600?: string;
//     success500?: string;
//     warning300?: string;
//     primary500?: string;
//     highEmphasis?: string;
//     mediumEmphasis?: string;
//     grey50?: string;
//     grey500?: string;
//     grey400?: string;
//     grey200?: string;
//     grey100?: string;
//     white?: string;
//     linear1?: string;
//     linear2?: string;
//     color1?: string;
//     color2?: string;
//     color3?: string;
//     color4?: string;
//     color5?: string;
//     color6?: string;
//     done?: string;
//     progress?: string;
//     hold?: string;
//   }
// }

// export default theme;
// const theme = createTheme({
//   palette: {
//     done: {
//       main: "#4DB358",
//     },
//     progress: {
//       main: "#F57C00",
//     },
//     hold: {
//       main: "#616161",
//     },
//   },
// });
import {
  createTheme,
  PaletteColor,
  PaletteColorOptions,
} from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface PaletteOptions {
    done?: PaletteColorOptions;
    progress?: PaletteColorOptions;
    hold?: PaletteColorOptions;
    white?: PaletteColorOptions;
  }
  interface Palette {
    done?: PaletteColor;
    progress?: PaletteColor;
    hold?: PaletteColor;
    white?: PaletteColor;
  }

  // allow configuration using `createTheme`

  // interface PaletteColor {
  //   done?: string;
  //   progress?: string;
  //   hold?: string;
  // }
  // interface SimplePaletteColorOptions {
  //   done?: string;
  //   progress?: string;
  //   hold?: string;
  // }
}

// // Update the Button's color prop options

// declare module "@mui/material/Chip" {
//   interface ChipPropsColorOverrides {
//     done: true;
//     progress: true;
//     hold: true;
//   }
// }
const theme = createTheme({
  palette: {
    primary: {
      main: "#4DB358",
    },
    secondary: {
      main: "#F57C00",
    },
    info: {
      main: "#616161",
    },
    white: {
      main: "#ffffff",
    },
    // done: {
    //   main: "#4DB358",
    // },
    // progress: {
    //   main: "#F57C00",
    // },
    // hold: {
    //   main: "#616161",
    // },
  },
});

export default theme;
