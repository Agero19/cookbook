import "./App.scss";
import "./normalize.css";

import "@fontsource-variable/inter"; // Defaults to wght axis
import "@fontsource-variable/inter/wght-italic.css"; // Specify axis and style
import "@fontsource-variable/inter/wght.css"; // Specify axis

import React from "react";
import ItemCard from "./components/ItemCard";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";

function App() {
  return (
    <div className="App">
      {/* App header  */}
      <MainHeader />

      <div className="container">
        <div className="row">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>

      <MainFooter />
    </div>
  );
}

export default App;
