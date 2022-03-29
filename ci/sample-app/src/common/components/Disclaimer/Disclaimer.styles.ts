import { styled } from '@mui/material/styles';
// import Drawer, { DrawerProps } from '@mui/material/Drawer';
// import Button, { ButtonProps } from '@mui/material/Button';

export const StyledRoot = styled('div')(({ theme }) => ({
  position: 'absolute',
  float: 'right',
  bottom: '5px',
  right: '5px',
  padding: '1rem',
  textAlign: 'center',
  height: 'auto',
  width: 'auto',
  border: '1px dashed black',
  borderRadius: '5px',
  backgroundColor: 'lightgray',
}));
