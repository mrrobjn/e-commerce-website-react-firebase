import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
//pages
import Homepage from './pages/HomePage'
import Cartpage from './pages/CartPage'
import Profile from './pages/ProfilePage';
import Product from './pages/ProductPage';
import TopScroll from './layout/TopScroll';
import SingleProduct from './pages/SingleProductPage';
import LoginPage from './pages/LoginPage';
import PurchaseHistory from './components/PurchaseHistory'
import UserProfile from './components/UserProfile';
import RegisterPage from './pages/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import AdminPage from './pages/admin/AdminPage';
import AdminUsers from './components/admin/AdminUsers';
import AdminInsertProduct from './components/admin/AdminInsertProduct';
import AdminProduct from './components/admin/AdminProduct';
import AdminOrders from './components/admin/AdminOrders';
import AdminCategories from './components/admin/AdminCategories';
import AdminBrands from './components/admin/AdminBrands';
import OrderHistory from './pages/OrderHistory';
function App() {
  const [cartItem, setCartItem] = useState([])
  // add item to cart
  const addToCart = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id)
    if (productExist) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : item)))
    }
    else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }
  // decrease item
  const descreaseQty = (product) => {
    const productExist = cartItem.find(item => item.id === product.id)
    // if quantity = 1 
    if (productExist.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    }
    // quantity > 1
    else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty - 1 } : item)))
    }
  }
  // delete item from cart
  const deleteCart = (product) => {
    setCartItem(cartItem.filter((item) => item.id !== product.id))
  }

  // add to cart with quantity value
  const addToCartQty = (product, quantity) => {
    const productExist = cartItem.find((item) => item.id === product.id)
    if (productExist) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty + quantity } : item)))
    }
    else {
      setCartItem([...cartItem, { ...product, qty: quantity }])
    }
  }

  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage
          cartItem={cartItem} />} />
        <Route path='/register' element={<RegisterPage
          cartItem={cartItem} />} />
        <Route path='/resetpassword' element={<ResetPasswordPage
          cartItem={cartItem} />} />
        <Route>
          <Route path='/' element={<Homepage
            addToCart={addToCart}
            cartItem={cartItem}
          />} />
          <Route path='cart' element={<Cartpage
            addToCart={addToCart}
            descreaseQty={descreaseQty}
            deteteCart={deleteCart}
            cartItem={cartItem}
            setCartItem={setCartItem}

          />}
          />
          <Route path='profile' element={<Profile
            cartItem={cartItem}
          />} >
            <Route path="userprofile" element={<UserProfile />} />
            <Route
              path="purchasehistory"
              element={<PurchaseHistory />}
            />
          </Route>
          <Route path='/profile/purchasehistory/:orderId' element={<OrderHistory 
            cartItem={cartItem} />} />
          <Route path='product' element={<Product
            addToCart={addToCart}
            cartItem={cartItem}
          />}
          />
          <Route path='product/:productId'
            element={<SingleProduct
              addToCartQty={addToCartQty}
              cartItem={cartItem}
            />} />
        </Route>
        <Route path='admin' element={<AdminPage />}>
          <Route path='usermanagement' element={<AdminUsers />} />
          <Route path='insertproduct' element={<AdminInsertProduct />} />
          <Route path='adminproduct' element={<AdminProduct />} />
          <Route path='adminorder' element={<AdminOrders />} />
          <Route path='admincategory' element={<AdminCategories />} />
          <Route path='adminbrand' element={<AdminBrands />} />
        </Route>
      </Routes>
      <TopScroll />
    </>
  );
}

export default App;
