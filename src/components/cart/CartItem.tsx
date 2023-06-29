import { ProductType } from 'interface'
import { useState } from 'react'

interface CartItemProps {
  cart: ProductType
  handleDeleteProduct: (product: ProductType) => void
}

const CartItem = ({ cart, handleDeleteProduct }: CartItemProps) => {
  const [quantity, setQuantity] = useState(1)
  return (
    <tr className='border-gray h-[132px] border border-x-transparent px-3 py-3'>
      <td>
        <div className='flex items-center gap-x-8'>
          <a href='#'>
            <img src={cart.image} alt='' className='h-[107px] w-[107px]' />
          </a>
          <div>
            <a href='#'>{cart.title}</a>
          </div>
        </div>
      </td>
      <td>
        <span className='text-base font-medium'>${cart.price}</span>
      </td>
      <td>
        <input
          type='number'
          id='quantity'
          name='quantity'
          min='1'
          max='5'
          value={1}
          className='py-2 pl-2 pr-5 text-base'
          readOnly
        />
      </td>
      <td>
        <div className='flex items-center gap-x-2'>
          <span className='text-base font-medium'>${cart.price}</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-6 w-6 cursor-pointer hover:rounded-full hover:bg-secondary hover:p-1'
            onClick={() => handleDeleteProduct(cart)}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </div>
      </td>
    </tr>
  )
}

export default CartItem
