import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./style.css"

export default function Header() {
    const [active, setActive] = useState("menu");
    const [togglerIcon, setIcon] = useState("navToggler");
    
    const navToggle = () => {
        active === 'menu' ?
            setActive('menuActive menu') :
            setActive('menu')

        togglerIcon === 'navToggler' ?
            setIcon('navToggler toggle') :
            setIcon('navToggler')
    }

    console.log(active);

    if (localStorage.getItem("loggedIn") == "true") {
        console.log("false");
        return (
            <>
                <div className="headWrapper z-[1] h-[70px]">
                    <div className="header h-full ">
                        <div className="logo">
                            <img src="assets\logo2.png" className='w-[170px] md:w-[200px] ' alt="" />
                        </div>

                        <div className={active} >
                            <ul className='smallText' >
                                {/* <li onClick={LogOut} >Logout</li>
                                <li onClick={navToggle}><NavLink to={'/change-password'} >Change-password</NavLink></li> */}
                                <li><NavLink to={"/user"} ><AccountCircleIcon sx={{ fontSize : "2rem"}} /></NavLink>  </li>
                            </ul>
                        </div>

                        <div onClick={navToggle} className={togglerIcon}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
    else {

        return (
            <div className="headWrapper z-[1] h-[70px]">
                <div className="header h-full ">
                    <div className="logo">
                        <img src="assets\logo2.png" className='w-[170px] md:w-[200px] ' alt="" />
                    </div>

                    <div className={active} >
                        <ul className='smallText' >
                            <li onClick={navToggle}><NavLink to={'/signup'} >Sign Up</NavLink></li>
                            <li onClick={navToggle}><NavLink to={'/login'}
                                className="">Log In</NavLink></li>
                        </ul>
                    </div>

                    <div onClick={navToggle} className={togglerIcon}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>

                </div>
            </div>
        )
    }
}