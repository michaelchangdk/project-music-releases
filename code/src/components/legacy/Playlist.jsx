import React from 'react'
import stretchGoal from '../stretch-goal.json'
import heart from '../icons/heart.svg'
import play from '../icons/play.svg'
import dots from '../icons/dots.svg'

let playlists = stretchGoal.playlists.items
// console.log(playlists)

const Playlists = () => {
    return (
        <section className="playlists">
            <h2>Playlists</h2>
            <hr />
            {playlists.map((item) => (
                <div key={item.id} className="playlist-card">
                <div className="card-image-group">
                <img className="playlist-image" src={item.images[0].url} alt="Playlist cover" />
                <div className="card-image-overlay"></div>
                        <div className="card-icons-overlay">
                            <img className="icons" src={heart} alt="heart icon" />
                            <a href={item.external_urls.spotify} rel="noopener noreferrer" target="_blank"><img className="play-icon" src={play} alt="play button" /></a>
                            <img className="icons" src={dots} alt="more icon" />
                        </div>
                    </div>
                <a href={item.external_urls.spotify} target="_blank" rel="noopener noreferrer"><p className="playlist-name link-hover">{item.name}</p></a>

                </div>
            ))}
        </section>
    )
}

export default Playlists