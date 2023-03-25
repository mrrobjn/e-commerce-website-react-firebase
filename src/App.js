import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ProductContext } from './context/ProductContext';
//pages
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer'
import Homepage from './pages/homepage/Homepage'
import Cartpage from './pages/cartpage/Cartpage'
import Profile from './pages/profilepage/Profile';
import Product from './pages/productpage/Product';
import TopScroll from './layout/TopScroll/TopScroll';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import LoginPage from './pages/loginpage/LoginPage';
import PurchaseHistory from './components/PurchaseHistory'
import UserProfile from './components/UserProfile';
import OrderDetail from './components/OrderDetail.jsx'
import RegisterPage from './pages/signuppage/RegisterPage';
import ResetPassword from './pages/resetpassword/ResetPassword';
import UpdatePassword from './components/UpdatePassword';
function App() {
  const products = useContext(ProductContext)
  const [cartItem, setCartItem] = useState([])
  const [productFilter, setProductFilter] = useState(products)

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
  // filter product by type
  const filterResult = (item) => {
    const result = products.filter((product) => {
      return product.data.category_id === item
    })
    setProductFilter(result)
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
      <Header cartItem={cartItem} setProductFilter={setProductFilter} products={products} />
      <div className='page-container'>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route>
            <Route path='/' element={<Homepage
              addToCart={addToCart}
              setProductFilter={setProductFilter}
              filterResult={filterResult}
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
            <Route path='profile' element={<Profile />} >
              <Route path="userprofile" element={<UserProfile />} />
              <Route
                path="purchasehistory"
                element={<PurchaseHistory/>}
              />
              <Route path='password' element={<UpdatePassword />} />
            </Route>
            <Route path='/purchasehistory/:orderId' element={<OrderDetail/>} />
            <Route path='product' element={<Product
              addToCart={addToCart}
              filterResult={filterResult}
              setProductFilter={setProductFilter}
              productFilter={productFilter} />}
            />
            <Route path='/product/:productId'
              element={<SingleProduct
                addToCartQty={addToCartQty} />} />
          </Route>
        </Routes>
        <TopScroll />
      </div>
      <Footer />
    </>
  );
}

export default App;
