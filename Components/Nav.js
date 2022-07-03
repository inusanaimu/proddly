import Image from 'next/dist/client/image'

import Logo from '../public/logo.svg'
import NavBtn from '../public/NavBtn.svg'

const LogoComp = () => {
  return (
    <>
      <div className='hidden md:flex'>
        <Image src={'/Logo.svg'} alt='logo' height={53} width={173} />
      </div>
      <div className='flex md:hidden'>
        <Image src={'/Logo.svg'} alt='logo' height={23} width={76} />
      </div>
    </>
  )
}

const NavLinks = () => {
  return (
    <>
      <ul className='flex-row text-sm hidden md:flex'>
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
      <div className='md:hidden text-right'>
        <Image src={'/NavBtn.svg'} alt='logo' height={30} width={30} />
      </div>
    </>
  )
}

function Nav() {
  return (
    <nav className=' w-full md:z-10 md:absolute top-0'>
      <div className='grid grid-cols-2 md:content-center  my-2 mx-4 md:my-8 md:mx-28'>
        {' '}
        <LogoComp />
        <div>
          <NavLinks />
        </div>
      </div>
    </nav>
  )
}

export default Nav
