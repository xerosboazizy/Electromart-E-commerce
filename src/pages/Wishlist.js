import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'

const Wishlist = () => {

    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" />
            <Container class1="wishlist-wr home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src="images/cancell.png"
                                alt=""
                                className='img-fluid cross position-absolute' />
                            <div className="wishlist-card-image">
                                <img src="images/rest3.jpg"
                                    alt="tryme"
                                    className='img-fluid'
                                />
                            </div>
                            <div className=" py-3 px-3">
                                <h5 className="title">Honorary horse skin 3 x 3 bed</h5>
                                <h6 className="price">$ 100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src="images/cancell.png"
                                alt=""
                                className='img-fluid cross position-absolute' />
                            <div className="wishlist-card-image">
                                <img src="images/rest3.jpg"
                                    alt="tryme"
                                    className='img-fluid'
                                />
                            </div>
                            <div className=" py-3 px-3">
                                <h5 className="title">Honorary horse skin 3 x 3 bed</h5>
                                <h6 className="price">$ 100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src="images/cancell.png"
                                alt=""
                                className='img-fluid cross position-absolute' />
                            <div className="wishlist-card-image">
                                <img src="images/rest3.jpg"
                                    alt="tryme"
                                    className='img-fluid'
                                />
                            </div>
                            <div className=" py-3 px-3">
                                <h5 className="title">Honorary horse skin 3 x 3 bed</h5>
                                <h6 className="price">$ 100</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Wishlist