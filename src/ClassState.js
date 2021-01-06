import React from 'react'

class Stunt extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : "dileep",
            company : "THink tanker",
            id : this.props.id
        }
    }
    HandleClick = () => {
        // this.setState({name : "dileep lohar", id : "45"})
        this.setState( (state, props) => {
            console.log(props)
        })
    }
    render() {
        return(
            <div>
                <h1> my name is {this.state.name} my id {this.state.id}</h1>
                <button onClick={this.HandleClick}>click me</button>
            </div>
        )
    }
}
export default Stunt;