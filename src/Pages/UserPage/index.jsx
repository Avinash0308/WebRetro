import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import WestIcon from '@mui/icons-material/West';
import { NavLink } from 'react-router-dom';

const UserPage = () => {

    const userData = JSON.parse(localStorage.getItem("user"));
    const LogOut = () => {
        localStorage.setItem("loggedIn", "false");
        setTimeout(() => {
            window.location.href = "/";
        }, 1000);
    }

    return (
        <div className="login-container max-width pt-12 flex flex-col justify-around smallText ">

            <div className="w-[270px] md:w-[300px] my-12 md:my-4 m-auto">
                <img src="assets\logo2.png" className='w-[270px] md:w-[300px] ' alt="" />
            </div>

            <div className="ctr relative flex flex-col gap-8 w-[90%] md:max-w-[35%] m-auto bg-[#151515] text-white box-border rounded-lg text-[15px] mt-12 py-8">
                <NavLink to={"/home"}>
                    <button className="absolute top-2 left-2">
                        <WestIcon />
                    </button>
                </NavLink>
                <div className='flex flex-col items-center gap-4 smallText '>
                    <AccountCircleIcon sx={{ fontSize: "10rem" }} />
                    {/* <img src="" className="block h-[8rem] aspect-square object-cover rounded-[50%] " alt="" /> */}
                    <p className='text-sm text-[#f00]'> <NavLink to={"/#"} >edit profile</NavLink></p>
                </div>

                <div className="flex flex-col justify-center items-center w-[100%]">
                    <ul className=' text-xl '>
                        <li className=' capitalize'>
                            {userData[0].fullName}
                        </li>
                        <li className='text-lg text-[#cecece]'>
                            {userData[0].username}
                        </li>
                        <li className='text-lg text-[#cecece]'>
                            {userData[0].email}
                        </li>
                        {/* <li>change password</li> */}
                    </ul>

                    <div className='flex flex-col items-center mt-8 gap-1'>
                        <p className='text-sm text-[#f00]'> <NavLink to={"/change-password"} >change password</NavLink></p>
                        <button className='loginButton bg-black' onClick={LogOut} >logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage
