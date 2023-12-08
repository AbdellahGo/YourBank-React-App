import { Outlet } from 'react-router-dom'
import { Footer, NavBar } from '../components'
import { pointsLeft } from '../assets'

const RootLayout = () => {
  return (
    <div className='relative'>
      <img src={pointsLeft} alt="pointsLeft"
        className='fixed top-0 left-0 z-[-1] ' />
      <div className='sm:w-full md:w-720 z-10 lg:w-940 xl:w-1280 xxl:w-1528 m-auto pt-6'>
        <NavBar />
        <div className='xxl:mt-[126px] md:mt-[144px] mt-[112px] Mmd:px-[15px]'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default RootLayout

// sm:w-full md:w-720 z-10 lg:w-940 xl:w-1140 xxl:w-1320 m-auto pt-6