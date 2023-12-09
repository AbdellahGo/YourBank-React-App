import React, { useRef } from 'react'
import { eye } from '../../assets'
import LoginSignUp from '../loginSignUp/LoginSignUp'
import { Navigate } from 'react-router-dom'
const LoginForm = ({ setEmptyInput, setIsAccountExist }) => {
  const userData = JSON.parse(localStorage.getItem('userData'))
  const email = useRef(null)
  const passwordInput = useRef(null)
  const isUserExists = (e) => {
    e.preventDefault()
    if (email.current.value && passwordInput.current.value) {
      if (email.current.value === userData?.email && passwordInput.current.value === userData?.password) {
        Navigate('/');
        localStorage.setItem('userData', JSON.stringify({ ...userData, isLogin: true }));
        window.location.reload()
        setIsAccountExist(true)
      } else {
        setIsAccountExist(false)
      }
      setEmptyInput(true)
    } else {
      setEmptyInput(false)
    }
  }
  return (
    <>
      <form onSubmit={isUserExists}>
        <div className='grid lg:grid-cols-2 grid-cols-1 xxl:gap-[30px] lg:gap-[24px] gap-[20px]'>
          <input ref={email} type="email" placeholder='Enter your Email' className='block xxl:p-[24px] lg:p-[20px] p-[16px] rounded-[88px] border-1 border-grey-15
         bg-grey-10 outline-none text-grey-35 xxl:text-18 text-16 xxl:leading-[27px] leading-[24px]
         placeholder:text-grey-35 xxl:placeholder:text-18 placeholder:text-16 xxl:placeholder:leading-[27px] placeholder:leading-[24px]' />
          <div className='flex items-center justify-between rounded-[88px] border-1 border-grey-15 bg-grey-10'>
            <input ref={passwordInput} type="password" id='password' placeholder='Enter your Password' className='block flex-1 xxl:p-[24px] lg:p-[20px] p-[16px]
         bg-grey-10 rounded-[88px] outline-none border-none text-grey-35 xxl:text-18 text-16 xxl:leading-[27px] leading-[24px]
         placeholder:text-grey-35 xxl:placeholder:text-18 placeholder:text-16 xxl:placeholder:leading-[27px] placeholder:leading-[24px]' />
            <img src={eye} alt="eye" className='xxl:mr-[24px] lg:mr-[20px] mr-[16px] ml-[10px] cursor-pointer'
              onClick={() => passwordInput.current.type === 'password' ? passwordInput.current.type = 'text' : passwordInput.current.type = 'password'} />
          </div>
        </div>
        <LoginSignUp />
      </form>
      <button className='block xxl:mt-[40px] lg:mt-[30px] mt-[24px] underline mx-auto xxl:text-18 md:text-16 
        xxl:leading-[27px] md:leading-[24px] leading-[21px] text-grey-75 font-medium'>
        Forgot Password?</button>
    </>
  )
}

export default LoginForm