import React, { useState } from 'react'
import './MainContent.scss'
import SlideShow from '../slide-show/SlideShow'
import Paginate from '../paginate/Paginate'
import Grid from '../grid/Grid'

const MainContent = () => {
  const images = [
    {
      url: 'https://picsum.photos/1200/800',
      rating: 9.5
    },
    {
      url: 'https://picsum.photos/1200/700',
      rating: 10
    },
    {
      url: 'https://picsum.photos/1200/600',
      rating: 6.7
    },
    {
      url: 'https://picsum.photos/1200/800',
      rating: 9.5
    },
    {
      url: 'https://picsum.photos/1200/700',
      rating: 10
    },
    {
      url: 'https://picsum.photos/1200/600',
      rating: 6.7
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
      <Grid images={images} />
    </div>
  )
}

export default MainContent
