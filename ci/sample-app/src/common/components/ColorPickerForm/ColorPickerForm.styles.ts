import { styled } from '@mui/material/styles';
import { ChromePicker, ChromePickerProps } from 'react-color';

import Button, { ButtonProps } from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export const StyledPicker = styled(ChromePicker)<ChromePickerProps>(
  ({ theme }) => ({
    width: '100% !important',
    marginTop: '2rem',
  })
);

export const StyledValidatorForm = styled(ValidatorForm)(({ theme }) => ({
  width: '100%',
}));

export const StyledColorNameInput = styled(TextValidator)(({ theme }) => ({
  width: '100%',
  height: '70px',
}));

interface ComposedProps extends ButtonProps {
  sxProps: { backgroundColor: string };
}
export const StyledButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'sxProps',
})<ComposedProps>(({ theme, sxProps }) => ({
  backgroundColor: sxProps.backgroundColor,
  '&:hover': {
    backgroundColor: sxProps.backgroundColor,
  },
  width: '100%',
  padding: '1rem',
  marginTop: '1rem',
  fontSize: '2rem',
}));
