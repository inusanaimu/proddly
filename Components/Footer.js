import Image from 'next/dist/client/image'
import Logo from '../public/Logo.svg'
import Facebook from '../public/Facebook.svg'

const Top = () => {
  return (
    <div
      className=' text-white w-full py-12 text-center '
      style={{ backgroundColor: '#00baf7' }}
    >
      {' '}
      <h1>Get found locally</h1>
      <h6>Setup your Proddly page in less than 10 minutes</h6>
      <button
        className=' text-white py-5 px-14 m-8 border-2 rounded-full '
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
    <div className=' grid grid-cols-5 gap-4 w-full p-16 '>
      <div className='col-span-2 bg-white'>
        {' '}
        <Image
          src={'/Logo.svg'}
          alt='Banner'
          height={57}
          width={173}
          className=' w-full'
        />
        <div className=' w-full  '>
          <Image
            src={'/Facebook.svg'}
            alt='Facebook'
            height={24}
            width={24}
            className=' w-full'
          />
        </div>
        <p>@2022 Proddly LLC, All Rights Reserved</p>
      </div>
      <div className=''>
        {' '}
        <h3>Resources</h3>
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
      <div className=''>
        <h3>Learning & Support</h3>
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
        <h3>Feedback</h3>
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
