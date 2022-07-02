import axios from "axios";
import { useState, useEffect } from "react";
import Botton from "../../components/button/Botton";
import styles from "./Student.module.css"
const StudentScreen = () => {
  const [listStudent, setListStudent] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    getList();
  },[]);

  const getList = () => {
    axios({
      url: "https://nitc.cleverapps.io/api/student",
      method: "GET",
      data: {},
    }).then((res) => {
        var data = res.data;
        setListStudent(data.list_student);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const handleDelete = (item) => {
    setLoading(true)
    axios({
      url : "https://nitc.cleverapps.io/api/student/"+item.student_id,
      method : "DELETE",
      data : {
        // student_id : item.student_id
      }
    }).then(res=>{
      console.log(res)
      setLoading(false)
      getList();
    }).catch(err=>{
      console.log(err)
      setLoading(false)
    })
  }

  return (
    <div>
     
      {loading && (
        <label style={{ textAlign: "center", display: "block" }}>
          Loading ...
        </label>
      )}
      <h1>List student {listStudent.length}</h1>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listStudent.map((item, index) => {
              var gender = item.gender == 1 ? "Male" : "Female"
              return (
                <tr>
                  <td>{item.fname}</td>
                  <td>{item.lastname}</td>
                  <td>{gender}</td>
                  <td>{item.tel}</td>
                  <td>{item.email}</td>
                  <td>{item.description}</td>
                  <td>
                    <div className={styles.action}>
                      <Botton
                        title={"Delete"}
                        onClick={()=>handleDelete(item)}                    
                      />
                      <Botton
                        title={"Edit"}                    
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
  );
};
export default StudentScreen;
