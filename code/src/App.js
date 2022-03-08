import React from 'react'
// import Header from './components/Header'
// import Footer from './components/Footer'
import Albums from './components/Albums'
// import Singles from './components/Singles'
import Playlists from './components/Playlist'
import AlbumsSlide from './components/AlbumsSlide'
import SinglesSlide from 'components/SinglesSlide'

// array.map((item) => {
//   console.log(item.artists.length)
// })

export const App = () => {
  return (
    <section className="page">
    {/* <Header /> */}
    <AlbumsSlide />
    <SinglesSlide />
    <Playlists />
    {/* <Albums /> */}
    {/* <Footer /> */}
    </section>
  )
}