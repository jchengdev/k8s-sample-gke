import { memo as ReactMemo } from 'react';
import type { MouseEvent } from 'react';
import { makeStyles } from '@mui/styles';
import styles from './MiniPalette.styles';

import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles(styles);

interface MiniPaletteProps extends PaletteI {
  goToPalette: (id: string) => void;
  openDialog: (id: string) => void;
}

const MiniPalette = ReactMemo<MiniPaletteProps>(props => {
  const { paletteName, id, emoji, colors, goToPalette, openDialog } = props;
  const styleClasses = useStyles();

  const miniColorBoxes = colors.map(c => (
    <div
      key={c.name}
      className={styleClasses.miniColor}
      style={{ backgroundColor: c.color }}
    ></div>
  ));

  const _deletePalette = (evt: MouseEvent<SVGSVGElement>) => {
    evt.stopPropagation();
    openDialog(id); // ? could avoid this id being passed down twice, but Colt wanted to avoid arrow function binding ()=>{}
  };
  const _handleClick = () => {
    goToPalette(id);
  };

  return (
    <div className={styleClasses.root} onClick={_handleClick}>
      <DeleteIcon
        className={styleClasses.deleteIcon}
        sx={{ transition: 'all 0.3s ease-in-out' }}
        onClick={_deletePalette}
      />
      <div className={styleClasses.colors}>{miniColorBoxes}</div>
      <h5 className={styleClasses.title}>
        {paletteName} <span className={styleClasses.emoji}>{emoji}</span>
      </h5>
    </div>
  );
});
MiniPalette.displayName = 'MiniPalette';

export default MiniPalette;