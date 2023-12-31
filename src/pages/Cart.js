import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import tanko from ".././image/tanko.webp"
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Container from '../components/Container'

const Cart = () => {
    return (
        <>

            <Meta title={"Your Shopping Cart"} />
            <BreadCrumb title="Your Shopping Cart" />

            <Container class1="cart-wrapper home-wrapper-2 py-5">

                <div className="row">
                    <div className="col-12">
                        <div className="card-header mb-5 py-3 d-flex justify-content-between align-items-center">
                            <h5 className='cart-col-1'>Product</h5>
                            <h5 className='cart-col-2'>Price</h5>
                            <h5 className='cart-col-3'>Quantity</h5>
                            <h5 className='cart-col-4'>Total</h5>
                        </div>
                        <div className="card-data mb-2 d-flex justify-content-between align-items-center">
                            <div className='cart-col-1 d-flex align-items-center gap-25'>
                                <div className='w-25'>
                                    <img src={tanko} alt="product-image" className='img-fluid' />
                                </div>
                                <div className='w-75'>
                                    <h6 >titlelorem ipsum ameta mgboo</h6>
                                    <p > Size: 36plus</p>
                                    <p >Color: green</p>
                                </div>
                            </div>
                            <div className='cart-col-2'>
                                <h5 className="price">$ 100</h5>
                            </div>
                            <div className='cart-col-3 d-flex align-items-center gap-15'>
                                <div><input
                                    type="number"
                                    min={1}
                                    max={10}
                                    name="" id=""
                                    className='form-control' /></div>
                                <div><AiFillDelete className='text-danger ' /></div>
                            </div>
                            <div className='cart-col-4'>
                                <h5 className="price">$ 1000</h5>
                            </div>

                        </div>
                        <div className="card-data mb-2 d-flex justify-content-between align-items-center">
                            <div className='cart-col-1 d-flex align-items-center gap-25'>
                                <div className='w-25'>
                                    <img src={tanko} alt="product-image" className='img-fluid' />
                                </div>
                                <div className='w-75'>
                                    <h6 >titlelorem ipsum ameta mgboo</h6>
                                    <p > Size: 36plus</p>
                                    <p >Color: green</p>
                                </div>
                            </div>
                            <div className='cart-col-2'>
                                <h5 className="price">$ 100</h5>
                            </div>
                            <div className='cart-col-3 d-flex align-items-center gap-15'>
                                <div><input
                                    type="number"
                                    min={1}
                                    max={10}
                                    name="" id=""
                                    className='form-control' /></div>
                                <div><AiFillDelete className='text-danger' /></div>
                            </div>
                            <div className='cart-col-4'>
                                <h5 className="price">$ 1000</h5>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 py-2 mt-5">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <Link to="/product" className="button">Continue To Shopping</Link>
                            <div className='d-flex flex-column align-items-center'>
                                <h4>Sub Total: $ 1100</h4>
                                <p>Taxes and shipping calculated at checkout</p>
                                <Link to="/checkout" className='button'>Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Cart