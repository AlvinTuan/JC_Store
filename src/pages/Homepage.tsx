import BeActive from '../components/beactive/BeActive'
import ProductList from '../components/products/ProductList'

const Homepage = () => {
  return (
    <>
      <header>
        <div className='flex h-[70px] items-center text-base'>
          <img src='/jc-logo.png' alt='' className='h-[70px] object-cover' />
          <div className='menu pl-[70px] pr-[384px] font-medium'>
            <ul className='p-0'>
              <li className='text-red-500'>SUPER DEALS</li>
              <li>MOTHER`S DAY</li>
              <li>PAGES</li>
              <li>LOGITECH SALE</li>
              <li>HEADPHONES SALE</li>
            </ul>
          </div>
          <div className='ml-12 flex items-center'>
            <a href='#' className='mr-12 flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5'
                />
              </svg>
              <span className='pl-2'>0</span>
            </a>
            <a href='#' className='mr-12 flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                />
              </svg>
              <span className='pl-2'>0</span>
            </a>
            <a href='#' className='mr-10 flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                />
              </svg>
              <span className='inline-block rounded-full bg-slate-200 p-1'>0</span>
              <div className='pl-5'>
                <span className='text-gray-400'>Your Cart</span>
                <span className='block font-medium'>$0.00</span>
              </div>
            </a>
          </div>
        </div>
      </header>

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
      {/* <footer className="border border-blue-700">
        <div>footer</div>
      </footer> */}
      {/* <BeActive></BeActive> */}
    </>
  )
}

export default Homepage
