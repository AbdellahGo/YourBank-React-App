import React, { useState } from 'react'
import { FAQdata } from '../../demoData/data'
import { arrowDown } from '../../assets'
const FAQ = () => {
    const { description, FAQContent } = FAQdata
    const [learnMore, setLearnMore] = useState(false)
    const visualFAQ = learnMore ? FAQContent : FAQContent.slice(0, 4)
    return (
        <div className='FAQ xxl:mt-[150px] md:mt-[120px] mt-[70px]'>
            <div className='head xxl:mr-[300px] lg:mr-[250px] Mmd:text-center'>
                <h2 className='xxl:text-48 xl:text-38 font-semibold text-white xxl:leading-[72px] xl:leading-[57px] text-28 leading-[42px]'>
                    <span className='text-green-60'>Frequently</span> Asked Questions
                </h2>
                <p className='xxl:mt-[14px] mt-[10px] text-grey-70 xxl:text-18 xl:text-16 text-14
                    xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{description}</p>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 xxl:gap-[30px] gap-[20px] xxl:mt-[80px] mt-[60px] relative'>
                {visualFAQ.map(({ id, title, desc }) => (
                    <div key={id} className='bg-grey-11 border-1 border-grey-15 xxl:p-[50px] md:p-[40px] p-[30px]'>
                        <h3 className='xxl:text-20 text-18 xxl:leading-[25px] leading-[23px] text-white font-semibold 
                            xxl:pb-[30px] md:pb-[24px] pb-[20px] border-b-1 border-grey-15'>{title}</h3>
                        <p className='xxl:mt-[30px] md:mt-[24px] mt-[20px] text-grey-70 xxl:text-18 xl:text-16 text-14
                            xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{desc}</p>
                    </div>
                ))}
                <div className={`absolute w-full md:h-[45%] h-[25%] black-bg-gradient  bottom-0 ${learnMore ? 'hidden' : ''}`} />
            </div>
            <button className='flex items-center xxl:py-[18px] py-[14px] xxl:px-[24px] px-[20px] rounded-[100px] text-white bg-grey-11 border-1 border-grey-15
                xxl:text-18 text-14 xxl:leading-[27px] leading-[21px] mt-[30px] m-auto'
                onClick={() => setLearnMore((prev) => !prev)}>{learnMore ? "Show FAQs less" : "Load All FAQ's"}
                <img src={arrowDown} alt="arrowDown" className='ml-[5px]' style={{transform: learnMore ? 'rotate(180deg)' : ''}} />
            </button>
        </div>
    )
}

export default FAQ