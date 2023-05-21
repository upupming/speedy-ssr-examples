import { defineGetServerData } from '@speedy-js/universal/types';
import { AppProps } from '../../components/App';

export default defineGetServerData<AppProps>((context) => {
  context.response.headers.set('set-cookie', 'cookie_val=example');

  const cookieFromBrowser = context.request.headers.get('cookie');
  if (cookieFromBrowser) {
    console.log('cookie from the browser:', cookieFromBrowser);
  }
  return {
    initCount: Math.floor(Math.random() * 100),
    date: Date.now(),
    query: context.query,
  };
});

export const shouldBeTreeShaken = () => {
  console.log('shouldBeTreeShaken');
};
