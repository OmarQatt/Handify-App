import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "../css/registerNew.css"
import Swal from 'sweetalert2'

const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            axios.post(`${process.env.REACT_APP_HEROKU}/register`, user)
                .then(res => {
                    Swal.fire({
                        icon: 'success',
                        title: `${res.data.message}`,
                        confirmButtonColor: "#7D9D9C",
                        })
                    navigate("/login")
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Invlid Input',
                text: 'Please check your input!',
                confirmButtonColor: "#DD6B55",
            })
        }

    }

    return (
        <div className="register-body">
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="register mt-5 mb-5 ms-5 me-5 w-25 shadow-lg p-5 mb-5 bg-white rounded">
                    <h1 className="mb-4">Register</h1>
                    <div className="d-flex flex-column gap-5">
                        <div>
                            <label className="mb-2" htmlFor="name">Name</label>
                            <div className="d-flex justify-content-start align-items-center">
                                <input className="form-control" type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
                            </div>
                        </div>
                        <div>
                            <label className="mb-2" htmlFor="email">Email</label>
                            <div className="d-flex justify-content-start align-items-center">
                                <input className="form-control" type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
                            </div>
                        </div>
                        <div>
                            <label className="mb-2" htmlFor="password">Password</label>
                            <div className="d-flex justify-content-start align-items-center">
                                <input className="form-control" type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
                            </div>
                        </div>
                        <div>
                            <label className="mb-2" htmlFor="reEnterPassword">Confirm Password</label>
                            <div className="d-flex justify-content-start align-items-center">
                                <input className="form-control" type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-between gap-3 mt-5">
                        <div className=" btn btn-light register-btns" onClick={register} >Register</div>
                        <div className=" btn btn-light register-btns" onClick={() => navigate("/login")}>Login</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register