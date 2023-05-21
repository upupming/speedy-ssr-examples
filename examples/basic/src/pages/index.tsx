import React from 'react';
import { AppProps } from '@speedy-js/universal';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
