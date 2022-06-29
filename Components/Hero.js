import Image from 'next/dist/client/image'

import lgBanner from '../public/lgBanner.svg'

function Hero() {
  return (
    <div
      className=' w-full gap-0 grid grid-cols-3 content-center'
      style={{ height: '867px' }}
    >
      <div className='pl-28 my-auto'>
        <h1 className='mt-4 text-4xl '>Boost sales on Proddly</h1>
        <h5>
          Get your inventory infront of millions of shoppers and increase your
          sales by 99.99%
        </h5>
        <button
          className='py-5 px-14 rounded-full'
          style={{ backgroundColor: '#00BAF7' }}
        >
          Join Proddly
        </button>
      </div>
      <div className=' col-span-2 '>
        {' '}
        <Image
          src={'/lgBanner.svg'}
          alt='Banner'
          height={867}
          width={867}
          className=' w-full'
        />
      </div>
    </div>
  )
}

export default Hero
