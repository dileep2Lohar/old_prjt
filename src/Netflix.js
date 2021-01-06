import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import Cardary from './CardArray'
import './App.css'

const stylesheet = {
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "8px 5px",
    outline: "none"
}

function Card(props) {
    return (
        <div className="box">
            <a href={props.hLink} target="blank" >
                <button style={stylesheet}> Watch now</button>
            </a>
            <img alt={props.altimg} />
        </div>
    )
} 

function Nettour() {
    return (
        <>
            <Card  hLink = {Cardary[0].cardLink}  altimg={Cardary[0].altimg} />
        </>
    )
}
export default Nettour;