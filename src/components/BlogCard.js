import React from 'react'
import { Link } from 'react-router-dom'


const BlogCard = () => {
    return (

        <div className="blog-card">
            <div className="card-image">
                <img src="images/cok2.jpg" alt="blog" className='img-fluid w-100' />
            </div>
            <div className="blog-content">
                <p className='date'>1, feb 2023</p>
                <h5 className="title"> Febuary Products</h5>
                <p className="desc">lorem ipsum biara ebe taaa bud did you know am the man with the pistols, be warned i kill people...</p>
                <Link to='/blog/:id' className='button'>Read More</Link>
            </div>
        </div>

    )
}

export default BlogCard