import { styled } from '@mui/material/styles';
import type { DrawerProps } from '@mui/material/Drawer';
import Drawer from '@mui/material/Drawer';
import type { ButtonProps } from '@mui/material/Button';
import Button from '@mui/material/Button';

import { DRAWER_WIDTH } from '@/common/styles/_constants';

export const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
}));

export const StyledDrawer = styled(Drawer)<DrawerProps>(({ theme }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    display: 'flex',
    alignItems: 'center',
  },
}));

export const StyledDrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const StyledContainer = styled('div')(({ theme }) => ({
  width: '90%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledButtons = styled('div')(({ theme }) => ({
  width: '100%',
}));

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: '50%',
}));

interface ComposedProps {
  sxProps?: { open: boolean };
}
export const StyledMain = styled('main', {
  shouldForwardProp: prop => prop !== 'sxProps',
})<ComposedProps>(({ theme, sxProps }) => ({
  flexGrow: 1,
  height: 'calc(100vh - 64px)',
  padding: 0,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${DRAWER_WIDTH}px`,
  ...(sxProps &&
    sxProps.open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
}));
