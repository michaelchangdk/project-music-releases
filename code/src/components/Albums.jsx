import React from 'react'
import data from '../data.json'
import heart from '../icons/heart_white.svg'
import play from '../icons/play_white.svg'
import dots from '../icons/dots_white.svg'

let albums = data.albums.items.filter((album) => album.album_type === "album")
// console.log(albums)

const Albums = () => {
    return (
        <section className="albums">
            {/* <h2>New Albums</h2>
            <hr /> */}
            {albums.map((item) => (
                <div key={item.id} className="card">
                    <div className="card-image-group">
                        <img src={item.images[0].url} alt="Album cover" />
                        <div className="card-image-overlay"></div>
                        <div className="card-icons-overlay">
                            <img className="icons" src={heart} alt="heart icon" />
                            <a href={item.external_urls.spotify} rel="noopener noreferrer" target="_blank"><img className="play-icon" src={play} alt="play button" /></a>
                            <img className="icons" src={dots} alt="more icon" />
                        </div>
                    </div>
                        <a href={item.external_urls.spotify} rel="noopener noreferrer"><p className="album-name link-hover">{item.name}</p></a>
                        <a href={item.artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer"><p className="artist-name link-hover">{item.artists[0].name}</p></a>
                </div>
            ))}
        </section>
    )
}

export default Albums