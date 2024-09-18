/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
// src/App.tsx

import React from 'react';
import { HomePage } from './pages/HomePage';

// アプリケーションのルートコンポーネント
const App: React.FC = () => {
  return (
    // 最小高さを画面全体に設定し、背景色をグレーに
    <div className="min-h-screen bg-gray-100">
      {/* ホームページコンポーネントをレンダリング */}
      <HomePage />
    </div>
  );
};

export default App;
