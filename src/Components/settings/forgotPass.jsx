import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import OtpPopUp from './otpPopUp';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const randomOTP = Math.floor(100000 + Math.random() * 900000);
function Forgot() {

    const [email, setEmail] = useState("");
    const [valid, setvalid] = useState(false);
    const [msg, setMsg] = useState("");
    const [open, setOpen] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [otp, setOtp] = useState("")

    const showPopUp = () => {
        console.log("showing popup");
        return (<div><OtpPopUp mail={email} /></div>);
    }

   const verifyOTP = () => {
    console.log("verifying OTP", otp, randomOTP);
        if (otp == randomOTP) {
            setMsg("OTP verified");
            setOpen(true);
            setvalid(true);
            setButtonClicked(false);
        }
        else {
            setMsg("Invalid OTP");
            setOpen(true);
            setButtonClicked(false);
        }
   }

    const handleClick = () => {
        setButtonClicked(true);
        if (!email.includes("@" && ".")) {
            setvalid(false);
            setMsg("Invalid email");
            setOpen(true);
            setButtonClicked(false);
        }
        if (email === "") {
            setvalid(false);
            setMsg("Please enter your email");
            setOpen(true);
            setButtonClicked(false);
        }
        else {
            setvalid(true);
            setOpen(true);
            setButtonClicked(true);
            handleSubmit();
        }
    }
    const user = JSON.parse(localStorage.getItem("user"));

    const form = {
        to_name: user[0].fullName,
        to_mail: email,
        message: randomOTP,
    }

    const handleSubmit = () => {
        emailjs.send('service_yppzk23', 'template_u87cytv', form, 'yQr2PiK3-mEbGvr3N')
            .then((result) => {
                setOpen(true);
                setMsg("OTP sent to your email");
            }, (error) => {
                setOpen(true);
                setMsg("Error sending OTP");
                console.log(error.text);
            });
    };



    const handleClose = () => {
        setOpen(false);
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    return (
        <div className="login-container max-width pt-12 flex flex-col justify-around smallText ">

            <div className="w-[270px] md:w-[300px] my-12 md:my-4 m-auto">
                <img src="assets\logo2.png" className='w-[270px] md:w-[300px] ' alt="" />
            </div>
           {
            valid ? <>
             <div className="ctr w-[90%] md:w-[45%] m-auto bg-[#151515]  box-border rounded-lg text-[15px] mt-12 py-4">
                {/* <div className='text-white text-[23px] text-center smallText'>Welcome back <span className="coke">Geek </span>!</div> */}
                <div className='flex justify-center smallText '>
                    <span className="flex items-center justify-center h-[7rem] border-2 rounded-[50%] border-[#2c2c2c] aspect-square">
                        <span className="flex flex-col items-center justify-center mb-1 h-16 aspect-square">
                            <span className="semiCircle block h-2/5 w-2/3 rounded-t-[3rem] border-2 border-b-0 border-[#2c2c2c] "></span>
                            <span className="square block h-3/5 w-full rounded-[10px] border-2 border-[#2c2c2c] "></span>
                        </span>
                    </span>

                </div>

                <div className="flex flex-col justify-center items-center w-[100%]">
                    <input className='inputs w-[75%] md:w-[55%] shadow-md placeholder:text-[16px]' required placeholder='Enter OTP' value={otp} type="text" onChange={e => (setOtp(e.target.value))} />
                </div>

                <div className="flex flex-col justify-center items-center w-[100%]">
                    <div>
                        <button className='loginButton  shadow-md' onClick={verifyOTP} >Verify</button>
                    </div>
                </div>
                <div className="flex justify-center items-center w-[100%] text-white mt-[20px]">
                    <NavLink to="#" className="text-[#ff0000] ml-2"> Can't reset your password?</NavLink>
                </div>
            </div>
            </> : <>
            <div className="ctr w-[90%] md:w-[45%] m-auto bg-[#151515]  box-border rounded-lg text-[15px] mt-12 py-4">
                <div className='flex justify-center smallText '>
                    <span className="flex items-center justify-center h-[7rem] border-2 rounded-[50%] border-[#2c2c2c] aspect-square">
                        <span className="flex flex-col items-center justify-center mb-1 h-16 aspect-square">
                            <span className="semiCircle block h-2/5 w-2/3 rounded-t-[3rem] border-2 border-b-0 border-[#2c2c2c] "></span>
                            <span className="square block h-3/5 w-full rounded-[10px] border-2 border-[#2c2c2c] "></span>
                        </span>
                    </span>

                </div>

                <div className="flex flex-col justify-center items-center w-[100%]">
                    <input className='inputs w-[75%] md:w-[65%] shadow-md placeholder:text-[16px]' required placeholder='Enter your registered email' type="mail" onChange={e => (setEmail(e.target.value))} />
                </div>

                <div className="flex flex-col justify-center items-center w-[100%]">
                    <div>
                        <button className='loginButton shadow-md' disabled={buttonClicked} onClick={handleClick} >Send OTP</button>
                    </div>
                </div>
                <div className="flex justify-center items-center w-[100%] text-white mt-[20px]">
                    <NavLink to="#" className="text-[#ff0000] ml-2"> Can't reset your password?</NavLink>
                </div>
            </div>
            </>
           }

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={"success"} sx={{ width: '100%' }}>
                    {msg}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Forgot
