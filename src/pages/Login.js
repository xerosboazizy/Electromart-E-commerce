import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from "../components/BreadCrumb"
import { Link } from "react-router-dom"
import Container from '../components/Container'

const Login = () => {
    return (
        <>
            <Container></Container>
            <Meta title={"Login"} />
            <BreadCrumb title="Login" />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h4 className='text-center'>Login</h4>
                                <form action="" className='d-flex flex-column gap-25'>
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
                                        <Link to="/forgotpass">Forgot Password?</Link>
                                        <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                                            <button className='button border-0'>Login</button>
                                            <Link to="/signup" className="button signup" type='submit'>SignUp</Link>
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

export default Login