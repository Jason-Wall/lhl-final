import React from 'react';
import { BrowserRouter } from "react-router-dom";

// Import components:
<<<<<<< HEAD
// import Item from "./Item";
=======
import Items from "./Items";
>>>>>>> f67139dfdc192b6f9bdf32487439e0f81dbfc164
import Nav from "./Nav";
import Item from "./Item";

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
<<<<<<< HEAD
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

=======
      <main>
        <Nav />
        <Items images={state.images} />
      </main>
>>>>>>> f67139dfdc192b6f9bdf32487439e0f81dbfc164
    </BrowserRouter>
  );
}
