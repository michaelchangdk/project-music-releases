import React from 'react'
import Albums from './Albums'
import Singles from './Singles'

// import data from '../data.json'
// let array = data.albums.items
// console.log(array)

const Cards = () => {
    return (
        <div>
            <Albums />
            <Singles />
        </div>
    )
}

export default Cards