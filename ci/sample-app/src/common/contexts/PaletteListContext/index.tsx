import * as React from 'react';

import type { State, Dispatch } from './usePalettesReducer';
import usePalettesReducer from './usePalettesReducer';

import seeds from '../../_seeds';

const PalettesCtxST = React.createContext({} as State);
PalettesCtxST.displayName = 'PalettesContextState';
const PalettesCtxDP = React.createContext((() => null) as Dispatch);
PalettesCtxDP.displayName = 'PalettesContextDispatch';

interface PalettesCtxProviderProps {}
const PalettesCtxProvider: React.FC<PalettesCtxProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = usePalettesReducer({ palettes: seeds });

  return (
    <PalettesCtxST.Provider value={state}>
      <PalettesCtxDP.Provider value={dispatch}>
        {children}
      </PalettesCtxDP.Provider>
    </PalettesCtxST.Provider>
  );
};

const usePalettesCtxST = () => React.useContext(PalettesCtxST);
const usePalettesCtxDP = () => React.useContext(PalettesCtxDP);

export { PalettesCtxProvider, usePalettesCtxST, usePalettesCtxDP };
