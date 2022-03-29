import { FunctionComponent as ReactFC } from 'react';
import { useState } from 'react';
// import { ThemeProvider } from 'styled-components';

// import useGoogleAnalytics from '~/domain/hooks/useGoogleAnalytics';

// import { Auth } from '~/domain/contexts/AuthContext/_types';
// import { AuthContextProvider } from '~/domain/contexts/AuthContext/Provider';

// import { UserContextProvider } from '~/domain/contexts/UserContext/Provider';
const COMMIT_SHA = 'COMMIT_SHA: %%COMMIT_SHA%%';

import Disclaimer from '@/common/components/Disclaimer';

import { PalettesCtxProvider } from '@/common/contexts/PaletteListContext';

// import { I18NConfig } from '../I18NContext/_types';
// import { I18NContextProvider } from '~/domain/contexts/I18NContext/Provider';

// import { ApiI18NContextProvider } from '../ApiI18NContext/Provider';

// import { theme } from '~/styles/themes';
import { globalStyles } from '@/common/styles/globals';

// import { ContextConsumer } from './ContextConsumer';

interface GlobalContainerProps {
  // initialAuth?: Auth;
  // initialI18N?: I18NConfig;
}

export const GlobalContainer: ReactFC<GlobalContainerProps> = ({
  // initialAuth,
  // initialI18N,
  children,
}) => {
  const [disclaimerClosed, setCloseDisclaimer] = useState(false as boolean);

  // useGoogleAnalytics(); // TODO: there is something to be optimized yet
  // // ? other context-less hooks
  // // ! Contexts must be outsourced and provided here for children components

  return (
    // <I18NContextProvider initialI18N={initialI18N}>
    //   <AuthContextProvider initialAuth={initialAuth}>
    //     <UserContextProvider initialAuth={initialAuth}>
    //       <ApiI18NContextProvider initialI18N={initialI18N}>
    //         <ThemeProvider theme={theme}>
    //           <ContextConsumer>{children}</ContextConsumer>
    //         </ThemeProvider>
    //       </ApiI18NContextProvider>
    //     </UserContextProvider>
    //   </AuthContextProvider>
    // </I18NContextProvider>
    <>
      {globalStyles}
      <PalettesCtxProvider>{children}</PalettesCtxProvider>
      {!disclaimerClosed && (
        <Disclaimer
          message={`COMMIT_SHA: ${COMMIT_SHA}`}
          extLink={'https://www.udemy.com/course/modern-react-bootcamp'}
          onClose={() => setCloseDisclaimer(true)}
        />
      )}
    </>
  );
};
