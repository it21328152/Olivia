import {useParams,useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState,useEffect} from "react";


export default function UpdateProduct(){

  const [pname, setPName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [psize, setPSize] = React.useState("");
  const [pcolour, setPColour] = React.useState("");
  const [pstock, setPStock] = React.useState("");
  const [error, setError] = useState("false");
  const location = useLocation();
  const params = useParams();
  const data = location.state;
  const navigate = useNavigate();

  useEffect(()=>{
    getProductDetails();
  },[])

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

  const UpdateProduct = async () =>{
    console.warn(pname,price,psize,pcolour,pstock)
    let result = await fetch(`http://localhost:8070/product/updateproduct/${params.id}`,{
      method:'put',
      body:JSON.stringify({pname,price,psize,pcolour,pstock}),
      headers:{
        'Content-Type':'Application/json'
      }

    });
    result = await result.json()
    if(result){
      
      
      alert("Update Successfully")
      
      
    }
    navigate('/allproduct')
    
  }
  

  

    return(
        //class create form
        
        <div >
          <div class="card bg-dark text-white" >
           <img src="pagebanner2.jpg" class="card-img" alt="..." style={{height: '150px', filter: 'brightness(50%)'}}/>
             <div class="card-img-overlay">
              
                <h1 class="card-title" style={{fontSize: '90px'}}><b>UPDATE</b> <b style={{color: 'lightpink'}}>PRODUCT</b></h1>
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
        <h1 class="card-title text-danger"><b>UPDATE PRODUCT DETAILS</b></h1>
        <br></br>

        <form class="row g-3 was-validated">
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Product Name:</b></label>
                  <input type="text" class="form-control is-invalid" id="validationServer01" aria-label="Default select example" value={pname}
                  onChange={(e)=>{

                    setPName(e.target.value);
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&pname.length<=0?<lable class="text" style={{color:'#FF0000'}}>Product Name can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>Price:</b></label>
                  <div class="input-group mb-3">
                  <span class="input-group-text">Rs.</span>
                  <input type="number" class="form-control is-invalid" id="validationServer01" aria-label="Amount (to the nearest dollar)" value={price}
                  onChange={(e)=>{

                    setPrice(e.target.value);
                  
                    }}required/>
                    <span class="input-group-text">.00</span>
                    <div className="invalid-feedback">
                  {error&&price.length<=0?<lable class="text" style={{color:'#FF0000'}}>Price can't be empty!</lable>:""}
                  </div>
                  </div>
                  
              </div>
              <div class="col-md-6">
                  <label for="inputAddress" class="form-label" style={{float: 'left'}}><b>Size:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example" value={psize}
                  onChange={(e)=>{

                    setPSize(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                  <div className="invalid-feedback">
                  {error&&psize.length<=0?<lable class="text" style={{color:'#FF0000'}}>Size can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="inputAddress" class="form-label" style={{float: 'left'}}><b>Colour Type:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example" value={pcolour}
                  onChange={(e)=>{

                    setPColour(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Red">Red</option>
                  </select>
                  <div className="invalid-feedback">
                  {error&&pcolour.length<=0?<lable class="text" style={{color:'#FF0000'}}>Colour Type can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>Available Stock:</b></label>
                  <div class="input-group mb-3">
                  <input type="number" class="form-control is-invalid" id="validationServer01" value={pstock} 
                  onChange={(e)=>{

                    setPStock(e.target.value);
                  
                    }}required/>
                    <div className="invalid-feedback">
                  {error&&pstock.length<=0?<lable class="text" style={{color:'#FF0000'}}>Available Stock can't be empty!</lable>:""}
                  </div>
                  </div>
                  
              </div>
              
             
              <div class="col-12">
              <br></br>
              <Link to='/allproduct'>
              <button type="submit" class="btn btn-danger" onClick={UpdateProduct}>Update</button>
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