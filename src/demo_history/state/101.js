import React, { useState } from "react";
import styles from "./HomeScreen.module.css"
const HomeScreen = () =>{
  // const [state_name,setter] = useState(init);
    var x = 10;
    const bg_active = {
      backgroundColor: "green"
    }
    const bg_inactive = {
      backgroundColor: "gray"
    }

    const [x1,setX1] = useState(10);
    const [count,setCount] = useState(0);
    const [style,setStyle]  = useState(bg_active)

    const handelClick = () => {
      x = 100;
      setX1(x);
    }

    const handelIncrease = () => {
      setCount(count+2)
    }

    const handelDescrease = () =>{
      setCount(count-2)
    }

    const handelColor = () => {
      setStyle(bg_inactive)
    }

 

    return (
      <div style={style}>
        <h1>x = {x}</h1>
        <h1>x1 = {x1}</h1>
        <button onClick={handelClick}>Click me to change data</button>
        <button onClick={handelColor}>Click color</button>
        <br/>
        <br/>
        <button onClick={handelDescrease}>-</button>
        <span style={{fontSize:22}}> {count} </span>
        <button onClick={handelIncrease}>+</button>
      </div>
    )
}
export default HomeScreen