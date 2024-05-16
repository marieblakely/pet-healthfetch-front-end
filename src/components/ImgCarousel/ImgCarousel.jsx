// npm modules
import { useState } from 'react'

// css
import './ImgCarousel.css'

const ImgCarousel = ({ photos }) => {
  const [imgIdx, setImgIdx] = useState(0)

  const handleNext = () => {
    setImgIdx(imgIdx + 1)
  }

  const handlePrev = () => {
    setImgIdx(imgIdx - 1)
  }


  return (
    <div className='carousel-container'>
      <button className='carousel-btn' disabled={imgIdx <= 0} onClick={handlePrev}>{`<`}</button>
      <div className="photo-div" style={{backgroundImage: `url(${photos[imgIdx]})`}}></div>
      <button className='carousel-btn' disabled={imgIdx >= photos.length - 1} onClick={handleNext}>{`>`}</button>
    </div>
  )
}

export default ImgCarousel