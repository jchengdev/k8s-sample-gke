import { styled } from '@mui/material/styles';

export const StyledRoot = styled('div')(({ theme }) => ({
  position: 'absolute',
  float: 'right',
  bottom: '5px',
  right: '5px',
  padding: '0.5rem',
  // textAlign: 'center',
  height: 'auto',
  width: 'auto',
  border: '1px dashed black',
  borderRadius: '5px',
  backgroundColor: 'lightgray',
  lineHeight: '1.3rem',
}));

export const StyledButton = styled('button')(({ theme }) => ({
  marginTop: '10px',
  float: 'right',
  border: 'none',
  backgroundColor: 'darkgray',
  cursor: 'pointer',
  padding: '1.5px 5px 2px 5px',
  fontFamily: 'monospace',
  textAlign: 'center',
}));
