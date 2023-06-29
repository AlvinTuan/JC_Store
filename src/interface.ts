export interface ProductType {
  id: number
  image: string
  price: string
  rating: {
    rate: number
    count: number
  }
  title: string
}

export interface Product {
  product: ProductType
}
