import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
// import prodcompare from '../images/prodcompare.svg';
import wish from '../images/wish.svg';
// import wishlist from '../images/wishlist.svg';
// import watch from '../images/watch.jpg';
// import watch from '../images/watch-1.avif';
// import addcart from '../images/add-cart.svg';
// import view from '../images/view.svg';





const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation();
  // alert(location);
  return (
    <>
      <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link 
        to={`${location.pathname == "/" ?  'product/:id' :
         location.pathname == "/product/:id" ? "/product/:id" :
          ":id" }`} className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <button className='border-0 bg-transparent'><img src={wish} alt="wishlist" /></button>
        </div>
            <div className="product-image">
              <img src="images/watch.jpg"  className='img-fluid' alt="product-image" />
              <img src="images/smart-watch-1.webp" className='img-fluid'  alt="product-image" />
            </div>
            <div className="product-details">
              <h6 className='brand'>Havels</h6>
              <h5 className="product-title">
                Kids Headphones bulk 10 pack colored for student
              </h5>
              <ReactStars count={5} value='3' edit={false} size={24} activeColor="#ffd700">
                
              </ReactStars>
              <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quasi quas beatae suscipit saepe ut optio eveniet neque itaque aliquam.
              </p>
              <p className="price">$100.00</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <button className='border-0 bg-transparent'>
                  <img src="images/prodcompare.svg" alt="prodcompare" />
                </button>
                <button className='border-0 bg-transparent'>
                  <img src="images/view.svg" alt="view" />
                </button>
                <button className='border-0 bg-transparent'>
                  <img src="images/add-cart.svg" alt="add-cart" />
                </button>
              </div>
            </div>
        </Link>
    </div>
    <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
    <Link
     to={`${location.pathname == "/" ?  'product/:id' :
         location.pathname == "/product/:id" ? "/product/:id" :
          ":id" }`} className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link><img src="images/wish.svg" alt="wishlist" /></Link>
        </div>
            <div className="product-image">
              <img src="images/watch.jpg"  className='img-fluid' alt="product-image" />
              <img src="images/smart-watch-1.webp" className='img-fluid'  alt="product-image" />
            </div>
            <div className="product-details">
              <h6 className='brand'>Havels</h6>
              <h5 className="product-title">
                Kids Headphones bulk 10 pack colored for student
              </h5>
              <ReactStars count={5} value='3' edit={false} size={24} activeColor="#ffd700">
                
              </ReactStars>
              <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quasi quas beatae suscipit saepe ut optio eveniet neque itaque aliquam.
              </p>
              <p className="price">$100.00</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <button clssName='border-0 bg-transparent'>
                  <img src="images/prodcompare.svg" alt="prodcompare" />
                </button>
                <buttonn cclsName='corder-0 bg-transparent'>
                  <img src="images/view.svg" alt="view" />
                </buttonn>
                <buttonn cclsName='corder-0 bg-transparent'>
                  <img src="images/add-cart.svg" alt="add-cart" />
                </buttonn>
              </div>
            </div>
        </Link>
    </div>
    </>
    
    
  )
}

export default ProductCard;