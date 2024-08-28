
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';

function Header(){

   const cookieVal=Cookies.get("username")

    const navigate = useNavigate();

    const logOut=()=>{
         Cookies.remove("username") 
         navigate('/home')
    }

    

    


    return(

      <nav>
      <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
      <img src="navlogo.png" alt="" style={{width: '125px', height: '75px', marginLeft:'40px'}}/>
      </a>
      <ul class="nav nav-pills bg-light justify-content-end ">



      <li class="nav-item">
           <Link to="/home" className="nav-link " > <b>HOME</b> </Link>
        </li>
        <li class="nav-item">
           <Link to="/randp" className="nav-link "> <b>MEGA SALE</b> </Link>
        </li>
        <li class="nav-item">
           <Link to="/allreview" className="nav-link "> <b>MY REVIEWS</b> </Link>
        </li>
        <li class="nav-item">
           <Link to="/all" className="nav-link "> <b>ALL REQUESTS</b> </Link>
        </li>
        <li class="nav-item">
           <Link to="/requests" className="nav-link "> <b>RETURN & REFUND</b> </Link>
        </li>


      <li class="nav-item" id='logout' style={{color:'#dc3545', marginTop:'6px', marginRight:'15px'}}>
        <h><i class="fa-solid fa-circle-user fa-xl"></i>&nbsp;&nbsp;<Link to="/admindash" style={{color:'red'}}>{cookieVal}</Link>&nbsp;&nbsp;&nbsp;&nbsp;</h>
        <button  class="btn btn-danger" onClick={logOut}>Logout</button>
      </li>
      <li class="nav-item" id='logout' style={{color:'white', marginTop:'6px', marginRight:'15px'}}>
      <Link to="/login"><button  class="btn btn-danger">Login</button></Link>
      </li>

      </ul>
        
      
      </nav>

      <nav class="navbar navbar-danger bg-danger">
      
      <li class="nav-item" id='logout' style={{color:'white', marginTop:'6px', marginLeft:'15px'}}>
      <Link to=""><button  class="btn btn-danger"><i class="fa-solid fa-bars fa-2xl"></i></button></Link>
      </li>
      
      <ul class="nav nav-pills bg-danger justify-content-end ">
      
      <form class="d-flex" style={{marginRight:'150px'}}>
        <input class="form-control me-2 " type="text" placeholder="Search by Name" aria-label="Search" style={{width: '1000px'}}/>
      </form>
      
      <li class="nav-item" id='logout' style={{color:'white', marginTop:'6px', marginRight:'45px'}}>
      <Link to=""><button  class="btn btn-danger"><i class="fa-solid fa-cart-shopping fa-2xl"></i></button></Link>
      </li>

      </ul>
        
      
      </nav>

   

      </nav>

      

      

      


      
  
    )
}
export default Header;
