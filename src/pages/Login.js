import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from "../components/BreadCrumb"
import { Link } from "react-router-dom"
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const Login = () => {
    return (
        <>

            <Meta title={"Login"} />
            <BreadCrumb title="Login" />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h4 className='text-center'>Login</h4>
                            <form action="" className='d-flex flex-column gap-25'>
                                <CustomInput
                                    type="email"
                                    name='email'
                                    placeholder='email'

                                />
                                <CustomInput
                                    type="password"
                                    name='password'
                                    placeholder='password'
                                />

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

            </Container>
        </>
    )
}

export default Login