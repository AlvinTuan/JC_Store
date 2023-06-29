import { ProductType } from 'interface'
import useSWR from 'swr'
import { fetcher } from '../../config'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from 'components/products/ProductCard'

interface ProductsForCategoriesProp {
  type: string
}

const ProductsForCategories: React.FC<ProductsForCategoriesProp> = ({ type }) => {
  let url: string = ''
  if (type === 'All products') {
    url = 'https://fakestoreapi.com/products'
  } else {
    url = `https://fakestoreapi.com/products/category/${type}`
  }
  const { data, error } = useSWR<ProductType[]>(url, fetcher)
  const products = data || []

  return (
    <>
      <Swiper spaceBetween={40} slidesPerView={'auto'}>
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product}></ProductCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ProductsForCategories
