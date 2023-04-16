import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import components:
import Items from './Items';
import Nav from './Nav';
import ItemDetail from './ItemDetail';
import ItemNew from './ItemNew';
import Category from './Category';

// Import hooks and helpers:
import useApplicationData from '../hooks/useApplicationData';

// Import styling:
import './App.scss';

// MAIN FUNCTION
export default function App() {
  // State management and functions:
  const { state, setState } = useApplicationData();
  console.log(state);

  return (
    <BrowserRouter>
      <main>
        <Nav
          items={state.items}
          categories={state.categories}
        />

        <Routes>
          <Route
            path='/'
            element={<Items images={state.images} />}
          ></Route>
          <Route
            path='items/:itemId'
            element={<ItemDetail />}
          ></Route>
          <Route
            path='items/new'
            element={<ItemNew />}
          ></Route>
          <Route
            path='/categories/:categoryId'
            element={<Category images={state.images} />}
          ></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
