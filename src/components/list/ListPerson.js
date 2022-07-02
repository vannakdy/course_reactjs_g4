import React ,{useState} from "react";
import styles from "./ListPerson.module.css";
import Botton from "../button/Botton";
const ListPerson = ({email,lastname,firstname}) => {
  const [textEmail,setEmail] = useState("")

  const hadleViewMore = (params) => {
    console.log(params)
  }

  const handleChangeEmail = (event) =>{
    setEmail(event.target.value)
  }

  const handleSub = () => {
    alert(textEmail)
    // ......
  }

  return (
    <div>
      <h2>{textEmail}</h2>
      <div className={styles.item_person}>
        <div className={styles.image} />
        <div style={{ paddingLeft: 15 }}>
          <div>
            {firstname}-{lastname}
          </div>
          <div>{email}</div>
          <input 
            placeholder="Input email to subscribe"
            onChange={handleChangeEmail}
          />
          <button>dd</button>

          <Botton
            title={"Subscribe"}
            bgColor={"green"}
            textColor="white"
            onClick={handleSub} // override params
          />

          <Botton
            title={"View more"}
            bgColor={"green"}
            textColor="white"
            // onClick={()=>hadleViewMore(1000)} // override params
            onClick={hadleViewMore} // override params
          />
        </div>
      </div>
    </div>
  );
};

export default ListPerson;
