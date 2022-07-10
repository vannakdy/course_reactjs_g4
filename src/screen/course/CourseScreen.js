import { useState, useEffect } from "react";
import "./CourseScreen.css";
import Botton from "../../components/button/Botton";
import { fetchData } from "../../helper";
const CourseScreen = () => {
  const [list, setList] = useState([]);

  const [courseId, setCourseId] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [des, setDes] = useState("");
  const [status, setStatus] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    setLoading(true);
    fetchData("api/courses",{},"GET").then(res=>{
      setList(res.data);
      setLoading(false)
    })
  };

  const onChangeName = (event) => {
    setName(event.target.value)
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value)
  };
  const onChangeDes = (event) => {
    setDes(event.target.value)
  };
  const onChangeStatus = (event) => {
    console.log(event.target.value)
  };

  const hadleAddCourse = () => {
    setLoading(true)
    var datas = {
        "name": name,
        "price": Number(price),
        "description": des,
        "status": Number(status)
    }
    setLoading(true);
    fetchData("api/courses",datas,"POST").then(res=>{
      getList();
      clearFormData();
      setLoading(false);
    })
  }

  const handleDelete = (id) => {
    setLoading(true);
    fetchData("api/courses/"+id,{},"DELETE").then(res=>{
      getList();
      setLoading(false);
    })
  }

  const hadleUpdate = () =>{
    // name , des, price ,status
    setLoading(true)
    var datas = {
        "course_id": courseId,
        "name": name,
        "price": Number(price),
        "description": des,
        "status": Number(status)
    }
    fetchData("api/courses",datas,"PUT").then(res=>{
      getList();
      clearFormData();
      setLoading(false)
    })
  }

  const clearFormData = () => {
    setName("");
    setPrice(0);
    setDes("");
    setStatus(1);
    setCourseId(null)
  }

  const handleEdit = (item) =>{
    setCourseId(item.course_id)
    setName(item.name);
    setPrice(item.price);
    setDes(item.description);
    setStatus(item.status);
  }

  return (
    <div>
     <div className="form_course">
        <div className="txtMain">{courseId == null ? "New course" : "Edit course"}</div>
        <div className="from_input">
            <input value={name} onChange={onChangeName} placeholder="Course name" /> <br />
            <input value={price} onChange={onChangePrice} placeholder="price" /> <br />
            <input value={des} onChange={onChangeDes} placeholder="Description" /> <br />
            <select value={status} onChange={onChangeStatus} defaultValue={1}>
            <option value={1}>Enabled</option>
            <option value={0}>Disbled</option>
            </select>
            <br />
            <button onClick={courseId == null ? hadleAddCourse : hadleUpdate}>{courseId == null ? "ADD NEW" : "UPDATE"}</button>
        </div>
      </div>

      <div className="txtMain">List course {list.length}</div>
      {loading === true && <div>Loading...</div>}
      <table>
        <thead>
          <tr>
            <th>Course name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Status</th>
            <th style={{width:"20%",textAlign:'right'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td className={item.status === 1 ? "txtGreen" : "txtGray"}>{item.status === 1 ? "Enabled" : "Disabled"}</td>
                <td>
                    <div className="row-action">
                        <Botton 
                            onClick={()=>handleDelete(item.course_id)}
                            title={"Remove"}
                            textColor={"red"}
                        />
                        <Botton 
                            onClick={()=>handleEdit(item)}
                            title={"Edit"}
                            textColor={"blue"}
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

export default CourseScreen;
