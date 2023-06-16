import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { MdKeyboardVoice } from 'react-icons/md';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { BiCategoryAlt } from 'react-icons/bi';


import { BiGitCompare } from 'react-icons/bi';

import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className='header-top-strip py-3 '>
                <div className='container-lg'>
                    <div className="row">
                        <div className='col-6'>
                            <p className='headnews text-white mb-0'>Free shipping below $100 & free Returns</p>
                        </div>
                        <div className='col-6'>
                            <p className='headnews text-end text-white  mb-0'>
                                Hotline <a className='text-white' href="tel:+234 9139284544">(+234) 913 928 4544</a></p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-uppper py-3 ">
                <div className="container-lg">
                    <div className='row align-items-center'>
                        <div className="col-2">
                            <h1 className='fs-4'>
                                <Link className='text-white'>Homebud</Link>
                            </h1>
                        </div>
                        <div className="col-5">
                            <div class="input-group ">
                                <span class="input-group-text p-2" id='basic-addon1'>
                                    <BsSearch className='fs-5' />
                                </span>
                                <input type="text"
                                    class="form-control py-1"
                                    aria-label="Search product here....."
                                    placeholder='Search product here....'

                                />
                                <span class="input-group-text p-2" id='basic-addon2'>
                                    <MdKeyboardVoice className='fs-5' />
                                </span>
                            </div>
                        </div>


                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link to="/compare-products" className='d-flex align-items-center gap-10 text-white'>
                                        <BiGitCompare className='clik-icon ' />
                                        <p className='tark mb-0'>compare <br />products</p>
                                    </Link>
                                </div>
                                <Link to="/wishlist" className='d-flex align-items-center gap-10 text-white'>
                                    <AiOutlineHeart className='clik-icon ' />
                                    <p className='tark mb-0'>favourite <br /> wishlist</p>
                                </Link>
                                <div>
                                    <Link to="/login" className='d-flex align-items-center gap-10 text-white'>
                                        <AiOutlineUser className='clik-icon ' />
                                        <p className='tark mb-0'>Login <br /> Logout</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/cart" className='d-flex align-items-center gap-10 text-white'>
                                        <SlBasket className='clik-icon ' />
                                        <div className='d-flex flex-column gap-8'>
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='tark mb-0'>$ 500</p>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-3 sticky-top ">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center">
                                <div className='dropdown'>
                                    <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-10 d-flex align-items-center "
                                        type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <BiCategoryAlt className='caticon' />
                                        <span className='me-5 d-inline-block'>Shop categories</span>

                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                                        <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                                        <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                                    </ul>
                                </div>
                                <div className='menu-links'>
                                    <div className='d-flex align-items-center gap-25'>
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="product">Store</NavLink>
                                        <NavLink to='blogs'>Blog</NavLink>
                                        <NavLink to='/contact'>Contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header