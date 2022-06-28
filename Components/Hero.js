import Image from 'next/dist/client/image'

import lgBanner from '../public/lgBanner.svg'

function Hero() {
  return (
    <div
      className=' absolute bg-slate-200 w-full z-0 top-0 grid grid-cols-2 content-center'
      style={{ height: '867px' }}
    >
      <div className='pl-28'>
        <h1 className='text-lg'>Boost sales on Proddly</h1>
        <h5>
          Get your inventory infront of millions of shoppers and increase your
          sales by 99.99%
        </h5>
        <button
          className=' rounded-full bg-slate-500'
          style={{ backgroundColor: '#00BAF7', width: '263px', height: '70px' }}
        >
          Join Proddly
        </button>
      </div>
      <div className='  '>
        {' '}
        <Image
          src={'/lgBanner.svg'}
          alt='Banner'
          height={867}
          width={867}
          className=' top-0 z-0'
        />
      </div>
    </div>
  )
}

export default Hero
