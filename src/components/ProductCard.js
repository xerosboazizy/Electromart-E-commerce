import React from 'react'
import ReactStars from "react-rating-stars-component";
import { BsCartPlus } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi"
import { AiOutlineEye } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs"
import { Link, useLocation } from 'react-router-dom';



const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <>

            <div className={` ${location.pathname == "/store" ? `gr-${grid}` : 'col-3'} `} >
                <Link to=":id" className="product-Card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'>
                            <BsSuitHeart className='heart-to' />
                        </button>
                    </div>
                    <div className="product-image">
                        <img src="images/cok4.jpg" alt="Product-image" className="product-img-card img-fluid" />
                        <img src="images/cok5.jpg" alt="Product-image" className="product-img-card img-fluid" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Kingstone</h6>
                        <h5 className="product-title">
                            62 inches long wardrope glass windows for baby
                        </h5>
                        <ReactStars
                            count={5}
                            value={4}
                            edit={false}
                            size={24}
                            activeColor="#ffd700"
                        />
                        <p className={`product-description ${grid === 12 ? "d-block" : "d-none"}`}>lore ipsum ameta aluta
                            make sure you come home with products and rest
                            see you in the continua state levels continua in modern way</p>
                        <p className="price">
                            $150.00
                        </p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-8">
                            <button className='border-0 bg-transparent sideicon'>
                                <BsCartPlus />
                            </button>
                            <button className='border-0 bg-transparent sideicon'>
                                <BiGitCompare />
                            </button>
                            <button className='border-0 bg-transparent sideicon'>
                                <AiOutlineEye />
                            </button>

                        </div>
                    </div>
                </Link>
            </div>
            <div className={` ${location.pathname == "/store" ? `gr-${grid}` : 'col-3'} `} >
                <Link className="product-Card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'>
                            <BsSuitHeart className='heart-to' />
                        </button>
                    </div>
                    <div className="product-image">
                        <img src="images/cok4.jpg" alt="Product-image" className="product-img-card img-fluid" />
                        <img src="images/cok5.jpg" alt="Product-image" className="product-img-card img-fluid" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Kingstone</h6>
                        <h5 className="product-title">
                            62 inches long wardrope glass windows for baby
                        </h5>
                        <ReactStars
                            count={5}
                            value={4}
                            edit={false}
                            size={24}
                            activeColor="#ffd700"
                        />
                        <p className={`product-description ${grid === 12 ? "d-block" : "d-none"}`}>lore ipsum ameta aluta
                            make sure you come home with products and rest
                            see you in the continua state levels continua in modern way</p>
                        <p className="price">
                            $150.00
                        </p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-8">
                            <button className='border-0 bg-transparent sideicon'>
                                <BsCartPlus />
                            </button>
                            <button className='border-0 bg-transparent sideicon'>
                                <BiGitCompare />
                            </button>
                            <button className='border-0 bg-transparent sideicon'>
                                <AiOutlineEye />
                            </button>

                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard