import 'swiper/css'
import { useState } from 'react'
import labelItem from '../../dataJson/labelItem.json'
import ProductsForCategories from 'components/categories/ProductsForCategories'

const ProductList = () => {
  const [toggle, setToggle] = useState(1)
  function handleClickCategory(id: number) {
    setToggle(id)
  }
  return (
    <section>
      <div className='mx-auto w-full max-w-[1661px] font-medium'>
        <div>
          <h2 className='mb-6 text-center text-3xl'>Shop New Arrivals 2017</h2>
          <ul className='mb-7 flex items-center justify-center gap-x-10  border-b pb-2 text-lg'>
            {labelItem.map((item) => (
              <li
                key={item.index}
                onClick={() => handleClickCategory(item.index)}
                className={toggle === item.index ? 'cursor-pointer text-secondary' : 'cursor-pointer text-black'}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className='product-list'>
          {toggle === 1 && <ProductsForCategories type='All products'></ProductsForCategories>}
          {toggle === 2 && <ProductsForCategories type='electronics'></ProductsForCategories>}
          {toggle === 3 && <ProductsForCategories type='jewelery'></ProductsForCategories>}
          {toggle === 4 && <ProductsForCategories type="men's clothing"></ProductsForCategories>}
          {toggle === 5 && <ProductsForCategories type="women's clothing"></ProductsForCategories>}
        </div>
      </div>
    </section>
  )
}

export default ProductList
