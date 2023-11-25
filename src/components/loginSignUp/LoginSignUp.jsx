import React from 'react'
import { NavLink } from 'react-router-dom'
import { facebook2, google, appel } from '../../assets'
const LoginSignUp = () => {
  const icons = [google, facebook2, appel]
  return (
    <div className='login-signup xxl:mt-[40px] lg:mt-[30px] mt-[24px] xxl:px-[254px] lg:px-[130px]'>
      <NavLink to='/login' className='block text-center rounded-[63px] xxl:px-[20px] px-[24px] xxl:py-[18px] py-[14px] text-white
        hover:bg-green-60 hover:text-grey-15 bg-grey-15 border-1 border-grey-20 xxl:text-18 text-14 xxl:leading-[27px] leading-[21px] font-medium'>
        Login
      </NavLink>
      <NavLink to='/signup' className='block text-center mt-[24px] rounded-[63px] xxl:px-[20px] px-[24px] xxl:py-[18px] py-[14px] text-white
          hover:bg-green-60 hover:text-grey-15 bg-grey-15 border-1 border-grey-20 xxl:text-18 text-14 xxl:leading-[27px] leading-[21px] font-medium'>
        Sign Up
      </NavLink>
      <div>
        <h4 className='mt-[24px] flex justify-center items-center xxl:gap-[20px] gap-[16px] xxl:text-[18px] text-[14px] 
          text-grey-70 font-medium xxl:leading-[27px] leading-[21px]'>
          <span className='h-[1px] flex-1 bg-grey-70'></span>
          Or Continue with
          <span className='h-[1px] flex-1 bg-grey-70'></span>
        </h4>
        <div className='flex justify-center xxl:gap-[24px] gap-[20px] mt-[30px]'>
          {icons.map((icon) => (
            <div className='xxl:p-[12px] p-[8px] rounded-[70px] first-box-gradient'>
              <div className='second-box-gradient rounded-[50px] xxl:p-[20px] p-[14px] '>
                <img src={icon} alt="title" className='xxl:w-[30px] w-[24px]' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp