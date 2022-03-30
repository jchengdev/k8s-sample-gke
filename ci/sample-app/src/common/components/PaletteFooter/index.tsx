import { makeStyles } from '@mui/styles';
import styles from './PaletteFooter.styles';

const useStyles = makeStyles(styles);

interface PaletteFooterProps {
  paletteName: string;
  emoji: string;
}

const PaletteFooter: React.FC<PaletteFooterProps> = props => {
  const { paletteName, emoji } = props;
  const styleClasses = useStyles();

  return (
    <footer className={styleClasses.PaletteFooter}>
      {paletteName}
      <span className={styleClasses.emoji}>{emoji}</span>
    </footer>
  );
};

export default PaletteFooter;
