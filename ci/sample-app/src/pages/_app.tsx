import type { AppProps } from 'next/app';

// import Navbar from '@/common/components/Navbar';

// import '../styles/globals.css';
import { globalStyles } from '@/styles/globals';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {globalStyles}
      {/* <Navbar /> */}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
