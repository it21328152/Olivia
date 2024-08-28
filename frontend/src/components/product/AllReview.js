import React, {useState, useEffect,useRef} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';


export default function AllReview(){

    const[reviewps, setReviewps] = useState([]);
    const[search, setsearch] = useState([]);
    console.log(search)
    
    

    useEffect(()=>{
        function getReviewps() {
            axios.get("http://localhost:8070/reviewp/allreview").then((res)=>{
               setReviewps(res.data);
               console.log(res);
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getReviewps();

        
    
    } ) 

    


  
    
   const deleteReview= async(id)=>{
    console.warn(id)
    let result = await fetch(`http://localhost:8070/reviewp/deletereview/${id}`,{
        method:"Delete"
    });
    result = await result.json();
    if(result)
    {
        
        alert("Delete Successfully")
        
    }
   }
  

    return(
        //class create form

        <div>

<div class="card bg-dark text-white" >
           <img src="pagebanner2.jpg" class="card-img" alt="..." style={{height: '150px', filter: 'brightness(50%)'}}/>
             <div class="card-img-overlay">
                <h1 class="card-title" style={{fontSize: '90px'}}><b>MY</b> <b style={{color: 'lightpink'}}>REVIEWS</b></h1>
                <br></br>
                <br></br>
                <br></br>

             </div>
          </div>




        
        <div style={{width:'1350px'}} >
        <br></br>
        <br></br>
        <form class="d-flex">
        <input class="form-control me-2 " type="text" onChange={(e) => setsearch(e.target.value)} placeholder="Search by Name" aria-label="Search"/>
        </form>
        <br></br>
        <div>
        <table class="table table-danger table-striped">
            <thead class="table table-dark table-striped">
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Review</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            {reviewps.filter((reviewps) => {
                return search.toString().toLowerCase() === '' ? reviewps: reviewps.rname.toString().toLowerCase().includes(search);
                
            }).map((reviewps, index) => {
                return(
                <tr key={reviewps._id}>
                    <th scoop="row">{index+1}</th>
                    <td>{reviewps.rname}</td> 
                    <td>{reviewps.rating}/5&nbsp;&nbsp;<i class="fa-solid fa-star"></i></td>
                    <td>{reviewps.rev}</td>
                    <td>
                        
                        <a className="btn btn-secondary" href="#" onClick={()=>deleteReview(reviewps._id)}>
                            <i className="fas fa-trash-alt"></i>&nbsp;Delete
                        </a>
                        

                    </td>
                </tr>
                )
                
            
            
           
        })}

            </tbody>
        </table>

    
        

        
    </div>
    </div>

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