import React,{useState} from "react";
import styles from "./HomeScreen.module.css"
const HomeScreen = () =>{

    const MyConponent = () => {
      return (
        <div className={styles.coponent1}>
          <h1>React Componetn</h1>
        </div>
      )
    }

    // const PersonInfo  = (props) => {
    //   return (
    //     <div className={styles.item_person}>
    //       <div className={styles.image} />
    //       <div style={{paddingLeft:15}}>
    //         <div>{props.firstname}-{props.lastname}</div>
    //         <div>{props.email}</div>
    //       </div>
    //     </div>
    //   )
    // }

    // const PersonInfo  = (props) => {
    //   const {firstname,lastname,email} = props
    //   return (
    //     <div className={styles.item_person}>
    //       <div className={styles.image} />
    //       <div style={{paddingLeft:15}}>
    //         <div>{firstname}-{lastname}</div>
    //         <div>{email}</div>
    //       </div>
    //     </div>
    //   )
    // }

    const PersonInfo  = ({firstname,lastname,email}) => {
      return (
        <div className={styles.item_person}>
          <div className={styles.image} />
          <div style={{paddingLeft:15}}>
            <div>{firstname}-{lastname}</div>
            <div>{email}</div>
          </div>
        </div>
      )
    }

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
          <MyConponent/> 
          {arr_person.map((item,index)=>{
            return(
              <PersonInfo
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