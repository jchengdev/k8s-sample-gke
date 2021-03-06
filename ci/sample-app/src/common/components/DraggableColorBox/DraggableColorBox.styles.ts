/* eslint-disable @typescript-eslint/prefer-as-const */
import chroma from 'chroma-js';

import { sizes } from '@/common/utils/styles-helpers';

import type { DraggableColorBoxProps } from '.';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block' as 'inline-block', // https://github.com/cssinjs/jss/issues/1344
    position: 'relative' as 'relative',
    cursor: 'pointer',
    // marginBottom: '-3.5px', // * Global style fix for @emotion/react defaults, check PaletteFormNav.tsx
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)',
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%',
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '10%',
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '5%',
    },
  },
  boxContent: {
    position: 'absolute' as 'absolute',
    width: '100%',
    // left: '0px',
    // bottom: '0px',
    // padding: '10px',
    color: (props: DraggableColorBoxProps) =>
      chroma(props.color).luminance() <= 0.08
        ? 'rgba(255,255,255,0.8)'
        : 'rgba(0,0,0,0.6)',
    letterSpacing: '1px',
    textTransform: 'uppercase' as 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [sizes.only('xss')]: {
      padding: '3px',
    },
    [sizes.only('xs')]: {
      padding: '5px',
    },
    [sizes.up('sm')]: {
      left: '0px',
      bottom: '0px',
      padding: '10px',
    },
  },
  deleteIcon: { transition: 'all 0.3s ease-in-out' },
};

export default styles;
