import Image from 'next/dist/client/image'

import Hero2Banner from '../public/hero2Banner.svg'

const ImageComponent = () => {
  return (
    <>
      <div className=' w-full block order-last md:order-none'>
        {' '}
        <Image
          src={'/Hero2Banner.svg'}
          alt='Hero2Banner'
          height={867}
          width={867}
        />
      </div>
      {/* <div className=' w-full hidden  order-last md:order-none'>
        {' '}
        <Image
          src={'/Hero2Banner.svg'}
          alt='Hero2Banner'
          height={867}
          width={867}
        />
      </div> */}
    </>
  )
}

function Hero2() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:px-16 p-4 content-center '>
      <ImageComponent />
      <div className=' font-semibold my-auto leading-10'>
        <div className=''>
          <h3 className=' text-2xl text-bold mb-6'>Why Join Proddly</h3>
          <ul
            className='list-disc text-2xl list-inside mb-6 text-cyan-600'
            style={{ color: '#00baf7' }}
          >
            <li className=' my-2 md:my-4'>
              <span className='text-black text-lg'>
                Let shoppers find you easily{' '}
                <span className=' hidden md:inline-block '> and quickly.</span>
              </span>
            </li>
            <li className=' my-2 md:my-4'>
              <span className='text-black text-lg'>
                Increase your walk-in and online sales
              </span>
            </li>
            <li className=' my-2 md:my-4'>
              <span className='text-black text-lg'>
                Get online without an e-commerce website
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-2xl text-bold mb-6 '>Features</h3>
          <ul
            className=' list-disc text-2xl list-inside mb-6 text-cyan-600'
            style={{ color: '#00baf7' }}
          >
            <li className=' my-2 md:my-4 '>
              {' '}
              <span className='text-black text-lg'>Proddy 360 Dashboard</span>
            </li>
            <li className=' my-2 md:my-4'>
              <span className='text-black text-lg'>View What`s in Store</span>{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Hero2
