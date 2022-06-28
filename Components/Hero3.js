function Hero3() {
  return (
    <div className=' p-20 ' style={{ backgroundColor: '#00baf7' }}>
      <div className=' text-center text-white '>
        {' '}
        <h4>See why customers love Proddly</h4>
        <h3>#1 Trusted Search Engine for In-store Products</h3>
      </div>
      <div className='grid grid-cols-2 gap-11 my-14'>
        <div
          className=' grid  bg-white opacity-70  '
          style={{ width: '600px', height: '400px', borderRadius: '70px' }}
        >
          <div className=' m-auto  p-14 text-center'>
            <p className='mb-16'>
              Proddly is magic. Our walk-in sales have improved immersely and we
              are getting more traffic from our social media platforms like
              never before
            </p>
            <h5> -Skyline Stores, John Apata </h5>
          </div>
        </div>
        <div
          className=' grid bg-white'
          style={{ width: '600px', height: '400px', borderRadius: '70px' }}
        >
          <div className=' m-auto  p-14 text-center'>
            <p className='mb-16'>
              Proddly is magic. Our walk-in sales have improved immersely and we
              are getting more traffic from our social media platforms like
              never before
            </p>
            <h5> -Skyline Stores, John Apata </h5>
          </div>
        </div>
      </div>
      <div className=' w-full text-center'>
        <span className=' inline-block m-4 rounded-full w-4 h-4 bg-orange-500'></span>
        <span className=' inline-block m-4 rounded-full w-4 h-4 bg-white'></span>
        <span className=' inline-block m-4 rounded-full w-4 h-4 bg-white'></span>
      </div>
      <div className='text-center my-4 '>
        <button
          className=' border-2 rounded-full text-white'
          style={{ backgroundColor: '#00BAF7', width: '263px', height: '70px' }}
        >
          Join Proddly
        </button>
      </div>
    </div>
  )
}

export default Hero3
