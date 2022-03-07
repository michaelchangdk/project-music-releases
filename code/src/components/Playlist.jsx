import React from 'react'
import stretchGoal from '../stretch-goal.json'

let playlists = stretchGoal.playlists.items
console.log(playlists)

const Playlists = () => {
    return (
        <section className="playlists">
            <h2>Playlists</h2>
            <hr />
            {playlists.map((item) => (
                <div key={item.id} className="playlist-card">
                <img className="playlist-image" src={item.images[0].url} alt="Playlist cover" />
                <a href={item.external_urls.spotify} target="_blank" rel="noopener noreferrer"><p className="playlist-name">{item.name}</p></a>
                </div>
            ))}
        </section>
    )
}

export default Playlists