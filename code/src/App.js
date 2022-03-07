import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Cards from './components/Cards'
import Playlists from './components/Playlist'

export const App = () => {
  return (
    <section className="page">
    {/* <Header /> */}
    <Cards />
    <Playlists />
    {/* <Footer /> */}
    </section>
  )
}