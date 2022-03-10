import React from 'react'
import heart from '../icons/heart_white.svg'
import play from '../icons/play_white.svg'
import dots from '../icons/dots_white.svg'

let numberOfArtists

const SongCard = (props) => {
    let item = props.item
    return (
        <div>
            <div className="card">
                <div className="card-image-group">
                    <img className="card-image" src={item.images[0].url} alt="Album cover" />
                    <div className="card-image-overlay"></div>
                    <div className="card-icons-overlay">
                        <img className="icons" src={heart} alt="heart icon" />
                        <a href={item.external_urls.spotify} rel="noopener noreferrer" target="_blank"><img className="play-icon" src={play} alt="play button" /></a>
                        <img className="icons" src={dots} alt="more icon" />
                    </div>
                </div>
                <div className="card-text-group">
                    <a href={item.external_urls.spotify} rel="noopener noreferrer"><p className="album-name link-hover">{item.name}</p></a>
                    {(() => {
                    numberOfArtists = item.artists.length;
                    if (numberOfArtists === 1) {
                    return (
                        <a href={item.artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer"><p className="artist-name link-hover">{item.artists[0].name}</p></a>
                    )
                    } else if (numberOfArtists === 2) {
                    return (
                        <div>
                        <a href={item.artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer"><p className="artist-name link-hover">{item.artists[0].name}</p></a>
                        <span className="artist-name">&nbsp;&&nbsp;</span>
                        <a href={item.artists[1].external_urls.spotify} target="_blank" rel="noopener noreferrer"><p className="artist-name link-hover">{item.artists[1].name}</p></a>
                        </div>
                    )
                    } else {
                    return (
                        <div>
                            <a href={item.artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer"><p className="artist-name link-hover">{item.artists[0].name}</p></a>
                            <span className="artist-name">,&nbsp;</span>
                            <a href={item.artists[1].external_urls.spotify} target="_blank" rel="noopener noreferrer"><p className="artist-name link-hover">{item.artists[1].name}</p></a>
                            <span className="artist-name">&nbsp;&&nbsp;</span>
                            <a href={item.artists[2].external_urls.spotify} target="_blank" rel="noopener noreferrer"><p className="artist-name link-hover">{item.artists[2].name}</p></a>
                        </div>
                    )
                    }
                    })()}
                    </div>
                    </div>
        </div>
    )
}

export default SongCard