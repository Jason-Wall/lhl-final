import React from "react";
import { BrowserRouter } from "react-router-dom";

// Import components:
import Items from "./Items";
import Nav from "./Nav";

// Import hooks and helpers:
import useApplicationData from "../hooks/useApplicationData";

// Import styling:
import "./App.scss";

// MAIN FUNCTION
export default function App() {
  // State management and functions:
  const { state, setState } = useApplicationData();
  console.log(state);

  return (
    <BrowserRouter>
      <main>
        <Nav />
        <Items images={state.images} />
      </main>
    </BrowserRouter>
  );
}
