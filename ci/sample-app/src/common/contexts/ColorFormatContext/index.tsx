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
    <ColorFormatCtxST.Provider value={state}>
      <ColorFormatCtxDP.Provider value={dispatch}>
        {children}
      </ColorFormatCtxDP.Provider>
    </ColorFormatCtxST.Provider>
  );
};

const useColorFormatCtxST = () => ReactUCtx(ColorFormatCtxST);
const useColorFormatCtxDP = () => ReactUCtx(ColorFormatCtxDP);

export { ColorFormatCtxProvider, useColorFormatCtxST, useColorFormatCtxDP };
