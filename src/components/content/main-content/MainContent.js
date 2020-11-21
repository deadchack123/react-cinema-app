import React, { useState } from 'react'
import './MainContent.scss'
import SlideShow from '../slide-show/SlideShow'
import Paginate from '../paginate/Paginate'

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
  const [currentPage, setCurrentPage] = useState(1)

  const paginate = (type) => {
    if (type === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    } else {
      setCurrentPage((prev) => prev + 1)
    }
  }

  return (
    <div className="main-content">
      <SlideShow images={images} auto={false} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
    </div>
  )
}

export default MainContent
