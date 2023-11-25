import React from 'react'
import Button from '../button/Button'

const Openings = ({ content }) => {
    const { title, location, Department, desc, requirements } = content
    return (
        <div className='rounded-[16px] xxl:p-[50px] md:p-[40px] p-[24px] border-1 border-grey-15 bg-grey-11'>
            <h3 className='text-white xxl:text-[30px] md:text-[24px] text-[20px] font-semibold xxl:leading-[45px] md:leading-[36px] leading-[30px]'>{title}</h3>
            <div className='flex flex-wrap xxl:gap-10px md:gap-x-[8px] gap-y-[6px] xxl:mt-[14px] mt-[10px]'>
                <span className='block xxl:px-[16px] md:px-[14px] px-[10px] xxl:py-[8px] py-[6px] rounded-[68px] border-1 border-grey-15 bg-grey-10
                xxl:text-[18px] md:text-[16px] text-[14px] xxl:leading-[27px] md:leading-[24px] leading-[21px] text-grey-70'>Location: {location}</span>
                <span className='block xxl:px-[16px] md:px-[14px] px-[10px] xxl:py-[8px] py-[6px] rounded-[68px] border-1 border-grey-15 bg-grey-10
                xxl:text-[18px] md:text-[16px] text-[14px] xxl:leading-[27px] md:leading-[24px] leading-[21px] text-grey-70 xxl:ml-[10px] x:ml-[8px] mt-[6px]'> Department: {Department}</span>
            </div>
            <div className='xxl:mt-[50px] md:[40px] mt-[30px]'>
                <h4 className='xxl:text-[24px] md:text-[20px] text-[18px] xxl:leading-[36px] md:leading-[30px] leading-[27px] font-semibold text-white'>
                    About This Job</h4>
                <p className='xxl:mt-[20px] xl:mt-[16px] mt-[8px] text-grey-70 xxl:text-18 xl:text-16 text-14
                    xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{desc}</p>
            </div>
            <div className='md:mt-[40px] mt-[30px]'>
                <h4 className='xxl:text-[24px] md:text-[20px] text-[18px] xxl:leading-[36px] md:leading-[30px] leading-[27px] font-semibold text-white'>
                    Requirements & Qualifications</h4>
                <div className='xxl:mt-[20px] md:mt-[16px] mt-[10px]'>
                    {requirements.map(({ id, icon, content }) => (
                        <div key={id} className={`flex items-center ${id !== 1 ? 'xxl:mt-[20px] mt-[14px]' : ''}`}>
                            <img src={icon} alt="greyBriefcase" className='xxl:w-[22px] xxl:h-[18px] w-[18px] h-[15px]' />
                            <p className='xxl:ml-[10px] ml-[8px] text-grey-70 xxl:text-18 xl:text-16 text-14
                                xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{content}</p>
                        </div>
                    ))}
                </div>
                <Button bgColor='bg-green-60 ' color='text-grey-11'
                        width='w-fit'
                        margin='xxl:mt-[50px] xl:mt-[40px] mt-[30px] '
                        rounded='rounded-[82px]'
                        text='Apply Now' padding='xxl:py-[16px] py-[12px]  xxl:px-[30px] px-[20px]'
                         fontSize='text-14 xxl:text-18' />
            </div>
        </div>
    )
}

export default Openings