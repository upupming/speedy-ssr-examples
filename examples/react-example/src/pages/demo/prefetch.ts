import { defineGetServerData } from '@speedy-js/universal/types';

export default defineGetServerData(async (context) => {
  console.log('cookie from the browser:', context.request.headers.get('cookie'));

  const resp = await fetch('https://emoji-teal.vercel.app/api/emoji');
  const res = await resp.json();

  return {
    emojis: res,
  };
});
