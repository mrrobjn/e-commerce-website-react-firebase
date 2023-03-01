import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './firebase'
import { addDoc, doc, getDocs, collection, deleteDoc } from "firebase/firestore";

//pages
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer'
import Homepage from './pages/homepage/Homepage'
import Cartpage from './pages/cartpage/Cartpage'
import Contact from './pages/contactpage/Contact'
import Profile from './pages/profilepage/Profile';
import Product from './pages/productpage/Product';
import TopScroll from './common/TopScroll/TopScroll';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import LoginPage from './pages/loginpage/LoginPage';
import PurchaseHistory from './components/purchasehistory/PurchaseHistory'
import UserProfile from './components/userprofile/UserProfile';
import OrderDetail from './components/orderdetails/OrderDetail.jsx'
function App() {
  const [users, setUsers] = useState()
  const [products, setProducts] = useState([])
  const [slides, setSlides] = useState([])
  const [categories, setCategories] = useState([])
  const [orders, setOrders] = useState([]);
  const [cartItem, setCartItem] = useState([])
  const [productFilter, setProductFilter] = useState(products)

  useEffect(() => {
    getCategories()
    getProducts()
    getSliders()
    getUsers()
    getOrders()
  }, [])
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
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + quantity } : item)))
    }
    else {
      setCartItem([...cartItem, { ...product, qty: quantity }])
    }
  }

  return (
    <>
      <Header cartItem={cartItem} setProductFilter={setProductFilter} products={products} />
      <Routes>
        <Route path='/' element={<Homepage
          products={products}
          categories={categories}
          slides={slides}
          addToCart={addToCart}
          setProductFilter={setProductFilter}
          filterResult={filterResult}
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
        <Route path='/product/:productId' element={<SingleProduct products={products} categories={categories} addToCartQty={addToCartQty} />} />
        <Route path='login' element={<LoginPage users={users} />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
      <TopScroll />
    </>
  );
}

export default App;
