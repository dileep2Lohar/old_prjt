import React from 'react'
// import ReactDOM from 'react-dom'

class Didmount extends React.Component{
    constructor(){
        super()
        this.state = {
            name : "dileep",
            company: "thinktanker"
        }
    }
    render(){
        return(
            <div>
                <h3>hello word</h3>
                <h2>{this.state.name}</h2>
                <h2>{this.state.company}</h2>
                <button onClick = {
                    () => {
                        this.setState(
                            {name : 'dileep lohar'}
                        )
                    } 
                } >uapdate</button>
            </div>
        )
    }
}

export default Didmount