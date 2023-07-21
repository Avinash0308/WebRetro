import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import "./style.css"
import CircularProgress from '@mui/material/CircularProgress';
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Login = () => {

    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [valid, setvalid] = useState(false);
    const [showpwd, setShowpwd] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const validate = async () => {
        console.log(email, password);

    };


    const storeData = async () => {
        fetch(`https://coke-n-code-backend.vercel.app/getUsers/byEmail/${email}`).then((res) => res.json()).then((data) => {
            localStorage.setItem("user", JSON.stringify(data));
            console.log(data, "data");
            console.log(localStorage.getItem("user"), "local");
        });
    };

    const loginApi = async () => {
        fetch("https://coke-n-code-backend.vercel.app/login-user", {
            method: "POST",
            crossDomain: true,
            headers: {
                "content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        }).then((res) => res.json())
            .then((data) => {
                console.log(data, "registered")

                if (data.msg === "User not found") {
                    setMsg("You are not registered.");
                    setLoggedIn(false)
                    setButtonClicked(false);
                    setOpen(true);
                }
                if (data.msg === "Logged in successfully") {
                    setMsg("Logged in succesfully.");
                    setLoggedIn(true)
                    localStorage.setItem("loggedIn", "true");
                    setTimeout(() => {
                        storeData();
                        window.location.href = "/#/home";
                    }, 1000);
                }
                if (data.msg === "Incorrect password. Please try again") {
                    setMsg("Incorrect Password. Try again.");
                    setLoggedIn(false);
                    setButtonClicked(false);
                    setOpen(true);
                }
            })
    }

    const handleSubmit = async () => {
        setButtonClicked(true);
        await validate();
        if (!email.includes("@" && ".")) {
            setvalid(false);
            setMsg("Invalid email");
            setOpen(true);
            setButtonClicked(false);
        }
        if(password.length < 1){
            setvalid(false);
            setMsg("Password cannot be empty");
            setOpen(true);
            setButtonClicked(false);
        }
        else {
            setvalid(true);
            loginApi();
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
            <div className="login-container max-width h-[70vh] md:h-[80vh] pt-12 flex flex-col justify-around smallText ">

                <div className="w-[270px] md:w-[300px] my-12 md:my-4 m-auto">
                    <img src="assets\logo2.png" className='w-[270px] md:w-[300px] ' alt="" />
                </div>

                <div className="ctr w-[90%] md:w-[45%] m-auto bg-[#151515]  box-border rounded-lg text-[15px] mt-12 py-4">
                    <div className='text-white text-[23px] text-center smallText'>Welcome back <span className="coke">Geek </span>!</div>

                    <div className="flex relative flex-col justify-center items-center w-[100%]">
                        <input className='inputs w-[75%] md:w-[65%] shadow-md' required placeholder='Email' type="mail" onChange={e => (setEmail(e.target.value))} />
                        <input className='inputs w-[75%] md:w-[65%] shadow-md' required placeholder='Password' type={showpwd? "text" : "password"} onChange={e => (setPassword(e.target.value))} />
                        <button onClick={()=>{setShowpwd(!showpwd)}} className="absolute text-white bottom-5 md:right-28 right-12">
                            {
                                showpwd? <VisibilityOff /> : <Visibility />
                            }
                        </button>
                    </div>

                    <div className="flex flex-col justify-center items-center w-[100%]">
                        {buttonClicked ?
                            <CircularProgress sx={{color : "red", width : "30px", margin : "11.2px" }} /> :
                            <button className='loginButton w-[75%] md:w-[65%] shadow-md' disabled={buttonClicked ? true : false} onClick={handleSubmit}>Login</button>}
                    </div>

                    <div className="flex justify-center items-center w-[100%] text-white mt-[20px]">
                        Don't have an account? <NavLink to="/signup" className="text-[#ff0000] ml-2"> Register Now</NavLink>
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

export default Login;