import Image from 'next/dist/client/image'

import Logo from '../public/logo.svg'

function Nav() {
  return (
    <nav className=' w-full z-10 absolute top-0'>
      <div className='grid grid-cols-2 content-center my-8 mx-28'>
        {' '}
        <div className=''>
          <Image src={'/Logo.svg'} alt='logo' height={53} width={173} />
        </div>
        <div>
          <ul className=' flex flex-row text-sm'>
            <li className='mr-12'>
              <a href='#'>Why join Proddly</a>
            </li>
            <li className='mr-12'>
              <a href='#'>Features</a>
            </li>
            <li className='mr-12'>
              <a href='#'>Testmonial</a>
            </li>
            <li className='mr-12'>
              <a href='#'>How to join</a>
            </li>
            <li className='mr-12'>
              <a href='#'>Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
