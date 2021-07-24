import React from 'react'
import './searchbox.css'

export default function Searchbox({ placeholder, handlechange }) {
    return (
        <div className="searchbox">
            <input type="search" placeholder={ placeholder } onChange={ handlechange }></input>
        </div>
    )
}
