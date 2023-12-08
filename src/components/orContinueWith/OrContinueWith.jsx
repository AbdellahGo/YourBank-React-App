import { facebook2, google, appel } from '../../assets'

const OrContinueWith = () => {
    const icons = [google, facebook2, appel]
    return (
        <div className='xxl:px-[254px] lg:px-[130px]'>
            <h4 className='mt-[24px] flex justify-center items-center xxl:gap-[20px] gap-[16px] xxl:text-[18px] text-[14px] 
          text-grey-70 font-medium xxl:leading-[27px] leading-[21px]'>
                <span className='h-[1px] flex-1 bg-grey-70'></span>
                Or Continue with
                <span className='h-[1px] flex-1 bg-grey-70'></span>
            </h4>
            <div className='flex justify-center xxl:gap-[24px] gap-[20px] mt-[30px]'>
                {icons.map((icon, i) => (
                    <div key={i} className='xxl:p-[12px] p-[8px] rounded-[70px] first-box-gradient'>
                        <div className='second-box-gradient rounded-[50px] xxl:p-[20px] p-[14px] '>
                            <img src={icon} alt="title" className='xxl:w-[30px] w-[24px]' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OrContinueWith