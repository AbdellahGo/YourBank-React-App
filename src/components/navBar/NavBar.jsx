import React, { useState } from 'react'
import { LogoDesktop, menu } from '../../assets'
import { links } from '../../demoData/data'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='navbar z-[1000] flex xl:px-[34px] xl:py-[20px] px-[24px] py-[14px] border-grey-15 justify-between 
      border-1 rounded-[100px]  bg-grey-11 items-center sm:w-full md:w-720 lg:w-940 xl:w-1280 xxl:w-1528 m-auto pt-6'>
      <div className='logo xxl:w-[156px] xxl:h-[40px] md:w-[117px] w-[101px] h-[26px]'>
        <img src={LogoDesktop} alt="logo"
          className='w-full' />
      </div>

      <div className='z-50 md:flex  hidden Mmd:absolute items-center lg:w-[90%] md:w-[82%] Mmd:bg-grey-11
      Mmd:border-grey-15 Mmd:border-1 Mmd:top-[95px] Mmd:right-[50px] rounded-[18px]'
        style={{ display: toggleMenu && 'block' }}>
        <ul className='links flex justify-center items-center gap-2 Mmd:flex-col xxl:w-[81.5%] xl:w-[78%] lg:w-[75%] md:w-[65%] '>
          {links.map(({ id, link, title }) => (
            <li key={id} className='Mmd:w-full text-center' onClick={() => setToggleMenu(toggleMenu && false)}>
              <NavLink className='Mmd:block xl:px-[24px] xl:py-[12px] px-[18px] py-[10px]
                xl:text-18 text-14 text-white md:rounded-[82px] hover:bg-grey-15'
                to={link} key={title}>{title}</NavLink>
            </li>
          ))}
        </ul>
        <div className='account Mmd:mt-4  Mmd:p-4 '>
          <NavLink to='/signup' onClick={() => setToggleMenu(toggleMenu && false)}
            className='mr-3 xl:px-[30px] xl:py-[14px] px-[24px] py-[12px]
          hover:bg-green-60 rounded-[82px] hover:text-grey-11
          xl:text-18 text-14 text-white'>
            Sign Up
          </NavLink>
          <NavLink to='/login' onClick={() => setToggleMenu(toggleMenu && false)}
            className='xl:px-[30px] xl:py-[14px] px-[24px] py-[12px]
            hover:bg-green-60 rounded-[82px] hover:text-grey-11
              xl:text-18 text-14 text-white'>
            Login
          </NavLink>
        </div>
      </div>
      <div className='md:hidden block h py-[6px] px-[14px] rounded-[82px] bg-green-60'
        onClick={() => setToggleMenu((prev) => !prev)}>
        <img src={menu} alt="menu" />
      </div>
    </div>
  )
}

export default NavBar