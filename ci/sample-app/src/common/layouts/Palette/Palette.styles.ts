/* eslint-disable @typescript-eslint/prefer-as-const */
import { sizes } from '@/common/utils/styles-helpers';

const styles = {
  root: {
    height: '94vh',
    display: 'flex',
    flexDirection: 'column' as 'column', // https://github.com/cssinjs/jss/issues/1344
  },
  colors: {
    height: '100%',
  },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block' as 'inline-block',
    position: 'relative' as 'relative',
    cursor: 'pointer',
    // marginBottom: '-3.5px',
    opacity: '1',
    backgroundColor: 'black',
    '& a': {
      color: 'white',
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
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '33.3333%',
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '20%',
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '10%',
    },
  },
};

export default styles;
