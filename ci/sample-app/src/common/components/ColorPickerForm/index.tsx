import { useState as ReactUStt, useEffect as ReactUEff } from 'react';
import { ColorResult } from 'react-color';
import { ValidatorForm } from 'react-material-ui-form-validator';

import useInputState from '@/common/hooks/useInputState';

import {
  StyledButton,
  StyledColorNameInput,
  StyledPicker,
  StyledValidatorForm,
} from './ColorPickerForm.styles';

interface ColorPickerFormProps {
  paletteIsFull: boolean;
  colors: Array<{
    color: string;
    name: string;
  }>;
  addNewColor: (newColor: { color: string; name: string }) => void;
}

const ColorPickerForm: React.FC<ColorPickerFormProps> = props => {
  const { paletteIsFull, colors, addNewColor } = props;
  const [currentColor, setCurrentColor] = ReactUStt('teal' as string);
  const {
    state: { value: newColorName },
    actions: { handleChange: _handleChange, resetInput: _resetColorName },
  } = useInputState('');

  ReactUEff(() => {
    ValidatorForm.addValidationRule('isColorUnique', value => {
      return colors.every(({ color }) => color !== currentColor);
      // TODO: this check doesn't handle different formats (e.g. "teal" vs "#008080")
    });
    ValidatorForm.addValidationRule('isColorNameUnique', value => {
      return colors.every(
        ({ name }) =>
          name.toLowerCase() !== (value as unknown as string).toLowerCase()
      );
    });
    return () => {
      ValidatorForm.removeValidationRule('isColorUnique');
      ValidatorForm.removeValidationRule('isColorNameUnique');
    };
  });

  const _updateCurrentColor = (newColor: ColorResult) => {
    setCurrentColor(newColor.hex);
  };
  const _handleSubmit = () => {
    addNewColor({ color: currentColor, name: newColorName });
    _resetColorName();
  };

  return (
    <>
      <StyledPicker
        color={currentColor}
        onChangeComplete={_updateCurrentColor}
      />
      <StyledValidatorForm onSubmit={_handleSubmit} instantValidate={false}>
        <StyledColorNameInput
          variant="filled"
          name="newColorName"
          label="Color Name"
          value={newColorName}
          onChange={_handleChange}
          validators={['required', 'isColorUnique', 'isColorNameUnique']}
          errorMessages={[
            'Enter a color name',
            'Color already used!',
            'Color name must be unique',
          ]}
          margin="normal"
        />
        <StyledButton
          variant="contained"
          type="submit"
          color="primary"
          disabled={paletteIsFull}
          sxProps={{ backgroundColor: paletteIsFull ? 'gray' : currentColor }}
        >
          {paletteIsFull ? 'Palette Full' : 'Add Color'}
        </StyledButton>
      </StyledValidatorForm>
    </>
  );
};

export default ColorPickerForm;
