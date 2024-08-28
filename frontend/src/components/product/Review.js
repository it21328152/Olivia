import {useParams,useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
import {Link} from 'react-router-dom';
import React, {useState,useEffect} from "react";
import axios from "axios";


export default function Review(){

  const [pname, setPName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [psize, setPSize] = React.useState("");
  const [pcolour, setPColour] = React.useState("");
  const [pstock, setPStock] = React.useState("");

  const [rname, setRName] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [rev, setRev] = React.useState("");

  const [error, setError] = useState("false");
  const location = useLocation();
  const params = useParams();
  const data = location.state;
  const navigate = useNavigate();

  useEffect(()=>{
    getProductDetails();
  },[])


  const sendData = async (e) => {
    e.preventDefault();
    const newReviewp = { rname,rating,rev };

    try {
      await axios.post("http://localhost:8070/reviewp/addreview", newReviewp);
      alert("Review Added");
      navigate('/home');
    } catch (err) {
      alert(err.message);
    }
  }

  const getProductDetails = async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:8070/product/getproduct/${params.id}`);
    result = await result.json();
    setPName(result.pname);
    setPrice(result.price);
    setPSize(result.psize);
    setPColour(result.pcolour);
    setPStock(result.pstock);
    
  }

  
  

  

    return(
        //class create form
        
        <div >
          <div class="card bg-dark text-white" >
           <img src="pagebanner2.jpg" class="card-img" alt="..." style={{height: '150px', filter: 'brightness(50%)'}}/>
             <div class="card-img-overlay">
              
                <h1 class="card-title" style={{fontSize: '90px'}}><b>RATING & </b> <b style={{color: 'lightpink'}}>REVIEWS</b></h1>
                <br></br>
                <br></br>
                <br></br>
             </div>
          </div>
          
          <br></br>
          <br></br>

        <div >

        <div class="card text-dark  mb-3" style={{width: '1000px', backgroundColor:'#E0E0E0'}}>
        
        <div class="card-body"> 
        <br></br>
        <h1 class="card-title text-danger"><b>SUBMIT YOUR FEEDBACK</b></h1>
        <br></br>

        <form class="row g-3 was-validated">
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}} onChange={(e)=>{setPName(e.target.value);}}required><b>Product Name:&nbsp;&nbsp;<b class="text-danger">{pname}</b></b></label>
              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}} onChange={(e)=>{setPrice(e.target.value);}}required><b>Price:&nbsp;&nbsp;<b class="text-danger">Rs.{price}.00</b></b></label>
              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}} onChange={(e)=>{setPSize(e.target.value);}}required><b>Product Size:&nbsp;&nbsp;<b class="text-danger">{psize}</b></b></label>
              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}} onChange={(e)=>{setPColour(e.target.value);}}required><b>Colour:&nbsp;&nbsp;<b class="text-danger">{pcolour}</b></b></label>
              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}} onChange={(e)=>{setPStock(e.target.value);}}required><b>Product Stock:&nbsp;&nbsp;<b class="text-danger">{pstock}</b></b></label>
              </div>
              <br></br>
              <br></br>
              <br></br>

              <div >
                  <label for="inputAddress" class="form-label" style={{float: 'left',fontSize:'20px'}}><b>Product:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example" 
                  onChange={(e)=>{

                    setRName(e.target.value);
                  
                    }}required>
                    <option value=""></option>
                    <option value={pname}>{pname}</option>
                  </select>
                  <div className="invalid-feedback">
                  {error&&rname.length<=0?<lable class="text" style={{color:'#FF0000'}}>Product can't be empty!</lable>:""}
                  </div>
              </div>

                        <Container>
                            <b>Rating&nbsp;&nbsp;&nbsp;</b>
                        {[...Array(5)].map((item, index) => {
                            const givenRating = index + 1;
                            return (
                                <label>
                                    <Radio
                                        type="radio"
                                        value={givenRating}
                                        onClick={() => {
                                            setRating(givenRating);
                                        }}
                                    />
                                    <Rating>
                                        <FaStar
                                            color={
                                                givenRating < rating || givenRating === rating
                                                    ? "rgb(255,170,29)"
                                                    : "rgb(192,192,192)"
                                            }
                                        />
                                    </Rating>
                                </label>
                            );
                        })}
                    </Container>
                    <br></br>
                    <br></br>

              <div>
                  <label for="inputPassword4" class="form-label" style={{float: 'left',fontSize:'20px'}}><b>Review:</b></label>
                  <div class="input-group mb-3">
                  <textarea class="form-control is-invalid" id="validationServer01"  
                  onChange={(e)=>{

                    setRev(e.target.value);
                  
                    }}required/>
                    <div className="invalid-feedback">
                  {error&&rev.length<=0?<lable class="text" style={{color:'#FF0000'}}>Write a Review!</lable>:""}
                  </div>
                  </div>
                  
              </div>
              
             
              <div class="col-12">
              <br></br>
              <Link to='/home'>
              <button type="submit" class="btn btn-danger" onClick={sendData}>Submit</button>
              </Link>
              </div>
  
          </form>
          
        <br></br>

        </div>
        </div>

        

      </div>
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