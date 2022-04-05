import type { Dispatch as ReactDispatch } from 'react';

import { LOCALSTORAGE_KEY_COLORFORMAT } from '@/common/_constants';
import { FormatT } from '@/common/utils/color-helpers';

import { useLocalStorageReducer } from '@/common/hooks/useLocalStorage';

export interface State {
  format: FormatT;
}

export type Dispatch = ReactDispatch<Action>;
type Action = { type: 'CHANGE'; payload: { newFormat: FormatT } };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'CHANGE':
      return {
        format: action.payload.newFormat,
      };
    default:
      return state;
  }
};

/**
 * APP-SPECIFIC CUSTOM HOOK
 */
const useColorFormatReducer = (initialValue: State = { format: 'hex' }) => {
  const [state, dispatch] = useLocalStorageReducer(
    LOCALSTORAGE_KEY_COLORFORMAT,
    initialValue,
    reducer
  );

  return [state, dispatch] as [State, Dispatch];
};

export default useColorFormatReducer;
