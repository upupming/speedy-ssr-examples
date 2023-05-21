import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { GitHubRepo } from '../types';
import './index.css';

export interface AppProps {
  repos: GitHubRepo[];
}

const App: React.FC<AppProps> = () => {
  React.useEffect(() => {
    console.log('useEffect called');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>pages/index/index.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://speedy.web.bytedance.net/ssr/introduction.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            SSR Docs
          </a>
        </p>
        <p>
          <Link className="App-link" to="/demo">
            DEMO
          </Link>
        </p>
        <p>
          <Link className="App-link" to={`/city/1234`}>
            CITY
          </Link>
        </p>
      </header>
    </div>
  );
};

export default App;
