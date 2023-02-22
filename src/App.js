import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes }  from 'react-router-dom';
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Layout from './component/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/WishList';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import TermAndConditions from './pages/TermAndConditions';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SingleProduct from "./pages/SingleProduct";



function App() {
  return (
    <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />}>
<Route index element={<Home />}/>
<Route path="about" element={<About />}/>
<Route path="contact" element={<Contact />}/>
<Route path='store' element={<OurStore />} />
<Route path='blog' element={<Blog />} />
<Route path='blog/:id' element={<SingleBlog />} />
<Route path='compareproduct' element={<CompareProduct />} />
<Route path='wishlist' element={<WishList />} />
<Route path='login' element={<Login />} />
<Route path='signup' element={<Signup />} />
<Route path='forgotpassword' element={<Forgotpassword />} />
<Route path='reset-password' element={<ResetPassword />} />
<Route path='privacy-policy' element={<PrivacyPolicy />} />
<Route path='refund-policy' element={<RefundPolicy />} />
<Route path='shipping-policy' element={<ShippingPolicy />} />
<Route path='term-and-condition' element={<TermAndConditions />} />
<Route path="product/:id" element={<SingleProduct />} />
<Route path="cart" element={<Cart />} />
<Route path="checkout" element={<Checkout />} />
    </Route>
  </Routes>
</BrowserRouter>
    </>
  );
}

export default App;