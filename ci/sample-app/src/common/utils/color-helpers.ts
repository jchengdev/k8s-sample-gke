import chroma from 'chroma-js';

export const levels = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900,
] as const;
export type LevelT = typeof levels[number];
export type FormatT = 'hex' | 'rgb' | 'rgba';

export interface PaletteMapProps {
  paletteName: string;
  id: string;
  emoji: string;
  colors: {
    [key in LevelT]: {
      name: string;
      id: string;
      hex: string;
      rgb: string;
      rgba: string;
    }[];
  };
}

const generatePalette = (starterPalette: PaletteI): PaletteMapProps => {
  const newPalette: PaletteMapProps = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {
      50: [],
      100: [],
      200: [],
      300: [],
      400: [],
      500: [],
      600: [],
      700: [],
      800: [],
      900: [],
    },
  };

  for (const lvl of levels) {
    newPalette.colors[lvl] = [];
  }

  for (const c of starterPalette.colors) {
    const scale = generateScale(c.color, 10).reverse();
    for (const i in scale) {
      newPalette.colors[levels[i] as unknown as LevelT].push({
        name: `${c.name} ${levels[i]}`,
        id: c.name.replace(/ /g, '-'),
        hex: scale[i] as string,
        rgb: chroma(scale[i] as string).css(),
        rgba: chroma(scale[i] as string)
          .css()
          .replace('rgb', 'rgba')
          .replace(')', ',1.0)'),
      });
    }
  }
  return newPalette;
};

const getRange = (hexColor: string): string[] => {
  const end = '#fff';
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
};

const generateScale = (hexColor: string, numberOfColors: number): string[] => {
  return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
};

export { generatePalette };
