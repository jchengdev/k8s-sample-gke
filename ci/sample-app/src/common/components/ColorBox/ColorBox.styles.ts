/* eslint-disable @typescript-eslint/prefer-as-const */
import chroma from 'chroma-js';

import { sizes } from '@/common/utils/styles-helpers';

import type { ColorBoxProps } from '.';

const styles = {
  root: {
    width: '20%',
    height: (props: ColorBoxProps) =>
      !!props.showingFullPalette ? '25%' : '50%',
    margin: '0 auto',
    display: 'inline-block' as 'inline-block', // https://github.com/cssinjs/jss/issues/1344
    position: 'relative' as 'relative',
    cursor: 'pointer',
    // marginBottom: '-3.8px', // -3.5px for Colt Steele
    '&:hover button': {
      opacity: '1',
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: (props: ColorBoxProps) =>
        !!props.showingFullPalette ? '20%' : '33.3333%',
    },
    [sizes.down('md')]: {
      width: '50%',
      height: (props: ColorBoxProps) =>
        !!props.showingFullPalette ? '10%' : '20%',
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: (props: ColorBoxProps) =>
        !!props.showingFullPalette ? '5%' : '10%',
    },
  },
  boxContent: {
    position: 'absolute' as 'absolute',
    width: '100%',
    left: '0px',
    bottom: '10px',
    padding: '10px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase' as 'uppercase',
    fontSize: '12px',
    alignItems: 'center',
    [sizes.down('xs')]: {
      bottom: '0px',
    },
  },
  copyButton: {
    color: (props: ColorBoxProps) =>
      chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white',
    width: '100px',
    height: '30px',
    position: 'absolute' as 'absolute',
    display: 'inline-block' as 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center' as 'center',
    outline: 'none',
    background: 'rgba(255,255,255,0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    textTransform: 'uppercase' as 'uppercase',
    border: 'none',
    textDecoration: 'none',
    opacity: '0',
  },
  copyText: {
    color: (props: ColorBoxProps) =>
      chroma(props.background).luminance() >= 0.7 ? 'black' : 'white',
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.1)',
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute' as 'absolute',
  },
  copyMsg: {
    position: 'fixed' as 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
    flexDirection: 'column' as 'column',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: '0',
    color: 'white',
    '& h1': {
      fontFamily: 'sans-serif',
      fontWeight: '400',
      textShadow: '1px 2px black',
      background: 'rgba(255,255,255,0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '5rem',
      textTransform: 'uppercase',
      [sizes.down('xs')]: {
        fontSize: '6rem',
      },
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '100',
      textTransform: 'uppercase',
      fontFamily: 'monospace',
    },
  },
  showCopyMsg: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '25',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: ' 0.3s',
  },
  colorName: {
    color: (props: ColorBoxProps) =>
      chroma(props.background).luminance() <= 0.08 ? 'white' : 'black',
  },
  seeMore: {
    color: (props: ColorBoxProps) =>
      chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white',
    background: 'rgba(255,255,255,0.3)',
    position: 'absolute' as 'absolute',
    border: 'none',
    right: '0px',
    bottom: '0px',
    width: '60px',
    height: '30px',
    textAlign: 'center' as 'center',
    lineHeight: '30px',
    textTransform: 'uppercase' as 'uppercase',
  },
};

export default styles;
