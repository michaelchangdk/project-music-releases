import React from 'react'
import Carousel from './Carousel'
import SongCards from './SongCards'

const NewSingles = (props) => {
return (
    <section className="singles-slide">
    <h2>New Singles</h2>
    <hr />
    <Carousel>
        <SongCards songs={props.children.props.children} />
    </Carousel>
    </section>
)
}

export default NewSingles