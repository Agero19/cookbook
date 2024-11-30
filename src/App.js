import "./App.scss";
import "./normalize.css";

import "@fontsource-variable/inter"; // Defaults to wght axis
import "@fontsource-variable/inter/wght-italic.css"; // Specify axis and style
import "@fontsource-variable/inter/wght.css"; // Specify axis

import React from "react";
import ItemCard from "./components/ItemCard";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import Heading2 from "./components/Heading2";
import CategoryTile from "./components/CategoryTile";

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

  const categories = [
    {
      name: "Breakfast",
      image: "/images/breakfast-cat.svg",
      color: "#708246",
      shadow: "/images/breakfast-shadow.svg",
    },
    {
      name: "Vegan",
      image: "/images/vegan-cat.svg",
      color: "#6CC63F",
      shadow: "/images/vegan-shadow.svg",
    },
    {
      name: "Meat",
      image: "/images/meat-cat.svg",
      color: "#CC261B",
      shadow: "/images/meat-shadow.svg",
    },
    {
      name: "Dessert",
      image: "/images/dessert-cat.svg",
      color: "#F09E00",
      shadow: "/images/dessert-shadow.svg",
    },
    {
      name: "Lunch",
      image: "/images/lunch-cat.svg",
      color: "#000000",
      shadow: "/images/lunch-shadow.svg",
    },
    {
      name: "Chocolate",
      image: "/images/chocolate-cat.svg",
      color: "#000000",
      shadow: "/images/chocolate-shadow.svg",
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

      <div
        className="container"
        style={{ margin: "120px auto" }}
      >
        <div className="row">
          {categories.map(({ name, image, color, shadow }, index) => (
            <div className="col col-2">
              <CategoryTile
                key={index}
                name={name}
                image={image}
                color={color}
                shadow={shadow}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <Heading2
          title="Simple and tasty recipes"
          text="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
        />
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
