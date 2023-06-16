import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { IoIosHome, IoIosCall } from "react-icons/io"
import { BsFillEnvelopeAtFill } from "react-icons/bs"
import { FaInfo } from "react-icons/fa"

const Contact = () => {
    return (
        <>
            <Meta title={"Contact Us"} />
            <BreadCrumb title="Contact Us" />
            <div className="contact-wrapper py-5 home-wrapper-2"></div>
            <div className="container-lg">
                <div className="row">
                    <div className="col-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31517.642289256368!2d7.472392520434428!3d9.090589349236323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a42a5e3f47d%3A0xa5b2f06d94fb9ecb!2sMaitama%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1685190687386!5m2!1sen!2sng"
                            width="600"
                            height="450"
                            className="border-0 w-100"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="col-12 mt-5">
                        <div className="contact-inner-wrapper d-flex justify-content-between">
                            <div>
                                <h5 className="contact-title mb-4">Contact</h5>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type="text" className="form-control" placeholder='Name' />
                                    </div>
                                    <div>
                                        <input type="email" className="form-control" placeholder='Email' />
                                    </div>
                                    <div>
                                        <input type="tele" className="form-control" placeholder='Mobile Number' />
                                    </div>
                                    <div>
                                        <textarea
                                            name="" id=""
                                            cols="30"
                                            rows="4"
                                            className='w-100 form-control'
                                            placeholder='Message'></textarea>
                                    </div>
                                    <div>
                                        <button className='button border-0'>Submit</button>
                                    </div>
                                </form>
                            </div>

                            <div>
                                <h5 className="contact-title mb-4">Get in touch with us</h5>
                                <div>
                                    <ul className='ps-0'>
                                        <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <IoIosHome className='fs-5' />
                                            <address>
                                                No:234, Wema Rd, Wuse zone 4, FCT Abuja.
                                            </address>
                                        </li>


                                        <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <IoIosCall className='fs-5' />
                                            <a href="tel:+234 7053011114">+234 7053011114</a>
                                        </li>

                                        <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <BsFillEnvelopeAtFill className='fs-5' />
                                            <a href="mailto:henryboazsamuel@gmail.com">henryboazsamuel@gmail.com</a>
                                        </li>

                                        <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <FaInfo className='fs-5' />
                                            <p className='mb-0'> Monday - Sundays 24/7</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact