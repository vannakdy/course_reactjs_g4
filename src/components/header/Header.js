import {Link} from "react-router-dom"
import "./Header.css";
const Header = () => {
    return (
        <div>
            <div className="contain_menu">
                <div>
                    <Link className="menu_item" to="/">Home</Link>
                    <Link className="menu_item" to="/student">Student</Link>
                    <Link className="menu_item" to="/course">Course</Link>
                    <Link className="menu_item" to="/classroom">Classroom</Link>
                    <Link className="menu_item" to="/teacher">Teacher</Link>
                    <Link className="menu_item" to="/about">About</Link>
                </div>
                <div>
                    <Link className="menu_item" to="/login">Login</Link>
                    <Link className="menu_item" to="/login">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;