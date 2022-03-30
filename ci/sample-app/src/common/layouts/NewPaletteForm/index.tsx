import { useState as ReactUStt } from 'react';
// import { RouteComponentProps } from 'react-router-dom';
// import { SortEndHandler } from 'react-sortable-hoc';
// import { arrayMoveImmutable } from 'array-move';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// import PaletteFormNav from './PaletteFormNav';
// import ColorPickerForm from './ColorPickerForm';
// import DraggableColorList from './DraggableColorList';

import seedColors from '@/common/_seeds';

import // StyledButton,
// StyledButtons,
// StyledContainer,
// StyledDrawer,
// StyledDrawerHeader,
// StyledMain,
// StyledRoot,
'./NewPaletteForm.styles';

interface NewPaletteFormProps {
  palettes: PaletteI[];
  savePalette: (newPalette: PaletteI) => void;
  maxColors?: number;
}
interface ComposedProps extends NewPaletteFormProps /*, RouteComponentProps*/ {}

const NewPaletteForm: React.FC<ComposedProps> = (props: ComposedProps) => {
  const { palettes, savePalette, maxColors = 20 } = props;
  const [open, setOpen] = ReactUStt(false as boolean);
  const [colors, setColors] = ReactUStt(
    (seedColors[0] || { colors: [] }).colors as {
      color: string;
      name: string;
    }[]
  );
  const paletteIsFull = colors.length >= maxColors;

  const _handleDrawerOpen = () => {
    setOpen(true);
  };
  const _handleDrawerClose = () => {
    setOpen(false);
  };
  const _addNewColor = (newColor: { color: string; name: string }) => {
    setColors([...colors, newColor]);
  };
  const _addRandomColor = () => {
    const allColors = seedColors.map(p => p.colors).flat();
    let isDuplicateColor = true;
    let randomColor = undefined as unknown as {
      color: string;
      name: string;
    };
    while (isDuplicateColor) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      randomColor = allColors[Math.floor(Math.random() * allColors.length)]!;
      // eslint-disable-next-line no-loop-func
      isDuplicateColor = colors.some(c => c.name === randomColor.name);
    }

    setColors([...colors, randomColor]);
  };
  const _removeColor = (colorName: string) => {
    setColors(colors.filter(c => c.name !== colorName));
  };
  // const _onSortEnd: SortEndHandler = ({ oldIndex, newIndex }) => {
  //   setColors(arrayMoveImmutable(colors, oldIndex, newIndex));
  // };
  const _clearColors = () => {
    setColors([]);
  };
  const _handleSubmit = (partialNewPalette: {
    paletteName: string;
    emoji: string;
  }) => {
    savePalette({
      ...partialNewPalette,
      id: partialNewPalette.paletteName.toLowerCase().replace(/ /g, '-'),
      colors,
    });
    // props.history.push('/');
  };

  return (
    // <StyledRoot>
    //   <PaletteFormNav
    //     open={open}
    //     handleDrawerOpen={_handleDrawerOpen}
    //     palettes={palettes}
    //     handleSubmit={_handleSubmit}
    //   />
    //   <StyledDrawer variant="persistent" anchor="left" open={open}>
    //     <StyledDrawerHeader>
    //       <IconButton onClick={_handleDrawerClose}>
    //         <ChevronLeftIcon />
    //       </IconButton>
    //     </StyledDrawerHeader>
    //     <Divider />
    //     <StyledContainer>
    //       <Typography variant="h4" gutterBottom>
    //         Design Your Palette
    //       </Typography>
    //       <StyledButtons>
    //         <StyledButton
    //           variant="contained"
    //           color="secondary"
    //           onClick={_clearColors}
    //         >
    //           Clear Palette
    //         </StyledButton>
    //         <StyledButton
    //           variant="contained"
    //           color="primary"
    //           disabled={paletteIsFull}
    //           onClick={_addRandomColor}
    //         >
    //           Random Color
    //         </StyledButton>
    //       </StyledButtons>
    //       <ColorPickerForm
    //         paletteIsFull={paletteIsFull}
    //         colors={colors}
    //         addNewColor={_addNewColor}
    //       />
    //     </StyledContainer>
    //   </StyledDrawer>
    //   <StyledMain sxProps={{ open }}>
    //     <StyledDrawerHeader />
    //     <DraggableColorList
    //       colors={colors}
    //       onRemoveColor={_removeColor}
    //       axis="xy"
    //       onSortEnd={_onSortEnd}
    //       distance={20} // workaround for DeleteIcon issue
    //     />
    //   </StyledMain>
    // </StyledRoot>
    <>NEW PALETTE FORM</>
  );
};

export default NewPaletteForm;
