import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product, ProductType } from 'interface'

interface cartState {
  count: {
    quantitySum: number
    priceSum: number
  }
  cartList: ProductType[]
}

const initialState: cartState = {
  count: {
    quantitySum: 0,
    priceSum: 0
  },
  cartList: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<ProductType>) => {
      state.count.quantitySum++
      state.count.priceSum += parseFloat(action.payload.price)
      state.cartList.push(action.payload)
    },
    deleteProductFromCart: (state, action: PayloadAction<ProductType>) => {
      const productIdx = action.payload.id
      state.count.quantitySum--
      if (state.count.quantitySum < 0) {
        state.count.quantitySum = 0
      }
      const foundPostIdx = state.cartList.findIndex((product) => product.id === productIdx)
      if (foundPostIdx !== -1) {
        state.cartList.splice(foundPostIdx, 1)
      }
      state.count.priceSum -= parseFloat(action.payload.price)
      if (state.count.priceSum < 0) {
        state.count.priceSum = 0
      }
    }
  }
})

export const { addProductToCart, deleteProductFromCart } = cartSlice.actions

const cartReducer = cartSlice.reducer

export default cartReducer
