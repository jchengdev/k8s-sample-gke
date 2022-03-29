import type { AppProps } from 'next/app';

import { GlobalContainer } from '@/common/containers/GlobalContainer';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalContainer>
      <Component {...pageProps} />
    </GlobalContainer>
  );
};

export default MyApp;
