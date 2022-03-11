import React from 'react'
import Carousel from './Carousel'
import SongCard from './SongCard'

const NewSongs = (props) => {
    return (
        <section>
        <h2>{props.title}</h2>
        <hr />
        <Carousel>
            {props.songs.map((song) => (
                <SongCard key={song.id} item={song} />
            ))}
        </Carousel>
        </section>
    )
}

export default NewSongs
