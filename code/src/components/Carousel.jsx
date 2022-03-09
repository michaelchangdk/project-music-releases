import React from 'react'
import Flickity from 'react-flickity-component'


const tabletQuery = window.matchMedia('(min-width: 768px)')
const desktopQuery = window.matchMedia('(min-width: 1100px')
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

const Carousel = (props) => {
    return(
    <Flickity
    className={'carousel'} // default ''
    elementType={'div'} // default 'div'
    options={flickityOptions} // takes flickity options {}
    disableImagesLoaded={false} // default false
    reloadOnUpdate // default false
    static // default false
    >
    {props.children}
    </Flickity>
    )
}

export default Carousel