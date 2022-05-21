import type { AppProps } from 'next/app';
import Button from '@mui/material/Button';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      bbb
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
