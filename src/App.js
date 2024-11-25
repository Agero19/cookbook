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
  const dishes = [
    {
      name: "Cheeseburger",
      image: "/images/cheeseburger.svg",
      title: "Big and Juicy Wagyu Beef Cheeseburger",
    },
    {
      name: "Salmon",
      image: "/images/salmon.svg",
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    },
    {
      name: "Pancakes",
      image: "/images/pancakes.svg",
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
    },
    {
      name: "Salad",
      image: "/images/mayo-salad.svg",
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
    },
    {
      name: "Meatballs",
      image: "/images/meatballs.svg",
      title: "Chicken Meatballs with Cream Cheese",
    },
    {
      name: "Wagyu",
      image: "/images/wagyu.svg",
      title: "Big and Juicy Wagyu Beef Cheeseburger",
    },
    {
      name: "Pancakes",
      image: "/images/fruit-pancakes.svg",
      title: "Fruity Pancake with Orange & Blueberry",
    },
    {
      name: "Chicken",
      image: "/images/chicken-rice.svg",
      title: "The Best Easy One Pot Chicken and Rice",
    },
    {
      name: "Pasta",
      image: "/images/pasta.svg",
      title: "The Creamiest Creamy Chicken and Bacon Pasta",
    },
  ];

  const navLinks = [
    { label: "Home", href: "/", inFooter: false },
    { label: "Recipes", href: "/recipes", inFooter: true },
    { label: "Blog", href: "/blog", inFooter: true },
    { label: "Contact", href: "/contact", inFooter: true },
    { label: "About Us", href: "/about", inFooter: true },
  ];

  const headerLinks = navLinks;
  const footerLinks = navLinks.filter((link) => link.inFooter);

  return (
    <div className="App">
      {/* App header  */}
      <MainHeader links={headerLinks} />

      <div className="container">
        <div className="row">
          {dishes.map(({ name, image, title }, index) => (
            <ItemCard
              key={index + name}
              name={name}
              image={image}
              title={title}
            />
          ))}
        </div>
      </div>

      <MainFooter links={footerLinks} />
    </div>
  );
}

export default App;
