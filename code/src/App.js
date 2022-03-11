import React from 'react'
import NewSongs from './components/NewSongs'
import data from './data.json'

let albums = data.albums.items.filter((album) => album.album_type === "album")
let singles = data.albums.items.filter((album) => album.album_type === "single")

export const App = () => {
  return (
    <section className="page">
    <NewSongs songs={albums} title='New Albums' />
    <NewSongs songs={singles} title='New Singles' />
    </section>
  )
}
