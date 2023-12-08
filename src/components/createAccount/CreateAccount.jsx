import { pointsRight, SignUpLogingBg } from '../../assets'
import LoginForm from '../loginForm/LoginForm'
import SignUpForm from '../signUpForm/SignUpForm'
import LoginSignUp from '../loginSignUp/LoginSignUp'
import OrContinueWith from '../orContinueWith/OrContinueWith'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const CreateAccount = ({ login, signUp, title, desc }) => {
    const [emptyInput, setEmptyInput] = useState(null)
    const [isAccountExist, setIsAccountExist] = useState(null)
    const userData = JSON.parse(localStorage.getItem('userData'))
    const navigate = useNavigate()
    useEffect(() => {
        if (userData?.isLogin) {
            navigate('/profile')
        }
    }, [])
    const accountNotExistOrEmptyInputs = () => {
        if (emptyInput === false) {
            return (<p className=' text-grey-70 xxl:text-24 text-20 bg-grey-10 border-1 border-grey-15 rounded-[15px] p-[20px] mb-[25px]
            xxl:leading-[23px] xl:leading-[24px] leading-[21px]'>Please fill in all required fields.</p>)
        } else if (isAccountExist === false) {
            return (<p className=' text-grey-70 xxl:text-24 text-20 bg-grey-10 border-1 border-grey-15 rounded-[15px] p-[20px] mb-[25px]
            xxl:leading-[23px] xl:leading-[24px] leading-[21px]'>This account does not exist or is incorrect</p>)
        }
    }

    return (
        <div>
            <div className='xxl:w-[85%] mx-auto relative xxl:px-[150px] xxl:py-[100px] xl:px-[200px] xl:py-[80px] p-[30px] border-1 border-grey-15 z-[0]
                xxl:rounded-[20px] rounded-[16px] bg-grey-11' style={{ backgroundImage: `url(${SignUpLogingBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                {accountNotExistOrEmptyInputs()}
                <img src={pointsRight} alt="pointsRight" className='z-[-1] absolute right-0 top-0' />
                <div className='text-center'>
                    <h2 className='xxl:text-[48px] md:text-[38px] text-[28px] xxl:leading-[60px] md:leading-[48px] leading-[35px] text-green-60 font-semibold'>{title}</h2>
                    <p className='xxl:mt-[20px] md:mt-[16px] mt-[10px] text-grey-70 xxl:text-18 xl:text-16 text-14
                    xxl:leading-[23px] xl:leading-[24px] leading-[21px]'>{desc}</p>
                </div>
                <div className='xxl:mt-[80px] md:mt-[60px] mt-[40px]'>
                    {login && (
                        <>
                            <LoginForm setIsAccountExist={setIsAccountExist} setEmptyInput={setEmptyInput} />
                        </>
                    )}
                    {signUp && (
                        <SignUpForm setEmptyInput={setEmptyInput} />
                    )}
                </div>
                <OrContinueWith />
            </div>
        </div>
    )
}

export default CreateAccount