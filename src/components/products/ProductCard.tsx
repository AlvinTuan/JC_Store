import { ProductType } from '../../interface'

interface ProductCardProp {
  product: ProductType
}

const ProductCard = ({ product }: ProductCardProp) => {
  return (
    <div className='product-inner flex h-full w-[365px] flex-col px-[15px] py-[17px] text-center'>
      <a href='#'>
        <img src={product.image} alt={product.title} className='h-[359px] w-[359px]' />

        <div className='flex flex-1 flex-col'>
          <span className='mt-[6px] inline-block text-base text-secondary'>${product.price}</span>
          <h2 className='mt-[6px] text-sm text-gray-400'>{product.title}</h2>
          <div className='flex items-center justify-end gap-x-1 text-gray-500'>
            <img src='/star.png' alt='' />
            <span>
              {product.rating.rate.toFixed(1)} ({product.rating.count})
            </span>
          </div>
          <div className='hover-area'>
            <a
              href='#'
              className='add-to-cart mt-3 inline-block w-full rounded-2xl border-2 border-secondary py-1 text-secondary '
            >
              <span>Add to cart</span>
            </a>
            <a href='#' className='mt-3 inline-block'>
              <span className='font-light'>+ Compare</span>
            </a>
          </div>
        </div>
      </a>
    </div>
  )
}

export default ProductCard
