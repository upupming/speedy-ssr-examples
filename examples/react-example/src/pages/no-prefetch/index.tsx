import React, { useEffect, useState } from 'react';
import { GitHubRepo } from '../types';
import './index.less';

const App: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  // note that useEffect will not be executed on the server side
  useEffect(() => {
    fetch('https://vercel-api-wheat.vercel.app/repos.json')
      .then((data) => data.json())
      .then(setRepos as any);
  }, []);

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
        detail (example of getServerSideProps)
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

export { App };

export default App;
