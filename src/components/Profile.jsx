import { useState } from "react"

export default function Profile( { token } ) {
    const [ username, setUsername ] = useState("")
    const [ messages, setMessage ] = useState([])

    return (
        <div className="blue">
            <h1> Profile </h1>
        </div>
    )
}