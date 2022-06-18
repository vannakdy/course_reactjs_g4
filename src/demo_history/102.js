import React from "react";

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

  return (
    <div>
      {
        arr_student.map((item,index)=>{
          var x = 10;
          var y = 100;
          var sum = x + y;
          if(index <= 2){
            return (
              <div style={{padding:10}}>
                <div>{index+1}. {item.name}</div>
                <div>{item.gender}</div>
                <div>Grad : {item.grade}</div>
                <div>{sum}</div>
              </div>
            )
          }
          
        })
      }
      <hr/>
      {
        arr_student.map((item,index)=>(
          // var x =10; // error
          <div style={{padding:10}}>
            <div>{index+1}. {item.name}</div>
            <div>{item.gender}</div>
            <div>Grad : {item.grade}</div>
          </div>
        ))
      }
    </div>
  )
}

export default App;