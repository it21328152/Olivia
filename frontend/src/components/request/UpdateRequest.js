import {useParams,useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom';
import React, {useEffect,useState} from "react";




export default function UpdateRequest(){

  const [name, setName] = React.useState("");
  const [onumber, setONumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [item, setItem] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [error, setError] = useState("false")
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getRequestDetails();
  },[])

  

  const getRequestDetails = async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:8070/request/get/${params.id}`);
    result = await result.json();
    setName(result.name);
    setONumber(result.onumber);
    setEmail(result.email);
    setItem(result.item);
    setMessage(result.message);
  }



  const UpdateRequest = async () =>{
    console.warn(name,onumber,email,item,message)
    let result = await fetch(`http://localhost:8070/request/update/${params.id}`,{
      method:'put',
      body:JSON.stringify({name,onumber,email,item,message}),
      headers:{
        'Content-Type':'Application/json'
      }

    });
    result = await result.json()
    if(result){
      
      
      alert("Update Successfully")
      
    }
    
  }
  

  
  


  

    return(
        //class create form
        <div >
          
          <div class="card bg-dark text-white" >
           <img src="pagebanner2.jpg" class="card-img" alt="..." style={{height: '150px', filter: 'brightness(50%)'}}/>
             <div class="card-img-overlay">
              
                <h1 class="card-title" style={{fontSize: '90px'}}><b>RETURN & </b> <b style={{color: 'lightpink'}}>REFUND</b></h1>
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
        <h1 class="card-title text-danger"><b>UPDATE YOUR REQUEST</b></h1>
        <br></br>

          <form class="row g-3 was-validated">
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Name:</b></label>
                  <input type="name" class="form-control is-invalid " id="validationServer01" value={name}
                  onChange={(e)=>{

                    setName(e.target.value);
                  
                    }}required/>
                    <div className="invalid-feedback">
                    {error&&name.length<=0?<lable class="text" style={{color:'#FF0000'}}>Name can't be empty!</lable>:""}
                    </div>
              </div>
              <div class="col-md-6">
                  <label for="inputPassword4" class="form-label" style={{float: 'left'}}><b>Order Number:</b></label>
                  <input type="tel" class="form-control is-invalid" id="inputPassword4" value={onumber}
                  onChange={(e)=>{

                    setONumber(e.target.value = e.target.value.slice(0, 12));
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&onumber.length<=0?<lable class="text" style={{color:'#FF0000'}}>Order Number can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="inputAddress" class="form-label" style={{float: 'left'}}><b>Email:</b></label>
                  <input type="email" class="form-control is-invalid" id="inputAddress" placeholder="" value={email}
                  onChange={(e)=>{

                    setEmail(e.target.value);
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&email.length<=0?<lable class="text" style={{color:'#FF0000'}}>Email can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-md-6">
                  <label for="inputCity" class="form-label" style={{float: 'left'}}><b>Item:</b></label>
                  <input type="text" class="form-control is-invalid" id="inputCity" value={item}
                  onChange={(e)=>{

                    setItem(e.target.value);
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&item.length<=0?<lable class="text" style={{color:'#FF0000'}}>Item can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-12">
                  <label for="inputAddress2" class="form-label" style={{float: 'left'}}><b>Reason:</b></label>
                  <textarea class="form-control is-invalid" id="inputAddress2" placeholder="Apartment, studio, or floor" value={message}
                  onChange={(e)=>{

                    setMessage(e.target.value);
        
                  }}required/>
                  <div className="invalid-feedback">
                  {error&&message.length<=0?<lable class="text" style={{color:'#FF0000'}}>Reason can't be empty!</lable>:""}
                  </div>
              </div>
              <div class="col-12">
              <br></br>
              <Link to='/all'>
              <button type="submit" class="btn btn-danger" onClick={UpdateRequest}>UPDATE REQUEST</button>
              </Link>
    
              </div>
  
          </form>
          
        <br></br>

        </div>
        </div>
        <br></br>
        <br></br>
        

      </div>
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


