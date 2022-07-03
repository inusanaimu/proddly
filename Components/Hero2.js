import Image from 'next/dist/client/image'

import HeroBanner from '../public/hero2Banner.svg'

const ImageComp = () => {
  return (
    <>
      <div className=' w-full md:hidden flex order-last md:order-none'>
        {' '}
        <Image
          src={'/Hero2Banner.svg'}
          alt='Banner'
          height={867}
          width={867}
          className=''
        />
      </div>
      <div className=' w-full hidden md:block order-last md:order-none'>
        {' '}
        <Image
          src={'/Hero2Banner.svg'}
          alt='Banner'
          height={330}
          width={318}
          className=''
        />
      </div>
    </>
  )
}

function Hero2() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:px-24 p-4 content-center '>
      <ImageComp />
      <div className=' my-auto leading-10'>
        <div className='  '>
          <h3 className=' text-xl text-bold mb-6'>Why Join Proddly</h3>
          <ul className='list-disc list-inside mb-6'>
            <li>
              Let shoppers find you easily{' '}
              <span className=' hidden md:inline-block '> and quickly.</span>
            </li>
            <li>Increase your walk-in and online sales</li>
            <li>Get online without an e-commerce website</li>
          </ul>
        </div>
        <div>
          <h3 className='text-xl text-bold mb-6 '>Features</h3>
          <ul className='list-disc list-inside  '>
            <li>Proddy 360 Dashboard</li>
            <li>View What`s in Store </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Hero2
