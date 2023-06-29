import BeActive from '../components/beactive/BeActive'
import ProductList from '../components/products/ProductList'

const Homepage = () => {
  return (
    <>
      <div className='home-banner flex h-[760px] gap-x-32'>
        <div className='ml-[284px] text-white'>
          <span className='mt-[185px] inline-block border-2 border-white px-7 py-2 text-xl'>ONLY IN 4.04-10.04</span>
          <h2 className='my-14 w-[350px] text-right text-7xl'>
            WEEKEND SALE
            <br />
            <span className='text-xl'>-20% CUT FOR EVERYTHING*</span>
          </h2>
          <button className='relative left-[170px] flex h-[56px] items-center gap-x-1 bg-white px-5 py-2 text-secondary'>
            Get Yours Now
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' />
            </svg>
          </button>
        </div>
        <img src='/banner.png' alt='' className='mb-12' />
      </div>
      <div className='banner__collection mb-[85px] mt-6'>
        <div className='banner-bg'>
          <img src='/women-collec.png' alt='' className='object-cover' />
          <div className='banner-content'>
            <h3>WOMEN</h3>
            <span>NEW COLLECTION</span>
          </div>
        </div>
        <div className='banner-bg'>
          <img src='/elec.png' alt='' className='h-full w-full object-cover' />
          <div className='banner-content'>
            <h3>ELECTRIC</h3>
            <span>NEW COLLECTION</span>
          </div>
        </div>
        <div className='banner-bg'>
          <img src='/jewelery.png' alt='' className='h-full w-full object-cover' />
          <div className='banner-content'>
            <h3>JEWELERY</h3>
            <span>NEW COLLECTION</span>
          </div>
        </div>
        <div className='banner-bg'>
          <img src='/men.png' alt='' className='object-cover' />
          <div className='banner-content'>
            <h3>MEN</h3>
            <span>NEW COLLECTION</span>
          </div>
        </div>
      </div>
      <ProductList></ProductList>

      {/* <BeActive></BeActive> */}
    </>
  )
}

export default Homepage
