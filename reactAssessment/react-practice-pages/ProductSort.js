import { useState } from "react";

const products = [
  { name: "Product A", price: 30 },
  { name: "Product B", price: 20 },
  { name: "Product C", price: 50 },
];

const sortLowToHigh = () => {
    setProducts([...products].sort((a,b) => a.price - b.price));
};

const sortHighToLow = () => {
    setProducts([...products].sort((a,b) => b.price - a.price));
};