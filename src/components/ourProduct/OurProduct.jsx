import React, { useState } from 'react'
import Button from '../button/Button'
import { ourProducts } from '../../demoData/data.js'

const OurProduct = () => {
  const { description, buttons, contentIndividuals, contentBusinesses } = ourProducts
  const [activeButton, setActiveButton] = useState(1)
  const selectedData = activeButton === 1 ? [...contentIndividuals] : [...contentBusinesses]

  return (
    <div className='our-product xxl:mt-[150px] md:mt-[120px] mt-[70px]'>
      <div className='head flex Mmd:flex-col Mmd:text-center items-end justify-between Mmd:gap-y-[20px]'>
        <div className='intro xxl:w-[850px] xl:w-[750px] lg:w-[550px] md:w-[380px]'>
          <h2 className='xxl:text-48 xl:text-38 font-semibold text-white xxl:leading-[72px] xl:leading-[57px] text-28 leading-[42px]'>
            Our <span className='text-green-60'>Product</span>
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
      <div className='product xxl:mt-[100px] md:mt-[80px] mt-[60px] 
        grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  xxl:gap-[100px] xl:gap-[80px] md:gap-[40px] gap-y-[30px] text-center'>
        {selectedData.map(({ id, icon, title, desc }) => (
          <div key={id}
            className={`relative ${id !== 1
              ? 'after:absolute lg:after:top-0 after:top-[-15px] xxl:after:left-[-50px] xl:after:left-[-40px] lg:after:left-[-20px] after:left-0 lg:after:h-full lg:after:w-[1px] lg:after:block md:after:hidden after:w-full after:h-[1px] after:bg-grey-15' : ''}`}>
            <div className='w-fit m-auto p-[12px]  rounded-[70px] first-box-gradient'>
              <div className='second-box-gradient rounded-[50px] p-[20px] '>
                <img src={icon} alt="title" className='md:w-[26px]' />
              </div>
            </div>
            <h3 className='xxl:mt-[30px] md:mt-[24px] mt-[20px] text-white 
            xxl:text-24 text-20 xxl:leading-[36px] leading-[30px] font-medium'>{title}</h3>
            <p className='mt-[12px] md:mt-[16px] xxl:text-18 md:text-16 text-14
             text-grey-70 leading-[21px] xxl:leading-[27px]'>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurProduct