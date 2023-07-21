import React from 'react';
import { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { NavLink } from 'react-router-dom'
import validator from 'validator';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Change() {
    const userData = JSON.parse(localStorage.getItem("user"));
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [cnfPassword, setCnfPassword] = useState("");
    const [valid, setvalid] = useState("");
    const [msg, setMsg] = useState("");
    const [open, setOpen] = useState("");
    const [buttonClicked, setButtonClicked] = useState("");

    const handlePassChng = async () => {
        setButtonClicked(true);
        if (oldPassword.length < 1) {
            setvalid(false);
            setMsg("Password cannot be empty");
            setOpen(true);
            setButtonClicked(false);
        }
        else if (oldPassword == newPassword) {
            setvalid(false);
            setMsg("new password cannot be the same as old Password");
            setOpen(true);
            setButtonClicked(false);
        }
        else if (!validator.isStrongPassword(newPassword, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setvalid(false);
            setMsg("Password must contain 1 lowercase, 1 uppercase, 1 number and 1 symbol, and at least 8 characters");
            setOpen(true);
            setButtonClicked(false);
        }
        else if (cnfPassword !== newPassword) {
            setvalid(false);
            setMsg("Passwords are not same");
            setOpen(true);
            setButtonClicked(false);
        }
        else {
            console.log(oldPassword, newPassword, cnfPassword)
            handlePassChngApi();
            setvalid(true);
        }
    };
    const handlePassChngApi = async () => {
        fetch(`https://coke-n-code-backend.vercel.app/changePassword/${userData[0]._id}`, {
            method: "PUT",
            crossDomain: true,
            headers: {
                "content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                password: oldPassword,
                newPassword: newPassword,
            })
        }).then((res) => res.json())
            .then((data) => {
                console.log(data, "registered")
                if (data.msg === "Password changed successfully") {
                    setMsg("Password changed successfully");
                    setvalid(true);
                    setOpen(true);
                    setButtonClicked(false);
                }
                else {
                    setMsg("Something went wrong. Please try again later");
                    setvalid(false);
                    setOpen(true);
                    setButtonClicked(false);
                }
            });
    }
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

            <div className="ctr w-[90%] md:w-[45%] m-auto bg-[#151515]  box-border rounded-lg text-[15px] mt-12 py-4">
                {/* <div className='text-white text-[23px] text-center smallText'>Welcome back <span className="coke">Geek </span>!</div> */}

                <div className="flex flex-col justify-center items-center w-[100%]">
                    <input className='inputs w-[75%] md:w-[65%] shadow-md' required placeholder='Old Password' type="password" onChange={e => (setOldPassword(e.target.value))} />
                    <input className='inputs w-[75%] md:w-[65%] shadow-md' required placeholder='New Password' type="password" onChange={e => (setNewPassword(e.target.value))} />
                    <input className='inputs w-[75%] md:w-[65%] shadow-md' required placeholder='Confirm Password' type="password" onChange={e => (setCnfPassword(e.target.value))} />
                </div>

                <div className="flex flex-col justify-center items-center w-[100%]">
                    {
                        buttonClicked ?
                            <CircularProgress sx={{ color: "red", width: "30px", margin: "11.2px" }} /> :
                            <div>
                                <button className='loginButton  shadow-md' onClick={handlePassChng} >Change Password</button>
                            </div>
                    }
                </div>
                <div className="flex justify-center items-center w-[100%] text-white mt-[20px]">
                    <NavLink to="/forgot-password" className="text-[#ff0000] ml-2"> Forgotten your password?</NavLink>
                </div>
            </div>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={"error"} sx={{ width: '100%' }}>
                    {msg}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Change
