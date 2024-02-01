// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

import useBaseUrl from '@docusaurus/useBaseUrl'

const SwiperSpacing = () => {
  // Hooks
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
      spacing: 16
    }
  })

  return (
    <div ref={ref} className='keen-slider'>
      <div className='keen-slider__slide'>
        <img src={useBaseUrl('/images/banners/16.jpg')} alt='swiper 16' />
      </div>
      <div className='keen-slider__slide'>
        <img src={useBaseUrl('/images/banners/17.jpg')} alt='swiper 17' />
      </div>
      <div className='keen-slider__slide'>
        <img src={useBaseUrl('/images/banners/18.jpg')} alt='swiper 18' />
      </div>
      <div className='keen-slider__slide'>
        <img src={useBaseUrl('/images/banners/19.jpg')} alt='swiper 19' />
      </div>
      <div className='keen-slider__slide'>
        <img src={useBaseUrl('/images/banners/20.jpg')} alt='swiper 20' />
      </div>
    </div>
  )
}

export default SwiperSpacing
