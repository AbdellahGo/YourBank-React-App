import React from 'react'
import { useCases } from '../../demoData/data'
import Cases from '../cases/Cases'


const UseCases = () => {
    const { description, individuals, business } = useCases
    return (
        <div className='use-cases xxl:mt-[150px] md:mt-[120px] mt-[70px]'>
            <div className='head xxl:mr-[300px] lg:mr-[250px] Mmd:text-center'>
                <h2 className='xxl:text-48 xl:text-38 font-semibold text-green-60 xxl:leading-[72px] xl:leading-[57px] text-28 leading-[42px]'>
                    Use Cases </h2>
                <p className='xxl:mt-[14px] mt-[10px] text-grey-70 xxl:text-18 xl:text-16 text-14
                    xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{description}</p>
            </div>
            <div className='cases xxl:mt-[80px] mt-[60px]'>
                <Cases cases={individuals} boxDirection='lg:flex-row' imgDirection='left-0' imgType='left' caseType='For Individuals'/>
                <Cases cases={business} boxDirection='lg:flex-row-reverse' imgDirection='right-0' imgType='right' 
                caseType='For Business' marginTop=' xxl:mt-[80px] md:mt-[40px] mt-[30px]'/>
            </div>
        </div>
    )
}

export default UseCases