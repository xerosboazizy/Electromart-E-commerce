import React from 'react'
import { BsEnvelopeAt } from 'react-icons/bs'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className='py-4'>
                <div className="container-lg">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className='footer-top-data d-flex gap-30 align-items-center'>
                                <BsEnvelopeAt className='newleticon' />
                                <h4 className='signuphead mb-0 text-white'>Sign Up for our Newsletter</h4>
                            </div>
                        </div>
                        <div className="col-7">

                            <div class="input-group ">

                                <input type="text"
                                    class="form-control py-1"
                                    aria-label="Enter your Email here....."
                                    placeholder='Enter your Email here....'
                                    id='basic-addon2'

                                />
                                <span className="input-group-text p-2 " id='basic-addon2'>
                                    Subscribe
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-4">
                            <h6 className='text-white mb-4'>Contact Us</h6>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Manyhops</Link>
                                <Link className="text-white py-2 mb-1">Manyhops</Link>
                                <Link className="text-white py-2 mb-1">Manyhops</Link>
                                <Link className="text-white py-2 mb-1">Manyhops</Link>
                            </div>

                        </div>

                        <div className="col-3">
                            <h6 className='text-white mb-4'>Informations</h6>
                            <div className="footer-links d-flex flex-column">
                                <Link to='/bogs' className="text-white py-2 mb-1">Blog</Link>
                                <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
                                <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
                                <Link to="/shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
                                <Link to="/term-conditions" className="text-white py-2 mb-1">Term And Conditions</Link>

                            </div>
                        </div>

                        <div className="col-3">
                            <h6 className='text-white mb-4 '>Accounts</h6>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Manyhops</Link>
                                <Link className="text-white py-2 mb-1">Manyhops</Link>
                                <Link className="text-white py-2 mb-1">Manyhops</Link>
                                <Link className="text-white py-2 mb-1">Manyhops</Link>
                            </div>
                        </div>

                        <div className="col-2">
                            <h6 className='text-white mb-4'>Quick Links</h6>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Manyhops</Link>
                                <Link className="text-white py-2 mb-1">Manyhops</Link>
                                <Link className="text-white py-2 mb-1">Manyhops</Link>
                                <Link className="text-white py-2 mb-1">Manyhops</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

            <footer className='py-4'>
                <div className="row">
                    <div className="container-xxl">
                        <div className="col-12 mb-0 text-white">
                            <p className='text-center'>&copy; {new Date().getFullYear()} powered @ XerosLabs</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer