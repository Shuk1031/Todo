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
      <div className="min-h-screen bg-gray-100">
        <header className="bg-gray-800 text-white p-4">
          <div className="max-w-7xl mx-auto flex justify-between">
            <h1 className="text-xl font-bold">ToDoアプリ</h1>
            <nav className="flex space-x-4">
              <Link to="/" className="hover:underline">TaskList</Link>
              <Link to="/Form" className="hover:underline">TaskForm</Link>
            </nav>
          </div>
        </header>

        <div className="max-w-7xl mx-auto py-8 px-4">
          <Routes>
            <Route path="/Form" element={<TaskForm/>}/>
            <Route path="/" element={<TaskList/>}/>
          </Routes>
        </div>
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 p-6">
          <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0">
            <FilterBar/>
          </aside>
        </div>
      </div>

    </Router>
    
    
  );
};

export default App;
