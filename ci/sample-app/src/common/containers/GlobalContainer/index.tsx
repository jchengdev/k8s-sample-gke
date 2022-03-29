import { FunctionComponent as ReactFC, useState as ReactUseState } from 'react';

// import useGoogleAnalytics from '~/domain/hooks/useGoogleAnalytics';

// import type { Auth } from '@/common/contexts/AuthContext/_types';
// import { AuthContextProvider } from '@/common/contexts/AuthContext/Provider';
// import type { I18NConfig } from '@/common/contexts/I18NContext/_types';
// import { I18NContextProvider } from '@/common/contexts/I18NContext/Provider';
import { PalettesCtxProvider } from '@/common/contexts/PaletteListContext';

const COMMIT_SHA = 'COMMIT_SHA: %%COMMIT_SHA%%';
import Disclaimer from '@/common/components/Disclaimer';

import { globalStyles } from '@/common/styles/globals';

interface GlobalContainerProps {
  // initialAuth?: Auth;
  // initialI18N?: I18NConfig;
}

export const GlobalContainer: ReactFC<GlobalContainerProps> = ({
  // initialAuth,
  // initialI18N,
  children,
}) => {
  const [show, setShowDisclaimer] = ReactUseState(true as boolean);

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
      <PalettesCtxProvider>{children}</PalettesCtxProvider>
      {show && (
        <Disclaimer
          message={`COMMIT_SHA: ${COMMIT_SHA}`}
          extLink={'https://www.udemy.com/course/modern-react-bootcamp'}
          onClose={() => setShowDisclaimer(false)}
        />
      )}
    </>
  );
};
