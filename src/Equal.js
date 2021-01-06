import React from 'react'

const Equalval = (props) => {
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let {x,y,z} = props;

    if( (x===y) && (y===z) ){
        return(
            <>
                <h2>equal 😄</h2>
                <h3>{x} {y} {z}</h3>
            </>
        )      
    }
    else{
        return(
            <>
                <h2>not equal</h2>
                <h3>{x} {y} {z}</h3>
            </>
        )
    }
}

const Equal = () => {
    return(
        <>
            <Equalval x = "2" y="2" z = "4"/>
            <Equalval x = "7" y="2" z = "2"/>
            <Equalval x = "2" y="2" z = "2"/>
        </>
    )
}



export default Equal;


