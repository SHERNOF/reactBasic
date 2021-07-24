import React from 'react'
import './cards.css'

export default function Cards(props) {
    return (
        <div className="cards">
            <img src={`https://robohash.org/${props.angel.id}?set=set2&size=100x100`} alt="robots"></img>
            <h3>{props.angel.name}</h3>
            <h4>{props.angel.email}</h4>
        </div>
    )
}
