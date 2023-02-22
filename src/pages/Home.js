import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../component/BlogCard';
import ProductCard from '../component/ProductCard';
import SpecialProduct from '../component/SpecialProduct';
import Container from '../component/Container';
import { servises } from './utils/Data';



const Home = () => {
  return (
    <>
    <Container class1="home-wrapper-1 py-5">
    <div className="row">
           <div className="col-6">
             <div className="main-banner position-relative">
             <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main-banner" />
             <div className="main-banner-content position-absolute">
               <h4>SUPERCHARGED FOR PROS.</h4>
               <h5>ipad s13+ pro</h5>
               <p>From $999.00 or $41.62/mo</p>
               <Link className='button'>Buy Now</Link>
             </div>
             </div>
           </div>
           <div className="col-6">
             <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
             <div className="small-banner position-relative">
             <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="main-banner" />
             <div className="main-banner-content position-absolute">
               <h4>Best Sale</h4>
               <h5>ipad s13+ pro</h5>
               <p>From $999.00 <br /> or $41.62/mo</p>
             </div>
             </div>
             <div className="small-banner position-relative">
             <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="main-banner" />
             <div className="main-banner-content position-absolute">
               <h4>NEW ARRIVAL</h4>
               <h5>Buy ipad here</h5>
               <p>From $999.00 <br /> or $41.62/mo</p>
             </div>
             </div>
             <div className="small-banner position-relative">
             <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="main-banner" />
             <div className="main-banner-content position-absolute">
               <h4>NEW ARRIVAL</h4>
               <h5>Buy ipad here</h5>
               <p>From $999.00 <br /> or $41.62/mo</p>
             </div>
             </div>
             <div className="small-banner position-relative">
             <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main-banner" />
             <div className="main-banner-content position-absolute">
               <h4>NEW ARRIVAL</h4>
               <h5>Buy ipad here</h5>
               <p>From $999.00 <br /> or $41.62/mo</p>
             </div>
             </div>
             </div>
           </div>
         </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
    <div className="row">
          <div className="col-12">
            <div className="servises d-flex align-items-center justify-content-between">
          {
            servises?.map((i,j) => {
              return(
                <div className='d-flex align-items-center gap-15' key={j}>
              <img src={i.image} alt="servises" />
              <div>
                <h6>{i.title}</h6>
                <p className='mb-0'>{i.tagline}</p>
              </div>
            </div>
              )
            })
          }
          
            </div>
          </div>
        </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
    <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 itmes</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 itmes</p>
                </div>
                <img src="images/tv.jpg" alt="Smart Tv" />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 itmes</p>
                </div>
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Music and Gaming</h6>
                  <p>10 itmes</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 itmes</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 itmes</p>
                </div>
                <img src="images/tv.jpg" alt="Smart Tv" />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 itmes</p>
                </div>
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Music and Gaming</h6>
                  <p>10 itmes</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              </div>
            </div>
          </div>
    </Container>
    <Container class1="featured-wrapper py-5 home-wrapper-2">
    <div className="row">
          <div className="col-12">
            <h3 className="section-hading">Featurerd Collection</h3>
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
                <img
                  src="images/big-screen-1.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series-7</h6>
                  <p>From $3990r $16.62/no. for 24 no.</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/lepi.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits of brightness</h6>
                  <p className="text-dark">27-inch 5K Retina Display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/smartwatch.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Smartphones</h5>
                  <h6 className="text-dark">SmartPhone 13Pro</h6>
                  <p className="text-dark">Now in Green. Fro $999.00 or$41.62/mo.for24mo. Footnote</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/home-speaker.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Home Speaker</h5>
                  <h6 className="text-dark">Room-filling sound.</h6>
                  <p className="text-dark">From $999.00 or$41.62/mo.for24mo.</p>
                </div>
              </div>
            </div>
          </div>
    </Container>
    <Container class1="special-wrapper py-5 home-wrapper-2">
    <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Product</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
    </Container>
    <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-hading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
    </Container>
    <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
          <div className="marquee-inner-wrapper card-wrapper">
            <Marquee className='d-flex'>
            <div className='mx-4 w-25'>
              <img src="images/brand-01.png" alt="brand" />
            </div>
            <div className='mx-4 w-25'>
              <img src="images/brand-02.png" alt="brand" />
            </div>
            <div className='mx-4 w-25'>
              <img src="images/brand-03.png" alt="brand" />
            </div>
            <div className='mx-4 w-25'>
              <img src="images/brand-04.png" alt="brand" />
            </div>
            <div className='mx-4 w-25'>
              <img src="images/brand-05.png" alt="brand" />
            </div>
            <div className='mx-4 w-25'>
              <img src="images/brand-06.png" alt="brand" />
            </div>
            <div className='mx-4 w-25'>
              <img src="images/brand-07.png" alt="brand" />
            </div>
            <div className='mx-4 w-25'>
              <img src="images/brand-08.png" alt="brand" />
            </div>
            </Marquee>
          </div>
          </div>
        </div>
    </Container>
    <Container class1="blog-wrapper py-5 home-wrapper-2">
          <div className="row">
          <div className="col-12">
            <h3 className="section-hading">Our Latest Blogs</h3>
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

export default Home;