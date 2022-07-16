import {useEffect,useState} from "react"
import "./LoginScreen.css";
import { fetchData } from "../../helper";
import Botton from "../../components/button/Botton";
const LoginScreen  = () => {
    const [loading,setLoading]= useState(false)
    const [username,setUsernaem] = useState("")
    const [password,setPassword] = useState("")
    const [message , setMessage] = useState("");

    const handleLogin = () => {
        var data =  {
            "username" : username,
            "password" : password
        }
        fetchData("api/auth/login",data,"POST").then(res=>{
            if(res.message){
                setMessage(res.message)
            }else{
                localStorage.setItem("is_login",1)
                localStorage.setItem("accessToken",res.accessToken)
                localStorage.setItem("refreshToken",res.refreshToken)
                localStorage.setItem("username",res.username);
                localStorage.setItem("permiision",res.permiision)
                window.location = ("/")
            }
            
        })
    }

    return (
        <div>
          <div className="form_course">
            <div className="txtMain">Login</div>
            <div className="from_input">
                <input value={username} onChange={(event)=>setUsernaem(event.target.value)} placeholder="Username" /> <br />
                <input value={password} type="password" onChange={(event)=>setPassword(event.target.value)} placeholder="Password" /> <br />
                <div style={{height : 40}}>
                    {message !== "" && <div className="txtDelete">{message}</div>}
                </div>
                <Botton 
                    title={"Login"}
                    onClick={handleLogin}
                    textColor= "#FFF"
                    bgColor={"#000"}
                />
            </div>
        </div>
        </div>
    )
}

export default LoginScreen;