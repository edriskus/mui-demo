/// <reference types="react-scripts" />

import { Palette } from '@material-ui/core/styles/createPalette';

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    highlight?: Palette['primary'];
  }
  interface PaletteOptions {
    highlight?: PaletteOptions['primary'];
  }
}