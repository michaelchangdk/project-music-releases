import React from 'react'

const ArtistList = (props) => {
let item = props.artists
let numberOfArtists = item.artists.length;
 return (
     <>
    {(() => {
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
        </>
 )   
}

export default ArtistList
