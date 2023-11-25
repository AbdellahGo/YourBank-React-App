import React, { useRef, useState } from 'react'
import { arrowLift, arrowRight } from '../../assets'
import { testimonialsData } from '../../demoData/data'
import Button from '../button/Button'
import './styles.css'

const OurTestimonials = () => {
    const [activeButton, setActiveButton] = useState(1)
    const [scroll, setScroll] = useState(50)
    const { description, buttons, individualsContent } = testimonialsData
    const numberOfScroll = 50
    return (
        <div className='our-testimonials xxl:mt-[150px] md:mt-[120px] mt-[70px]'>
            <div className='head flex Mmd:flex-col Mmd:text-center items-end justify-between Mmd:gap-y-[20px]'>
                <div className='intro xxl:w-[850px] xl:w-[750px] lg:w-[550px] md:w-[380px]'>
                    <h2 className='xxl:text-48 xl:text-38 font-semibold text-white xxl:leading-[72px] xl:leading-[57px] text-28 leading-[42px]'>
                        Our <span className='text-green-60'>Testimonials</span>
                    </h2>
                    <p className='xxl:mt-[14px] mt-[10px] text-grey-70 xxl:text-18 xl:text-16 text-14
                        xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{description}</p>
                </div>
                <div className='button flex xl:w-fit lg:w-[310px] md:w-[310px] p-[14px] w-full justify-center'>
                    {buttons.map(({ text, id }) => (
                        <Button key={id} id={id} bgColor='bg-green-60'
                            activeButton={activeButton}
                            setActiveButton={setActiveButton}
                            width='w-fit'
                            margin=''
                            rounded='rounded-[140px]'
                            text={text} button padding='py-[14px] px-[24px]'
                            fontSize='text-14 xxl:text-18' />
                    ))}
                </div>
            </div>
            <div className='xxl:mt-[100px] md:mt-[80px] mt-[60px] w-full 
                lg:flex items-center'>
                <div className='Mlg:hidden xxl:p-[14px] p-[12px] rounded-[100px] border-1 border-grey-15 bg-grey-11'>
                    <img src={arrowLift} alt="arrowLift" className='xxl:w-[34px] xxl:h-[34px] w-[28px] h-[28px]' />
                </div>
                <div className='horizontal-scroll xxl:mx-[50px] lg:mx-[40px] mx-0 lg:w-fit'>
                    <div className='bar flex items-start xxl:gap-[80px] lg:gap-[60px] gap-[30px] text-center'
                        style={{ left: `${scroll}%` }}>
                        {individualsContent.map(({ id, icon, content, name }) => (
                            <div key={id} className='content flex flex-col xxl:gap-[50px] md:gap-[40px] gap-[30px] relative'>
                                <img src={icon} alt="quotes" className='mx-auto xxl:w-[60px] xxl:h-[60px]' />
                                <p className='text-grey-70 xxl:text-18 xl:text-16 text-14
                                xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{content}</p>
                                <h3 className='text-green-60 xxl:text-18 xl:text-16 text-14
                                xxl:leading-[27px] xl:leading-[24px] leading-[21px] font-semibold'>{name}</h3>
                                {id !== 2 && (
                                    <div className={`Mlg:hidden absolute w-full h-full bg-green-60 third-black-bg-gradient top-0 ${id === 3 ? 'rotate-180' : ''}`}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='Mlg:hidden xxl:p-[14px] p-[12px] rounded-[100px] border-1 border-grey-15 bg-grey-11'>
                    <img src={arrowRight} alt="arrowRight" className='xxl:w-[34px] xxl:h-[34px] w-[28px] h-[28px]' />
                </div>
                <div className='arrows lg:hidden flex justify-center gap-[20px] mt-[30px]'>
                    <button disabled={scroll === 100 && true} className='xxl:p-[14px] p-[12px] rounded-[100px] border-1 border-grey-15 bg-grey-11'
                        onClick={() => setScroll((prev) => prev + numberOfScroll)}>
                        <img src={arrowLift} alt="arrowLift" className='xxl:w-[34px] xxl:h-[34px] w-[28px] h-[28px]' />
                    </button>
                    <button disabled={scroll === 0 && true} className='xxl:p-[14px] p-[12px] rounded-[100px] border-1 border-grey-15 bg-grey-11'
                        onClick={() => setScroll((prev) => prev - numberOfScroll)}>
                        <img src={arrowRight} alt="arrowRight" className='xxl:w-[34px] xxl:h-[34px] w-[28px] h-[28px]' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OurTestimonials

