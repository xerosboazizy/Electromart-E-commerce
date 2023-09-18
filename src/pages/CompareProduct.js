import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Colors from '../components/Colors'
import Container from '../components/Container'

const CompareProduct = () => {
    return (
        <>
            <Meta title={"Compare products"} />
            <BreadCrumb title="Compare Products" />
            <Container class1="compare-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img src="images/cancell.png "
                                alt="try"
                                className='position-absolute cross img-fluid' />

                            <div className="product-card-img">
                                <img src="images/rest2.jpg"
                                    alt=""
                                    className='img-fluid' />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">3x3 delux coven bed for family</h5>
                                <h6 className="price mb-3 mt-3">$100.00</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h6>Brand:</h6>
                                        <p>Kingstone</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h6>Type:</h6>
                                        <p>Furniture</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h6>Availability:</h6>
                                        <p>In Stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h6>Colors:</h6>
                                        <Colors />
                                    </div>
                                    <div className='product-detail'>
                                        <h6>Size:</h6>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img src="images/cancell.png "
                                alt="try"
                                className='position-absolute cross img-fluid' />

                            <div className="product-card-img">
                                <img src="images/rest2.jpg"
                                    alt=""
                                    className='img-fluid' />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">3x3 delux coven bed for family</h5>
                                <h6 className="price mb-3 mt-3">$100.00</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h6>Brand:</h6>
                                        <p>Kingstone</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h6>Type:</h6>
                                        <p>Furniture</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h6>Availability:</h6>
                                        <p>In Stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h6>Colors:</h6>
                                        <Colors />
                                    </div>
                                    <div className='product-detail'>
                                        <h6>Size:</h6>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </Container>

        </>
    )
}

export default CompareProduct