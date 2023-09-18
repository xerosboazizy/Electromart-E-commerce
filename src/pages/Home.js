import React from 'react'
import { Link } from "react-router-dom"

import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProductCard from '../components/SpecialProductCard'
import Container from '../components/Container'
import { Services } from '../utils/Data'
import { FaArrowDown } from "react-icons/fa"
import heroimg from "../image/heroimg.png"

const Home = () => {
    return (
        <>
            <Container class1="home-wrapper-1 py-5">
                <div className=" row">
                    <div className="col-6">
                        <div className="d-flex flex-wrap ">
                            <div className='hero-intro'>
                                <h6>First Class Gadgets</h6>
                                <h1>All Electronic products <br /> Up to <span> 50%</span> off </h1>
                                <div>
                                    <p>lremm ipsum  where ever he taake produb tnmekwko alwqays wiuning and asws sellin thgem globallay </p>
                                </div>
                                <Link className='button'>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-banner  position-relative">
                            <img src={heroimg} alt="fastfood" className='img-fluid rounded-3' />
                            <button className='to-shop button'>
                                <FaArrowDown />
                            </button>

                        </div>
                    </div>

                </div>

            </Container>

            <Container class1="home-wrapper-2 py-5">

                <div className="row">
                    <div className="col-12">
                        <div className="services d-flex align-items-center justify-content-between">
                            {Services?.map((i, j) => {
                                return (
                                    <div className='d-flex align-items-center gap-15' key={j}>
                                        <span className='tokes'>{i.icon}</span>
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

            </Container>



            <Container class1="featured-wrapper py-5 home-wrapper-2">
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
            </Container>


            <Container class1="famous-wrapper py-5 home-wrapper-2">
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
            </Container>


            <Container class1="special-products py5 home-wrapper-2">
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
            </Container>

            <Container class1="popular-wrapper py-5 home-wrapper-2">
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
            </Container>

            <Container class1="marquee-wrapper home-wrapper-4 py-5">
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
            </Container>

            <Container class1="blog-wrapper py-5 home-wrapper-2">
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
            </Container>
        </>

    )
}

export default Home