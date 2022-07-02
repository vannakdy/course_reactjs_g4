import { Link } from "react-router-dom";
import ListPerson from "../../components/list/ListPerson";
import styles from "./Student.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

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
    })
      .then((res) => {
        var data = res.data;
        setListStudent(data.list_student);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const getGender = (gender) => {
    return gender == 1 ? "Male" : "Female";
    // var text = "";
    // if(gender == 1){
    //   text = "Male"
    // }else{
    //   text = "Female"
    // }
    // return text
  };

  return (
    <div>
      {/* <label style={{textAlign:'center',display:'block'}}>{loading ? "Loading..." : ""}</label> */}
      {loading && (
        <label style={{ textAlign: "center", display: "block" }}>
          Loading ...
        </label>
      )}
      <h1>List student {listStudent.length}</h1>
      <div>
        {listStudent.map((item, index) => {
          var gender = item.gender == 1 ? "Male" : "Female"
          return (
            <div key={index} className={styles.list_item}>
              <div>
                {item.fname}-{item.lastname}
              </div>
              {/* <div>{item.gender == 1 ? "Male" : "Female"}</div> */}
              {/* <div>{getGender(item.gender)}</div> */}
              <div>{gender}</div>
              <div>{item.tel}</div>
              <div>{item.email}</div>
              <div>{item.description}</div>
            </div>
          );
        })}

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

                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default StudentScreen;
