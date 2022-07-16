import {useEffect,useState} from "react"
import "./TeacherScreen.css";
import { fetchData } from "../../helper";
import Botton from "../../components/button/Botton";
import {useNavigate,Link} from "react-router-dom";

const TeacherScreen  = () => {
    const [loading,setLoading]= useState(false)
    const [list,setList] = useState([]);
    const [totalRecord,setTotalRecord] = useState(0);
    const navigate = useNavigate();

    useEffect(()=>{
        getListTeacher()
    },[]);

    const getListTeacher = () => {
        setLoading(true);
        fetchData("api/teacher",{}).then(res=>{
            if(!res.error){
              setList(res.data);
              setTotalRecord(res.total_record)
            }else{
              console.log(res)
            }
        })
    }

    const handleToCreateForm = () => {
      navigate("/teacher/create")
    }

    const handleDelete = (teacher_id) => {
      setLoading(true);
      fetchData("api/teacher/"+teacher_id,{},"DELETE").then(res=>{
        setLoading(false);
          if(!res.error){
            getListTeacher();
          }else{
            console.log(res)
          }
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
                  onClick={handleToCreateForm}
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
            <th>Description</th>
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
                <td>{item.description}</td>
                <td>
                    <div className="row-action">
                        <Botton 
                            onClick={()=>handleDelete(item.teacher_id)}
                            title={"Remove"}
                            textColor={"red"}
                        />
                        <Link to={"/teacher/create/"+item.teacher_id}>
                          <Botton 
                              title={"Edit"}
                              textColor={"blue"}
                          />
                        </Link>
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