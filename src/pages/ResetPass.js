import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from "../components/BreadCrumb"
import { Link } from "react-router-dom"
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const ResetPass = () => {
    return (
        <>
            <Meta title={"Reset Password"} />
            <BreadCrumb title="Reset Password" />
            <Container class1="login-wrapper home-wrapper-2 py-5">

                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h4 className='text-center'>Reset Password</h4>
                            <form action="" className='d-flex flex-column gap-25'>
                                <CustomInput type="password"
                                    name='password'
                                    placeholder='New Password' />

                                <CustomInput type="password"
                                    name='password'
                                    placeholder='Confirm New Password' />

                                <div>
                                    <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                                        <button className='button border-0'>Ok</button>
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

export default ResetPass