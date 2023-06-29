import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Cart from 'components/cart/Cart'
import Main from 'layout/Main'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path='/'
            element={
              <>
                <Homepage></Homepage>
                <Cart></Cart>
              </>
            }
          ></Route>
          {/* <Route path='/shoesmarket/cart' element={}></Route> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
