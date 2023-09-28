import { Link } from "react-router-dom/dist";

export default function Navbar() {

    return (
    <nav id="nav">
        {/* <Link to = "/"> Home </Link> */}
        <Link to = "/home"> Home </Link>
        <Link to = "/posts"> Posts </Link>
        <Link to = "/login"> Login </Link>
        {/* <Link to = "/login"> Log In </Link>
        <Link to = "/register"> Register </Link> */}

    </nav>
    )
}