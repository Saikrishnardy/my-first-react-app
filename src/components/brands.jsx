import React from "react";
import { useState } from "react";
function Brands(){
const allBrands=[
    { id: "1", brandName: "puma"},
{id: "2", brandName: "adiddas" },
{ id: "3", brandName: "nike" },
{ id: "4", brandName: "fila" },
{ id: "5", brandName: "reebok" },
{ id: "6", brandName: "pepesi" },
{ id: "7", brandName: "neeman" },
{ id: "8", brandName: "redtape" }
]
console.log(allBrands);
const[Brands,setBrands]=useState(allBrands);
const[search,update]=useState();
const onSearch=(a)=>{
    update(a.target.value.toLowerCase());
        const filteredBrands = (a.target.value?.length>0)?(allBrands.filter((brand) =>
      brand.brandName.toLowerCase().includes(search))):allBrands;
    
setBrands(filteredBrands);
}
const[cart,setcart]=useState([]);
const addToCart=(brand)=>{
    setcart([...cart,brand]);
}

const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setcart(updatedCart);
  };


return(
<div>
      <input
        type="text"
        onChange={onSearch}
        placeholder="Enter brand name"
        value={search}
      />

<ul>
        {Brands.map((brand) => (
          <li key={brand.id}>{brand.brandName}</li>
        ))}
      </ul>
      <h2>Add brand to cart</h2>
      <ul>
      {
        allBrands.map((brand)=>(
            <li key={brand.id}>
            {brand.id}-{brand.brandName}<button onClick={()=>addToCart(brand)} >add</button>
            </li>
        )

    )}
     
      </ul>
      {
      cart && cart.map(brand =>          <p key={brand.id}>
            {brand.brandName}{" "}
            <button onClick={() => removeFromCart(brand.id)}>Remove</button>
          </p>

      
      )
    }
    </div>  
    
)

}



export default Brands;