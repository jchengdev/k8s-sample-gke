import { Component, createRef } from 'react';
import type { WithStyles } from '@mui/styles';
import { withStyles } from '@mui/styles';
import type { SliderProps } from 'rc-slider';
import Slider from 'rc-slider';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Link from '@/common/components/Link';
import { ROOT } from '@/routes/helpers';
import { FormatT } from '@/common/utils/color-helpers';

import 'rc-slider/assets/index.css';
import styles from './Navbar.styles';

interface NavbarProps {
  level: number;
  minLevel: number;
  maxLevel: number;
  sliderStep: number;
  onChangeLevel: (newLevel: number | number[]) => void;
  showingAllColors?: boolean;
  format: FormatT;
  onChangeFormat: (newFormat: string) => void;
}
interface ComposedProps extends NavbarProps, WithStyles<typeof styles> {}

interface NavbarState {
  snackbarOpen: boolean;
}

class Navbar extends Component<ComposedProps, NavbarState> {
  constructor(props: ComposedProps) {
    super(props);
    this.state = {
      snackbarOpen: false,
    };
    this._handleFormatChange = this._handleFormatChange.bind(this);
    this._closeSnackbar = this._closeSnackbar.bind(this);
  }

  _handleFormatChange = (event: SelectChangeEvent<string>) => {
    this.setState({ snackbarOpen: true });
    this.props.onChangeFormat(event.target.value);
  };

  _closeSnackbar() {
    this.setState({ snackbarOpen: false });
  }

  override render() {
    const {
      classes: styleClasses,
      level,
      minLevel,
      maxLevel,
      sliderStep,
      onChangeLevel,
      showingAllColors,
      format,
    } = this.props;
    const { snackbarOpen } = this.state;
    return (
      <header className={styleClasses.Navbar}>
        <div className={styleClasses.logo}>
          <Link href={ROOT.HOME}>reactcolorpicker</Link>
        </div>
        {!!showingAllColors && (
          <div className="slider-container">
            <span>Level: {level}</span>
            <div className={styleClasses.slider}>
              <SliderWrapper
                defaultValue={level}
                min={minLevel}
                max={maxLevel}
                step={sliderStep}
                onAfterChange={onChangeLevel}
              />
            </div>
          </div>
        )}
        <div className={styleClasses.selectContainer}>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="navbar-select-label">Format</InputLabel>
            <Select
              labelId="navbar-select-label"
              id="navbar-select"
              value={format}
              label="Format"
              onChange={this._handleFormatChange}
            >
              <MenuItem value="hex">HEX - #ffffff</MenuItem>
              <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
              <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={snackbarOpen}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format Changed To &apos;{format.toUpperCase()}&apos;
            </span>
          }
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          onClose={this._closeSnackbar}
          action={
            <IconButton
              onClick={this._closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          }
        ></Snackbar>
      </header>
    );
  }
}

/**
 * ! WORKAROUND for findDOMNode deprecation (React 17+) issue
 *
 * TODO: didn't work well though, needs more debugging
 */
class SliderWrapper extends Component<SliderProps> {
  sliderRef: any;
  constructor(props: SliderProps) {
    super(props);
    this.sliderRef = createRef();
  }
  override render(): JSX.Element {
    const props = this.props as SliderProps;
    return (
      <div ref={this.sliderRef}>
        <Slider {...props}>{this.props.children}</Slider>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
