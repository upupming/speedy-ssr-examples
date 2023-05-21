import React from 'react';
import ReactDOM from 'react-dom';
import { GitHubRepo } from '../types';

export interface AppProps {
  repos: GitHubRepo[];
}

export const App: React.FC<AppProps> = ({ repos }) => {
  if (typeof window === 'undefined') {
    console.log('page detail, num of repos', repos.length);
  } else {
    console.log('page detail, repos', repos);
  }
  return (
    <>
      <div
        onClick={() => {
          console.log(1);
        }}
      >
        no ssr page
      </div>
      {repos.map((repo) => (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 200px)',
            rowGap: 10,
            margin: 10,
            padding: 10,
            border: '1px solid black',
          }}
          key={repo.full_name}
        >
          <span>html_url:</span>
          <span>{repo.html_url}</span>
          <span>description:</span>
          <span>{repo.description}</span>
          <hr />
        </div>
      ))}
    </>
  );
};

Promise.resolve().then(async () => {
  const repos = (await (await fetch('https://api.github.com/orgs/bytedance/repos')).json()) as GitHubRepo[];

  ReactDOM.render(
    <React.StrictMode>
      <App repos={repos} />
    </React.StrictMode>,
    document.getElementById('app')
  );
});
