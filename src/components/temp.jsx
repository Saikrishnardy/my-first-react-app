import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Temp = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/todos");
        const data = await response.json();
        setProducts(data.todos); // Correct property name
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.todo}</h2>
          {/* <p>{product.description}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Temp;
