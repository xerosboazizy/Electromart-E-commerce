import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from "../components/BreadCrumb"
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import { Link } from "react-router-dom"

const Signup = () => {
    return (
        <>
            <Meta title={"Sign Up"} />
            <BreadCrumb title="Sign Up" />
            <Container class1="login-wrapper home-wrapper-2 py-5">

                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h4 className='text-center'>Sign Up</h4>
                            <form action="" className='d-flex flex-column gap-25'>
                                <CustomInput type="text" name='name' placeholder='Name' />
                                <CustomInput type="text" name='email' placeholder='Email' />
                                <CustomInput type="tel" name='mobile' placeholder='Mobile Number' />

                                <CustomInput
                                    type="password"
                                    name='password'
                                    placeholder='password'
                                />
                                <div>
                                    <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                                        <button className='button border-0'>Sign Up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </Container >
        </>
    )
}

export default Signup