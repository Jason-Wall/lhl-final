import React from "react";
import { BrowserRouter } from "react-router-dom";

// Import components:
import Item from "./Item";
import Nav from "./Nav";

// Import hooks and helpers:
import useApplicationData from "../hooks/useApplicationData";

// Import styling:
import './App.scss';

// MAIN FUNCTION
export default function App() {
  // State management and functions:
  const { state, setState } = useApplicationData();
  console.log(state);

  return (
    <BrowserRouter>
    <Nav items={state.items}/>
      <div className='App'>
        <header className='App-header'>
          <p>
            Edit <code>src/App.js</code> and save to reload!!!!
          </p>
          Hello Jenny
          <Item test={"Test String"} s={state} />
        </header>
      </div>

    </BrowserRouter>
  );
}
