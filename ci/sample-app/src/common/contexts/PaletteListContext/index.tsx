import {
  FunctionComponent as ReactFC,
  createContext as ReactCCtx,
  useContext as ReactUCtx,
} from 'react';

import type { State, Dispatch } from './usePalettesReducer';
import usePalettesReducer from './usePalettesReducer';

import seeds from '@/common/_seeds';

const PalettesCtxST = ReactCCtx({} as State);
PalettesCtxST.displayName = 'PalettesContextState';
const PalettesCtxDP = ReactCCtx((() => null) as Dispatch);
PalettesCtxDP.displayName = 'PalettesContextDispatch';

interface PalettesCtxProviderProps {}
const PalettesCtxProvider: ReactFC<PalettesCtxProviderProps> = ({
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

const usePalettesCtxST = () => ReactUCtx(PalettesCtxST);
const usePalettesCtxDP = () => ReactUCtx(PalettesCtxDP);

export { PalettesCtxProvider, usePalettesCtxST, usePalettesCtxDP };
