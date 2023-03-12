import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db, auth } from './firebase'
import { getDocs, collection } from "firebase/firestore";
//pages
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer'
import Homepage from './pages/homepage/Homepage'
import Cartpage from './pages/cartpage/Cartpage'
import Profile from './pages/profilepage/Profile';
import Product from './pages/productpage/Product';
import TopScroll from './common/TopScroll/TopScroll';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import LoginPage from './pages/loginpage/LoginPage';
import PurchaseHistory from './components/purchasehistory/PurchaseHistory'
import UserProfile from './components/userprofile/UserProfile';
import OrderDetail from './components/orderdetails/OrderDetail.jsx'
import RegisterPage from './pages/signuppage/RegisterPage';
import { useAuthState } from 'react-firebase-hooks/auth';
function App() {
  const [users, setUsers] = useState()
  const [products, setProducts] = useState([])
  const [slides, setSlides] = useState([])
  const [categories, setCategories] = useState([])
  const [categoriesLoading, setCategoriesLoading] = useState(true)
  const [orders, setOrders] = useState([]);
  const [brands, setBrands] = useState([])
  const [cartItem, setCartItem] = useState([])
  const [productFilter, setProductFilter] = useState(products)

  useEffect(() => {
    getCategories()
    getProducts()
    getSliders()
    getUsers()
    getOrders()
    getBrands()
  }, [])
  async function getBrands() {
    const brandRef = await getDocs(collection(db, "brands"));
    const brandss = brandRef.docs.map(doc => ({
      data: doc.data(),
      id: doc.id
    }))
    setBrands(brandss)
  }
  async function getOrders() {
    const orderRef = await getDocs(collection(db, "orders"));
    const orderss = orderRef.docs.map(doc => ({
      data: doc.data(),
      id: doc.id
    }))
    setOrders(orderss)
  }
  async function getUsers() {
    const userRef = await getDocs(collection(db, "users"));
    const userss = userRef.docs.map(doc => ({
      data: doc.data(),
      id: doc.id
    }))
    setUsers(userss)
  }
  async function getCategories() {
    const categoriesRef = await getDocs(collection(db, "categories"));
    const categoriess = categoriesRef.docs.map(doc => ({
      data: doc.data(),
      id: doc.id
    }))
    setCategories(categoriess)
    setCategoriesLoading(false)
  }
  async function getSliders() {
    const sliderRef = await getDocs(collection(db, "sliders"));
    const sliderss = sliderRef.docs.map(doc => ({
      data: doc.data(),
      id: doc.id
    }))
    setSlides(sliderss)
  }
  async function getProducts() {
    const productRef = await getDocs(collection(db, "products"));
    const productss = productRef.docs.map(doc => ({
      data: doc.data(),
      id: doc.id
    }))
    setProducts(productss)
  }
  // add item to cart
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    }
    else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }
  // decrease item
  const descreaseQty = (product) => {
    const productExit = cartItem.find(item => item.id === product.id)
    // if quantity = 1 
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    }
    // quantity > 1
    else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
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
      <Header cartItem={cartItem} users={users}/>
      <div className='page-container'>
        <Routes>
          <Route path='/login' element={<LoginPage users={users} />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route>
            <Route path='/' element={<Homepage
              products={products}
              categories={categories}
              slides={slides}
              brands={brands}
              addToCart={addToCart}
              setProductFilter={setProductFilter}
              filterResult={filterResult}
              categoriesLoading={categoriesLoading}
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
            <Route path='profile' element={<Profile users={users} />} >
              <Route path="userprofile" element={<UserProfile users={users} />} />
              <Route
                path="purchasehistory"
                element={<PurchaseHistory orders={orders} />}
              />
            </Route>
            <Route path='/purchasehistory/:orderId' element={<OrderDetail orders={orders} products={products} />} />
            <Route path='product' element={<Product
              categories={categories}
              addToCart={addToCart}
              filterResult={filterResult}
              setProductFilter={setProductFilter}
              products={products}
              productFilter={productFilter} />}
            />
            <Route path='/product/:productId'
              element={<SingleProduct
                products={products}
                brands={brands}
                categories={categories}
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
