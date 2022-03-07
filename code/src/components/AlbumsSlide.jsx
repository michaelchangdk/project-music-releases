import React from 'react'
import Flickity from 'react-flickity-component'
import data from '../data.json'
import heart from '../icons/heart.svg'
import play from '../icons/play.svg'
import dots from '../icons/dots.svg'

const tabletQuery = window.matchMedia('(min-width: 768px)')
const desktopQuery = window.matchMedia('(min-width: 1100px')

let albums = data.albums.items.filter((album) => album.album_type === "album")
let autoPlaySpeed

if (tabletQuery.matches) {
    autoPlaySpeed = 4000
} if (desktopQuery.matches) {
    autoPlaySpeed = 5500
} else {
    autoPlaySpeed = 3000
}

const flickityOptions = {
    initialIndex: 4,
    pageDots: false,
    wrapAround: true,
    autoPlay: autoPlaySpeed,
    groupCells: '100%',
}

const AlbumsSlide = () => {
    return (
    <section className="albums-slide">
    <h2>New Albums</h2>
    <hr />
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      {albums.map((item) => (
                <div key={item.id} className="card">
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
                        <a href={item.artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer"><p className="artist-name link-hover">{item.artists[0].name}</p></a>
                    </div>
                </div>
            ))}
    </Flickity>
    </section>
    )
}

export default AlbumsSlide
