/* eslint-disable @typescript-eslint/prefer-as-const */
import { sizes } from '@/common/utils/styles-helpers';
import bg from './bg.svg';

const styles = {
  '@global': {
    '.fade-exit': {
      opacity: 1,
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out',
    },
  },
  root: {
    // backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    /* background by SVGBackgrounds.com */
    backgroundColor: '#000000',
    backgroundImage: `url(${bg})`,
    // backgroundAttachment: 'fixed',
    // backgroundRepeat: 'repeat',
    // backgroundPosition: 'top left',
    overflow: 'scroll',
  },
  heading: {
    fontSize: '2rem',
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column' as 'column', // https://github.com/cssinjs/jss/issues/1344
    flexWrap: 'wrap' as 'wrap',

    [sizes.down('xl')]: {
      width: '80%',
    },
    [sizes.down('xs')]: {
      width: '75%',
    },
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    '& a': {
      color: 'white',
    },
  },
  palettes: {
    boxSizing: 'border-box' as 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,30%)',
    gridGap: '2.5rem',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2,50%)',
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1,100%)',
      gridGap: '1.4rem',
    },
  },
};

export default styles;
