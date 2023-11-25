import React from 'react'
import { jobOpeningsData } from '../../demoData/data'
import Openings from '../openings/Openings'
const JobOpenings = () => {
    const { description, jobOpeningsContent: { relationshipManager, riskAnalyst, iTSecuritySpecialist } } = jobOpeningsData
    return (
        <div className='job-openings  xxl:mt-[150px] md:mt-[120px] mt-[70px]'>
            <div className='head xxl:mr-[300px] lg:mr-[250px] Mmd:text-center'>
                <h2 className='xxl:text-48 xl:text-38 font-semibold xxl:leading-[72px] xl:leading-[57px] text-28 leading-[42px] text-green-60'>
                    Job Openings
                </h2>
                <p className='xxl:mt-[14px] mt-[10px] text-grey-70 xxl:text-18 xl:text-16 text-14
                    xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{description}</p>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-[30px] xxl:mt-[80px] mt-[60px]'>
                <Openings content={relationshipManager} />
                <Openings content={riskAnalyst} />
                <Openings content={iTSecuritySpecialist} />
            </div>
        </div>
    )
}

export default JobOpenings