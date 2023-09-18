import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from "../components/BreadCrumb"
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

export const Forgotpass = () => {

    return (
        <>
            <Meta title={"Forgot Password"} />
            <BreadCrumb title="Forgot Password" />

            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h4 className='text-center'>Reset Your Password</h4>
                            <p className="text-center mt-2 mb-3">
                                We will send you an email to reset your password
                            </p>
                            <form action="" className='d-flex flex-column gap-25'>
                                <CustomInput
                                    type="email"
                                    name='email'
                                    placeholder='email'
                                />
                                <div>
                                    <div className="d-flex flex-column justify-content-center align-items-center gap-15 mt-3">
                                        <button className='button border-0' type='submit'>Submit</button>

                                        <Link to="/login">Cancel</Link>
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
