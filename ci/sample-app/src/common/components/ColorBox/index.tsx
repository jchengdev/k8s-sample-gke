import { useState as ReactUStt, useEffect as ReactUEff } from 'react';
import classnames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { makeStyles } from '@mui/styles'; // ! deprecated (https://mui.com/system/styles/basics)

import Link from '@/common/components/Link';

import styles from './ColorBox.styles';

const useStyles = makeStyles(styles);

export interface ColorBoxProps {
  name: string;
  background: string;
  moreUrl: string;
  showingFullPalette?: boolean;
}

const ColorBox: React.FC<ColorBoxProps> = props => {
  const styleClasses = useStyles(props);
  const { name, background, moreUrl, showingFullPalette } = props;

  const [copied, setCurrentColor] = ReactUStt(false as boolean);

  const _changeCopyState = () => {
    setCurrentColor(true);
  };

  ReactUEff(() => {
    if (copied) {
      setTimeout(() => {
        setCurrentColor(false);
      }, 1500);
    }
  }, [copied]);

  return (
    <CopyToClipboard text={background} onCopy={_changeCopyState}>
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
          <Link href={moreUrl}>
            <span
              className={styleClasses.seeMore}
              onClick={e => e.stopPropagation()}
            >
              MORE
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
