import React from 'react'
import { Link } from "react-router-dom"

import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProductCard from '../components/SpecialProductCard'
import Container from '../components/Container'
import { Services } from '../utils/Data'

const Home = () => {
    return (
        <>
            <Container className="home-wrapper-1 py-5">
                <div className=" row">
                    <div className="col-6">
                        <div className="main-banner  position-relative">
                            <img src="images/fastfood1.jpg" alt="fastfood" className='img-fluid rounded-3' />
                            <div className="main-banner-content position-absolute">
                                <h5>Elegant for Pro</h5>
                                <h6>Turing Washhands.</h6>
                                <p>from $999.00 or $41.62/mo</p>
                                <Link className='button'>Buy now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-wrap justify-content-between align-items-center gap-8">
                            <div className="small-banner position-relative">
                                <img src="images/piza1.jpg" alt="fastfood" className='img-fluid rounded-3' />
                                <div className="small-banner-content position-absolute">
                                    <h5>New Arrival</h5>
                                    <h6>Turing Washhands.</h6>
                                    <p>from $999.00 <br />or $41.62/mo</p>

                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img src="images/piza1.jpg"
                                    alt="fastfood"
                                    className='img-fluid rounded-3' />
                                <div className="small-banner-content position-absolute">
                                    <h5>New Arrival</h5>
                                    <h6>Turing Washhands.</h6>
                                    <p>from $999.00<br /> or $41.62/mo</p>

                                </div>
                            </div>
                            <div className="small-banner  position-relative">
                                <img src="images/pizza2.jpg" alt="fastfood" className='img-fluid rounded-3' />
                                <div className="small-banner-content position-absolute">
                                    <h5>New Arrival</h5>
                                    <h6>Turing Washhands.</h6>
                                    <p>from $999.00<br /> or $41.62/mo</p>

                                </div>
                            </div>
                            <div className="small-banner  position-relative">
                                <img src="images/piza1.jpg" alt="fastfood" className='img-fluid rounded-3' />
                                <div className="small-banner-content position-absolute">
                                    <h5>New Arrival</h5>
                                    <h6>Turing Washhands.</h6>
                                    <p>from $999.00<br /> or $41.62/mo</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>


            <section className='home-wrapper-2 py-5'>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-between">
                                {Services?.map((i, j) => {
                                    return (
                                        <div className='d-flex align-items-center gap-15' key={j}>
                                            <i icon={i.icon} className='tokes' />
                                            <div>
                                                <h6 className='h-title'>{i.tagline}</h6>
                                                <p className='p-desc mb-0'>{i.title}</p>
                                            </div>
                                        </div>
                                    )
                                })}


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-3 py-5">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex flex-wrap justify-content-between align-items-center ">
                                <div className=' d-flex  align-items-center'>
                                    <div>
                                        <h6>Tiles</h6>
                                        <p className='product-desc'>10 Items</p>
                                    </div>
                                    <img src="images/pizza4.jpg" alt="Tiles" className="mango" />
                                </div>
                                <div className='d-flex  align-items-center'>
                                    <div>
                                        <h6>Tiles $ game</h6>
                                        <p className='product-desc'>10 Items</p>
                                    </div>
                                    <img src="images/pizza4.jpg" alt="Tiles" className="mango" />
                                </div>
                                <div className=' d-flex  align-items-center'>
                                    <div>
                                        <h6>Tiles</h6>
                                        <p className='product-desc'>10 Items</p>
                                    </div>
                                    <img src="images/pizza4.jpg" alt="Tiles" className="mango" />
                                </div>
                                <div className='d-flex  align-items-center'>
                                    <div>
                                        <h6>Tiles</h6>
                                        <p className='product-desc'>10 Items</p>
                                    </div>
                                    <img src="images/pizza4.jpg" alt="Tiles" className="mango" />
                                </div>
                                <div className=' d-flex  align-items-center'>
                                    <div>
                                        <h6>Tiles</h6>
                                        <p className='product-desc'>10 Items</p>
                                    </div>
                                    <img src="images/pizza4.jpg" alt="Tiles" className="mango" />
                                </div>
                                <div className='d-flex  align-items-center'>
                                    <div>
                                        <h6>Tiles $ game</h6>
                                        <p className='product-desc'>10 Items</p>
                                    </div>
                                    <img src="images/pizza4.jpg" alt="Tiles" className="mango" />
                                </div>
                                <div className=' d-flex align-items-center'>
                                    <div>
                                        <h6>Tiles</h6>
                                        <p className='product-desc'>10 Items</p>
                                    </div>
                                    <img src="images/pizza4.jpg" alt="Tiles" className="mango" />
                                </div>
                                <div className='d-flex  align-items-center'>
                                    <div>
                                        <h6>Tiles</h6>
                                        <p className='product-desc'>10 Items</p>
                                    </div>
                                    <img src="images/pizza4.jpg" alt="Tiles" className="mango" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='featured-wrapper py-5 home-wrapper-2'>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Featured Collections
                            </h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />



                    </div>
                </div>
            </section>

            <section className="famous-wrapper py-5 home-wrapper-2">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img src="images/foodWall3.jpg" alt="" className='img-fluid' />
                                <div className="famous-content position-absolute">
                                    <h5>Big Size</h5>
                                    <h6>Smart Bed Series</h6>
                                    <p>from $1000 or $100/mo for 10 mo </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img src="images/foodWall3.jpg" alt="" className='img-fluid' />
                                <div className="famous-content position-absolute">
                                    <h5>Big Size</h5>
                                    <h6>Smart Bed Series</h6>
                                    <p>from $1000 or $100/mo for 10 mo </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img src="images/foodWall3.jpg" alt="" className='img-fluid' />
                                <div className="famous-content position-absolute">
                                    <h5>Big Size</h5>
                                    <h6>Smart Bed Series</h6>
                                    <p>from $1000 or $100/mo for 10 mo </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img src="images/foodWall3.jpg" alt="" className='img-fluid' />
                                <div className="famous-content position-absolute">
                                    <h5>Big Size</h5>
                                    <h6>Smart Bed Series</h6>
                                    <p>from $1000 or $100/mo for 10 mo </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="special-products py5 home-wrapper-2">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading">Special Products</div>
                        </div>
                        <div className="row">
                            <SpecialProductCard />
                            <SpecialProductCard />
                            <SpecialProductCard />
                            <SpecialProductCard />
                        </div>
                    </div>
                </div>
            </section>

            <section className='popular-wrapper py-5 home-wrapper-2'>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Popular Products
                            </h3>
                        </div>
                    </div>
                    <div className="row">


                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>

            <section className="marquee-wrapper home-wrapper-4 py-5">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee-inner-wrapper card-wrapper">
                                <Marquee className="d-flex">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='blog-wrapper py-5 home-wrapper-2'>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Latest Products
                            </h3>
                        </div>


                    </div>
                    <div className="row">
                        <div className="col-3">
                            <BlogCard />
                        </div>
                        <div className="col-3">
                            <BlogCard />
                        </div>
                        <div className="col-3">
                            <BlogCard />
                        </div>
                        <div className="col-3">
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Home