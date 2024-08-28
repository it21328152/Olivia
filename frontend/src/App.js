import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Cookies from 'js-cookie'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import { useEffect, useState } from 'react';
import AdminDashboard from './components/AdminDashboard';
import Forgot from './components/Forgot';
import Reset from './components/Reset';



import AddProduct from './components/product/AddProduct';
import AllProduct from './components/product/AllProduct.js';
import ViewProduct from './components/product/ViewProduct.js';
import UpdateProduct from './components/product/UpdateProduct';
import Review from './components/product/Review.js';
import AllReview from './components/product/AllReview.js';

import RandP from './components/RandP';
import R01 from './components/R01';
import R02 from './components/R02';
import R03 from './components/R03';

import UpdateRequest from './components/request/UpdateRequest';
import Requests from './components/request/Requests';
import AllRequests from './components/request/AllRequests';




function App() {

  const[cookieVal,setCookieVal]=useState(Cookies.get("username"))

  useEffect(()=>{

    const interval=setInterval(() => {

      const updatedCookie=Cookies.get("username")
      if(updatedCookie!==cookieVal){
        setCookieVal(updatedCookie)
      }
      
    },1000)

    return()=>{clearInterval(interval)}

  },[cookieVal])

  return (
  <Router>
    <div>
    
      <Header/>
      
      <Routes>
      
      <Route path="/" element={<Home/>}/>
      {cookieVal==undefined && <Route path="/login" element={<Login/>}/>}
      {cookieVal !=undefined && <Route path="/login" element={<Home/>}/>}
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgotpw" element={<Forgot/>}/>
      <Route path="/resetpw" element={<Reset/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/admindash" element={<AdminDashboard/>}/>


      
      <Route path="/addproduct" element={<AddProduct/>}/>
      <Route path="/addreview" element={<Review/>}/>
      <Route path="/viewproduct" element={<ViewProduct/>}/>
      <Route path="/allproduct" element={<AllProduct/>}/>
      <Route path="/updateproduct/:id" element={<UpdateProduct/>}/>
      <Route path="/getproduct/:id" element={<UpdateProduct/>}/>
      <Route path="/getproductpage/:id" element={<Review/>}/>
      <Route path="/allreview" element={<AllReview/>}/>

      <Route path="/r01" element={<R01/>}/>
      <Route path="/r02" element={<R02/>}/>
      <Route path="/r03" element={<R03/>}/>
      <Route path="/randp" element={<RandP/>}/>

      <Route path="/all" element={<AllRequests/>}/>
      <Route path="/requests" element={<Requests/>}/>
      <Route path="/update/:id" element={<UpdateRequest/>}/>
      <Route path="/get/:id" element={<UpdateRequest/>}/>

      
      
      
      </Routes>
      
      
    </div>
    </Router>
  ); 
}

export default App;
 