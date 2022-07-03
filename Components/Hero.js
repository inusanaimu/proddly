import Image from 'next/dist/client/image'

import lgBanner from '../public/lgBanner.svg'
import smBanner from '../public/smBanner.svg'

const Banner = () => {
  return (
    <>
      <div className='hidden md:flex  '>
        <Image
          // layout='fill'
          src={'/lgBanner.svg'}
          alt='lgBanner'
          height={867}
          width={867}
          className=' w-full'
        />
      </div>
      <div className='text-right block md:hidden relative -top-24'>
        <Image
          // layout='fill'
          src={'/smBanner.svg'}
          alt='smBanner'
          height={353}
          width={353}
          className=''
        />
      </div>
    </>
  )
}

function Hero() {
  return (
    <div className='w-full grid grid-flow-cols-1 grid-cols-1 md:grid-cols-3'>
      <div className='  p-4 md:pl-28 md:my-auto '>
        <h1 className=' text-4xl font-bold mb-2 '>Boost sales on Proddly.</h1>
        <h5 className='my-6'>
          Get your inventory infront of millions of shoppers and increase your
          sales by 99.99%
        </h5>
        <button
          className='md:py-5 md:px-14 py-2 px-6 rounded-full text-white'
          style={{ backgroundColor: '#00BAF7' }}
        >
          Join Proddly
        </button>
      </div>
      <div className=' md:col-span-2 w-full'>
        {' '}
        <Banner />
      </div>
    </div>
  )
}

export default Hero
