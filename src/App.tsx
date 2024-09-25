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
import {BrowserRouter as Router, Route, Routes , Link} from 'react-router-dom'
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { FilterBar } from './components/FilterBar';

// アプリケーションのルートコンポーネント
const App: React.FC = () => {
  return (
    <Router>
      <div>
        <header>
          <div>
            <h1>ToDoアプリ</h1>
            <nav>
              <Link to="/">TaskList</Link>
              <Link to="/Form">TaskForm</Link>
            </nav>
          </div>
        </header>

        <div>
          <Routes>
            <Route path="/Form" element={<TaskForm/>}/>
            <Route path="/" element={<TaskList/>}/>
          </Routes>
        </div>
        <div>
          <aside>
            <FilterBar/>
          </aside>
        </div>
      </div>

    </Router>
    
    
  );
};

export default App;
