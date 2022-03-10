import React from 'react'
import Carousel from './Carousel'
import SongCards from './SongCards'

const NewAlbums = (props) => {
    console.log(props)
    return (
    <section className="albums">
    <h2>New Albums</h2>
    <hr />
    <Carousel>
        <SongCards cards={props.songs} />
    </Carousel>
    </section>
    )
}

export default NewAlbums