import { Component } from 'react';
import classnames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import type { WithStyles } from '@mui/styles';
import { withStyles } from '@mui/styles';

import Link from '@/common/components/Link';

import styles from './ColorBox.styles';

export interface ColorBoxProps {
  name: string;
  background: string;
  moreUrl: string;
  showingFullPalette?: boolean;
}
interface ComposedProps extends ColorBoxProps, WithStyles<typeof styles> {}

interface ColorBoxState {
  copied: boolean;
}

class ColorBox extends Component<ComposedProps, ColorBoxState> {
  constructor(props: ComposedProps) {
    super(props);
    this.state = { copied: false };
    this._changeCopyState = this._changeCopyState.bind(this);
  }

  _changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  }

  override render() {
    const {
      classes: styleClasses,
      name,
      background,
      moreUrl,
      showingFullPalette,
    } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this._changeCopyState}>
        <div
          style={{ backgroundColor: background }}
          className={styleClasses.root}
        >
          <div
            style={{ backgroundColor: background }}
            className={classnames(styleClasses.copyOverlay, {
              [styleClasses.showOverlay]: copied,
            })}
          />
          {/* importing classnames just as alternative syntax */}
          <div
            className={`${styleClasses.copyMsg} ${
              copied && styleClasses.showCopyMsg
            }`}
          >
            <h1>copied!</h1>
            <p className={styleClasses.copyText}>{background}</p>
          </div>
          <div>
            <div className={styleClasses.boxContent}>
              <span className={styleClasses.colorName}>{name}</span>
            </div>
            <button className={styleClasses.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link href={moreUrl} passHref>
              <a onClick={e => e.stopPropagation()}>
                <span className={styleClasses.seeMore}>MORE</span>
              </a>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
