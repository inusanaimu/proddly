import Image from 'next/dist/client/image'

import Logo from '../public/logo.svg'
import NavBtn from '../public/NavBtn.svg'

const LogoComponent = () => {
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
        <a
          href='#'
          onClick={() => {
            handleClick('navModal')
          }}
        >
          <Image src={'/NavBtn.svg'} alt='logo' height={30} width={30} />
        </a>
      </div>
    </>
  )
}

const NavModal = () => {
  return (
    <>
      <div
        id='navModal'
        className=' hidden absolute bg-white z-20 top-0 opacity-95 w-full h-full my-2 mx-4'
      >
        <div className='grid grid-cols-2 '>
          <div className=' '>
            <Image src={'/Logo.svg'} alt='logo' height={23} width={76} />
          </div>
          <div className=' text-right mx-4 '>
            <span
              onClick={() => {
                handleClick('navModal')
              }}
              className=' text-white text-center rounded-md font-bold px-2 py-1'
              style={{ backgroundColor: '#00BAF7' }}
            >
              X
            </span>
          </div>
        </div>
        <ul className='flex-row text-sm md:flex'>
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
    </>
  )
}

const handleClick = (id) => {
  let action = document.getElementById(id)
  action.classList.toggle('hidden')
  console.log('open/close')
}

function Nav() {
  return (
    <>
      <nav className=' w-full md:z-10 md:absolute top-0'>
        <div className='grid grid-cols-2 md:content-center  my-2 mx-4 md:my-8 md:mx-28'>
          {' '}
          <LogoComponent />
          <div>
            <NavLinks />
          </div>
        </div>
      </nav>{' '}
      <NavModal />
    </>
  )
}

export default Nav
