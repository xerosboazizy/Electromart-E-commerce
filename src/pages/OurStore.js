import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard"
import Colors from '../components/Colors';


const OurStore = () => {
    const [grid, setGrid] = useState(3)

    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumb title="Our Store" />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Shop by Categories
                                </h3>
                                <ul className='p-0'>
                                    <li>Bedroom</li>
                                    <li>Toiletries</li>
                                    <li>Sitting Room</li>
                                    <li>Gardens</li>
                                </ul>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Filter BY
                                </h3>
                                <div >
                                    <h5 className='sub-title'> Availability </h5>
                                    <div>
                                        <div className="form-check">
                                            <input className='form-check-input' type='checkbox' value="" id='' />
                                            <label htmlFor="" className='form-check-label'>
                                                In Stocked(1)
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className='form-check-input' type='checkbox' value="" id='' />
                                            <label htmlFor="" className='form-check-label'>
                                                Out of Stock(0)
                                            </label>
                                        </div>

                                    </div>
                                    <h5 className='sub-title'>Price</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className='form-floating'>
                                            <input type=" "
                                                className='form-control p-2'
                                                id='floatingInput1'

                                                placeholder='from' />
                                            <label htmlFor="floatinginput1">From</label>
                                        </div>
                                        <div className='form-floating '>
                                            <input type=" "

                                                className='form-control'
                                                id='floatingInput2'
                                                placeholder='to' />
                                            <label htmlFor="floatinginput2">To</label>
                                        </div>

                                    </div>
                                    <h5 className='sub-title'>Colors</h5>
                                    <div >
                                        <Colors />
                                    </div>
                                    <h5 className='sub-title'>Size</h5>
                                    <div>
                                        <div className="form-check">
                                            <input
                                                className='form-check-input'
                                                type='checkbox'
                                                value=""
                                                id='color-1' />
                                            <label htmlFor="color-1" className='form-check-label'>
                                                S(2)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className='form-check-input'
                                                type='checkbox'
                                                value=""
                                                id='color-1' />
                                            <label htmlFor="color-1" className='form-check-label'>
                                                M(0)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className='form-check-input'
                                                type='checkbox'
                                                value=""
                                                id='color-1' />
                                            <label htmlFor="color-1" className='form-check-label'>
                                                L(0)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className='form-check-input'
                                                type='checkbox'
                                                value=""
                                                id='color-1' />
                                            <label htmlFor="color-1" className='form-check-label'>
                                                XL(0)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className='form-check-input'
                                                type='checkbox'
                                                value=""
                                                id='color-1' />
                                            <label htmlFor="color-1" className='form-check-label'>
                                                XXL(6)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className='form-check-input'
                                                type='checkbox'
                                                value=""
                                                id='color-1' />
                                            <label htmlFor="color-1" className='form-check-label'>
                                                TL(7)
                                            </label>
                                        </div>

                                    </div>


                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Product Tags
                                </h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center">
                                        <span className="badge bg-dark text-light rounded-3 py-2">Living room</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2">Bed Shits</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2">Toiletries</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2">Tiles</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2">Scorns</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2">Bed Shits</span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Random Products
                                </h3>
                                <div>
                                    <div className="random-products d-flex mb-3 gap-10">
                                        <div className="w-50">
                                            <img src="images/rest4.jpg" alt="" className='img-fluid' />
                                        </div>
                                        <div className="w-50">
                                            <h6>Couple Wardrope fittings and Light</h6>

                                            <ReactStars
                                                count={5}
                                                value={4}
                                                edit={false}
                                                size={20}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 300</b>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex mb-3 gap-10">
                                        <div className="w-50">
                                            <img src="images/rest4.jpg" alt="" className='img-fluid' />
                                        </div>
                                        <div className="w-50">
                                            <h6>Couple Wardrope fittings and Light</h6>

                                            <ReactStars
                                                count={5}
                                                value={4}
                                                edit={false}
                                                size={20}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 300</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 d-block" style={{ "width": "100px" }}>Sort By</p>
                                        <select name="" id="" className='form-control form-select'>
                                            <option value="" selected="selected">Best Selling</option>
                                            <option value="title-ascending">Aphabetically, A-Z</option>
                                            <option value="title-descending">Aphabetically, Z-A</option>
                                            <option value="price-ascending">Price, low to high</option>
                                            <option value="price-descending">Price, high to high</option>
                                            <option value="created-descending">Date, old to new</option>
                                            <option value="created-ascending">Date, new to old </option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="total-products mb-0">200 products</p>
                                        <div className="d-flex gap-10 align-items-center grid">
                                            <img onClick={() => {
                                                setGrid(3)
                                            }}
                                                src="images/hambug4R.png"
                                                alt=""
                                                className='img-fluid '
                                            />

                                            <img onClick={() => {
                                                setGrid(4)
                                            }}
                                                src="images/hambug3.png"
                                                alt=""
                                                className='img-fluid ' />

                                            <img onClick={() => {
                                                setGrid(6)
                                            }}
                                                src="images/hambug2.png"
                                                alt=""
                                                className='img-fluid' />

                                            <img onClick={() => {
                                                setGrid(12)
                                            }}
                                                src="images/hambug4.png"
                                                alt=""
                                                className='img-fluid ' />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="products-list pb-5  ">
                                <div className=" d-flex gap-10 flex-wrap">
                                    <ProductCard grid={grid} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStore