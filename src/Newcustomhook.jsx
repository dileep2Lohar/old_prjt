import React, {useEffect, useState} from 'react'

// one another file "Newcustom_1.jsx"


function Customexmple(){
    const [count, setcount] = useState(0)
    const handleClick = () => {
        setcount(count + 2)
    }
    return{
        count,
        handleClick
    }
}
export default Customexmple;

