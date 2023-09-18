import React from 'react'
import { BsEnvelopeAt } from 'react-icons/bs'

import { BsTwitter, BsInstagram, BsLinkedin, BsMeta } from 'react-icons/bs'
import { FaArrowRightLong } from "react-icons/fa"
import { BsFillTelephoneInboundFill, BsFillEnvelopeAtFill } from 'react-icons/bs'
import { FaLocationDot } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className='py-4'>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-4">
                            <div className='footer-title'>
                                <h6 className='text-secondary mb-4'>About ElectroMart</h6>
                            </div>

                            <div className="footer-links d-flex flex-column">
                                <div>
                                    ElectroMart Logo
                                </div>
                                <p>lorem ipsum your number one online electronic marktes with thouisands of goods sold</p>
                                <div className='d-flex flex-column mt-4'>
                                    <div>
                                        <h6>Follow Us</h6>
                                    </div>
                                    <div className='d-flex flex-row justify-content-around'>
                                        <div className='footerIcons'>
                                            <a href=""><BsMeta /></a>
                                        </div>
                                        <div className='footerIcons'>
                                            <a href=""><BsTwitter /></a>
                                        </div>
                                        <div className='footerIcons'>
                                            <a href=""><BsInstagram /></a>
                                        </div>
                                        <div className='footerIcons'>
                                            <a href=""><BsLinkedin /></a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="col-2">
                            <div className='footer-title'>
                                <h6 className='text-secondary mb-4'>Informations</h6>
                            </div>
                            <div className="footer-links d-flex flex-column">
                                <Link to="/privacy-policy" className="text-dark py-2  d-flex flex-row"><FaArrowRightLong />Privacy Policy</Link>
                                <Link to="/refund-policy" className="text-dark py-2 ">Refund Policy</Link>
                                <Link to="/shipping-policy" className="text-dark py-2 ">Shipping Policy</Link>
                                <Link to="/term-conditions" className="text-dark py-2">Term And Conditions</Link>

                            </div>
                        </div>

                        <div className="col-2">
                            <div className='footer-title'>
                                <h6 className='text-secondary mb-4 '>Quick Links</h6>
                            </div>
                            <div className="footer-links d-flex flex-column">
                                <Link to='/' className="text-dark py-2 ">Home</Link>
                                <Link to='/store' className="text-dark py-2 ">Store</Link>
                                <Link to='/blog' className="text-dark py-2 ">Blog</Link>
                                <Link to='/contact' className="text-dark py-2 ">Contact</Link>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className='footer-title'>
                                <h6 className='text-secondary mb-4 '>News Letter</h6>
                            </div>
                            <div className="footer-links d-flex flex-column">
                                <div className='footer-top-data d-flex gap-30 align-items-center'>

                                    <h5 className='signuphead mb-0 text-dark'>Subscribe For Latest Updates</h5>
                                </div>
                                <div className="newsletter">

                                    <div class="input-group d-flex flex-column ">

                                        <input type="text"
                                            className=" py-1 newsletInput"
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
                    </div>
                </div>

            </footer>

            <footer className='py-4'>
                <div className="row">
                    <div className="container-xxl">
                        <div className="col-12 mb-0 text-dark">
                            <p className='text-center'>&copy; {new Date().getFullYear()} powered By XerosDev @ XerosTech</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer