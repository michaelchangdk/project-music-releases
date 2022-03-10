import React from 'react'
import ArtistList from './ArtistList'
import heart from '../icons/heart_white.svg'
import play from '../icons/play_white.svg'
import dots from '../icons/dots_white.svg'

const SongCard = (props) => {
    let item = props.item
    return (
        <>
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
                    <ArtistList artists={item} />
                </div>
            </div>
        </>
    )
}

export default SongCard
