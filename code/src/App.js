import React from 'react'
// import Header from './components/Header'
// import Playlists from './components/Playlist'
import AlbumsSlide from './components/AlbumsSlide'
import SinglesSlide from 'components/SinglesSlide'

export const App = () => {
  return (
    <section className="page">
    {/* <Header /> */}
    <AlbumsSlide />
    <SinglesSlide />
    {/* <Playlists /> */}
    </section>
  )
}