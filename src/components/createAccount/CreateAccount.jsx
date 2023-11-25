import React from 'react'
import { pointsRight, SignUpLogingBg } from '../../assets'
import LoginForm from '../loginForm/LoginForm'
import SignUpForm from '../signUpForm/SignUpForm'
import LoginSignUp from '../loginSignUp/LoginSignUp'


const CreateAccount = ({ login, signUp, title, desc }) => {
    return (
        <div>
            <div className='xxl:w-[85%] mx-auto relative xxl:px-[150px] xxl:py-[100px] xl:px-[200px] xl:py-[80px] p-[30px] border-1 border-grey-15 
                xxl:rounded-[20px] rounded-[16px] bg-grey-11' style={{backgroundImage: `url(${SignUpLogingBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <img src={pointsRight} alt="pointsRight" className='absolute right-0 top-0' />
                <div className='text-center'>
                    <h2 className='xxl:text-[48px] md:text-[38px] text-[28px] xxl:leading-[60px] md:leading-[48px] leading-[35px] text-green-60 font-semibold'>{title}</h2>
                    <p className='xxl:mt-[20px] md:mt-[16px] mt-[10px] text-grey-70 xxl:text-18 xl:text-16 text-14
                    xxl:leading-[23px] xl:leading-[24px] leading-[21px]'>{desc}</p>
                </div>
                <div className='xxl:mt-[80px] md:mt-[60px] mt-[40px]'>
                    {login && (
                        <LoginForm />
                    )}
                    {signUp && (
                        <SignUpForm />
                    )}
                </div>
                <LoginSignUp/>
            </div>
        </div>
    )
}

export default CreateAccount