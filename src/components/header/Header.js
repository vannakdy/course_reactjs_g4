import {Link} from "react-router-dom"
import "./Header.css";
const Header = () => {
    const username = localStorage.getItem("username");
    const is_login = localStorage.getItem("is_login");
    const handleLogout = () => {
        localStorage.clear();
        window.location = "/login"
    }
    return (
        <div>
            <div className="contain_menu">
                {is_login == "1" ?
                    <>
                        <div>
                            <Link className="menu_item" to="/">Home</Link>
                            <Link className="menu_item" to="/student">Student</Link>
                            <Link className="menu_item" to="/course">Course</Link>
                            <Link className="menu_item" to="/classroom">Classroom</Link>
                            <Link className="menu_item" to="/teacher">Teacher</Link>
                            <Link className="menu_item" to="/about">About</Link>
                        </div>
                        <div>
                            <Link className="menu_item" to="/">{username}</Link>
                            <Link onClick={handleLogout} className="menu_item" to="/login">Logout</Link>
                        </div>
                    </>
                    : 
                    <>
                        <div>
                            <Link className="menu_item" to="/">Home</Link>
                        </div>
                        <div>
                            <Link className="menu_item" to="/login">Login</Link>
                            <Link className="menu_item" to="/login">Register</Link>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Header;