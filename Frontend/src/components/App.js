// import logo from './logo.svg';
import './App.css';
import Header from "./component/Layout/Header";
import Home from "./component/Home";
import Footer from "./component/Layout/Footer";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Menu from './component/Menu';
import Cart from "./component/cart/Cart"; 
import Delivery from './component/cart/Delivery';
import Login from './component/user/Login';
import Register from './component/user/Register';
import { useEffect, useState } from 'react';
// import { useEffect } from 'react';
import { loadUser } from './actions/userActions';
import store from "./store";
import Profile from './component/user/Profile';
import UpdateProfile from './component/user/UpdateProfile';
import ForgotPassword from './component/user/ForgotPassword';
import NewPassword from './component/user/NewPassword';
import ConfirmOrder from './component/cart/ConfirmOrder';
import Payment from './component/cart/Payment';


//payment

import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import axios from 'axios';
import OrderSuccess from './component/cart/OrderSuccess';
import ListOrders from './component/order/ListOrders';
import OrderDetails from './component/order/OrderDetails';



function App() {
  const [stripeApiKey, setStripeApiKey]=useState("");
 
  useEffect(()=>{
    store.dispatch(loadUser());
    async function getStripeApiKey(){
      const {data}=await axios.get("/api/v1/stripeapi");
      setStripeApiKey(data.stripeApiKey);
    }
    getStripeApiKey();
  },[]);
  
     
    return ( 
    <Router><div className="App">
    <Header/>
    <div className="container container-fluid">
    <Routes>
    <Route path="/" element={<Home/>} exact/>
    <Route path="/eats/stores/search/:keyword" element={<Home />} exact/>

    <Route path="/eats/stores/:id/menus" 
    element={<Menu/>} 
    exact/>
    <Route path="/cart" element={<Cart/>} exact />
    <Route path="/delivery" element={<Delivery/>} exact />

    {/* user */}
    <Route path="/users/login" element={<Login/>} />
    <Route path="/users/signup" element={<Register/>} />
    <Route path="/users/me" element={<Profile/>}/>
    <Route path="/users/me/update" element={<UpdateProfile/>} exact />
    <Route path="/users/forgetPassword" element={<ForgotPassword/>} exact />
    <Route path="/users/resetPassword/:token" 
    element={<NewPassword/>} exact />
    <Route path="/confirm" element={<ConfirmOrder/>}></Route>
    
{/* //payment */}
    {
      stripeApiKey &&(
        <Route path="/payment"  element={<Elements stripe={loadStripe(stripeApiKey)}>
          <Payment />
       </Elements>
        }
        />
      )}
    <Route path="/success" element={<OrderSuccess/>}/>
    {/* OrderList */}
    <Route path="/eats/orders/me/myOrders" element={<ListOrders />}/>
    <Route path="/eats/orders/:id" element={<OrderDetails />}/>
    </Routes>

    
    </div>
    <Footer/>
      
    </div>
    </Router>
    );

  }

export default App;
