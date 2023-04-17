import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import components:
import Items from "./Items";
import Nav from "./Nav";
import ItemDetail from "./ItemDetail";
import ItemEdit from "./ItemEdit";
import Category from "./Category";
import MyBids from "./MyBids";
import AllBids from "./AllBids";
import MyProfile from "./MyProfile";

// Import hooks and helpers:
import useApplicationData from "../hooks/useApplicationData";

// Import styling:
import "./App.scss";

// MAIN FUNCTION
export default function App() {
  // State management and functions:
  const { state, setState, setStateRefresh } = useApplicationData();

  const [theme, setTheme] = useState(true);

  return (
    <BrowserRouter>
      {/* create a button that sets this theme set theme  = !theme*/}
      <div className={`${theme ? "light" : "dark"}`}>
        <Nav
          items={state.items}
          categories={state.categories}
          theme={theme}
          setTheme={setTheme}
        />
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <Items
                  images={state.images}
                  endingSoon={state.itemsEndingSoon}
                  items={state.items}
                />
              }
            ></Route>
            <Route path="items/:itemId" element={<ItemDetail />}></Route>
            <Route
              path="/"
              element={
                <Items
                  images={state.images}
                  endingSoon={state.itemsEndingSoon}
                />
              }
            ></Route>
            <Route path="items/:itemId" element={<ItemDetail />}></Route>
            <Route
              path="items/new"
              element={
                <ItemEdit
                  item={false}
                  categories={state.categories}
                  conditions={state.conditions}
                  onSubmit={setStateRefresh}
                />
              }
            ></Route>
            <Route
              path="/categories/:categoryId"
              element={
                <Category categories={state.categories} images={state.images} />
              }
            ></Route>
            <Route path="/bids" element={<AllBids />}></Route>
            <Route
              path="/profile/:userId"
              element={
                <MyProfile
                  users={state.users}
                  items={state.items}
                  bids={state.bids}
                  images={state.images}
                />
              }
            ></Route>
            <Route path="/items/:userId" element={<MyBids />}></Route>
            <Route path="/logout" element={<MyBids />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
