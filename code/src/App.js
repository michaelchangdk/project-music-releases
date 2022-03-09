import React from 'react'
import NewAlbums from './components/NewAlbums'
// import NewSingles from './components/NewSingles'
// import SongCards from './components/SongCards.jsx'
// import Carousel from './components/Carousel'
import data from './data.json'

let albums = data.albums.items.filter((album) => album.album_type === "album")
let singles = data.albums.items.filter((album) => album.album_type === "single")

export const App = () => {
  return (
    <section className="page">
    <NewAlbums songs={albums}>
    </NewAlbums>
    {/* <Carousel>
      <SongCards songs={albums} />
    </Carousel> */}
    {/* <NewSingles />
    <Carousel>
      <SongCards songs={singles} />
    </Carousel> */}
    </section>
  )
}