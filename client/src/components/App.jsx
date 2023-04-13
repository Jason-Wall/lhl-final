import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Import components:
import Item from './item';

// Import hooks and helpers:
import useApplicationData from '../hooks/useApplicationData';

// Import styling:
import './App.css';

// MAIN FUNCTION
export default function App() {
  // State management and functions:
  const { state, setState } = useApplicationData();
  console.log(state);

  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <p>
            Edit <code>src/App.js</code> and save to reload!!!!
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Hello Jenny
          </a>
          <Item test={'Test String'} />
        </header>
      </div>
    </BrowserRouter>
  );
}
