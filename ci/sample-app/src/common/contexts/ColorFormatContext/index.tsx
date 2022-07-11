import type { PropsWithChildren } from 'react';
import { createContext as ReactCCtx, useContext as ReactUCtx } from 'react';

import type { State, Dispatch } from './useColorFormatReducer';
import useColorFormatReducer from './useColorFormatReducer';

const ColorFormatCtxST = ReactCCtx({} as State);
ColorFormatCtxST.displayName = 'ColorFormatContextState';
const ColorFormatCtxDP = ReactCCtx((() => null) as Dispatch);
ColorFormatCtxDP.displayName = 'ColorFormatContextDispatch';

interface ColorFormatCtxProviderProps extends PropsWithChildren<unknown> {}
const ColorFormatCtxProvider: React.FC<ColorFormatCtxProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useColorFormatReducer({ format: 'hex' });

  return (
    <ColorFormatCtxDP.Provider value={dispatch}>
      <ColorFormatCtxST.Provider value={state}>
        {children}
      </ColorFormatCtxST.Provider>
    </ColorFormatCtxDP.Provider>
  );
};

const useColorFormatCtxST = () => ReactUCtx(ColorFormatCtxST);
const useColorFormatCtxDP = () => ReactUCtx(ColorFormatCtxDP);

export { ColorFormatCtxProvider, useColorFormatCtxST, useColorFormatCtxDP };
