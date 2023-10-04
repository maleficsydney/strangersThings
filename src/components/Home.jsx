import { Link } from "react-router-dom";

export default function Home() {
    

    return (
        <div className="blue">
            <h1> Home </h1>
            <Link to="/login">Sign In</Link>
            <Link to="/register">Create Account</Link>
        </div>
    )
}