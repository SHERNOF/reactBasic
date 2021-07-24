import React from 'react'
import Cards from '../cards/Cards'
import './cardlist.css'

export default function Cardlist(props) {
    return (
        <div className="cardlist">
        {
          props.angels.map( angel => (
            <Cards angel={angel} key={angel.id}></Cards>
          ) )
        }
        </div>
    )
}
