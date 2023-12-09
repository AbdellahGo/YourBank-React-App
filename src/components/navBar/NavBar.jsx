import React, { useState } from 'react'
import { LogoDesktop, menu, account, power } from '../../assets'
import { links } from '../../demoData/data'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const userData = JSON.parse(localStorage.getItem('userData'))
  const [toggleMenu, setToggleMenu] = useState(false)
  const navigate = useNavigate()
  const logout = () => {
    navigate('/')
    localStorage.setItem('userData', JSON.stringify({ ...userData, isLogin: false }))
    window.location.reload()
  }
  return (
    <div className='navbar z-[2000] flex xl:px-[34px] xl:py-[20px] px-[24px] py-[14px] border-grey-15 justify-between 
      border-1 rounded-[100px] items-center  bg-grey-11 sm:w-full md:w-720 lg:w-940 xl:w-1280 xxl:w-1528 m-auto'>
      <div className='logo xxl:w-[156px] md:w-[117px] w-[101px]'>
        <NavLink to='/'>
          <img src={LogoDesktop} alt="logo"
            className='w-full' />
        </NavLink>
      </div>

      <div className='z-50 md:flex md:flex-row h-fit flex-col  hidden Mmd:absolute items-center lg:w-[90%] md:w-[82%] Mmd:bg-grey-11 Mmd:overflow-hidden
      Mmd:border-grey-15 Mmd:border-1 Mmd:top-[95px] Mmd:right-[50px] rounded-[18px]'
        style={toggleMenu ? { display: 'flex' } : {}}>
        <ul className='links w-full flex justify-center items-center gap-2 Mmd:flex-col xxl:w-[81.5%] xl:w-[78%] lg:w-[75%] md:w-[65%] '>
          {links.map(({ id, link, title }) => (
            <li key={id} className='Mmd:w-full text-center' onClick={() => setToggleMenu(toggleMenu && false)}>
              <NavLink className='Mmd:block xl:px-[24px] xl:py-[12px] px-[18px] py-[10px]
                xl:text-18 text-14 text-white md:rounded-[82px] hover:bg-grey-15'
                to={link} key={title}>{title}</NavLink>
            </li>
          ))}
        </ul>
        {userData?.isLogin ?
          (<div className='links-account Mmd:mt-4 flex Mmd:p-4 xxl:gap-[30px] gap-[20px] '>
            <NavLink to='/profile'
              className='xl:py-[14px] pl-[24px] pr-[35px] py-[12px]
                rounded-[82px] border-grey-15 border-1 bg-grey-11 hover:bg-grey-10
                  xl:text-18 text-14 text-white flex gap-[10px]'>
              <img src={account} alt="userAvatar" className='Mxl:w-[20px]' />
              Profile
            </NavLink>
            <NavLink to='/'
              className='xl:py-[14px] pl-[24px] pr-[35px] py-[12px]
                rounded-[82px] border-grey-15 border-1 bg-grey-11 hover:bg-grey-10
                  xl:text-18 text-14 text-white flex gap-[10px]'
              onClick={logout}>
              <img src={power} alt="logout" className='Mxl:w-[20px]' />
              LogOut
            </NavLink>
          </div>) :
          (<div className='account Mmd:mt-4  Mmd:p-4 xxl:gap-[30px] gap-[20px]'>
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
          </div>)}
      </div >
      <div className='md:hidden block py-[6px] px-[14px] rounded-[82px] bg-green-60'
        onClick={() => setToggleMenu((prev) => !prev)}>
        <img src={menu} alt="menu" />
      </div>
    </div >
  )
}

export default NavBar