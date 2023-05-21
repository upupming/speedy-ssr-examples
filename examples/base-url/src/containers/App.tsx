import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppState } from '../pages/ssr/types';

export const App = (props: AppState) => {
  const [count, setCount] = useState(props.count);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Speedy + React!</p>
        <p id="date">{props.date}</p>
        <p id="host">{props.host}</p>
        <p>
          <button id="counter-btn" type="button" onClick={() => setCount(count + 1)}>
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
      </header>
    </div>
  );
};
export default App;
