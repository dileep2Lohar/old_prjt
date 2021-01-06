import React, { useState, useEffect } from 'react'

function App(){
    const [count, setCount] = useState(2)
    const [countDec, setcountDec] = useState(50)
    const Increment = () => {
        setCount(count + 1)
    }
    const Decrement = () => {
        setcountDec(countDec - 1)
    }
    useEffect( () => {
        console.log("useEffect Called")
    }, [count, countDec])
    return(
        <>
            <h2>Count up  : {count}</h2>
            <button onClick={Increment}>increment</button>

            <h2>Count down : {countDec}</h2>
            <button onClick={Decrement}>decrement</button>

            {/* <h2>Count Down  : {count}</h2> */}
        </>
    )
};
export default App;
