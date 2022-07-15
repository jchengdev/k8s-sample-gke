import { makeStyles } from '@mui/styles'; // ! deprecated (https://mui.com/system/styles/basics)

import DeleteIcon from '@mui/icons-material/Delete';

import styles from './DraggableColorBox.styles';

const useStyles = makeStyles(styles);

export interface DraggableColorBoxProps {
  color: string;
  name: string;
  handleDelete: () => void;
}

const DraggableColorBox: React.FC<DraggableColorBoxProps> = props => {
  const styleClasses = useStyles(props);
  const { color, name, handleDelete } = props;

  return (
    <div className={styleClasses.root} style={{ backgroundColor: color }}>
      <div className={styleClasses.boxContent}>
        <span>{name}</span>
        <DeleteIcon
          className={styleClasses.deleteIcon}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default DraggableColorBox;
