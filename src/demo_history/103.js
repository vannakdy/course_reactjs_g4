import React from "react";
import {Link,useNavigate} from "react-router-dom";
import styles from "./HomeScreen.module.css"
const HomeScreen = () =>{
    var x =10 ;
    var arr_name;
    const navigate = useNavigate();
    const [active,setActive] = React.useState(true)
    const [x1,setX1] = React.useState(1)
    x = 1000;
    const handleClickme = () => {
      // do something
      navigate("/student")
    }

    const handleChangeColor = () =>{
      setActive(!active)
    }

    return (
      <div>
        <h1 className={active ? styles.bg1 : styles.bg2} >HomeScreen</h1>

        <button onClick={handleClickme}>Click</button>
        <button onClick={handleChangeColor}>ChangeColor</button>

        <Link to="/about">
          <button>about</button>
        </Link>
        {/* <Link to="/about">about</Link> */}
      </div>
    )
}
export default HomeScreen