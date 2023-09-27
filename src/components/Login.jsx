import { Link } from "react-router-dom"

export default function Login() {

    return (
    <div>
        <div> Log In! </div>

        <form>
            <label> No Account With Us? </label>
            <Link to = "/register"><button> Register </button></Link>
        </form>
    </div>
    )
}