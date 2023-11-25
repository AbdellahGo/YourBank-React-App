import React from 'react'
import { check, moneyExchange, GroupArrows } from '../../assets'
import Button from '../button/Button'
const Hero = () => {
    return (
            <div className='hero flex justify-start Mmd:text-center  gap-y-[80px] Mmd:flex-col'>
                <div className='xxl:w-[760px] xl:w-[610px] md:w-[500px] md:mt-[40px] Mmd:w-full'>
                    <div className='Mmd:m-auto xxl:w-[330px] w-fit flex py-[8px] pr-[16px] pl-[8px]
                     xxl:py-[10px] xxl:pl-[12px] xxl:pr-[20px]
                     rounded-[61px] bg-grey-15 items-center gap-[4px]'>
                        <img src={check} alt="checkIcon" />
                        <p className='xxl:text-18 text-14 text-white'>No LLC Required, No Credit Check</p>
                    </div>
                    <h1 className='xl:mt-[20px] mt-[12px] xxl:text-48 xl:text-38 text-28 
                    font-semibold text-white xxl:leading-[72px] xl:leading-[57px] leading-[42px]'>
                        Welcome to YourBank <br />
                        Empowering Your <span className='text-green-60'>Financial <br /> Journey</span>
                    </h1>
                    <p className='mt-[14px] text-white-90 text-14 xl:text-16 xxl:text-18 '>
                        At YourBank, our mission is to provide comprehensive
                        banking solutions that empower individuals and businesses to
                        achieve their financial goals. We are committed
                        to delivering personalized and innovative
                        services that prioritize our customers' needs.
                    </p>
                    <Button bgColor='bg-green-60' color='text-grey-11'
                        width='w-fit'
                        margin='xxl:mt-[50px] xl:mt-[40px] mt-[30px] Mmd:mx-auto'
                        rounded='rounded-[82px]'
                        text='Open Account' padding='py-[14px] xxl:py-[18px] px-[24px] xxl:px-[24px]'
                         fontSize='text-14 xxl:text-18' />
                </div>
                <div className='exchange relative xxl:w-[576px] xl:w-[540px] md:w-[430px] Mmd:w-full xxl:ml-[60px] md:ml-[40px]'>
                    <img src={moneyExchange} alt="moneyExchange" className='w-full z-10' />
                    <img src={GroupArrows} alt="GroupArrows" className='z-[-1] xxl:w-[418px] xxl:h-[383px] xl:w-[300px] 
                    xl:h-[275px] h-[201px] absolute xxl:right-[-135px] 
                    xl:right-[-90px] top-[30px] right-[0]  ' />
                </div>
            </div>
    )
}

export default Hero