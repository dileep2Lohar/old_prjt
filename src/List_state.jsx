import React from 'react'

const state = {
    user : [
        {id: 1, name: "rohal", password: "has512" },
        {id: 2, name: "parth", password: "has513" },
        {id: 3, name: "hiren", password: "has514" }
    ]
}
const List_funt = () => {
    return(
        <>
            <div>
                <h2>{state.user[0].password}</h2>
            </div>
        </>
    )
}

export default List_funt

