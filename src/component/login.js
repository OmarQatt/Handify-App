import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BsKeyFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import "../css/loginNew.css"
import Swal from 'sweetalert2'

const Login = ({ setLoginUser }) => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post(`${process.env.REACT_APP_HEROKU}/login`, user)
            .then(res => {
                if (res.data.message === "Login Successfull") {
                    Swal.fire({
                        icon: 'success',
                        title: `${res.data.message}`,
                        text: `Welcome ${res.data.user.name}`,
                        confirmButtonColor: "#7D9D9C",
                    });
                    setLoginUser(res.data.user)
                    navigate("/profile")
                } else if  (res.data.message === "Password didn't match"){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Password is incorrect!',
                        footer: 'Forgot your password? <a href="/contact">Click here</a>',
                        confirmButtonColor: "#DD6B55",
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'User is not Registered!',
                        text: 'Please check your email and password!',
                        confirmButtonColor: "#DD6B55"
                        })
                }
            })
    }

    return (
        <div className="login-body">
            <div className="d-flex justify-content-center align-items-center h-75">
                <div className=" mt-5 mb-5 ms-5 me-5 w-25 shadow-lg p-5 mb-5 bg-white rounded">
                    <h1 className="mb-4">Login</h1>
                    <div className="d-flex flex-column gap-5">
                        <div>
                            <label className="mb-2" htmlFor="email">Email</label>
                            <div className="d-flex justify-content-start align-items-center">
                                <MdEmail className="loginSvg" />
                                <input className="form-control loginInput" type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
                            </div>
                        </div>
                        <div>
                            <label className="mb-2" htmlFor="password">Password</label>
                            <div className="d-flex justify-content-start align-items-center">
                                <BsKeyFill className="loginSvg" />
                                <input className="form-control loginInput" type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-between gap-3 mt-5">
                        <div className="btn btn-light login-btns" onClick={login}>Login</div>
                        <div className="btn btn-light login-btns" onClick={() => navigate("/register")}>Register</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login