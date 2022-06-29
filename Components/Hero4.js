function Hero4() {
  return (
    <>
      <div className='text-center my-28'>
        <div>
          <h3 className='mb-7'>
            LET`S CHECK IF PRODDLY IS PERFECT FOR YOUR STORE
          </h3>
          <div
            className='w-24 h-2 mx-auto rounded-md'
            style={{ backgroundColor: '#00baf7' }}
          ></div>
          <div className='my-16'>
            <h6>Do you have a physical or social media retail store?</h6>
            <div className='text-center '>
              <button
                className=' py-5 px-14 m-8 border-2 rounded-full text-white'
                style={{
                  backgroundColor: '#00BAF7',
                }}
              >
                YES
              </button>
              <button
                className='py-5 px-14 m-8 border-2 rounded-full text-black'
                style={{
                  borderColor: '#00baf7',
                  backgroundColor: '#ffffff',
                }}
              >
                NO
              </button>
            </div>
          </div>
          <div className='my-16'>
            <h6>What type of products do you sell?</h6>
            <div className='text-center '>
              <button
                className=' py-5 px-14 m-8 border-2 rounded-full text-black'
                style={{
                  borderColor: '#00baf7',
                  backgroundColor: '#ffffff',
                }}
              >
                Groceries
              </button>
              <button
                className='py-5 px-14 m-8 border-2 rounded-full text-black'
                style={{
                  borderColor: '#00baf7',
                  backgroundColor: '#ffffff',
                }}
              >
                Perfumes
              </button>
            </div>
            <div className='text-center '>
              <button
                className=' py-5 px-14 m-8 border-2 rounded-full text-white'
                style={{
                  borderColor: '#00baf7',
                  backgroundColor: '#00baf7',
                }}
              >
                Cosmetics
              </button>
              <button
                className='py-5 px-14  m-8 border-2 rounded-full text-black'
                style={{
                  borderColor: '#00baf7',
                  backgroundColor: '#ffffff',
                }}
              >
                Pharmaceuticals
              </button>
            </div>
            <div className='text-center '>
              <button
                className=' py-5 px-14 m-8 border-2 rounded-full text-black'
                style={{
                  borderColor: '#00baf7',
                  backgroundColor: '#ffffff',
                }}
              >
                Others
              </button>
            </div>
          </div>
        </div>
        <div>
          <h3 className='mb-7'>
            YOUR MOST VALUABLE RESOURCE, AT THE BEST PRICE
          </h3>
          <div
            className='w-24 h-2 mx-auto rounded-md'
            style={{ backgroundColor: '#00baf7' }}
          ></div>
          <div className='my-16'>
            <div className='text-center '>
              <button
                className=' py-5 px-14 m-8 border-2 rounded-full text-white'
                style={{
                  backgroundColor: '#00BAF7',
                }}
              >
                Montly
              </button>
              <button
                className='py-5 px-14 m-8 border-2 rounded-full text-black'
                style={{
                  borderColor: '#00baf7',
                  backgroundColor: '#ffffff',
                }}
              >
                Yearly
              </button>
            </div>
          </div>
          <div className='my-8'>
            <h6>access all feature at a flat fee</h6>
            <div
              className=' text-white mx-auto p-24 text-center'
              style={{
                backgroundColor: '#00baf7',
                borderRadius: '54px',
                width: '738px',
                height: '758px',
              }}
            >
              <h3>I would like to host</h3>
              <div>
                {' '}
                <div>
                  <input
                    id='NoStores'
                    className=' text-center content-center inline-block h-16 w-16 border-4 border-white rounded-2xl bg-inherit  '
                    contentEditable
                  />{' '}
                  <span> Store (s) on Proddly</span>
                </div>
                <label htmlFor='NoStores' className='text-xs text-left'>
                  enter number
                </label>
                <h3>$19</h3>
                <h6>Per Store Per Month</h6>
                <button
                  className='py-5 px-14 m-8 border-2 rounded-full text-black'
                  style={{
                    borderColor: '#00baf7',
                    backgroundColor: '#ffffff',
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero4
