import React from 'react'

import { ourValuesData } from '../../demoData/data'

const OurValues = () => {
    const { description, valuesContent } = ourValuesData
    return (
        <div className='our-values xxl:mt-[150px] md:mt-[120px] mt-[70px]'>
            <div className='head xxl:mr-[300px] lg:mr-[250px] Mmd:text-center'>
                <h2 className='xxl:text-48 xl:text-38 font-semibold text-white xxl:leading-[72px] xl:leading-[57px] text-28 leading-[42px]'>
                    Our <span className='text-green-60'>Values</span>
                </h2>
                <p className='xxl:mt-[14px] mt-[10px] text-grey-70 xxl:text-18 xl:text-16 text-14
                    xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{description}</p>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 xxl:mt-[80px] mt-[60px] xxl:gap-[80px] md:gap-[60px] gap-[50px]'>
                {valuesContent.map(({id, title, desc}) => (
                    <div key={id} className='xxl:pl-[30px] md:pl-[24px] pl-[20px] border-l-1 border-green-60 '>
                        <h3 className='xxl:text-[58px] lg:text-[40px] text-[30px] xxl:leading-[87px] md:leading-[60px] leading-[45px]
                        text-grey-30 font-semibold'>{title}</h3>
                        <p className='xxl:mt-[30px] md:mt-[20px] mt-[14px] text-grey-70 xxl:text-18 xl:text-16 text-14
                            xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurValues