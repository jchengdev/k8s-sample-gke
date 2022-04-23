import { v4 as uuidv4 } from 'uuid';
import {
  SortableElement,
  SortableContainer,
  SortableContainerProps,
} from 'react-sortable-hoc';

import type { DraggableColorBoxProps } from '@/common/components/DraggableColorBox';
import DraggableColorBox from '@/common/components/DraggableColorBox';
const SortableColorBox =
  SortableElement<DraggableColorBoxProps>(DraggableColorBox);

interface DraggableColorListProps {
  colors: { color: string; name: string }[];
  onRemoveColor: (colorName: string) => void;
}
interface HOCProps extends DraggableColorListProps, SortableContainerProps {}

const DraggableColorList: React.ComponentClass<
  HOCProps,
  Record<string, never>
> = SortableContainer((props: DraggableColorListProps) => {
  const { colors, onRemoveColor } = props;
  return (
    <div style={{ height: '100%' }}>
      {/* 'div' required https://github.com/clauderic/react-sortable-hoc/issues/367#issuecomment-380523336 */}
      {colors.map((c, i) => (
        <SortableColorBox
          key={uuidv4()}
          index={i}
          color={c.color}
          name={c.name}
          handleDelete={() => onRemoveColor(c.name)}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
