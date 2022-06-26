import React,{useState} from "react";
import styles from "./HomeScreen.module.css"
const HomeScreen = () =>{

    const [name,setName] = useState("");
    const [arrName,setArrName] = useState(["Sok","Som"]);

    const handleAdd = (event) => {
      var tmp = arrName;
      tmp.push(name);
      setArrName([...tmp]);
    }

    const handleChangeName = (event) => {
      setName(event.target.value)
    }

    return (
      <div className={styles.home_container}>
        <div>Demo state</div>    
        <div>{name}</div>

        <input 
          placeholder="name"
          onChange={handleChangeName}
        /> 
        <button onClick={handleAdd}>Add</button> 
        <br/> 
        <div>
          {arrName.map((item,index)=>{
            return (
              <div key={index}>
                <h2>{index+1}. {item}</h2>
              </div>
            )
          })}  
        </div> 
      </div>
    )
}
export default HomeScreen