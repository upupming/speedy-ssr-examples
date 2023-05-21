import { defineGetServerData } from '@speedy-js/universal/types';
import { AppProps } from '../../components/App';

export const getStaticProps = defineGetServerData<AppProps>((context) => {
  return {
    initCount: Math.floor(Math.random() * 100),
    date: Date.now(),
  };
});

export const shouldBeTreeShaken = () => {
  console.log('shouldBeTreeShaken');
};
