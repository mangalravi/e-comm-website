import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs';
// import newsletter from '../images/newletter.png'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src="images/newsletter.png" alt="" />
              <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
            </div>
          </div>
          <div className="col-7">
          <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="your email adders..."
                  aria-label="your email adders..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                 Subscribe
                </span>
              </div>
          </div>
        </div>
        </div>
      </footer>
      <footer className='py-4'>
           <div className="container-xxl">
            <div className="row">
                <div className="col-4">
                    <h4 className='text-white mb-4'>Contact Us</h4>
                    <div>
                        <address className='text-white fs-6'>Bari Dholpur (Raj.) <br />
                        Pincode:-328021
                        </address>
                        <a href="tel: +91 63587988940" className='mt-3 d-block mb-1 text-white'>+91 6378728940</a>
                        <a href="Email: ravimangal2884@gmail.com" className='mt-2 d-block mb-0 text-white'>ravimangal2884@gmail.com</a>
                        <div className="social-icons d-flex align-items-center gap-30 mt-4">
                            <a href="#" className='text-white'><BsLinkedin className='fs-4' /></a>
                            <a href="#" className='text-white'><BsGithub className='fs-4' /></a>
                            <a href="#" className='text-white'><BsYoutube className='fs-4' /></a>
                            <a href="#" className='text-white'><BsInstagram className='fs-4' /></a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <h4 className='text-white mb-4'>Information</h4>
                    <div className='footer-links d-flex flex-column'>
                        <Link to='/privacy-policy' className='text-white mb-1 py-2'>Privacy Policy</Link>
                        <Link to='/refund-policy' className='text-white mb-1 py-2'>Refund Policy</Link>
                        <Link to='/shipping-policy' className='text-white mb-1 py-2'>Shipping Policy</Link>
                        <Link to='/term-and-condition' className='text-white mb-1 py-2'>Terms & Conditions</Link>
                        <Link to='/blog' className='text-white mb-1 py-2'>Blogs</Link>
                    </div>
                </div>
                <div className="col-3">
                    <h4 className='text-white mb-4'>Account</h4>
                    <div className='footer-links d-flex flex-column'>
                        <Link className='text-white mb-1 py-2'>About Us</Link>
                        <Link className='text-white mb-1 py-2'>Faq</Link>
                        <Link className='text-white mb-1 py-2'>Contact</Link>                    </div>
                </div>
                <div className="col-2">
                    <h4 className='text-white mb-4'>Quick Links</h4>
                    <div className='footer-links d-flex flex-column'>
                        <Link className='text-white mb-1 py-2'>Laptop</Link>
                        <Link className='text-white mb-1 py-2'>Smartphones</Link>
                        <Link className='text-white mb-1 py-2'>Tablate</Link>
                        <Link className='text-white mb-1 py-2'>Watch</Link>
                    </div>
                </div>
            </div>
           </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center b-0 text-white">
              &copy;{new Date().getFullYear()}; Powered by Developer's Corner</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer