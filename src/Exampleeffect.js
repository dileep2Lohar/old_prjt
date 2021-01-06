import React, {useState} from 'react'
import { useEffect } from 'react';

const ExampleEffect = () => {
    const[Count, setCount] = useState(0)
    const[Count1, setCount1] = useState(50)

    const increment = () => {
        setCount(Count + 1);
    };
    useEffect(() => {
        console.log("use Effect called");
    },[Count1]);
    const decrement = () => {
        setCount1(Count1 - 1);
    };
    return(
        <>
            <h2>Count up {Count}</h2>
            <button type="button" onClick={increment}> Count up </button>

            <h2>Count down {Count1}</h2>
            <button type="button" onClick={decrement}> Count Down</button>
        </>
    )
}
export default  ExampleEffect