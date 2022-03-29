import type { AppProps } from 'next/app';
import { useState } from 'react';

const COMMIT_SHA = 'COMMIT_SHA: %%COMMIT_SHA%%';

import Disclaimer from '@/common/components/Disclaimer';

import { globalStyles } from '@/common/styles/globals';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [disclaimerClosed, setCloseDisclaimer] = useState(false as boolean);

  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
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

export default MyApp;
