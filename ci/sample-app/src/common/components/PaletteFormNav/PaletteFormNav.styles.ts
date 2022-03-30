import { styled } from '@mui/material/styles';
import type { AppBarProps } from '@mui/material/AppBar';
import AppBar from '@mui/material/AppBar';
import type { IconButtonProps } from '@mui/material/IconButton';
import IconButton from '@mui/material/IconButton';
import type { ButtonProps } from '@mui/material/Button';
import Button from '@mui/material/Button';

import { sizes } from '@/common/utils/styles-helpers';
import { DRAWER_WIDTH } from '@/common/styles/_constants';

export const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
}));

interface ComposedProps extends AppBarProps {
  sxProps: { open: boolean };
}
export const StyledAppBar = styled(AppBar, {
  shouldForwardProp: prop => prop !== 'sxProps',
})<ComposedProps>(({ theme, sxProps }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '64px',
  ...(sxProps.open && {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface ComposedProps2 extends IconButtonProps {
  sxProps: { open: boolean };
}
export const StyledIconButton = styled(IconButton, {
  shouldForwardProp: prop => prop !== 'sxProps',
})<ComposedProps2>(({ theme, sxProps }) => ({
  marginRight: 2,
  ...(sxProps.open && { display: 'none' }),
}));

export const StyledNavBtns = styled('div')(({ theme }) => ({
  marginRight: '1rem',
  '& a': {
    textDecoration: 'none',
  },
  [sizes.down('xs')]: {
    marginRight: '0.5rem',
  },
}));

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  margin: '0 0.5rem',
  [sizes.down('xs')]: {
    margin: '0 0.2rem',
    padding: '0.3rem',
  },
}));
