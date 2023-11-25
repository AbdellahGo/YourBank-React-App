import React, { useState } from 'react'
import { features } from '../../demoData/data'
const Features = () => {
  const [activeButton, setActiveButton] = useState(1)
  const { description, sidBar, onlineBanking, financialTools, customerSupport } = features
  const allFeatures = [onlineBanking, financialTools, customerSupport]
  return (
    <div className='features xxl:mt-[150px] md:mt-[120px] mt-[70px]'>
      <div className='head xxl:mr-[300px] lg:mr-[250px] Mmd:text-center'>
        <h2 className='xxl:text-48 xl:text-38 font-semibold text-white xxl:leading-[72px] xl:leading-[57px] text-28 leading-[42px]'>
          Our <span className='text-green-60'>Features</span>
        </h2>
        <p className='xxl:mt-[14px] mt-[10px] text-grey-70 xxl:text-18 xl:text-16 text-14
            xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{description}</p>
      </div>
      <div className='flex lg:flex-row flex-col xxl:mt-[80px] mt-[60px]'>
        <div className='buttons overflow-x-scroll Mlg::m-auto md:min-w-fit'>
          <div className='bg-grey-11 m-auto xxl:rounded-[12px] rounded-[10px] flex lg:flex-col justify-center flex-row xxl:gap-[24px] gap-[20px] xxl:p-[50px] md:p-[40px] p-[20px] 
            Mmd:w-[520px]'>
            {sidBar.map(({ id, title }) => (
              <button key={id} className={`block xxl:text-18 text-14 xl:leading-[27px] leading-[21px] font-medium hover:text-green-60
                    ${activeButton === id ? 'text-green-60' : 'text-white'} xxl:py-[18px] xxl:px-[24px] py-[14px] px-[20px] rounded-[100px] border-1 border-grey-15 bg-grey-10`}
                onClick={() => setActiveButton(id)}>{title}</button>
            ))}
          </div>
        </div>
        {/*  */}
        <div className='xxl:ml-[30px] lg:ml-[30px] Mlg:mt-[20px] grid md:grid-cols-2 grid-cols-1 xxl:gap-[30px] gap-[20px]'>
          {allFeatures[activeButton - 1].map(({ id, icon, title, desc }) => (
            <div key={id} className='bg-grey-11 xxl:p-[50px] md:p-[40px] cursor-pointer p-[30px] xxl:rounded-[12px] rounded-[10px] border-1 border-grey-15'>
              <div className='flex gap-[10px] items-center justify-between'>
                <h3 className='xxl:text-[22px] text-18 xxl:leading-[33px] leading-[27px] text-white font-medium'>{title}</h3>
                <img src={icon} alt="arrow top" className='xl:h-[34px] xl:w-[34px] h-[24px] w-[24px]' />
              </div>
              <p className='xxl:mt-[30px] md:mt-[24px] mt-[20px] text-grey-70 xxl:text-18 xl:text-16 text-14
            xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features