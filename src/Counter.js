import { useState } from "react";

function Counter(){
  const [count, setCount] = useState(0)
  let inc =()=>{
    setCount(count + 10)
  }
  let dec = ()=>{
    setCount(count - 5)
  }
  
  return <>
  <button onClick={inc}>+</button>
  <h1>{count}</h1>
  <button onClick={dec}>-</button>

  
  </> 
} 

export default Counter;
