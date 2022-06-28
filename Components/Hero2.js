import Image from 'next/dist/client/image'

import HeroBanner from '../public/hero2Banner.svg'

function Hero2() {
  return (
    <div className='grid grid-cols-2 gap-4 w-full px-24 content-center '>
      <div className=' col-span-1'>
        {' '}
        <Image
          src={'/Hero2Banner.svg'}
          alt='Banner'
          height={867}
          width={867}
          className=''
        />
      </div>
      <div className=' my-auto'>
        <div>
          <h3>Why Join Proddly</h3>
          <ul className='list-disc'>
            <li>Let shoppers find you easily and quickly</li>
            <li>Increase your walk-in and online sales</li>
            <li>Get online without an e-commerce website</li>
          </ul>
        </div>
        <div>
          <h3>Features</h3>
          <ul className='list-disc'>
            <li>Proddy 360 Dashboard</li>
            <li>View What`s in Store </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Hero2
