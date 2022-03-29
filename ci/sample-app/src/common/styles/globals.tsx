import { css, Global, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const globalStyles = (
  <Global
    styles={css({
      'html,body': {
        padding: 5,
        margin: 5,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      },
    })}
  ></Global>
);

export const basicStyles = css({
  backgroundColor: 'white',
  color: 'cornflowerblue',
  border: '1px solid lightgreen',
  borderRight: 'none',
  borderBottom: 'none',
  boxShadow: '5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow',
  transition: 'all 0.1s linear',
  margin: '3rem 0',
  padding: '1rem 0.5rem',
});

export const hoverStyles = css({
  '&:hover': {
    color: 'white',
    backgroundColor: 'lightgray',
    borderColor: 'aqua',
    boxShadow: '-15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue',
  },
});

export const bounce = keyframes({
  from: {
    transform: 'scale(1.01)',
  },
  to: {
    transform: 'scale(0.99)',
  },
});

export const Basic = styled('div')(({ theme }) => ({
  ...basicStyles,
}));

export const Combined = styled('div')(({ theme }) => ({
  ...basicStyles,
  ...hoverStyles,
  '& code': {
    backgroundColor: 'linen',
  },
}));

export const Animated = styled('div')(({ theme }) => ({
  ...basicStyles,
  ...hoverStyles,
  '& code': {
    backgroundColor: 'linen',
  },
  animation: '0.2s infinite ease-in-out alternate',
}));
