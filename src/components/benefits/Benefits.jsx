import React from 'react'
import { benefitsData } from '../../demoData/data'
const Benefits = () => {
    const { description, benefitsContent } = benefitsData
    return (
        <div className='benefits xxl:mt-[150px] md:mt-[120px] mt-[70px]'>
            <div className='head xxl:mr-[300px] lg:mr-[250px] Mmd:text-center'>
                <h2 className='xxl:text-48 xl:text-38 font-semibold text-white xxl:leading-[72px] xl:leading-[57px] text-28 leading-[42px]'>
                    Our <span className='text-green-60'>Benefits</span>
                </h2>
                <p className='xxl:mt-[14px] mt-[10px] text-grey-70 xxl:text-18 xl:text-16 text-14
                    xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{description}</p>
            </div>
            <div className='xxl:mt-[80px] mt-[60px]'>
                <div className='flex Mmd:flex-col xxl:gap-[100px] md:gap-[60px] gap-[48px] xxl:pb-[50px] md:pb-[30px] pb-[24px] border-b-1 border-dashed border-grey-15'>
                    {benefitsContent.slice(0, 2).map(({ id, icon, title, desc }) => (
                        <div key={id} className={`green-black-gradient md:w-[50%] w-full  xxl:p-[50px] md:p-[40px] p-[24px] border-1 border-grey-15
                            xxl:rounded-tl-[50px] md:rounded-tl-[40px] xxl:rounded-br-[50px] md:rounded-br-[40px]
                            xxl:rounded-bl-[20px] xxl:rounded-tr-[20px] md:rounded-bl-[14px] md:rounded-tr-[14px]
                            rounded-t-[40px] rounded-b-[14px] relative
                            ${id === 1 ? 'md:after:w-[1px] after:w-full md:after:h-full after:h-[1px] after:absolute md:after:top-0 after:bottom-[-24px] xxl:after:right-[-50px] md:after:right-[-30px] after:right-[0] after:border-1 after:border-dashed after:border-grey-15' : ''}`}
                            style={{ border: '1px solid rgba(202, 255, 51, 0.10)'}}>
                            <div className='flex flex-wrap Mlg:justify-center items-center'>
                                <div className='p-[12px] rounded-[70px] first-box-gradient xxl:mr-[20px] md:mr-[14px] mr-[10px]'>
                                    <div className='second-box-gradient rounded-[50px] p-[20px] '>
                                        <img src={icon} alt="title" className='xxl:w-[34px] md:w-[28px] w-[24px]' />
                                    </div>
                                </div>
                                <h3 className='xxl:text-[24px] md:text-[20px] text-[18px] xxl:leading-[36px] md:leading-[30px] 
                                    leading-[27px] font-medium text-white'>{title}</h3>
                            </div>
                            <p className='xxl:mt-[30px] md:mt-[24px] mt-[20px] text-grey-70 xxl:text-18 xl:text-16 text-14
                                xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{desc}</p>
                        </div>
                    ))}
                </div>
                <div className='flex Mmd:flex-col xxl:gap-[100px] md:gap-[60px] gap-[48px] xxl:pt-[50px] md:pt-[30px] pt-[24px]'>
                    {benefitsContent.slice(2).map(({ id, icon, title, desc }) => (
                        <div key={id} className={`green-black-gradient md:w-[50%] w-full  xxl:p-[50px] md:p-[40px] p-[24px] border-1 border-grey-15 
                            xxl:rounded-tl-[50px] md:rounded-tl-[40px] xxl:rounded-br-[50px] md:rounded-br-[40px]
                            xxl:rounded-bl-[20px] xxl:rounded-tr-[20px] md:rounded-bl-[14px] md:rounded-tr-[14px]
                            rounded-t-[40px] rounded-b-[14px] relative
                            ${id === 3 ? 'md:after:w-[1px] after:w-full md:after:h-full after:h-[1px] after:absolute md:after:top-0 after:bottom-[-24px] xxl:after:right-[-50px] md:after:right-[-30px] after:right-[0] after:border-1 after:border-dashed after:border-grey-15' : ''}`}
                            style={{ border: '1px solid rgba(202, 255, 51, 0.10)' }}>
                            <div className='flex items-center'>
                                <div className='p-[12px] rounded-[70px] first-box-gradient xxl:mr-[20px] md:mr-[14px] mr-[10px]'>
                                    <div className='second-box-gradient rounded-[50px] p-[20px] '>
                                        <img src={icon} alt="title" className='xxl:w-[34px] md:w-[28px] w-[24px]' />
                                    </div>
                                </div>
                                <h3 className='xxl:text-[24px] md:text-[20px] text-[18px] xxl:leading-[36px] md:leading-[30px] 
                                    leading-[27px] font-medium text-white'>{title}</h3>
                            </div>
                            <p className='xxl:mt-[30px] md:mt-[24px] mt-[20px] text-grey-70 xxl:text-18 xl:text-16 text-14
                                xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Benefits