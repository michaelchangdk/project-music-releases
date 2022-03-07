import React from 'react'
import data from '../data.json'
import heart from '../icons/heart.svg'
import play from '../icons/play.svg'
import dots from '../icons/dots.svg'

let singles = data.albums.items.filter((album) => album.album_type === "single")
// console.log(singles)

const Singles = () => {
    return (
        <section className="singles">
            <h2>New Singles</h2>
            <hr />
            {singles.map((item) => (
                <div key={item.id} className="card">
                <div className="card-image-group">
                        <img src={item.images[0].url} alt="Album cover" />
                        <div className="card-image-overlay"></div>
                        <div className="card-icons-overlay">
                            <img className="icons" src={heart} />
                            <a href={item.external_urls.spotify} rel="noopener noreferrer" target="_blank"><img className="play-icon" src={play} /></a>
                            <img className="icons" src={dots} />
                        </div>
                    </div>
                    <div className="card-text-group">
                        <a href={item.external_urls.spotify} rel="noopener noreferrer"><p className="album-name">{item.name}</p></a>
                        <a href={item.artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer"><p className="artist-name">{item.artists[0].name}</p></a>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Singles