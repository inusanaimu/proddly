const Modal = () => {
  return (
    <>
      <div className=' font-bold leading-8 text-lg hidden md:grid grid-cols-2 gap-11 my-14'>
        <div
          className=' grid bg-white opacity-70  '
          style={{ borderRadius: '60px' }}
        >
          <div className=' m-auto  p-14 text-center'>
            <p className='mb-16'>
              Proddly is magic. Our walk-in sales have improved immersely and we
              are getting more traffic from our social media platforms like
              never before
            </p>
            <h5 className=' font-bold text-lg'>
              {' '}
              -Skyline Stores, John Apata{' '}
            </h5>
          </div>
        </div>
        <div className=' grid bg-white' style={{ borderRadius: '60px' }}>
          <div className=' m-auto  p-14 text-center'>
            <p className='mb-16'>
              Proddly is magic. Our walk-in sales have improved immersely and we
              are getting more traffic from our social media platforms like
              never before
            </p>
            <h5 className=' font-bold text-lg'>
              {' '}
              -Skyline Stores, John Apata{' '}
            </h5>
          </div>
        </div>
      </div>
      <div className=' mx-auto md:hidden grid grid-cols-1 my-4'>
        <div
          className=' mx-auto grid bg-white'
          style={{
            maxHeight: '350px',
            maxWidth: '450px',
            borderRadius: '30px',
          }}
        >
          <div className=' m-auto  py-10 px-6 text-center'>
            <p className='mb-16'>
              Proddly is magic. Our walk-in sales have improved immersely and we
              are getting more traffic from our social media platforms like
              never before
            </p>
            <h5 className=' font-bold'> -Skyline Stores, John Apata </h5>
          </div>
        </div>
      </div>
    </>
  )
}

function Hero3() {
  return (
    <div className='p-4 md:p-20 ' style={{ backgroundColor: '#00baf7' }}>
      <div className=' text-center text-white text-lg leading-7 '>
        {' '}
        <h4>See why customers love Proddly</h4>
        <h3 className=' font-bold '>
          #1 Trusted Search Engine for In-store Products
        </h3>
      </div>
      <Modal />

      <div className=' scale-50 md:scale-100 w-full text-center'>
        <span className=' inline-block m-4 rounded-full w-4 h-4 bg-orange-500'></span>
        <span className=' inline-block m-4 rounded-full w-4 h-4 bg-white'></span>
        <span className=' inline-block m-4 rounded-full w-4 h-4 bg-white'></span>
      </div>
      <div className='text-center my-4 '>
        <button
          className='md:py-5 md:px-14 py-2 px-6 border-2 rounded-full text-white'
          style={{
            backgroundColor: '#00BAF7',
          }}
        >
          Join Proddly
        </button>
      </div>
    </div>
  )
}

export default Hero3
