import React from 'react'
import { NavLink, useHref } from 'react-router-dom'
const LoginSignUp = ({ dataStorage, isUserExists }) => {

  const pageUrl = useHref()
  return (
    <div className='login-signup w-full xxl:mt-[40px] lg:mt-[30px] mt-[24px] xxl:px-[254px] lg:px-[130px]'>
      {pageUrl === '/login' ? (
        <>
          <button to='/login' className={`block w-full text-center mt-[24px] rounded-[63px] xxl:px-[20px] px-[24px] xxl:py-[18px] py-[14px] text-white
          hover:bg-green-60 hover:text-grey-15 bg-grey-15 border-1 border-grey-20 xxl:text-18 text-14 xxl:leading-[27px] leading-[21px] font-medium
          ${pageUrl === '/login' ? 'active' : ''}`}>
            Login
          </button>
          <NavLink to='/signup' className='block w-full text-center mt-[24px] rounded-[63px] xxl:px-[20px] px-[24px] xxl:py-[18px] py-[14px] text-white
          hover:bg-green-60 hover:text-grey-15 bg-grey-15 border-1 border-grey-20 xxl:text-18 text-14 xxl:leading-[27px] leading-[21px] font-medium'>
            Sign Up
          </NavLink>
        </>

      ) : (
        <>
          <NavLink to='/login' className='block text-center rounded-[63px] xxl:px-[20px] px-[24px] xxl:py-[18px] py-[14px] text-white
        hover:bg-green-60 hover:text-grey-15 bg-grey-15 border-1 border-grey-20 xxl:text-18 text-14 xxl:leading-[27px] leading-[21px] font-medium'>
            Login
          </NavLink>
          <button className={`block w-full text-center mt-[24px] rounded-[63px] xxl:px-[20px] px-[24px] xxl:py-[18px] py-[14px] text-white
          hover:bg-green-60 hover:text-grey-15 bg-grey-15 border-1 border-grey-20 xxl:text-18 text-14 xxl:leading-[27px] leading-[21px] font-medium
          ${pageUrl === '/signup' ? 'active' : ''}`}
            >
            Sign Up
          </button>
        </>
      )}

    </div>
  )
}

export default LoginSignUp