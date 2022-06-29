import Nav from './Nav'
import Hero from './Hero'
import Hero2 from './Hero2'
import Hero3 from './Hero3'
import Hero4 from './Hero4'
import Footer from './Footer'

function Body() {
  return (
    <>
      <div className='h-full w-full relative'>
        <Nav />
        <Hero />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Footer />
      </div>
    </>
  )
}

export default Body
