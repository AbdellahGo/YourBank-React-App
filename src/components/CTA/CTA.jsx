import React from 'react'
import { pointsLeft } from '../../assets'
import { CTAData } from '../../demoData/data'
import Button from "../../components/button/Button"
const CTA = () => {
    const { title, description } = CTAData
    return (
        <div className='CTA relative xxl:mt-[150px] md:mt-[120px] mt-[70px]
        xxl:p-[80px] md:p-[60px] p-[30px] rounded-[20px] border-1 border-grey-15 '>
            <img src={pointsLeft} alt="pointsLeft" className='absolute top-0 left-0' />
            <div className='flex Mmd:flex-col  items-center md:gap-[50px] gap-y-[24px]'>
                <div className='text xl:w-[81%] lg:w-[76%] md:w-[67%] w-full'>
                    <h2 className='xxl:text-[40px] xl:text-30 font-medium text-white xxl:leading-[60px] xl:leading-[45px] text-24 leading-[36px]'>
                        {title} <span className='text-green-60'>YourBank today!</span>
                    </h2>
                    <p className='xxl:mt-[14px] mt-[10px] text-grey-70 xxl:text-18 xl:text-16 text-14
                        xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{description}</p>
                </div>
                <Button bgColor='bg-green-60 ' color='text-grey-11'
                        width='w-fit'
                        margin='xxl:mt-[50px] xl:mt-[40px] mt-[30px] Mmd:mx-auto'
                        rounded='rounded-[82px]'
                        text='Open Account' padding='py-[14px] xxl:py-[18px] px-[24px] xxl:px-[24px]'
                         fontSize='text-14 xxl:text-18' />
            </div>
        </div>
    )
}

export default CTA