import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import React from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react';

function OtpPopUp(mail) {

    const [otp, setOtp] = useState("")
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
    };
    

    const handleClick = () => {
        if (otp.length < 6) {
            // handleSubmit()
        }
        else {
            handleClose()
        }
    }



    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <div className=" w-[90%] md:w-[45%] bg-[#151515]  box-border rounded-lg text-[15px] py-4">

                    <div className="flex flex-col justify-center items-center w-[100%]">
                        <input className='inputs w-[75%] md:w-[65%] shadow-md' required placeholder='OTP' type="otp" onChange={e => (setOtp(e.target.value))} />
                    </div>

                    <div className="flex flex-col justify-center items-center w-[100%]">

                        {/* <CircularProgress sx={{ color: "red", width: "30px", margin: "11.2px" }} /> : */}

                        <div>
                            <button className='loginButton  shadow-md' onClick={handleClick} >submit</button>
                        </div>

                    </div>
                </div>
            </Backdrop>
        </div>
    );
}

export default OtpPopUp


