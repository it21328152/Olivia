import {useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState} from "react";
import axios from "axios";


export default function Home(){

 
  const [error, setError] = useState("false");
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  
    

  

  

    return(
        //class create form
        
        <div >
          <div class="card bg-dark text-white" >
           <img src="homebgimg.jpg" class="card-img" alt="..." style={{height: '700px',filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '70px', textAlign:'left',float:'left', maxWidth:'700px'}}><b>SELECT FROM RANGE OF</b> <b class="text-danger">COLOURS</b></h1>
                
                
                

                <div class="btn-group" role="group" aria-label="Basic example" style={{float: 'right', marginTop:'215px'}}>
                <Link to='/viewproduct'>
                <button type="button" class="btn1 btn-danger btn-lg" style={{marginRight: '50px'}}>NEW COLLECTION</button>
                </Link>
                <Link to='/test'>
                <button type="button" class="btn2 btn-danger btn-lg" style={{marginRight: '50px'}}>VIRTUAL TRY ON</button>
                </Link>
                </div>

             </div>
          </div>

          
          <br></br>
          <br></br>

          <h2><b>NEW OFFERS</b></h2>
          <br></br>


        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">

                    <div class="card bg-dark text-white" style={{width: '1300px', height: '250px'}}>
                    <img src="hbanner1.jpg" class="card-img" alt="..."style={{width: '1300px', height: '250px'}}/>
                        <div class="card-img-overlay">
                            <h5 class="card-title"></h5>
                            <p class="card-text"></p>
                            <p class="card-text"></p>
                        </div>
                    </div>
                    
                </div>
                <div class="carousel-item">

                    <div class="card bg-dark text-white" style={{width: '1300px', height: '250px'}}>
                    <img src="hbanner2.jpg" class="card-img" alt="..."/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>
                
                </div>
                
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" style={{marginLeft:'-40px'}}>
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" style={{marginRight:'-40px'}}>
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <h2><b>COLLECTION</b></h2>
            <br></br>

            <div class="card mb-3" style={{width: '1300px'}}>
                
                
            <div class="card-group">
                <div class="card">
                    <img src="hp1.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Aesthetic Lagoon Sunset Print T-shirt</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                    <button type="button" class="btn2 btn-danger">Add to Cart</button>
                    </div>
                </div>
                <div class="card">
                    <img src="hp2.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Starfish graphic print Solid Lycra Jersey Oversize T-shirt</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer">
                    <button type="button" class="btn2 btn-danger">Add to Cart</button>
                    </div>
                </div>
                <div class="card">
                    <img src="hp3.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Graphic Solid Lycra Jersey Oversize T-shirt</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer">
                    <button type="button" class="btn2 btn-danger">Add to Cart</button>
                    </div>
                </div>
            </div>

            <div class="card-group">
                <div class="card">
                    <img src="hp4.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">American Premuim Lycra Jersey T-shirt waterbase print neck</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                    <button type="button" class="btn2 btn-danger">Add to Cart</button>
                    </div>
                </div>
                <div class="card">
                    <img src="hp5.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Graphic Stamp T-shirt</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer">
                    <button type="button" class="btn2 btn-danger">Add to Cart</button>
                    </div>
                </div>
                <div class="card">
                    <img src="hp6.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Thumb Print Wave style American Premuim Lycra Jersey T-shirt</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer">
                    <button type="button" class="btn2 btn-danger">Add to Cart</button>
                    </div>
                </div>
            </div>


            </div>
            <br></br>
            <br></br>
            <br></br>

            

           
            <br></br>
            <br></br>
            <br></br>

     
          <br></br>
          <br></br>

      <div class="card bg-danger text-white" style={{height: '350px', width:'100%'}}>
           
             <div class="card-img-overlay">
              <br></br>
                <h3 class="card-title" style={{float: 'left'}}><b class="text-light">CONTACT</b></h3>
                <br></br>
                <i class="fa-brands fa-facebook fa-2xl" style={{float: 'right', marginRight: '20px'}}></i>
                <i class="fa-brands fa-instagram fa-2xl" style={{float: 'right', marginRight: '20px'}}></i>
                <i class="fa-brands fa-linkedin fa-2xl" style={{float: 'right', marginRight: '20px'}}></i>
                <br></br>
                <br></br>
                

                <div style={{float: 'left'}}>
                <h5 style={{textAlign: 'left'}}><i class="fa-solid fa-envelope"></i> &nbsp;&nbsp;&nbsp;oliviafs@gmail.com</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}><i class="fa-solid fa-phone-volume"></i> &nbsp;&nbsp;&nbsp;071 159 0580</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}><i class="fa-solid fa-location-dot"></i> &nbsp;&nbsp;&nbsp;168/7/4b,tranquil terrace,new kandy road,malabe</h5>
                
                </div>

                <div style={{float: 'right',width: '50%'}}>
                <h5 style={{textAlign: 'left'}}>HOME</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}>ABOUT US</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}>WORKING DAYS</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}>SERVICES</h5>

                
                </div>
                <br></br>
                <br></br>
                <br></br>
                
                <h style={{float: 'left', marginLeft:'80%'}}>privacy policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; terms & conditions</h>

                
               
                
                

             </div>
          </div>



      
      </div>
      
      
    )
    
}