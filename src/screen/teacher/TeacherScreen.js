import {useEffect,useState} from "react"
import "./TeacherScreen.css";
import { fetchData } from "../../helper";
import Botton from "../../components/button/Botton";
const TeacherScreen  = () => {
    const [loading,setLoading]= useState(false)
    const [list,setList] = useState([]);
    const [totalRecord,setTotalRecord] = useState(0)

    useEffect(()=>{
        getListTeacher()
    },[]);

    const getListTeacher = () => {
        setLoading(true);
        fetchData("api/teacher",{},"GET").then(res=>{
            setList(res.data);
            setTotalRecord(res.total_record)
        })
    }

    return (
        <div>
            <div className="header_teacher">
                <div className="row">
                        <div className="txtMain">List teacher</div>
                        <input placeholder="Search name/tel" />
                </div>
                <Botton 
                        title={"ADD NEW"}
                        bgColor={"green"}
                        textColor={"#FFF"}
                />
            </div>

           <table>
        <thead>
          <tr>
            <th>Fist name</th>
            <th>Last name</th>
            <th>Gender</th>
            <th>Tel</th>
            <th>Email</th>
            <th style={{width:"20%",textAlign:'right'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.fname}</td>
                <td>{item.lastname}</td>
                <td>{item.gender == 1 ? "Male" : "Female"}</td>
                <td>{item.tel}</td>
                <td>{item.email}</td>
                <td>
                    <div className="row-action">
                        <Botton 
                            // onClick={()=>handleDelete(item.course_id)}
                            title={"Remove"}
                            textColor={"red"}
                        />
                        <Botton 
                            // onClick={()=>handleEdit(item)}
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
    )
}

export default TeacherScreen;