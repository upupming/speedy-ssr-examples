import { defineGetServerData } from '@speedy-js/universal/types';
import { AppState } from './types';

export default defineGetServerData<AppState>((context) => {
  return {
    count: Math.floor(Math.random() * 100),
    date: Date.now(),
    host: context.request.headers.get('host'),
  };
});

export const shouldBeTreeShaken = () => {
  console.log('shouldBeTreeShaken');
};
