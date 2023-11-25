import { overviewData } from '../../demoData/data'
import { pointsRight } from '../../assets'

const Overview = ({ description, title, image, head, aboutPage, securityPage, careersPage }) => {
    return (
        <div className='overview relative xxl:p-[50px] md:px-[40px] md:pt-[40px] md:pb-[0px] p-[14px] rounded-[20px] bg-grey-11 '>
            <img src={pointsRight} alt="pointsRight" className='absolute top-0 right-0' />
            <div className={`flex Mlg:flex-col-reverse justify-end relative`}>
                <div className={`xxl:w-[750px] xl:w-[638px] ${head ? 'lg:w-[560px]' : ''} ${securityPage ? 'lg:w-[420px]' : ''} 
                    ${careersPage ? 'lg:w-[450px]' : ''} left-0 lg:absolute Mlg:relative Mlg:bottom-[41px] xxl:p-[80px] md:p-[60px] p-[24px] bg-grey-10
                    md:rounded-bl-[20px] md:rounded-tl-[20px] xxl:rounded-br-[80px] md:rounded-br-[60px] rounded-[20px] Mmd:text-center`}>
                    {aboutPage && (
                        <p className='xxl:text-[20px] md:text-[18px] text-[14px] xxl:leading-[30px] md:leading-[27px] leading-[21px] text-white font-medium'>{head}</p>
                    )}
                    <h1 className={`xxl:text-[58px] xl:text-48 text-28 
                        font-semibold text-white xxl:leading-[75px] xl:leading-[62px] leading-[36px]`}>
                        {title[0]} <span className='text-green-60'>{title[1]}</span> <br />
                        {title[2]}
                    </h1>
                    <p className='xxl:mt-[23px] md:mt-[20px] mt-[14px] text-grey-70 xxl:text-18 xl:text-16 text-14
                        xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>{description}</p>
                </div>
                <img src={image} alt="discussion" className='xxl:w-[938px] xl:w-[735px] lg:w-[580px]' />
            </div>
        </div>
    )
}

export default Overview