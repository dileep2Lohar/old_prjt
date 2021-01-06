import React, {useState} from 'react'




// const StateFunct = () => {
//     const [Name, setName] =  useState("dileep")
//     return(
//         <> 
//             <h2> Use State</h2>
//             <h3> name : {Name}</h3>
//             <button onClick={() => {setName("dileep lohar")}}>Upadate</button>
//         </>
//     )
// };

// const StateFunct = () => {
//     const ExapmleWiWithVariable = useState("dileep");
//     const Name = ExapmleWiWithVariable[0];
//     const setName = ExapmleWiWithVariable[1];


//     return(
//         <> 
//             <h2> Use State</h2>
//             <h3> name : {Name}</h3>
//             <button onClick={() =>{setName("dileep lohar")}}>Upadate</button>
//         </>
//     )
// };


const StateFunct = () => {
    const [Name, setName] =  useState("dileep");

    // const SetNames  = () => {
    //     setName("dileep lohar")
    // }

    return(
        <> 
            <h2> Use State</h2>
            <h3> name : {Name}</h3>
            <button onClick={() =>{setName("dileep lohar")}}>Upadate</button>
        </>
    )
};
export default StateFunct;