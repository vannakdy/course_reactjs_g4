import React from "react";
import "./App.css"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import HomeScreen from "./screen/home/HomeScreen";
import StudentScreen from "./screen/student/StudentScreen";
import AboutScreen from "./screen/about/AboutScreen";
import CourseScreen from "./screen/course/CourseScreen";
import RoutNotFoundScreen from "./screen/404/404";


const App = () => {
  return(
    <div>
      {/* reginset route */}
      
      <BrowserRouter>

        <div className="contain_menu">
          <Link className="menu_item" to="/">Home</Link>
          <Link className="menu_item" to="/student">Student</Link>
          <Link className="menu_item" to="/course">Course</Link>
          <Link className="menu_item" to="/classroom">Classroom</Link>
          <Link className="menu_item" to="/teacher">Teacher</Link>
          <Link className="menu_item" to="/about">About</Link>

          <Link className="menu_item" to="/login">Login</Link>
        </div>
        <div style={{padding:20}}>
          <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="/student" element={<StudentScreen/>} />
            <Route path="/about" element = {<AboutScreen/>} />
            <Route path="/course" element  = {<CourseScreen/>} />
            
            <Route path="*" element={<RoutNotFoundScreen/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;