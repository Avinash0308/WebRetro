import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import "./style.css"
import CircularProgress from '@mui/material/CircularProgress';
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import validator from 'validator';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function SignupPage() {
    const [showpwd, setShowpwd] = useState(false);
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState("");
    const [username, setUsername] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnfPassword, setCnfPassword] = useState("");
    const [loggedIn, setloggedIn] = useState(false);
    const [valid, setvalid] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const validate = async () => {
        console.log(email, password);
    };


    const signupAPI = async () => {
        fetch("https://coke-n-code-backend.vercel.app/signup", {
            method: "POST",
            crossDomain: true,
            headers: {
                "content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                fullName: fullName,
                username: username,
                email: email,
                password: password,
            }),
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.msg === "User created successfully") {
                    setOpen(true);
                    setMsg("User created successfully. Please login to continue.");
                    setloggedIn(true)
                    setTimeout(() => {
                        navigator.push("/home");
                    }, 1000);
                }else{
                    setOpen(true);
                    setMsg(data.msg)
                    setButtonClicked(false);
                }
            })
    }


    const handleSubmit = async () => {
        setButtonClicked(true);
        await validate();

        if (fullName.length < 1) {
            setvalid(false);
            setMsg("Full Name cannot be empty");
            setOpen(true);
            setButtonClicked(false);
        }
        else if (username.length < 1) {
            setvalid(false);
            setMsg("Username cannot be empty");
            setOpen(true);
            setButtonClicked(false);
        }
        else if (email.length < 1) {
            setvalid(false);
            setMsg("Email cannot be empty");
            setOpen(true);
            setButtonClicked(false);
        }
        else if (!email.includes("@" && ".")) {
            setvalid(false);
            setMsg("Invalid email");
            setOpen(true);
            setButtonClicked(false);
        }
        else if (password.length < 1) {
            setvalid(false);
            setMsg("Password cannot be empty");
            setOpen(true);
            setButtonClicked(false);
        }
        else if (!validator.isStrongPassword(password, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setvalid(false);
            setMsg("Password must contain 1 lowercase, 1 uppercase, 1 number and 1 symbol, and at least 8 characters");
            setOpen(true);
            setButtonClicked(false);
        }
        else if (cnfPassword !== password) {
            setvalid(false);
            setMsg("Passwords are not same");
            setOpen(true);
            setButtonClicked(false);
        }
        else {
            setvalid(true);
            signupAPI();
        }
    };
    const handleClose = () => {
        setOpen(false);
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });


    return (
        <>
            <div className="login-container max-width pt-12 flex flex-col justify-around smallText ">

                <div className="w-[270px] md:w-[300px] my-12 md:my-4 m-auto">
                    <img src="assets\logo2.png" className='w-[270px] md:w-[300px] ' alt="" />
                </div>

                <div className="ctr w-[90%] md:w-[45%] m-auto bg-[#151515]  box-border rounded-lg text-[15px] mt-12 py-4">
                    <div className='text-white text-[23px] text-center smallText'>Welcome <span className="coke">Geek </span>!</div>

                    <div className="flex relative flex-col justify-center items-center w-[100%]">
                        <input className='inputs w-[75%] md:w-[65%] shadow-md' required placeholder='Full Name' type="text" onChange={e => (setFullName(e.target.value))} />
                        <input className='inputs w-[75%] md:w-[65%] shadow-md' required placeholder='Username' type="text" onChange={e => (setUsername(e.target.value))} />
                        <input className='inputs w-[75%] md:w-[65%] shadow-md' required placeholder='Email' type="mail" onChange={e => (setEmail(e.target.value))} />
                        <input className='inputs w-[75%] md:w-[65%] shadow-md' required placeholder='Password' type={showpwd? "text" : "password"} onChange={e => (setPassword(e.target.value))} />
                        <input className='inputs w-[75%] md:w-[65%] shadow-md' required placeholder='Confirm Password' type={showpwd? "text" : "password"} onChange={e => (setCnfPassword(e.target.value))} />
                        <button onClick={()=>{setShowpwd(!showpwd)}} className="absolute text-white bottom-5 md:right-28 right-12">
                            {
                                showpwd? <VisibilityOff /> : <Visibility />
                            }
                        </button>
                    </div>

                    <div className="flex flex-col justify-center items-center w-[100%]">
                        {buttonClicked ?
                            <CircularProgress sx={{ color: "red", width: "30px", margin: "11.2px" }} /> :
                            <button className='loginButton w-[75%] md:w-[65%] shadow-md' disabled={buttonClicked ? true : false} onClick={handleSubmit}>Register</button>}
                    </div>

                    <div className="flex justify-center items-center w-[100%] text-white mt-[20px]">
                        Already have an account? <NavLink to="/login" className="text-[#ff0000] ml-2"> Sign In</NavLink>
                    </div>
                </div>

                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={"error"} sx={{ width: '100%' }}>
                        {msg}
                    </Alert>
                </Snackbar>
            </div>
        </>
    )

}
