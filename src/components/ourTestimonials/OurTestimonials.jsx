import React, { useContext, useEffect, useRef, useState } from 'react'
import { arrowLift, arrowRight } from '../../assets'
import { testimonialsData } from '../../demoData/data'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Button from '../button/Button'
import './styles.css'

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext)
    return (
        <p onClick={() => scrollPrev()} className='inline-block right-arrow xxl:p-[14px] p-[12px] rounded-[100px] border-1 border-grey-15 bg-grey-11'>
            <img src={arrowRight} alt="left-arrow" className='xxl:w-[34px] xxl:h-[34px] w-[28px] h-[28px]' />
        </p>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)
    return (
        <p onClick={() => scrollNext()} className='inline-block left-arrow xxl:p-[14px] p-[12px] rounded-[100px] border-1 border-grey-15 bg-grey-11'>
            <img src={arrowLift} alt="right-arrow" className='xxl:w-[34px] xxl:h-[34px] w-[28px] h-[28px]' />
        </p>
    )
}


const OurTestimonials = () => {
    const [activeButton, setActiveButton] = useState(1)
    const [width, setWidth] = React.useState(0);
    const { description, buttons, individualsContent, businessesContent } = testimonialsData
    const contentContainer = useRef(null)
    const contentMap = activeButton === 1 ? individualsContent : businessesContent

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            const { width } = entries[0].contentRect;
            setWidth(width);
        });

        resizeObserver.observe(contentContainer.current);

        return () => resizeObserver.disconnect();
    }, []);

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
            <div className='xxl:mt-[100px] md:mt-[80px] mt-[60px]' ref={contentContainer}>
                <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow} >
                    {contentMap.map(({ id, icon, content, name }) => (
                        <div key={id} className={`xxl:w-[404px] xl:w-[325px] lg:w-[230px] md:w-[335px] flex text-center flex-col xxl:gap-[50px] md:gap-[40px] gap-[30px]`} style={width <= 768 ? { width: `${width}px` } : {}} >
                            <div className='image-container relative'>
                                <div className='bg-grey-10 mx-auto px-[40px] w-fit'>
                                    <img src={icon} alt="quotes" className='xxl:w-[60px] xxl:h-[60px]' />
                                </div>
                            </div>
                            <p className='text-grey-70 xxl:text-18 xl:text-16 text-14
                                xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{content}</p>
                            <h3 className='text-green-60 xxl:text-18 xl:text-16 text-14
                                xxl:leading-[27px] xl:leading-[24px] leading-[21px] font-semibold'>{name}</h3>
                        </div>
                    ))}
                </ScrollMenu>
            </div>
        </div>
    )
}

export default OurTestimonials