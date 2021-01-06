import React from 'react'

const state = {
    user : [
        {id: "1", name: "dileep"}
    ]
} 

const arry = [0,1,2,3,4,6,5,8,9,10]

const newarry = arry.map( (num) => {
    return <li name = "THINK">{num * 2}</li>
} )

const Array = [
    { id: 1, name : "dileep", company: "ThinkTanker" },
    { id: 2, name : "hiren", company: "think tanker" }
]

const NewArray = Array.map( () => {
    return(
        console.log(newarry),
        <div style={{display:"inline-block"}}>
            <p>my id  <h2>{Array[0].id}</h2>  my name is  <h2>{Array[0].company}</h2></p>
        </div>
    )
} )

const List = () => {
    return(
        <React.Fragment>
            <ul>
                {newarry}
            </ul>
            <div>
                {NewArray}
            </div>
            <div className="new_div">
                <ul>
                    {
                        arry.map( (num) => (<li>{num * 5}</li>))
                    }
                </ul>
            </div>
        </React.Fragment>
    )
}

export default List;
