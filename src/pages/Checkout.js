import React from 'react'
import { Link } from "react-router-dom"
import { MdArrowBack } from "react-icons/md"
import tanko from ".././image/tanko.webp"
import Container from '../components/Container'
const Checkout = () => {
    return (
        <>

            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-7">

                        <div className="checkout-left-data">
                            <h4 className="website-name">
                                Homebud
                            </h4>
                            <nav style={{ "--bs-breadcrumb-divider": ">" }}
                                aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item total-price"><Link to="/cart" className='text-dark'>Cart</Link></li>&nbsp;/
                                    <li className="breadcrumb-item active total-price" aria-current="page">Information</li>&nbsp;/
                                    <li className="breadcrumb-item active total-price" aria-current="page">Shipping</li>&nbsp;/
                                    <li className="breadcrumb-item active total-price" aria-current="page">Payment</li>
                                </ol>
                            </nav>
                            <h4 className="title total">
                                Contact information
                            </h4>
                            <p className='user-details total'>
                                Xeros developer  (henryboazsamuel@gmail.com)
                            </p>
                            <h4 className='mb-3'>Shipping Address</h4>
                            <form action="" className='d-flex flex-wrap gap-15 justify-content-between'>
                                <div className='w-100'>
                                    <select
                                        name=""
                                        id=""
                                        className='form-control form-select'>
                                        <option value="" selected disabled>Select Country</option>
                                    </select>
                                </div>

                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='First Name'
                                    />
                                </div>

                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Last Name'
                                    />
                                </div>


                                <div className='w-100'>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Address'
                                    />
                                </div>


                                <div className='w-100'>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Apartment, Suit, etc(optional)'
                                    />
                                </div>


                                <div className='flex-grow-1'>
                                    <select name=""
                                        id=""
                                        className='form-control form-select'>
                                        <option value="" selected disabled>Select State</option>
                                    </select>
                                </div>

                                <div className='flex-grow-1'>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='City'
                                    />
                                </div>


                                <div className='flex-grow-1'>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Zipcode'
                                    />
                                </div>

                                <div className="w-100">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <Link to="/cart" className='text-dark'><MdArrowBack className='me-2' /> Return to Cart</Link>
                                        <Link to="/shipping" className="button">Continue to Shipping</Link>
                                    </div>
                                </div>
                            </form>

                        </div>

                    </div>


                    <div className="col-5 ">
                        <div className='border-bottom py-4'>
                            <div className='d-flex gap-10 mb-2 align-items-center '>
                                <div className='d-flex gap-10 prod-details '>
                                    <div className=' position-relative prod-details-img'>
                                        <span style={{ "top": "-10px", right: "2px" }} className="badge bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                                        <img src={tanko} alt="" className='img-fluid' />
                                    </div>
                                    <div className='prod-desc-details'>
                                        <h5 className='total-price'>Bed furniture</h5>
                                        <p className='total-price'>3 x 3 couple and children furniture bed</p>
                                    </div>
                                </div>
                                <div className='grow-1'>
                                    <h5 className='total'>$ 1000</h5>
                                </div>
                            </div>
                        </div>


                        <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-item-center'>
                                <p className="total">Subtotal</p>
                                <p className="total-price">$ 1000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className=" mb-0 total">Shipping</p>
                                <p className=" mb-0 total-price">$ 1000</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center border-botom py-4'>
                            <h5 className="total">Total</h5>
                            <h5 className="total-price">$ 1000</h5>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Checkout