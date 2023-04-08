import './App.scss';
import { Route, Routes } from 'react-router-dom';
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
import OrderDetailPage from './pages/OrderDetailPage';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='resetpassword' element={<ResetPasswordPage />} />
        <Route path='cart' element={<Cartpage />} />
        <Route path='profile' element={<Profile />} >
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="purchasehistory/*" element={<PurchaseHistory />} />
        </Route>
        <Route path='profile/purchasehistory/:orderId' element={<OrderDetailPage />} />
        <Route path='product' element={<Product />} />
        <Route path='product/:productId' element={<SingleProduct />} />
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
