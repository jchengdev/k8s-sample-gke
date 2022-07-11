import type { PropsWithChildren } from 'react';
import { createContext as ReactCCtx, useContext as ReactUCtx } from 'react';

import type { State, Dispatch } from './usePalettesReducer';
import usePalettesReducer from './usePalettesReducer';

import seeds from '@/common/_seeds';

const PalettesCtxST = ReactCCtx({} as State);
PalettesCtxST.displayName = 'PalettesContextState';
const PalettesCtxDP = ReactCCtx((() => null) as Dispatch);
PalettesCtxDP.displayName = 'PalettesContextDispatch';

interface PalettesCtxProviderProps extends PropsWithChildren<unknown> {}
const PalettesCtxProvider: React.FC<PalettesCtxProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = usePalettesReducer({ palettes: seeds });

  return (
    <PalettesCtxDP.Provider value={dispatch}>
      <PalettesCtxST.Provider value={state}>{children}</PalettesCtxST.Provider>
    </PalettesCtxDP.Provider>
  );
};

const usePalettesCtxST = () => ReactUCtx(PalettesCtxST);
const usePalettesCtxDP = () => ReactUCtx(PalettesCtxDP);

export { PalettesCtxProvider, usePalettesCtxST, usePalettesCtxDP };
