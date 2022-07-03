import Image from 'next/dist/client/image'
import Logo from '../public/Logo.svg'
import Instagram from '../public/Instagram.svg'
import Facebook from '../public/Facebook.svg'
import Twitter from '../public/Twitter.svg'
import LinkedIn from '../public/LinkedIn.svg'

const Top = () => {
  return (
    <div
      className=' text-white w-full py-6 md:py-12 text-center '
      style={{ backgroundColor: '#00baf7' }}
    >
      {' '}
      <h1 className=' font-bold text-2xl md:text-4xl '>Get found locally</h1>
      <h6 className=' text-sm '>
        Setup your Proddly page in less than 10 minutes
      </h6>
      <button
        className=' py-2 px-6 md:m-8 m-4 text-white Md:py-5 md:px-14 border-2 rounded-full '
        style={{
          borderColor: '#ffffff',
          backgroundColor: '#00baf7',
        }}
      >
        Join Proddly
      </button>
    </div>
  )
}
const Bottom = () => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-5 md:gap-4 w-full md:p-16 p-10 leading-10 '>
      <div className=' md:order-first order-last md:col-span-2 bg-white'>
        {' '}
        <Image
          src={'/Logo.svg'}
          alt='Banner'
          height={57}
          width={173}
          className=' w-full'
        />
        <div className=' w-full '>
          <span className=' pr-5'>
            <Image
              src={'/Instagram.svg'}
              alt='Facebook'
              height={24}
              width={24}
            />
          </span>
          <span className=' pr-5'>
            <Image
              src={'/Facebook.svg'}
              alt='Facebook'
              height={24}
              width={24}
            />
          </span>
          <span className=' pr-5'>
            <Image src={'/Twitter.svg'} alt='Facebook' height={24} width={24} />
          </span>
          <span className=' pr-5'>
            <Image
              src={'/LinkedIn.svg'}
              alt='Facebook'
              height={24}
              width={24}
            />
          </span>
        </div>
        <p>@2022 Proddly LLC, All Rights Reserved</p>
      </div>
      <div className=''>
        {' '}
        <h3 className=' font-bold text-xl mb-6 '>Resources</h3>
        <div>
          <a href='#'>About Proddly</a>
        </div>
        <div>
          <a href='#'>Privacy Policy</a>
        </div>
        <div>
          <a href='#'>Proddly Retailer Policy</a>
        </div>
        <div>
          <a href='#'>Terms and Conditions</a>
        </div>
      </div>
      <div>
        <h3 className=' font-bold text-xl mb-6 '>Learning & Support</h3>
        <div>
          <a href='#'>FAQs</a>
        </div>
        <div>
          <a href='#'>Help Center</a>
        </div>
        <div>
          <a href='#'>Contact</a>
        </div>
      </div>
      <div className=''>
        {' '}
        <h3 className=' font-bold text-xl mb-6 '>Feedback</h3>
        <div>
          <a href='#'>Request a feature</a>
        </div>
        <div>
          <a href='#'>Submit a feedback/review</a>
        </div>
        <div>
          <a href='#'>Rate Proddly</a>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <Top />
      <Bottom />
    </footer>
  )
}

export default Footer
