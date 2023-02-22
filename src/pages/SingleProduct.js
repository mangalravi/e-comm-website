import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";
import ProductCard from "../component/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../component/Color";
import {TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../component/Container";


const SingleProduct = () => {
  const props = { width: 400, height: 600, zoomWidth: 500,
     img: "https://imgs.search.brave.com/j6udTBq6yjeTXHDbiYZ6skS8HBuFoPtcuS7bN40CzlA/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMUhYQUVm/bXRZQmVOalNzcGtx/NnpVOFZYYTkvQ1VS/RERFTi1NZW4tcy1M/dXh1cnktU3RlZWwt/c3RyaXAtUXVhcnR6/LUdvbGQtV2F0Y2gt/TWFsZS1DbG9jay1G/YXNoaW9uLUNhbGVu/ZGFyLUNhc3VhbC1C/dXNpbmVzcy1XYXRj/aC5qcGc" };
  const [orderedProduct, setOrderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div> 
                    <ReactImageZoom {...props}/>
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
              <div><img src="https://imgs.search.brave.com/aIpMPiE8XVntkpyJNUhdhCJFdFK0OglbVdMeHj2rSFw/rs:fit:1000:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYW50aXF1ZXNh/dGxhcy5jb20vZGVh/bGVyLXN0b2NrLWlt/YWdlcy90aGV2aW50/YWdld3Jpc3R3YXRj/aC9BX2dlbnRzX1Rp/c3NvdF9TZWFzdGFy/X3dyaXN0X3dfYXMx/NzBhNDc0OXotMS5q/cGc" className="img-fluid" alt="" /></div>
              <div><img src="https://imgs.search.brave.com/fKizWTu9OzQRGEq9I8O_c-uwAx8bVRdEqLMBwMLBRsU/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly93d3cu/d3Jpc3R3YXRjaHNw/b3QuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE5LzA4L1Jl/cGxpY2EtUm9sZXgt/TWlsZ2F1c3MtVG91/cmJpbGxvbi0xMDI0/eDEwMjQuanBn" className="img-fluid" alt="" /></div>
              <div><img src="https://imgs.search.brave.com/N2TMp_KefTUSCwkDsuHzh_pMLMiJF7IkRMf8UtXqB_g/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly93d3cu/cmlnYnlqZXdlbGxl/cnMuY28udWsvaW1h/Z2VzL2dlbnRzLXRp/dGFuaXVtLWdwcy1z/b2xhci13YXRjaC1i/cmFjZWxldC1saW1p/dGVkLWVkaXRpb24t/c3NoMDA3ajEtcDM1/MjctNDg5MV9pbWFn/ZS5qcGc" className="img-fluid" alt="" /></div>
              <div><img src="https://imgs.search.brave.com/Xc3Ss3HKg0wUGoyNtraFq7fXp16kB8OiARAws5uoZr4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/ZnJlc2huZXNzbWFn/LmNvbS8uaW1hZ2Uv/dF9zaGFyZS9NVE0z/TVRneU56UTFNall5/TURRd09ETTMvYmFt/Zm9yZC13YXRjaC1k/ZXBhcnRtZW50LWhl/cml0YWdlLWNvY29h/LXRpdGFuaXVtLWNv/YXRpbmctMDEuanBn" className="img-fluid" alt="" /></div>
              </div>
            </div>
            <div className="col-6">
                <div className="main-product-detalis">
                <div className="border-bottom">
                <h3 className="title">Kids Headphones  bulk 10 packs multicolord for students.</h3>
                </div>
                <div className="border-bottom py-3">
                    <p className="price">$ 100</p>
                    <div className="d-flex align-items-center gap-10">
                    <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0 t-review">2 Reviews</p>
                    </div>
                    <a className="review-btn" href="#review">Write a Review</a>
                </div>
                <div className=" py-3">
                    <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className="product-heading">Type:</h3>
                        <p className="product-data">Watch</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className="product-heading">Brand:</h3>
                        <p className="product-data">Apple</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className="product-heading">Catagory:</h3>
                        <p className="product-data">Watch</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className="product-heading">Tags:</h3>
                        <p className="product-data">Watch</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className="product-heading">Abailability:</h3>
                        <p className="product-data">In Stock</p>
                    </div>
                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                        <h3 className="product-heading">Size:</h3>
                        <div className="d-flex flex-wrap gap-15">
                        <span className="badge border border-1 bg-white text-dark border-secodary">S</span>
                        <span className="badge border border-1 bg-white text-dark border-secodary">M</span>
                        <span className="badge border border-1 bg-white text-dark border-secodary">XL</span>
                        <span className="badge border border-1 bg-white text-dark border-secodary">XXL</span>
                        </div>
                    </div>
                    <div className="d-flex gap-10 flex-column  mt-2 mb-3">
                        <h3 className="product-heading">Colour:</h3>
                       <Color />
                    </div>
                    <div className="d-flex gap-15 flex-row align-items-center mt-2 mb-3">
                        <h3 className="product-heading">Quantity:</h3>
                        <div className="">
                            <input type="number" min={1} max={10}
                             style={{width:"70px"}} ClassName="form-control" id="" />
                        </div>
                        <div className="d-flex align-items-center gap-30">
                        <button className="button border-0" type="submit">Add To Cart</button>
                      <button to='/signup' className="button signup">Buy It Now</button>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-15">
                    <div><a href=""><TbGitCompare className="fs-5 me-2"/>Add to compare</a></div>
                    <div><a href=""><AiOutlineHeart className="fs-5 me-2"/>Add to wishlist</a></div>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-3">
                        <h3 className="product-heading">Shipping & returns</h3>
                        <p className="product-data">
                        Free Shipping & returns availavle on all orders! <br />
                         Lorem ipsum, dolor sit amet consectetur <b> adipisicing elit. Est.</b>
                        </p>
                    </div>
                    <div className="d-flex gap-10 flex-column my-3">
                        <h3 className="product-heading">Product Link:</h3>
                        <p className="product-data">
                            <a href="javascript:void(0)" onClick={() => {
                            copyToClipboard 
                            ("https://imgs.search.brave.com/j6udTBq6yjeTXHDbiYZ6skS8HBuFoPtcuS7bN40CzlA/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMUhYQUVm/bXRZQmVOalNzcGtx/NnpVOFZYYTkvQ1VS/RERFTi1NZW4tcy1M/dXh1cnktU3RlZWwt/c3RyaXAtUXVhcnR6/LUdvbGQtV2F0Y2gt/TWFsZS1DbG9jay1G/YXNoaW9uLUNhbGVu/ZGFyLUNhc3VhbC1C/dXNpbmVzcy1XYXRj/aC5qcGc")
                            }}>
                           Copy Product Link  </a>
                        </p>
                    </div>
                </div>
                </div>
            </div>
          </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2 ">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  dicta suscipit consequatur? Non, aliquid eum. Non autem itaque
                  quis voluptatem, tenetur nihil, nulla commodi ipsa recusandae
                  magni soluta esse, sequi amet! Ipsa labore perspiciatis nulla.
                </p>
              </div>
            </div>
          </div>
      </Container>
      <Container  class1="reviews-wrapper home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 id="review" className="mb-2">Customer Review</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div  className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        className="w-100 form-control"
                        id=""
                        cols="30"
                        rows="4"
                        placeholder=" Enter Any Comments..."
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review ">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Navdeep</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto nihil fugit alias id commodi voluptates et
                      delectus minus illum nisi, temporibus laboriosam quibusdam
                      recusandae aspernatur eveniet ab, itaque vel culpa
                      expedita ipsa iusto. Nihil consequatur cum, quia
                    </p>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Product </h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
      </Container>
    </>
  );
};

export default SingleProduct;