import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from "../components/BreadCrumb"
import { Link } from "react-router-dom"

const Signup = () => {
    return (
        <>
            <Meta title={"Sign Up"} />
            <BreadCrumb title="Sign Up" />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h4 className='text-center'>Sign Up</h4>
                                <form action="" className='d-flex flex-column gap-25'>
                                    <div>
                                        <input
                                            type="text"
                                            name='email'
                                            className="form-control"
                                            placeholder='Name'

                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            name='mobile'
                                            className="form-control"
                                            placeholder='Mobile Number'
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name='email'
                                            className="form-control"
                                            placeholder='email'

                                        />
                                    </div>
                                    <div className='mt-1'>
                                        <input
                                            type="password"
                                            name='password'
                                            className="form-control"
                                            placeholder='password'
                                        />
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                                            <button className='button border-0'>Sign Up</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup