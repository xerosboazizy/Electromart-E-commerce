import React from 'react'
import Meta from '../components/Meta'
import rest5 from ".././image/rest5.jpg"
import BreadCrumb from "../components/BreadCrumb"
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa"
import Container from '../components/Container'

const Singleblog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title="Dynamic Blog Name" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to="/blogs" className='d-flex align-items-center gap-10'><FaArrowLeft className='fs-6' /> Back to Blogs</Link>
                                <h4 className='title'> New Tecno Phantom 8 Pro Max</h4>
                                <img src={rest5} alt="dagogo" className='img-fluid w-100 my-4' />
                                <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit
                                    in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur. Excepteur sint
                                    occaecat cupidatat non proident,
                                    in culpa qui officia
                                    mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                
            </Container>
        </>
    )
}

export default Singleblog