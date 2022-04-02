import { useState as ReactUStt, useEffect as ReactUEff } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import useInputState from '@/common/hooks/useInputState';

import 'emoji-mart/css/emoji-mart.css';

interface PaletteMetaFormProps {
  hideForm: () => void;
  palettes: PaletteI[];
  handleSubmit: (partialNewPalette: {
    paletteName: string;
    emoji: string;
  }) => void;
}

const PaletteMetaForm: React.FC<PaletteMetaFormProps> = props => {
  const { hideForm, palettes, handleSubmit } = props;

  const [stage, setStage] = ReactUStt('form' as string);
  const {
    state: { value: newPaletteName },
    actions: { handleChange: _handleChange },
  } = useInputState('');

  ReactUEff(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
      return palettes.every(
        ({ paletteName }) =>
          paletteName.toLowerCase() !==
          (value as unknown as string).toLowerCase()
      );
    });
    return () => {
      ValidatorForm.removeValidationRule('isPaletteNameUnique');
    };
  });

  const _showEmojiPicker = () => {
    setStage('emoji');
  };
  const _savePalette = (emoji: { [key: string]: any }) => {
    handleSubmit({ paletteName: newPaletteName, emoji: emoji.native });
    setStage('');
  };

  return (
    <>
      <Dialog open={stage === 'emoji'} onClose={hideForm}>
        <DialogTitle>Choose a Palette Emoji</DialogTitle>
        <Picker title="Pick a Palette Emoji" onSelect={_savePalette} />
      </Dialog>
      <Dialog open={stage === 'form'} onClose={hideForm}>
        <DialogTitle>Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={_showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful palette. Make sure
              it&apos;s unique!
            </DialogContentText>
            <TextValidator
              variant="filled"
              name="newPaletteName"
              label="Palette Name"
              value={newPaletteName}
              onChange={_handleChange}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Enter Palette Name', 'Name already used']}
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={hideForm}>Cancel</Button>
            <Button variant="contained" type="submit" color="primary">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </>
  );
};

export default PaletteMetaForm;
