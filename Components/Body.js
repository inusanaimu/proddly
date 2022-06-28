import Nav from './Nav'
import Hero from './Hero'
import Hero2 from './Hero2'
import Hero3 from './Hero3'

function Body() {
  return (
    <>
      <div className='h-full w-full relative'>
        <Nav />
        <Hero />
        <Hero2 />
        <Hero3 />
      </div>
    </>
  )
}

export default Body
