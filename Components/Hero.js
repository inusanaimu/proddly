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
          alt='Banner'
          height={867}
          width={867}
          className=' w-full'
        />
      </div>
      <div className=' md:hidden'>
        <Image
          // layout='fill'
          src={'/smBanner.svg'}
          alt='Banner'
          height={353}
          width={385}
          className=' w-full'
        />
      </div>
    </>
  )
}

function Hero() {
  return (
    <div
      className=' w-full gap-0 grid grid-flow-cols-1 md:grid-cols-3 content-center'
      style={{}}
    >
      <div className='md:pl-28 md:my-auto'>
        <h1 className='mt-4 text-4xl '>Boost sales on Proddly</h1>
        <h5>
          Get your inventory infront of millions of shoppers and increase your
          sales by 99.99%
        </h5>
        <button
          className='py-5 px-14 rounded-full text-white'
          style={{ backgroundColor: '#00BAF7' }}
        >
          Join Proddly
        </button>
      </div>
      <div className=' col-span-2 '>
        {' '}
        <Banner />
      </div>
    </div>
  )
}

export default Hero
