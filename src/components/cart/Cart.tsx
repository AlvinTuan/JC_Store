import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import CartItem from './CartItem'
import { addProductToCart, deleteProductFromCart } from 'redux/cart.slice'
import { ProductType } from 'interface'
import { useState } from 'react'

const Cart = () => {
  const cartList = useSelector((state: RootState) => state.cart.cartList)
  // console.log(cartList)

  const dispatch = useDispatch()
  const handleDeleteProduct = (product: ProductType) => {
    dispatch(deleteProductFromCart(product))
  }
  return (
    <div className='mt-20 px-[71px]'>
      <div>
        <form method='post' className='cart'>
          <table>
            <thead>
              <tr>
                <th className='product-name'>Product</th>
                <th className='product-price'>Price</th>
                <th className='product-quantity'>Quantity</th>
                <th className='product-subtotal'>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartList.map((cart) => (
                <CartItem cart={cart} key={cart.id} handleDeleteProduct={handleDeleteProduct}></CartItem>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  )
}

export default Cart
