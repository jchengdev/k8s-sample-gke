import { Component } from 'react';
import type { WithStyles } from '@mui/styles';
import { withStyles } from '@mui/styles';

import CssBaseline from '@mui/material/CssBaseline';
import { Global } from '@emotion/react';

import ColorBox from '@/common/components/ColorBox';
import Navbar from '@/common/components/Navbar';
import Link from '@/common/components/Link';
import PaletteFooter from '@/common/components/PaletteFooter';
import { LevelT, FormatT, PaletteMapProps } from '@/common/utils/color-helpers';

import styles from '@/common/layouts/Palette/Palette.styles';
import { ROOT } from '@/routes/helpers';

interface SingleColorPaletteProps {
  palette: PaletteMapProps;
  selectedColorId: string;
  format: FormatT;
  changeFormat: (newFormat: FormatT) => void;
}
interface ComposedProps
  extends SingleColorPaletteProps,
    WithStyles<typeof styles> {}

interface SingleColorPaletteState {}

class SingleColorPalette extends Component<
  ComposedProps,
  SingleColorPaletteState
> {
  private _shades: {
    name: string;
    id: string;
    hex: string;
    rgb: string;
    rgba: string;
  }[];
  constructor(props: ComposedProps) {
    super(props);
    this._shades = this._gatherShades(
      this.props.palette,
      this.props.selectedColorId
    );
  }

  _gatherShades(paletteMap: PaletteMapProps, colorToFilterBy: string) {
    let shades: {
      name: string;
      id: string;
      hex: string;
      rgb: string;
      rgba: string;
    }[] = [];
    const allColors = paletteMap.colors;

    for (const key in allColors) {
      shades = shades.concat(
        allColors[key as unknown as LevelT].filter(
          c => c.id === colorToFilterBy
        )
      );
    }

    return shades.slice(1);
  }

  override render() {
    const { classes: styleClasses, format, changeFormat } = this.props;
    const { paletteName, id, emoji } = this.props.palette;

    const colorBoxes = this._shades.map(shade => (
      <ColorBox
        key={shade.name}
        name={shade.name}
        background={shade[format]}
        moreUrl={''}
        showingFullPalette={false}
      />
    ));
    return (
      <>
        <CssBaseline />
        <Global
          styles={{
            'body div': {
              lineHeight: '0', // overrides default line-height: 1.5 generated by <CssBaseline />
            },
          }}
        />
        <Navbar
          level={0}
          minLevel={0}
          maxLevel={0}
          sliderStep={0}
          onChangeLevel={() => null}
          showingAllColors={false}
          format={format}
          onChangeFormat={changeFormat}
        />
        <div className={styleClasses.root}>
          <div className={styleClasses.colors}>
            {colorBoxes}
            <div className={styleClasses.goBack}>
              <Link href={ROOT.PALETTE(id)}>GO BACK</Link>
            </div>
          </div>
          <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </div>
      </>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
