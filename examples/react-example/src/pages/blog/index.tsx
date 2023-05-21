import React from 'react';
import './index.less';
import { GitHubRepo } from '../types';

export interface AppProps {
  repos: GitHubRepo[];
}

const App: React.FC<AppProps> = ({ repos = [] }) => {
  return (
    <>
      <div
        onClick={() => {
          console.log(1);
        }}
      >
        blog (example of getStaticProps)
      </div>
      {repos.map((repo) => (
        <div className="block" key={repo.full_name}>
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

export default App;
