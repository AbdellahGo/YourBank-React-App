import React from 'react'
import {pointsGroup} from '../../assets'
const MissionVisionContent = ({content, direction}) => {
    const {image, title, desc} = content
  return (
    <div className={`flex ${direction ? 'flex-row-reverse mt-[50px]': 'flex-row'} items-center Mlg:flex-col`}>
        <div className='px-[30px] lg:w-[45%] md:w-[70%] w-full rounded-t-[50px] lg:rounded-b-[20px] border-1 border-grey-15 first-box-gradient'>
            <div className='coco md:px-[30px] md:pt-[60px] px-[20px] pt-[20px] ' style={{backgroundImage: `url(${pointsGroup})`, backgroundSize: 'contain'}}>
                <img src={image} alt={`${title}image`} />
            </div>
        </div>
        <div className={`border-green-60 ${direction ? 'xxl:pr-[50px] lg:pr-[40px] lg:border-r-1' : 'xxl:pl-[50px] lg:pl-[40px] lg:border-l-1'} 
            lg:w-[55%] Mlg:border-t-1 Mlg:pt-[30px] w-full Mmd:text-center`}>
            <h3 className='xxl:text-38 xl:text-[32px] lg:text-[25px] text-[26px] xxl:leading-[57px] 
                xl:leading-[48px] lg:leading-[35px] leading-[39px] text-white font-semibold Mlg:mt-30px'>{title}</h3>
            <p className='xxl:mt-[14px] mt-[10px] text-grey-70 xxl:text-18 xl:text-16 text-14
                    xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{desc}</p>
        </div>
    </div>
  )
}

export default MissionVisionContent