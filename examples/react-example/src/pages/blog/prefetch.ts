import { defineGetServerData } from '@speedy-js/universal/types';
import { GitHubRepo } from '../types';

export const getStaticPropsTest1InferPropType = defineGetServerData<{ repos: GitHubRepo[] }>(async () => {
  const repos: GitHubRepo[] = await fetch('https://vercel-api-wheat.vercel.app/repos.json').then((data) => data.json());

  return {
    repos,
    time: new Date(),
  };
});

export const getStaticProps = getStaticPropsTest1InferPropType;

export const shouldBeTreeShaken = () => {};
