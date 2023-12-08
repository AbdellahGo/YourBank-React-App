import React from 'react'
import { SignUpLogingBg } from '../../assets'

const UserProfile = () => {
    const userData = JSON.parse(localStorage.getItem('userData'))
    const inputsData = [
        { id: 1, type: 'text', label: 'First Name', text: userData.firstName },
        { id: 2, type: 'text', label: 'last Name', text: userData.lastName },
        { id: 3, type: 'email', label: 'Email', text: userData.email },
        { id: 4, type: 'Password', label: 'Password', text: userData.password },

    ]
    return (
        <div className='user-profile'>
            <div>
                <div className='flex justify-center items-center md:h-[710px] h-[510px] relative'>
                    <h2 className='text-green-60 xxl:text-[56px] md:text-[46px] text-[36px] font-medium'>Profile Page</h2>
                    <img src={SignUpLogingBg} alt="SignUpLogingBg" className='z-[-1] md:h-[710px] h-[510px] w-full absolute' />
                </div>
                <div className=' z-[1000]'>
                    <img src="https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?w=360&t=st=1701283772~exp=1701284372~hmac=ab07b0f926b6b3980b846fa80d0b01b9efbb72e3c1570f0155882802f84f8126"
                        alt="" className='xxl:h-[250px] xxl:w-[250px] md:w-[200px] md:h-[200px] w-[150px] h-[150px] object-cover rounded-full xxl:mt-[-150px] md:mt-[-100px] mt-[-75px] mx-auto' />
                    <h3 className='w-fit mx-auto font-medium xxl:text-[38px] md:text-[28px] text-[24px] text-white mt-[20px]'>{userData.firstName.toUpperCase()}</h3>
                </div>
            </div>
            <div className='mt-[80px] xxl:py-[50px] py-[40px] xxl:px-[256px] xl:px-[200px] lg:px-[100px] px-[50px] bg-grey-11'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-x-[24px] gap-y-[30px]'>
                    {inputsData.map(({ id, text, type, label }) => (
                        <div key={id}>
                            <label htmlFor={id} className='text-white xxl:text-18 text-16 font-normal'>{label}:</label>
                            <input type={type} readOnly id={id} value={text} placeholder='Enter your Email' className='w-full mt-[15px] lg:p-[20px] p-[16px] rounded-[88px] border-1 border-grey-15
                            bg-grey-10 outline-none text-grey-35 xxl:text-18 text-16 xxl:leading-[27px] leading-[24px]
                            placeholder:text-grey-35 xxl:placeholder:text-18 placeholder:text-16 xxl:placeholder:leading-[27px] placeholder:leading-[24px]' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserProfile