import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom"

const SpecialProductCard = () => {
    return (
        <div className='col-6 mb-3'>
            <div className="special-product-card">
                <div className="d-flex justify-content-between gap-15">
                    <div className="special-product-card-image">
                        <img src="images/cok1.jpg" alt="special-p" className='img-fluid' />
                    </div>
                    <div>
                        <div className="special-product-content">
                            <h5 className='brandName'>Kingston</h5>
                            <p className="title">Home winter furnitures set 3</p>
                            <ReactStars
                                count={5}
                                value={4}
                                edit={false}
                                size={24}
                                activeColor="#ffd700"
                            />
                            <p className="price"><span className='red-p'>$40.00</span> &nbsp; <strike>$100.00</strike></p>
                            <div className="discount-till d-flex align-items-center gap-10">
                                <p className='mb-0'>
                                    <b>5 days</b>
                                </p>
                                <div className="d-flex gap-10 align-items-center">
                                    <span className='badge rounded-circle p-3 bg-danger'>01</span>:
                                    <span className='badge rounded-circle p-3 bg-danger'>02</span>:
                                    <span className='badge rounded-circle p-3 bg-danger'>35</span>
                                </div>
                            </div>
                            <div className="product-count my-3">
                                <p>Product 5</p>
                                <div className="progress">
                                    <div>
                                        <div className="progress-bar"
                                            role="progressbar"
                                            style={{ "width": "25%" }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link className='button'>Add to Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProductCard