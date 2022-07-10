import React from "react";
import "./App.css"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import HomeScreen from "./screen/home/HomeScreen";
import StudentScreen from "./screen/student/StudentScreen";
import AboutScreen from "./screen/about/AboutScreen";
import CourseScreen from "./screen/course/CourseScreen";
import RoutNotFoundScreen from "./screen/404/404";
import Header from "./components/header/Header";
import TeacherScreen from "./screen/teacher/TeacherScreen";
import TeacherFormScreen from "./screen/teacher/TeacherFormScreen";
import LoginScreen from "./screen/auth/LoginScreen";
const App = () => {
  return(
    <div>
      <BrowserRouter>

        <Header />
        <div style={{padding:20}}>
          <Routes>
            <Route path="/" element={<HomeScreen/>} />
            
            <Route path="/login" element={<LoginScreen/>} />
            
            <Route path="/student" element={<StudentScreen/>} />
            <Route path="/about" element = {<AboutScreen/>} />
            <Route path="/course" element  = {<CourseScreen/>} />
            <Route path="/teacher" element = {<TeacherScreen />} />
            <Route path="/teacher/create" element = {<TeacherFormScreen />} />
            <Route path="/teacher/create/:id" element = {<TeacherFormScreen />} />
            
            <Route path="*" element={<RoutNotFoundScreen/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;