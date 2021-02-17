import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
      {/* <h1> this is a header</h1> */}
      <Header />
      <div className='app__body'>
        <Sidebar />
        <Feed />
      </div>
      
    </div>
  );
}

export default App;
