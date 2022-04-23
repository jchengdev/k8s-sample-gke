import type { PropsWithChildren } from 'react';
import { useState as ReactUStt } from 'react';

// import useGoogleAnalytics from '~/domain/hooks/useGoogleAnalytics';

// import type { Auth } from '@/common/contexts/AuthContext/_types';
// import { AuthContextProvider } from '@/common/contexts/AuthContext/Provider';
// import type { I18NConfig } from '@/common/contexts/I18NContext/_types';
// import { I18NContextProvider } from '@/common/contexts/I18NContext/Provider';
import { PalettesCtxProvider } from '@/common/contexts/PaletteListContext';
import { ColorFormatCtxProvider } from '@/common/contexts/ColorFormatContext';

import Disclaimer from '@/common/components/Disclaimer';

import { globalStyles } from '@/common/styles/globals';

import { disclaimer } from '@/common/_dev_notes';

interface GlobalContainerProps extends PropsWithChildren<unknown> {
  // initialAuth?: Auth;
  // initialI18N?: I18NConfig;
}

export const GlobalContainer: React.FC<GlobalContainerProps> = ({
  // initialAuth,
  // initialI18N,
  children,
}) => {
  const [show, setShowDisclaimer] = ReactUStt(true as boolean);

  // useGoogleAnalytics(); // TODO: there is something to be optimized yet
  // // ? other context-less hooks
  // // ! Contexts must be outsourced and provided here for children components

  return (
    // <I18NContextProvider initialI18N={initialI18N}>
    //   <AuthContextProvider initialAuth={initialAuth}>
    //     <ContextConsumer>{children}</ContextConsumer>
    //   </AuthContextProvider>
    // </I18NContextProvider>
    <>
      {globalStyles}
      <PalettesCtxProvider>
        <ColorFormatCtxProvider>{children}</ColorFormatCtxProvider>
      </PalettesCtxProvider>
      {show && (
        <Disclaimer
          message={disclaimer}
          onClose={() => setShowDisclaimer(false)}
        />
      )}
    </>
  );
};
