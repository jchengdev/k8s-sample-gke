import { Component } from 'react';
import { withStyles } from '@mui/styles';
import type { WithStyles } from '@mui/styles';

import ColorBox from '@/common/components/ColorBox';
import Navbar from '@/common/components/Navbar';
import Link from '@/common/components/Link';
import PaletteFooter from '@/common/components/PaletteFooter';
import { LevelT, FormatT, PaletteMapProps } from '@/common/utils/color-helpers';

import styles from '@/common/layouts/Palette/Palette.styles';

interface SingleColorPaletteProps {
  palette: PaletteMapProps;
  selectedColorId: string;
}
interface ComposedProps
  extends SingleColorPaletteProps,
    WithStyles<typeof styles> {}

interface SingleColorPaletteState {
  format: FormatT;
}

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
    this.state = { format: 'hex' };
    this._changeFormat = this._changeFormat.bind(this);
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

  _changeFormat(newFormat: string) {
    this.setState({ format: newFormat as FormatT });
  }

  override render() {
    const { classes: styleClasses } = this.props;
    const { paletteName, id, emoji } = this.props.palette;
    const { format } = this.state;

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
        <Navbar
          level={0}
          minLevel={0}
          maxLevel={0}
          sliderStep={0}
          onChangeLevel={() => null}
          showingAllColors={false}
          format={format}
          onChangeFormat={this._changeFormat}
        />
        <div className={styleClasses.root}>
          <div className={styleClasses.colors}>
            {colorBoxes}
            <div className={styleClasses.goBack}>
              <Link href={`/palette/${id}`}>GO BACK</Link>
            </div>
          </div>
          <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </div>
      </>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
