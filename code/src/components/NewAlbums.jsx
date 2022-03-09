import React from 'react'
import Carousel from './Carousel'
import SongCards from './SongCards'

const NewAlbums = (props) => {
    return (
    <section className="albums">
    <h2>New Albums</h2>
    <hr />
    <Carousel>
        <SongCards songs={props.children.props.children} />
    </Carousel>
    </section>
    )
}

export default NewAlbums