import type { Dispatch as ReactDispatch } from 'react';

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
    case 'SAVE':
      return {
        palettes: [...state.palettes, action.payload.newPalette],
      };
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
