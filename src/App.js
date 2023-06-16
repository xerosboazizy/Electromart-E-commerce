import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Forgotpass } from './pages/Forgotpass';
import ResetPass from './pages/ResetPass';
import Singleblog from './pages/Singleblog';
import ShippingPolicy from './pages/ShippingPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { RefundPolicy } from './pages/RefundPolicy';
import TermsCondition from './pages/TermsCondition';
import SingleProduct from './pages/SingleProduct';
import Cart from "./pages/Cart"
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='product' element={<OurStore />} />
            <Route path='product/:id' element={<SingleProduct />} />
            <Route path='blogs' element={<Blog />} />
            <Route path='blog/:id' element={<Singleblog />} />
            <Route path='cart' element={<Cart />} />
            <Route path='compare-products' element={<CompareProduct />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='forgotpass' element={<Forgotpass />} />
            <Route path='resetpass' element={<ResetPass />} />
            <Route path='shipping-policy' element={<ShippingPolicy />} />
            <Route path='privacy-policy' element={<PrivacyPolicy />} />
            <Route path='refund-policy' element={<RefundPolicy />} />
            <Route path='term-conditions' element={<TermsCondition />} />
            <Route path='checkout' element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
