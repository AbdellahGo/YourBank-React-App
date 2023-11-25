import React from 'react'
import { LogoDesktop } from '../../assets'
import { footerData, links } from '../../demoData/data'
import { Link } from 'react-router-dom'
const Footer = () => {
  const { contact, socialMedia } = footerData
  return (
    <div className='bg-grey-11 xxl:mt-[150px] md:mt-[120px] mt-[70px] 
      xxl:pt-[100px] xxl:pb-[50px] xxl:px-[162px] lg:pt-[60px] lg:pb-[30px] lg:px-[80px] pt-[50px] pb-[30px] px-[16px]'>
      <div>
        <div className='logo w-[100px] h-[26px] xxl:w-[156px] xxl:h-[40px] m-auto'>
          <img src={LogoDesktop} alt="logo"
            className='w-full' />
        </div>
        <ul className='links xxl:mt-[50px] md:mt-[40px] mt-[24px] flex xxl:gap-[26px] gap-[14px] w-fit m-auto'>
          {links.map(({ id, link, title }) => (
            <li key={id}>
              <Link to={link} className='xl:text-18 xxl:leading-[27px] md:leading-[24px] leading-[21px] font-medium md:text-16 text-14 text-white-90'>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className='contact xxl:my-[50px] xxl:py-[50px] md:my-[40px] md:py-[40px] my-[30px] py-[30px] border-y-1 border-grey-15 
        flex justify-center items-center flex-wrap gap-[20px]'>
          {contact.map(({ id, icon, title, content }) => (
            <li key={id} className='flex items-center xxl:text-18 xxl:leading-[27px] md:text-16 md:leading-[24px] text-14 leading-[21px] font-medium text-white-90'>
              <img src={icon} alt={title} className='xxl:w-[24px] w-[20px] mr-[6px]' />
              {content}
            </li>
          ))}
        </ul>
      </div>
      <div className='copy-right xxl:py-[16px] xxl:pl-[16px] xxl:pr-[30px] md:py-[12px] md:pl-[12px] md:pr-[24px] pt-[50px] pb-[30px] pl-[12px] pr-[24px]
        md:rounded-[100px] rounded-[12px] border-1 border-grey-15 bg-grey-10 relative
        flex Mmd:flex-col justify-between items-center'>
        <ul className='flex items-center xxl:gap-[14px] gap-[8px] Mmd:absolute top-[-15%]'>
          {socialMedia.map(({ id, icon, link, title }) => (
            <li key={id}>
              <a href={link} target='_blank' className='block rounded-[100px] xxl:p-[14px] p-[12px] bg-green-60'>
                <img src={icon} alt={title} className='xxl:w-[24px] w-[20px]' />
              </a>
            </li>
          ))}
        </ul>
        <p className='text-grey-70 xxl:text-18 xl:text-16 text-14
          xxl:leading-[27px] xl:leading-[24px] leading-[21px]'>
          YourBank All Rights Reserved
        </p>
        <p className='text-grey-70 xxl:text-18 xl:text-16 text-14
          xxl:leading-[27px] xl:leading-[24px] leading-[21px] Mmd:mt-[20px]'>
          Privacy Policy | Terms of Service
        </p>
      </div>
    </div>
  )
}

export default Footer