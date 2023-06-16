import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from "../components/BreadCrumb"
import { Link } from 'react-router-dom'

export const Forgotpass = () => {

    return (
        <>
            <Meta title={"Forgot Password"} />
            <BreadCrumb title="Forgot Password" />

            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h4 className='text-center'>Reset Your Password</h4>
                                <p className="text-center mt-2 mb-3">
                                    We will send you an email to reset your password
                                </p>
                                <form action="" className='d-flex flex-column gap-25'>
                                    <div>
                                        <input
                                            type="email"
                                            name='email'
                                            className="form-control"
                                            placeholder='email'

                                        />
                                    </div>

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
                </div>
            </div>

        </>
    )
}
