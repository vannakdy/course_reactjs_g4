import React,{useState} from "react";
import styles from "./HomeScreen.module.css";

import ListPerson from "../../components/list/ListPerson";

const HomeScreen = () =>{


    const arr_person = [
      {
        id:101,
        firstname:"Sok",
        lastname:"So",
        email:"sok@gmail.com",
      },
      {
        id:102,
        firstname:"Do",
        lastname:"Na",
        email:"do@gmail.com",
      },
      {
        id:103,
        firstname:"Su",
        lastname:"Su",
        email:"su@gmail.com",
      }
    ]
    return (
      <div className={styles.home_container}>
          {arr_person.map((item,index)=>{
            return(
              <ListPerson
                key={index}
                firstname = {item.firstname}
                lastname = {item.lastname}
                email={item.email}
              />
            )
          })} 
      </div>
    )
}
export default HomeScreen