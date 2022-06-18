import React from "react";
import "./App.css"
function App(){
  // render data 
  const arr_student = [
    {
      id : 101,
      name : "Sok",
      gender : "Male",
      grade : "A"
    },
    {
      id : 102,
      name : "Dara",
      gender : "Male",
      grade : "A"
    },
    {
      id : 103,
      name : "Som",
      gender : "Male",
      grade : "B"
    },
    {
      id : 104,
      name : "Jon",
      gender : "Male",
      grade : "B"
    },
  ];

  const handleEdit = (data) => {
    console.log(data)
    alert(data.id)
  }

  const handleDelete = (data) => {
    console.log(data)
    alert(data.id)
  }

  const handleClickTitle = () =>{
    alert("Click title")
  }

  return (
    <div className="container">
      <div className="header_container">
        <div >
          <span onClick={handleClickTitle} className="txt_header">Render Data In Table </span>
          <input />
        </div>
        <button className="btn_addnew">Add New</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody >
          {arr_student.map((data,i)=>(
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.gender}</td>
                <td>{data.grade}</td>
                <td style={{width:'20%'}}>
                  <button onClick={()=>handleEdit(data)} className="btn_edit">Edit</button>
                  <button onClick={()=>handleDelete(data)} className="btn_delete">Delete</button>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App;