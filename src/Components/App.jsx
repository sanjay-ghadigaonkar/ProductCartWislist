import React from "react";
import ProductCart from "./ProductCart";

const App = () => {
  // this deta genrated bye gemini ai asistent for surching data on google dummy deta for fast work
  const shoesData = [
    {
      id: 1,
      productName: "Nike Air Maxx Pro",
      price: 5500,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    },
    {
      id: 2,
      productName: "Adidas Ultraboost",
      price: 7200,
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
    },
    {
      id: 3,
      productName: "Puma Run.. Shoes",
      price: 3400,
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80",
    },
    {
      id: 4,
      productName: "Reebok classic..",
      price: 4100,
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
    },
    {
      id: 5,
      productName: "New Balance 574",
      price: 6000,
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
    },
    {
      id: 6,
      productName: "Vans Old Skool",
      price: 4500,
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80",
    },
  ];
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 h-full ">
      {/* i use map methode for product card  with my gemini ai asistence  */}
      {shoesData.map((shoes) => (
        <ProductCart ShoesItem={shoes} key={shoes.id} />
      ))}
    </div>
  );
};

export default App;
