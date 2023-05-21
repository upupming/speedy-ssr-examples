import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ClientOnly } from '@speedy-js/universal/components';
import { Link, useLocation } from 'react-router-dom';

export interface AppProps {
  initCount: number;
  date: number;
  query?: Record<string, string>;
}

export const App: React.FC<AppProps> = (props) => {
  const [count, setCount] = useState(props.initCount);
  const location = useLocation();

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="current-pathname">{location.pathname}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Speedy + React!</p>
        <ClientOnly>
          <p>client_only_element</p>
        </ClientOnly>
        <p id="date">{props.date}</p>
        {props.query ? <p id="query">{JSON.stringify(props.query)}</p> : null}
        <p>
          <button id="counter-btn" type="button" onClick={() => setCount((count) => count + 1)}>
            count is: <span id="counter">{count}</span>
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test page reloads.
        </p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a className="App-link" href="https://speedy.web.bytedance.net/" target="_blank" rel="noopener noreferrer">
            Speedy Docs
          </a>
        </p>
        <p>
          <Link className="App-link" to="/ssr" id="link-to-ssr">
            SSR
          </Link>
        </p>
        <p>
          <Link className="App-link" to="/ssg" id="link-to-ssg">
            SSG
          </Link>
        </p>
      </header>
    </div>
  );
};
