import React from 'react'
import Carousel from './Carousel'
import SongCard from './SongCard'

const NewAlbums = (props) => {
    return (
        <section className="albums">
        <h2>New Albums</h2>
        <hr />
        <Carousel>
            {props.songs.map((song) => (
                <SongCard key={song.id} item={song} />
            ))}
        </Carousel>
        </section>
    )
}

export default NewAlbums