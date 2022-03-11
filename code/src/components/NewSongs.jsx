import React from 'react'
import SongCard from './SongCard'

const NewSongs = (props) => {
    return (
        <section>
        <h2>{props.title}</h2>
        <hr />
        <div className="song-wrapper">
            {props.songs.map((song) => (
                <SongCard key={song.id} item={song} />
            ))}
        </div>
        </section>
    )
}

export default NewSongs
