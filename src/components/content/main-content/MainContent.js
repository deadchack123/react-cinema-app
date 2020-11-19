import React from 'react'
import './MainContent.scss'
import SlideShow from '../slide-show/SlideShow'

const MainContent = () => {
  const images = [
    {
      url: 'https://picsum.photos/1200/800'
    },
    {
      url: 'https://picsum.photos/1200/700'
    },
    {
      url: 'https://picsum.photos/1200/600'
    }
  ]
  return (
    <div className="main-content">
      <SlideShow images={images} auto={false} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">Pagination</div>
      </div>
    </div>
  )
}

export default MainContent
