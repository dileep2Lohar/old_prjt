import React, { useState } from 'react';
import Customexmple from './Newcustomhook'

// one another file "Newcustomhook.jsx"

const Newcustom_1 = () => {
    const data = Customexmple();
    const data1 = Customexmple();
    return(
        <React.Fragment>
            <h2>Count : {data1.count}</h2>
            <button onClick = {data1.handleClick}>increment</button>
        </React.Fragment>
    )
}

export default Newcustom_1;