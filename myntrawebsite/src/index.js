import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import Createproduct from './components/Products/Createproduct';
import Eachproduct from './components/Products/Eachproduct';
import Category from './components/Products/Category';
import { Provider, useSelector } from 'react-redux';
import cartStore from './components/Products/cartStore';
import ProtectedRoute from './components/Login/ProtectedRoute';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/LoginAditya';
import LoginAsAdmin from './components/Login/Login';



const routing=(
  <Router>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <div><img src='./Images/myntra.jpg' width='80px' height='80px'/></div>
      <div style={{display:'flex',justifyContent:'space-evenly',width:'50%'}}>
        <h4><Link to="/">Home</Link></h4>
        <h4><Link to="/Products">Browse</Link></h4>
        <h4><Link to="/Login">LoginAsUser</Link></h4>
        <h4><Link to="/LoginAsAdmin">LoginAsAdmin</Link></h4>
        <h4><Link to="/Cart">Cart</Link></h4>
      </div>
      <div>Searchbox</div>
    </div>
    
    <Routes>
      <Route path="/" element={<Provider store={cartStore}><App/></Provider>}/>
      <Route path="/Products" element={<Products/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/LoginAsAdmin" element={<LoginAsAdmin/>}/>
      <Route path="/Checkout" element={<Provider store={cartStore}><Checkout/></Provider>}/>
      <Route path="/Cart" element={<Provider store={cartStore}><Cart/></Provider>}/>
      <Route path="/product/:id" element={<Provider store={cartStore}><Eachproduct/></Provider>}/>
      <Route path="/editproduct/:id" element={<Createproduct/>}/>
      <Route path="/Category/:id" element={<Category/>}/>
      <Route path="/createproduct" element={<ProtectedRoute returnUrl="/createproduct"><Createproduct/></ProtectedRoute>}/>

    </Routes>
  </Router>
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
