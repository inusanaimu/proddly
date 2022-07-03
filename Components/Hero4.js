const Card = () => {
  return (
    <>
      <div
        className=' hidden md:block font-medium text-2xl text-white mx-auto p-24 text-center'
        style={{
          backgroundColor: '#00baf7',
          borderRadius: '54px',
          width: '738px',
          height: '758px',
        }}
      >
        <h3 className=' m-8'>I would like to host</h3>
        <div>
          {' '}
          <div>
            <div className=' inline-block'>
              <div className='grid grid-cols-1 text-center'>
                <input
                  id='NoStores'
                  className=' text-center content-center inline-block h-16 w-16 border-4 border-white rounded-2xl bg-inherit  '
                  contentEditable
                />
                <label htmlFor='NoStores' className='text-sm text-center '>
                  enter <div>number</div>
                </label>
              </div>
            </div>
            <span> Store (s) on Proddly</span>
          </div>
          <h3 className=' font-bold text-6xl m-6'>$19</h3>
          <h6 className=' m-8'>Per Store Per Month</h6>
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
      <div
        className=' md:hidden block font-normal text-white mx-auto p-4 text-center'
        style={{
          backgroundColor: '#00baf7',
          borderRadius: '20px',
        }}
      >
        <h3 className=' m-4'>I would like to host</h3>
        <div>
          {' '}
          <div>
            <div className=' inline-block'>
              <div className='grid grid-cols-1 text-center'>
                <input
                  id='NoStores'
                  className=' text-center mx-auto content-center inline-block h-8 w-8 border-2 border-white rounded-lg bg-inherit'
                  contentEditable
                />
                <label htmlFor='NoStores' className='text-xs text-center '>
                  enter <div>number</div>
                </label>
              </div>
            </div>
            <span> Store (s) on Proddly</span>
          </div>
          <h3 className=' font-bold text-4xl m-4'>$19</h3>
          <h6 className=' m-4'>Per Store Per Month</h6>
          <button
            className='py-2 px-6 m-4 border-2 rounded-full text-black'
            style={{
              borderColor: '#ffffff',
              backgroundColor: '#ffffff',
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  )
}

function Hero4() {
  return (
    <>
      <div className='text-center my-8 p-8 md:my-28 font-bold'>
        <div>
          <h3 className='md:mb-7 mb-3'>
            LET`S CHECK IF PRODDLY IS PERFECT FOR YOUR STORE
          </h3>
          <div
            className='w-16 h-1 md:w-24 md:h-2 mx-auto rounded-md'
            style={{ backgroundColor: '#00baf7' }}
          ></div>
          <div className='md:my-16 my-6 '>
            <h6>Do you have a physical or social media retail store?</h6>
            <div className='text-center '>
              <button
                className='md:py-5 md:px-14 py-2 px-6 md:m-8 m-4 border-2 rounded-full text-white'
                style={{
                  backgroundColor: '#00BAF7',
                }}
              >
                YES
              </button>
              <button
                className='md:py-5 md:px-14 py-2 px-6 md:m-8 m-4 border-2 rounded-full text-black'
                style={{
                  borderColor: '#00baf7',
                  backgroundColor: '#ffffff',
                }}
              >
                NO
              </button>
            </div>
          </div>
          <div className='md:my-16 my-8'>
            <h6 className=' '>What type of products do you sell?</h6>
            <div className=' flex  justify-center'>
              <button
                className=' md:py-5 md:px-14 py-2 px-6 md:m-8 m-4 border-2 rounded-full text-black'
                style={{
                  borderColor: '#00baf7',
                  backgroundColor: '#ffffff',
                }}
              >
                Groceries
              </button>
              <button
                className='md:py-5 md:px-14 py-2 px-6 md:m-8 m-4 border-2 rounded-full text-black'
                style={{
                  borderColor: '#00baf7',
                  backgroundColor: '#ffffff',
                }}
              >
                Perfumes
              </button>
            </div>
            <div className='flex  justify-center'>
              <button
                className='md:py-5 md:px-14 py-2 px-6 md:m-8 m-4 border-2 rounded-full text-white'
                style={{
                  borderColor: '#00baf7',
                  backgroundColor: '#00baf7',
                }}
              >
                Cosmetics
              </button>
              <button
                className='md:py-5 md:px-14 py-2 px-6 md:m-8 m-4 border-2 rounded-full text-black'
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
                className='md:py-5 md:px-14 py-2 px-6  md:m-8 m-4 border-2 rounded-full text-black'
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
          <h3 className='md:mb-7 mb-4'>
            YOUR MOST VALUABLE RESOURCE, AT THE BEST PRICE
          </h3>
          <div
            className='w-16 h-1 md:w-24 md:h-2 mx-auto rounded-md'
            style={{ backgroundColor: '#00baf7' }}
          ></div>
          <div className='md:my-16 my-8'>
            <div className='text-center '>
              <button
                className=' md:py-5 md:px-14 py-2 px-6 md:m-8 m-4 border-2 rounded-full text-white'
                style={{
                  borderColor: '#00baf7',
                  backgroundColor: '#00BAF7',
                }}
              >
                Montly
              </button>
              <button
                className='md:py-5 md:px-14 py-2 px-6 md:m-8 m-4 border-2 rounded-full text-black'
                style={{
                  borderColor: '#00baf7',
                  backgroundColor: '#ffffff',
                }}
              >
                Yearly
              </button>
            </div>
          </div>
          <div className='md:my-8 my-4'>
            <h6 className=' md:my-8  my-4 '>
              access all feature at a flat fee
            </h6>
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero4
