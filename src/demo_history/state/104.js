import React,{useState} from "react";
import styles from "./HomeScreen.module.css"
const HomeScreen = () =>{
  
    const arr_person = [
      {
        id : 1,
        name : "Sok",
        gender : "Male",
        status : 0,
        is_check : false
      },
      {
        id : 3,
        name : "Jon",
        gender : "Male",
        status : 1,
        is_check : false
      },
      {
        id : 4,
        name : "Messi",
        gender : "Male",
        status : 1,
        is_check : false
      },
      {
        id : 6,
        name : "Sonange",
        gender : "Male",
        status : 1,
        is_check : false
      },
      {
        id : 7,
        name : "Soka",
        gender : "Male",
        status : 1,
        is_check : false
      }
    ];

    const [listPerson,setListPerson] = useState(arr_person);

    const  handleDelete = (item) => {
      var tmpList = listPerson.filter((data)=>data.id !== item.id); // item.id is id that we clicked
      setListPerson(tmpList);
    }

    const  handleDeleteSeleted = () => {
      var listTmp = listPerson.filter((item,index)=>item.is_check == false)
      setListPerson(listTmp);
    }

    const handelCheck = (event,item,index) => {
      var tmpList = listPerson;
      tmpList[index].is_check = !item.is_check;
      setListPerson([...tmpList]);
    }

    const handleStatus = (item,index) =>{
      var tmpList = listPerson;
      tmpList[index].status = (item.status == 1 ? 0 : 1)
      setListPerson([...tmpList]);

    }

    return (
      <div className={styles.home_container}>
        <h1>List person {listPerson.length}</h1>

        <button onClick={handleDeleteSeleted}>Delete</button>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
              {listPerson.map((item,index)=>{
                return (
                  <tr key={index}>
                    <td><input onChange={(event)=>handelCheck(event,item,index)} type="checkbox" checked={item.is_check} /></td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>
                      <button onClick={()=>handleStatus(item,index)} className={item.status == 1 ? styles.active : styles.disbled}>{item.status == 1 ? "Actived" : "Disabled" }</button>
                    </td>
                    <td>
                      <button onClick={()=>handleDelete(item)}>Delete</button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    )
}
export default HomeScreen