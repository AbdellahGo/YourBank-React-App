import React, { useState } from 'react'
import { pointsLeft, pointsRight } from '../../assets'
const Cases = ({ cases, boxDirection, imgDirection, imgType, caseType, marginTop }) => {
    const [learnMore, setLearnMore] = useState(false)
    const visualStatistics = learnMore ? cases.statistics : cases.statistics.slice(0, 3)
    return (
        <div className={`flex items-center ${boxDirection} flex-col ${marginTop} xxl:gap-[100px] xl:gap-[60px] md:gap-[20px] gap-y-[30px]`}>
            <div className='xxl:p-[50px] flex-1 Mlg:w-full xl:p-[40px] p-[20px] bg-grey-11 rounded-[20px] relative text-center
                grid grid-cols-2 xxl:gap-[20px]'>
                <img src={imgType === 'left' ? pointsLeft : pointsRight} alt="pointsLeft" className={`z-[0] absolute top-0 ${imgDirection}`}/>
                {cases.services.map(({ id, icon, title }) => (
                    <div key={id} className='bg-grey-10 border-1 border-grey-15 z-10 xxl:p-[30px] md:p-[20px] p-[14px]'>
                        <div className='w-fit m-auto p-[12px]  rounded-[70px] first-box-gradient'>
                            <div className='second-box-gradient rounded-[50px] p-[20px] '>
                                <img src={icon} alt="title" className='md:w-[26px]' />
                            </div>
                        </div>
                        <h3 className='xxl:mt-[24px] md:mt-[14px] mt-[10px] xxl:text-20 md:text-16 text-14 
                            xxl:leading-[30px] leading-[24px] font-medium text-white'>{title}</h3>
                    </div>
                ))}
            </div>
            <div className='flex-1 Mmd:text-center'>
                <h3 className='font-semibold xxl:text-[30px] md:text-[26px] text-[20px] 
                    xxl:leading-[45px] md:leading-[39px] leading-[30px] text-white'>{caseType}</h3>
                <p className='xxl:mt-[14px] mt-[10] text-grey-70 xxl:text-18 xl:text-16 text-14
                    xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{cases.desc}</p>
                <div className='grid md:grid-cols-3 grid-cols-1 xxl:my-[62px] my-[50px]'>
                    {visualStatistics.map(({id, number, desc}) => (
                        <div key={id} className={`${id === 4 || 5 || 6 ? 'md:mt-[20px]' : ''}  ${id !== 1 ? 'Mmd:mt-[60px]' : ''}`}>
                            <h4 className='text-green-60 xxl:text-[56px] text-[40px] font-semibold xxl:leading-[87px] leading-[60px]'>{number}</h4>
                            <p className=' text-grey-70 xxl:text-18 xl:text-16 text-14
                                xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{desc}</p>
                        </div>
                    ))}
                </div>
                <button className='xxl:px-[24px] xxl:py-[18px] px-[20px] py-[14px] xxl:text-18 text-14 font-medium 
                    rounded-[82px] bg-grey-11 hover:bg-grey-15 border-1 border-grey-15 text-white'
                    onClick={() => setLearnMore((prev) => !prev)}>
                    {learnMore ? 'Learns less' : 'Learn More'}
                </button>
            </div>
        </div>
    )
}

export default Cases