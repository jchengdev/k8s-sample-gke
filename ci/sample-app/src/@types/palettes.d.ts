/**
 * `Palette` `I` because there is a `Palette` component, otherwise the convention out there is to NOT use `IPalette`
 */
interface PaletteI {
  paletteName: string;
  id: string;
  emoji: string;
  colors: { name: string; color: string }[];
}
