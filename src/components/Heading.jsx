import React from "react";
function Heading(){
    const name="sai";
    const num=8;
    let text="good";
    let st='';
    const currentHour = new Date().getHours();
    if(currentHour<12&&currentHour>=0){
      text="good morning";
      st={color:'red'};
    }
    else if(currentHour>12&&currentHour<=16){
      text="good afternoon"
      st={color:'green'};
  
    }
    else{
      text="good night";
      st={color:'blue'};
    }
    return(
        <>
        <h2>Hello people</h2>
        <h1>
        hello{name} my lucky number is {num}</h1>
        <h1 style={st}>{text}</h1>
        </>
    );
}
export default Heading;