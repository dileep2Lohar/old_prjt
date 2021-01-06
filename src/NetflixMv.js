import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import Cardary from './CardArray'

function Card(props) {
    return (
        <div>
            <a href={props.hLink } target="blank" >
                <button > Watch now</button>
            </a>
            <img alt={props.altimg} />
        </div> 
    )
}

function Amzon(props) {
    return (
        <div>
            <a href={props.hLink } target="blank" >
                <button > amzon</button>
            </a>
            <img alt={props.altimg} />
        </div> 
    )
}
// export default Amzon;

function Prim(props) {
    return (
        <div>
            <a href={props.hLink } target="blank" >
                <button > prim</button>
            </a>
            <img alt={props.altimg} />
        </div> 
    )
}
// export default Prim;

let number = 4

function Carddec() {
        return (
            <>
                <Card  hLink={Cardary[0].cardLink}  altimg={Cardary[1].altimg} />
                <Card  hLink={Cardary[0].cardLink}  altimg={Cardary[1].altimg} />
                {number == "netflix" ? <Amzon /> : <Prim />}
            </>
        )
} 

export default Carddec;