import React, { useState } from 'react'

function Text(){
    const Newvariable = useState("think tanker")
    const [name, setName] = useState("dileep")
    const [roll, setroll] = useState(101)

    const HandleClick = () => {
        setName("rahul")
        setroll(roll + 2)
    }

    return(
        <>
            <h2>my name is {name} and company name is {Newvariable[0]} </h2>
            <p>roll : {roll}</p>
            <button onClick={HandleClick}>Change</button>
        </>
    )
}

export default Text;