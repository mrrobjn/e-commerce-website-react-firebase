import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from './context/ProductContext';
import { CategoriesProvider } from './context/CategoriesContext';
import { SlideProvider } from './context/SlideContext';
import { OrderProvider } from './context/OrderContext';
import { BrandsProvider } from './context/BrandsContext';
import { UserProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <Router >
    <ProductProvider>
      <CategoriesProvider>
        <SlideProvider>
          <OrderProvider>
            <BrandsProvider>
              <UserProvider>
                <App />
              </UserProvider>
            </BrandsProvider>
          </OrderProvider>
        </SlideProvider>
      </CategoriesProvider>
    </ProductProvider>
  </Router>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
