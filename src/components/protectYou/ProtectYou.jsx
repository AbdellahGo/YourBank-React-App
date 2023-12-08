import React from 'react'
import { protectYouData } from '../../demoData/data'
const ProtectYou = () => {
    const { description, protectYouContent } = protectYouData
    return (
        <div className='protect-you xxl:mt-[150px] md:mt-[120px] mt-[70px]'>
            <div className='head xxl:mr-[300px] lg:mr-[250px] Mmd:text-center'>
                <h2 className='xxl:text-48 xl:text-38 font-semibold text-white xxl:leading-[72px] xl:leading-[57px] text-28 leading-[42px]'>
                    How We <span className='text-green-60'>Protect You</span>
                </h2>
                <p className='xxl:mt-[14px] mt-[10px] text-grey-70 xxl:text-18 xl:text-16 text-14
                    xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{description}</p>
            </div>
            <div className='xxl:mt-[200px] xl:mt-[120px] md:mt-[80px] mt-[40px] xxl:px-[100px] xl:px-[80px] md:px-[30px] relative'>
                <div className='z-[-1] md:block w-full h-full absolute left-0 xxl:top-[-82px] xl:top-[-62px] md:top-[-30px]  hidden  green-black-gradient rounded-t-[50px] rounded-b-[20px]'></div>
                <div className='z-50 grid md:grid-cols-2 grid-cols-1 xxl:gap-[30px] gap-[20px]'>
                    {protectYouContent.map(({ id, icon, title, desc }) => (
                        <div key={id} className='xxl:p-[50px] md:p-[40px] p-[24px] rounded-[20px] border-1 border-grey-15 green-black-gradient'>
                            <div className='flex items-center'>
                                <div className='p-[12px] rounded-[70px] first-box-gradient xxl:mr-[20px] md:mr-[14px] mr-[10px]'>
                                    <div className='second-box-gradient rounded-[50px] xl:p-[20px] p-[12px] '>
                                        <img src={icon} alt="icon" className='xxl:w-[34px] md:w-[28px] w-[24px]' />
                                    </div>
                                </div>
                                <h3 className='text-white font-medium xxl:text-24 xl:text-[20px] text-[18px] xxl:leading-[36px] md:leading-[30px] leading-[27px]'>{title}</h3>
                            </div>
                            <p className='xxl:mt-[24px] md:mt-[20px] mt-[18px] text-grey-70 xxl:text-18 xl:text-16 text-14
                                xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProtectYou