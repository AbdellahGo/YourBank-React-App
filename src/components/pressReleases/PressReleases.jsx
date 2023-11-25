import React from 'react'
import { pressReleasesData } from '../../demoData/data'
const PressReleases = () => {
    const { description, pressReleasesContent } = pressReleasesData
    return (
        <div className='Press-releases xxl:mt-[150px] md:mt-[120px] mt-[70px]'>
            <div className='head xxl:mr-[300px] lg:mr-[250px] Mmd:text-center'>
                <h2 className='xxl:text-48 xl:text-38 font-semibold text-green-60 xxl:leading-[72px] xl:leading-[57px] text-28 leading-[42px]'>
                    Press Releases
                </h2>
                <p className='xxl:mt-[14px] mt-[10px] text-grey-70 xxl:text-18 xl:text-16 text-14
                    xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{description}</p>
            </div>
            <div className='xxl:mt-[80px] mt-[60px] grid lg:grid-cols-2 grid-cols-1 xxl:gap-[30px] gap-[20px]'>
                {pressReleasesContent.map(({ id, image, title, desc, date, location }) => (
                    <div key={id} className='xxl:p-[30px] md:p-[24px] p-[20px] rounded-t-[40px] rounded-b-[16px] border-1 border-grey-15 bg-grey-11'>
                        <img src={image} alt="image" className='rounded-t-[30px] rounded-b-[12px]' />
                        <h3 className='xxl:mt-[51px] md:mt-[40px] mt-[30px] xxl:text-24 md:text-[20px] text-18 xxl:leading-[36px] 
                            md:leading-[30px] leading-[27px] text-white font-medium'>{title}</h3>
                        <div className='flex flex-wrap xxl:gap-10px md:gap-x-[8px] gap-y-[6px] xxl:mt-[20px] md:mt-[14px] mt-[10px]'>
                            <span className='block xxl:px-[16px] md:px-[14px] px-[10px] xxl:py-[8px] py-[6px] rounded-[68px] border-1 border-grey-15 bg-grey-10
                                    xxl:text-[18px] md:text-[16px] text-[14px] xxl:leading-[27px] md:leading-[24px] leading-[21px] text-grey-70'>Location: {location}</span>
                            <span className='block xxl:px-[16px] md:px-[14px] px-[10px] xxl:py-[8px] py-[6px] rounded-[68px] border-1 border-grey-15 bg-grey-10
                                    xxl:text-[18px] md:text-[16px] text-[14px] xxl:leading-[27px] md:leading-[24px] leading-[21px] text-grey-70 xxl:ml-[10px] x:ml-[8px] mt-[6px]'> Date: {date}</span>
                        </div>
                        <p className='xxl:mt-[30px] mt-[24px] text-grey-70 xxl:text-18 xl:text-16 text-14
                            xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PressReleases