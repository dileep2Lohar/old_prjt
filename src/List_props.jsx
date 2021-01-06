import React from 'react'

const NewList = [0,2,3,4]

const AryFunct = () => { 
    return(
        <>
            <h2>Think tanker</h2>
            <NewFunt number={NewList}/>
        </>
    )
}

const NewFunt = (props) => {
    const arr = props.number;
    console.log(arr + "malviya")
    return(
        <React.Fragment>
            <ul>
                {
                    arr.map( (num) => (<li>{num * 5}</li>))
                }
            </ul>
        </React.Fragment>
    )
}  
export default AryFunct;
