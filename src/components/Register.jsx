import { useState } from "react"

export default function Register( { token } ) {
    const [ username, setUsername ] = useState("")
    const [ messages, setMessage ] = useState([])

    return (
        <div className="blue">
            <h1> Register Form here </h1>
        </div>
    )
}