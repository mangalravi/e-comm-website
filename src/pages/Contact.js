import React from 'react';
import BreadCrumb from '../component/BreadCrumb';
import Meta from '../component/Meta';
import {AiOutlineHome , AiOutlineMail} from 'react-icons/ai';
import {BiPhoneCall, BiInfoCircle} from 'react-icons/bi';
import Container from '../component/Container';

const Contact = () => {
  return (
   <>
      <Meta title={'Contact Us'} />
       <BreadCrumb title='Contact Us' /> 
       <Container class1="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28524.951343203444!2d77.58781644656024!3d26.660681280120503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973e1c9a4ea2137%3A0x91f121c1c1d274c2!2sBari%2C%20Rajasthan%20328021!5e0!3m2!1sen!2sin!4v1676457737085!5m2!1sen!2sin" 
            width="600" height="450" className='border-0 w-100'
             allowFullScreen="" loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade">
             </iframe>
            </div>
            <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
            <div>
              <h3 className="contact-title mb-4">Contact Us</h3>
              <form action="" className='d-flex flex-column gap-15'>
                <div>
                <input type="text" className="form-control" placeholder=' Enter Your Name' />
                </div>
                <div>
                <input type="email" className="form-control"  placeholder=' Enter Your Email'/>
                </div>
                <div>
                <input type="tel" className="form-control" placeholder=' Enter Your Mobile Number' />
                </div>
                <div>
                <textarea className='w-100 form-control' id="" cols="30" rows="4" placeholder=' Enter Any Comments...'></textarea>
                </div>
                <div>
                  <button className="button border-0">Submit</button>
                </div>
              </form>
            </div>
            <div>
              <h3 className="contact-title mb-4">Get in touch with us</h3>
              <div>
                <ul className="ps-0">
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                  <AiOutlineHome className='fs-5' />
                  <address className='mb-0'>Bari,Dholpur(Raj.)</address>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                  <BiPhoneCall className='fs-5' />
                  <a href="tel: +91 6350428940">+91 6350428940</a>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                  <AiOutlineMail className='fs-5' />
                  <a href="mailto:ravimangal2884@gmail.com">ravimangal2884@gmail.com</a>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                  <BiInfoCircle className='fs-5' />
                  <p className='mb-0'>Monday - Friday 10 AM - 8 PM</p>
                  </li>
                </ul>
              </div>
            </div>
            </div>
            </div>
          </div>
       </Container>
   </>
  )
}

export default Contact