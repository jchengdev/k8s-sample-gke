// import { v4 as uuidv4 } from 'uuid';

import { LOCALSTORAGE_KEY } from '@/common/_constants';

import { useLocalStorageReducer } from '@/common/hooks/useLocalStorage';

export interface State {
  palettes: Array<PaletteI>;
}

export type Dispatch = React.Dispatch<Action>;
type Action =
  | { type: 'ADD'; payload: { newTask: string } }
  | { type: 'TOGGLE'; payload: { id: string } }
  | { type: 'REMOVE'; payload: { id: string } }
  | { type: 'EDIT'; payload: { id: string; newTask: string } };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD':
      return {
        palettes: [
          ...state.palettes,
          // { id: uuidv4(), task: action.payload.newTask, completed: false },
        ],
      };
    case 'REMOVE':
      return {
        palettes: state.palettes.filter(p => p.id !== action.payload.id),
      };
    case 'TOGGLE':
      return {
        palettes: state.palettes.map(t =>
          t.id === action.payload.id ? { ...t, completed: !t.id } : t
        ),
      };
    case 'EDIT':
      return {
        palettes: state.palettes.map(t =>
          t.id === action.payload.id
            ? { ...t, task: action.payload.newTask }
            : t
        ),
      };
    default:
      return state;
  }
};

/**
 * APP-SPECIFIC CUSTOM HOOK
 */
const useTodosReducer = (initialValue: State = { palettes: [] }) => {
  const [state, dispatch] = useLocalStorageReducer(
    LOCALSTORAGE_KEY,
    initialValue,
    reducer
  );

  return [state, dispatch] as [State, Dispatch];
};

export default useTodosReducer;
