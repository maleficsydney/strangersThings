import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
// import App from "../App";

const COHORT_NAME = '2302-ACC-PT-WEB-PT-B';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function Login() {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [token, setToken] = useState("");
    const [ error, setError ] = useState(null);
    // const [ messages, setMessage ] = useState([]);
    // const [ token, setToken ] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch(
                `${BASE_URL}/users/login`,
                    {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user: {
                            username: username,
                            password: password
                        }
                    })}
                    
                    
        );
            // const result = await response.json();
            const result = await response.json();
            console.log(result)
            setToken(result.data.token)
            localStorage.setItem("token" , result.data.token);
        } catch (err) {
            console.error(err);
            setError("An error occured while registering.");
        }
    }

    useEffect(() => {
        console.log("Token", token)
    }, [token]);

    return (
        <div className="blue">
            <h2> Sign-In </h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username: {" "}
                    <input
                    value={username}
                    onChange={ (e) => {
                        setUsername(e.target.value)
                    }}
                    />
                </label>
                <label>
                    Password: {" "}
                    <input
                    value={password}
                    onChange={ (e) => {
                        setPassword(e.target.value)
                    }}
                    />
                </label>
                <button> Submit </button>
            </form>
            <form>
                <label> Don't Have an Account Yet? </label>
                <Link to = "/register"><button> Register </button></Link>
            </form>
        </div>
    )
}