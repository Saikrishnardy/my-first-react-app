import React, { useState } from "react";

const productsData = [
  { id: 1, name: "Apple", price: 30 },
  { id: 2, name: "Banana", price: 10 },
  { id: 3, name: "Orange", price: 20 },
];

function ProductList() {
  const [cart, setCart] = useState([]);
  const [total,setTotal]=useState(0);
  const addToCart = (product) => {
     const existingItem = cart.find((item) => item.id === product.id);
     if(existingItem){
        const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
      setTotal(total+product.price);
     }
     else{
    setCart([...cart, {...product,quantity:1}]);
    setTotal(total+product.price);
     }
  };
  const setCa=(price)=>{
    setTotal(total+price);
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {productsData.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}{" "}
            <button onClick={() => {addToCart(product)}}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2><h2>Total={total}</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}[{item.quantity}]
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
