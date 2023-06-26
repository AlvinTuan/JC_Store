import useSWR from 'swr'
import { fetcher } from '../../config'
import { ProductType } from '../../interface'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css'
import { useEffect, useState } from 'react'
import ProductCard from '../products/ProductCard'

const BeActive = () => {
  const [products, setProduct] = useState<ProductType[]>([])
  const { data, error } = useSWR<ProductType[]>('https://fakestoreapi.com/products', fetcher)

  useEffect(() => {
    if (!data) return
    setProduct(data)
  }, [data])
  return (
    <>
      <div className='mt-6 bg-secondary text-center text-[26px] font-light text-white'>
        <p>Download our new app today! Dont miss our mobile-only offers and shop with Android Play.</p>
      </div>
      <div className='banner-bg flex items-center'>
        <img src='/15.jpg' alt='' />
        <div className='w-[924px]'>
          <Swiper grabCursor={true} spaceBetween={4} slidesPerView={'auto'}>
            {products.map((product) => (
              <SwiperSlide>
                <ProductCard product={product} key={product.id}></ProductCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default BeActive
