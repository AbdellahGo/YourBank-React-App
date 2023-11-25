import React from 'react'
import { missionAndVisionContent } from '../../demoData/data'
import MissionVisionContent from '../missionVisionContent/MissionVisionContent'
const MissionAndVision = () => {
    const { description, missionContent, visionContent } = missionAndVisionContent
    return (
        <div className='mission-and-vision xxl:mt-[150px] md:mt-[120px] mt-[70px]'>
            <div className='head xxl:mr-[300px] lg:mr-[250px] Mmd:text-center'>
                <h2 className='xxl:text-48 xl:text-38 font-semibold text-green-60 xxl:leading-[72px] xl:leading-[57px] text-28 leading-[42px]'>
                    Mission & Vision
                </h2>
                <p className='xxl:mt-[14px] mt-[10px] text-grey-70 xxl:text-18 xl:text-16 text-14
                    xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{description}</p>
            </div>
            <div className='xxl:mt-[80px] mt-[60px]'>
                <MissionVisionContent content={missionContent} />
                <MissionVisionContent content={visionContent} direction />
            </div>
        </div>
    )
}

export default MissionAndVision