import React, { useRef } from 'react'
import { eye } from '../../assets'

const SignUpForm = () => {
  const passwordInput = useRef(null)
  return (
    <form className='grid lg:grid-cols-2 grid-cols-1 xxl:gap-[30px] lg:gap-[24px] gap-[20px]'>
      <input type="email" placeholder='Enter First Name' className='block xxl:p-[24px] lg:p-[20px] p-[16px] rounded-[88px] border-1 border-grey-15
         bg-grey-10 outline-none text-grey-35 xxl:text-18 text-16 xxl:leading-[27px] leading-[24px]
         placeholder:text-grey-35 xxl:placeholder:text-18 placeholder:text-16 xxl:placeholder:leading-[27px] placeholder:leading-[24px]' />
      <input type="email" placeholder='Enter Last Name' className='block xxl:p-[24px] lg:p-[20px] p-[16px] rounded-[88px] border-1 border-grey-15
         bg-grey-10 outline-none text-grey-35 xxl:text-18 text-16 xxl:leading-[27px] leading-[24px]
         placeholder:text-grey-35 xxl:placeholder:text-18 placeholder:text-16 xxl:placeholder:leading-[27px] placeholder:leading-[24px]' />
      <input type="email" placeholder='Enter your Email' className='block xxl:p-[24px] lg:p-[20px] p-[16px] rounded-[88px] border-1 border-grey-15
         bg-grey-10 outline-none text-grey-35 xxl:text-18 text-16 xxl:leading-[27px] leading-[24px]
         placeholder:text-grey-35 xxl:placeholder:text-18 placeholder:text-16 xxl:placeholder:leading-[27px] placeholder:leading-[24px]' />
      <div className='flex items-center justify-between rounded-[88px] border-1 border-grey-15 bg-grey-10'>
        <input ref={passwordInput} type="password" id='password' hidden='true' placeholder='Enter your Password' className='block flex-1 xxl:p-[24px] lg:p-[20px] p-[16px]
         bg-grey-10 rounded-[88px] outline-none border-none text-grey-35 xxl:text-18 text-16 xxl:leading-[27px] leading-[24px]
         placeholder:text-grey-35 xxl:placeholder:text-18 placeholder:text-16 xxl:placeholder:leading-[27px] placeholder:leading-[24px]' />
        <img src={eye} alt="eye" className='xxl:mr-[24px] lg:mr-[20px] mr-[16px] ml-[10px] cursor-pointer'
          onClick={() => passwordInput.current.type === 'password' ? passwordInput.current.type = 'text' : passwordInput.current.type = 'password'} />
      </div>
    </form>
  )
}

export default SignUpForm