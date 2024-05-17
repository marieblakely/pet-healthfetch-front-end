// npm modules
import { useState } from 'react'

// css
import styles from './ImgCarousel.module.css'

const ImgCarousel = ({ photos }) => {
  const [imgIdx, setImgIdx] = useState(0)

  const handleNext = () => {
    setImgIdx(imgIdx + 1)
  }

  const handlePrev = () => {
    setImgIdx(imgIdx - 1)
  }


  return (
    <div className={styles.carouselContainer}>
      <button className={styles.carouselBtn} disabled={imgIdx <= 0} onClick={handlePrev}>{`<`}</button>
      <div className={styles.photoDiv} style={{backgroundImage: `url(${photos[imgIdx]})`}}></div>
      <button className={styles.carouselBtn} disabled={imgIdx >= photos.length - 1} onClick={handleNext}>{`>`}</button>
    </div>
  )
}

export default ImgCarousel