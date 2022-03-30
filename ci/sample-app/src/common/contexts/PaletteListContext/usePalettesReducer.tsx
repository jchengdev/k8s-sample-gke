import type { Dispatch as ReactDispatch } from 'react';
// import { v4 as uuidv4 } from 'uuid';

import { LOCALSTORAGE_KEY_PALETTES } from '@/common/_constants';

import { useLocalStorageReducer } from '@/common/hooks/useLocalStorage';

export interface State {
  palettes: PaletteI[];
}

export type Dispatch = ReactDispatch<Action>;
type Action =
  | { type: 'SAVE'; payload: { newPalette: PaletteI } }
  | { type: 'DELETE'; payload: { id: string } };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    // case 'SAVE':
    //   return {
    //     palettes: [
    //       ...state.palettes,
    //       // { id: uuidv4(), task: action.payload.newTask, completed: false },
    //     ],
    //   };
    case 'DELETE':
      return {
        palettes: state.palettes.filter(p => p.id !== action.payload.id),
      };
    default:
      return state;
  }
};

/**
 * APP-SPECIFIC CUSTOM HOOK
 */
const usePalettesReducer = (initialValue: State = { palettes: [] }) => {
  const [state, dispatch] = useLocalStorageReducer(
    LOCALSTORAGE_KEY_PALETTES,
    initialValue,
    reducer
  );

  return [state, dispatch] as [State, Dispatch];
};

export default usePalettesReducer;
