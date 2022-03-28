import { Component } from 'react';
import { withStyles, WithStyles } from '@mui/styles';
import {
  levels,
  LevelT,
  FormatT,
  PaletteMapProps,
} from '../../utils/colorHelpers';
import Navbar from '@/common/components/Navbar';
import ColorBox from '@/common/components/ColorBox';
// import PaletteFooter from './PaletteFooter';
import styles from './Palette.styles';

interface PaletteProps extends PaletteMapProps {}
interface ComposedProps extends PaletteProps, WithStyles<typeof styles> {}

interface PaletteState {
  level: LevelT;
  format: FormatT;
}

class Palette extends Component<ComposedProps, PaletteState> {
  constructor(props: ComposedProps) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex',
    };
    this._changeLevel = this._changeLevel.bind(this);
    this._changeFormat = this._changeFormat.bind(this);
  }

  _changeLevel(newLevel: number | number[]) {
    if (levels.includes(newLevel as LevelT))
      this.setState({ level: newLevel as LevelT });
  }

  _changeFormat(newFormat: string) {
    this.setState({ format: newFormat as FormatT });
  }

  override render() {
    const {
      classes: styleClasses,
      paletteName,
      id: paletteId,
      emoji,
      colors,
    } = this.props;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(c => (
      <ColorBox
        key={c.id}
        name={c.name}
        background={c[format]}
        moreUrl={`/palette/${paletteId}/${c.id}`}
        showingFullPalette
      />
      // !
      // TODO: fix moreURL
    ));

    return (
      <>
        <Navbar
          level={level}
          minLevel={levels[1]}
          maxLevel={levels[levels.length - 1] as number}
          sliderStep={levels[2] - levels[1]}
          onChangeLevel={this._changeLevel}
          showingAllColors
          format={format}
          onChangeFormat={this._changeFormat}
        />
        <div className={styleClasses.root}>
          <div className={styleClasses.colors}>{colorBoxes}</div>
          {/* <PaletteFooter paletteName={paletteName} emoji={emoji} /> */}
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Palette);
