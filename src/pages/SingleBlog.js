import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";
import {HiOutlineArrowLeft} from 'react-icons/hi'
import Container from '../component/Container';
// import blog from '../images/blog-1.jpg'


const SingleBlog = () => {
  return (
  <>
          <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
            <div className="single-blog-card">
            <Link to='/blog' className='d-flex align-items-center gap-10'>
            <HiOutlineArrowLeft className='fs-4'/> Go Back To Blogs..</Link>
                <h3 className="title">A Beautiful Sunday Morning</h3>
                <img src="images/blog-1.jpg" className='img-fluid my-4 w-100' alt="blog" />
                <p>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Accusantium autem susci
                 pit ad illo eligendi id nostrum quod arch
                 itecto alias illum aspernatur quasi beata
                 e itaque maxime numquam voluptates aliquid
                 , repellendus fugiat nisi. Praesentium quid\
                 em debitis deserunt?</p>
            </div>
            </div>
        </div>
       </Container>
  </>
  )
}

export default SingleBlog