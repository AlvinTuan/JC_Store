export interface ProductType {
  id: number
  image: string
  price: number
  rating: {
    rate: number
    count: number
  }
  title: string
}
