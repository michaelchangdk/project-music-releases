import React from 'react'
import Carousel from './Carousel'
import SongCard from './SongCard'

const NewSingles = (props) => {
    return (
        <section>
        <h2>New Singles</h2>
        <hr />
        <Carousel>
            {props.songs.map((song) => (
                <SongCard key={song.id} item={song} />
            ))}
        </Carousel>
        </section>
    )
}

export default NewSingles
