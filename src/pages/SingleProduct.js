import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import Meta from '../components/Meta'
import BreadCrumb from "../components/BreadCrumb"
import ProductCard from '../components/ProductCard'
import ReactImageZoom from 'react-image-zoom';
import rest4 from ".././image/rest4.jpg"
import rest5 from ".././image/rest5.jpg"
import Colors from '../components/Colors';
import chef4 from ".././image/chef4.jpg";
import tanko from ".././image/tanko.webp"
import { BsSuitHeart } from "react-icons/bs"
import { GoGitCompare } from "react-icons/go"
import Container from '../components/Container';




const SingleProduct = () => {

    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }

    const props = { width: 400, height: 500, zoomWidth: 500, img: tanko, };
    const [orderedProduct, setOrderedProduct] = useState(true);
    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <Container class1="main-product-wrapper py-5 home-wrapper-2">

                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                <ReactImageZoom {...props} />
                            </div>

                        </div>
                        <div className="other-same-image gap-15 ">
                            <div className='warden'>
                                <img src={tanko} alt="" className='lord' />
                            </div>
                            <div className='warden'>
                                <img src={rest5} alt="" className='lord' />
                            </div>
                            <div className='warden'>
                                <img src={rest5} alt="" className='lord' />
                            </div>
                            <div className='warden'>
                                <img src={rest5} alt="" className='lord' />
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="main-product-details-title">
                                <h4>fully detach children and couple bed funiture 3 x 3</h4>
                            </div>
                            <div className="main-product-details-title py-3">
                                <p>$ 100.00</p>
                                <div className="d-flex align-items-center gap-15">
                                    <ReactStars
                                        count={5}
                                        value={4}
                                        edit={false}
                                        size={24}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0 text-review'> (2 Review) </p>
                                </div>
                                <a className='review-btn' href="#review">Write a Review</a>
                            </div>
                            <div className='main-product-details-title'>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h6 className='product-heading'>Type:</h6>
                                    <p className='product-data'>Bes</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h6 className='product-heading'>Brand:</h6>
                                    <p className='product-data'>Kingstone</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h6 className='product-heading'>Category:</h6>
                                    <p className='product-data'>Bed</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h6 className='product-heading'>Tags:</h6>
                                    <p className='product-data'>Bed</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h6 className='product-heading'>Avalability:</h6>
                                    <p className='product-data'>In Stock</p>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h6 className='product-heading'>Size:</h6>
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>XS</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3 '>
                                    <h6 className='product-heading'>Color:</h6>
                                    <Colors />
                                </div>
                                <div className='d-flex gap-15 flex-row align-items-center mt-2 mb-3'>
                                    <h6 className='product-heading'>Quantity:</h6>
                                    <div className=''>
                                        <input
                                            type="number"
                                            id=''
                                            name=''
                                            min={1}
                                            max={10}
                                            className='form-control'
                                            style={{ width: "70px" }} />
                                    </div>
                                    <div className='d-flex align-items-center gap-30 '>
                                        <button className='button border-0'>Add to Cart</button>
                                        <button className="button signup" type='submit'>Buy it Now</button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <a href="" className='main-bottom-a'> <GoGitCompare className='fs-5 me-2' />Add to Compare</a>
                                    </div>
                                    <div>
                                        <a href="" className='main-bottom-a'> <BsSuitHeart className='fs-5 me-2' /> Add to Wishlist</a>
                                    </div>
                                </div>

                                <div className='d-flex gap-10 flex-column  my-3'>
                                    <h6 className='product-heading'>Shipping and Returns:</h6>
                                    <p className='product-data'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt <br />
                                        ut labore et dolore magna aliqua. <br />
                                        10-15 business days
                                        <br />

                                    </p>
                                </div>

                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h6 className='product-heading'>Copy Product Link</h6>
                                    <a href="javascript:void(0);"
                                        onClick={() => { copyToClipboard("https://loremipsum.io/") }}>
                                        Copy Product Link
                                    </a>
                                    <p className='product-data'>

                                    </p>
                                </div>



                            </div>

                        </div>
                    </div>
                </div>

            </Container>
            <Container class1="description-wrapper py-5 home-wrapper-2">

                <div className="row">
                    <div className="col-12">
                        <h5>Description</h5>
                        <div className="bg-white p-3">
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident,
                                sunt in culpa qui officia
                                deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>

            </Container>
            <Container class1="reviews-wrapper  home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h4 id='review'>Reviews</h4>
                        <div className="review-inner-wrapper">
                            <div className="reviews-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h5 className='mb-2'>Customer Reviews</h5>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <ReactStars
                                            count={5}
                                            value={4}
                                            edit={false}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>Based on customer 8 reviews</p>
                                    </div>
                                </div>

                                {
                                    orderedProduct && (
                                        <div>
                                            <a className='text-dark text-decoration-underline' href="">Write a review</a>
                                        </div>
                                    )
                                }

                            </div>
                            <div className="review-form py-4">
                                <h5 className='mb-2'>Write your Review</h5>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <ReactStars
                                            count={5}
                                            value={4}
                                            edit={true}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name="" id=""
                                            cols="30"
                                            rows="4"
                                            className='w-100 form-control'
                                            placeholder='Message'></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className='button border-0'>Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className="reviews mt-4">
                                <div className="review ">
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h6 className='mb-0'>xerosdeveloper</h6>
                                        <ReactStars
                                            count={5}
                                            value={4}
                                            edit={false}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <p className='mt-3'>an awesome and strong product and supplier trusted with 7 days cashback. enjoy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
            <Container className='popular-wrapper py-5 home-wrapper-2'>
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Our Popular Products
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <ProductCard />
                </div>
            </Container>

        </>
    )
}

export default SingleProduct