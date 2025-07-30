import React from "react";
import { useState } from "react";
function Hooks(){

    const [count,setCount]=useState(0);
    const incrementCount=()=>{
        setCount(count+1);
    }
     const decrementCount=()=>{
        setCount(count-1);
    }
    return(
    <div>
    <button onClick={incrementCount}>Increment by 1</button>
    {count}
    <button onClick={decrementCount}>decrement by 1</button>
    </div>

    )
}
export default Hooks;