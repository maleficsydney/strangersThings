import { Link } from "react-router-dom/dist";

export default function Navbar() {

    return (
    <nav className="nav">
        <div className="strangers">

        </div>
        {/* <Link to = "/"> Home </Link> */}
        <div className="navButtons">
        <Link to = "/"> Home </Link>
        <Link to = "/posts"> Posts </Link>
        <Link to = "/login"> Login </Link>
        {/* <Link to = "/login"> Log In </Link>
        <Link to = "/register"> Register </Link> */}
        </div>
    </nav>
    )
}