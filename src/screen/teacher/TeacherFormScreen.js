import "./TeacherFormScreen.css";
import React, { useEffect, useState } from "react";
import Botton from "../../components/button/Botton";
import {useParams,useNavigate} from "react-router-dom";
import { fetchData } from "../../helper";
const TeacherFormScreen = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [objTeacher, setObjTeacher] = useState({
    teacher_id : params.id,
    fname: "",
    lastname: "",
    gender: 0,
    tel: "",
    email: "",
    description: "",
  });


  useEffect(()=>{
    if(params.id !== undefined){
        getTeacherById();
    }
    
  },[params.id])

  const getTeacherById = () =>{
    fetchData("api/teacher/"+params.id,{},"GET").then(res=>{
        if(!res.error){
            var data = res.data;
            if(data.length > 0) {
                setObjTeacher(data[0]) 
            }
        }
    })
  }

  const handleChange = (event) => {
    setObjTeacher({
        ...objTeacher,
        [event.target.name] : event.target.value
    })
  };

  const handleAdd = () => {
    const method = objTeacher.teacher_id !== undefined ? "PUT" : "POST"
    fetchData("api/teacher",objTeacher,method).then(res=>{
        if(!res.error){
            navigate("/teacher")
        }
        console.log(res)
    })
  }

  const handleCancel = () => {
    navigate("/teacher")
  }

  return (
    <div>
      <div className="form_course">
        <div className="txtMain"> {objTeacher.teacher_id !== undefined ? "Update Teacher" : "New teacher"}</div>
        <div className="from_input">
          <input
            placeholder="First name"
            name="fname"
            value={objTeacher.fname}
            onChange={handleChange}
          />
          <input
            placeholder="Last name"
            name="lastname"
            value={objTeacher.lastname}
            onChange={handleChange}
          />

          <input
            placeholder="Gender"
            name="gender"
            value={objTeacher.gender}
            onChange={handleChange}
          />
          <input
            placeholder="Tel"
            name="tel"
            value={objTeacher.tel}
            onChange={handleChange}
          />

          <input
            placeholder="Email"
            name="email"
            value={objTeacher.email}
            onChange={handleChange}
          />

          <input
            placeholder="Description"
            name="description"
            value={objTeacher.description}
            onChange={handleChange}
          />
        </div>
        <div className="row_item">
            <Botton
                title={objTeacher.teacher_id !== undefined ? "Update" : "Add"}
                bgColor={"green"}
                textColor={"#FFF"}
                onClick={handleAdd}
            />
            <Botton
                title={"Cancel"}
                bgColor={"gray"}
                textColor={"#000"}
                onClick={handleCancel}
            />
        </div>
      </div>
    </div>
  );
};

export default TeacherFormScreen;
