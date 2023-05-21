import { defineGetServerData } from '@speedy-js/universal/types';

export default defineGetServerData(async (context) => {
  console.log(context.pathname);
  console.log(context.query);
  context.response.headers.set('set-cookie', 'cookie_val=example');
  return {};
});

export const shouldBeTreeShaken = () => {};
