import React, {useState, useEffect,useRef} from 'react';
import axios from "axios";
import {useReactToPrint} from "react-to-print";
import {Link} from 'react-router-dom';


export default function AllRequests(){

    const conponentPDF = useRef();
    const[requests, setRequests] = useState([]);
    const[search, setsearch] = useState([]);
    console.log(search)
    
    

    useEffect(()=>{
        function getRequests() {
            axios.get("http://localhost:8070/request/all").then((res)=>{
               setRequests(res.data);
               console.log(res);
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getRequests();

        
    
    } ) 

    


  
    
   const deleteRequest= async(id)=>{
    console.warn(id)
    let result = await fetch(`http://localhost:8070/request/delete/${id}`,{
        method:"Delete"
    });
    result = await result.json();
    if(result)
    {
        
        alert("Delete Successfully")
        
    }
   }

   const generatePDF = useReactToPrint({
    content: ()=>conponentPDF.current,
    documentTitle: "userdata",
    onAfterPrint: ()=> alert("Download Successfully")
   });
  

    return(
        //class create form

        <div>

          <div class="card bg-dark text-white" >
           <img src="pagebanner2.jpg" class="card-img" alt="..." style={{height: '150px', filter: 'brightness(50%)'}}/>
             <div class="card-img-overlay">
              
                <h1 class="card-title" style={{fontSize: '90px'}}><b>ALL REFUND</b> <b style={{color: 'lightpink'}}> REQUESTS</b></h1>
                <br></br>
                <br></br>
                <br></br>
             </div>
          </div>




        
        <div style={{width:'1350px'}} >
        <br></br>
        <br></br>
        <br></br>
        <form class="d-flex">
        <input class="form-control me-2 " type="text" onChange={(e) => setsearch(e.target.value)} placeholder="Search by Name" aria-label="Search"/>
        </form>
        <br></br>
        <div>
        <div ref={conponentPDF} style={{width:'100%'}}>
        <table class="table table-danger table-striped">
            <thead class="table table-dark table-striped">
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Order Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">Item</th>
                    <th scope="col">Reason</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            {requests.filter((requests) => {
                return search.toString().toLowerCase() === '' ? requests: requests.name.toString().toLowerCase().includes(search);
                
            }).map((requests, index) => {
                return(
                <tr key={requests._id}>
                    <th scoop="row">{index+1}</th>
                    <td><a href={`/get/${requests._id}`} style={{textDecoration:'none',color:'black'}}>{requests.name} </a> </td> 
                    <td>{requests.onumber}</td>
                    <td>{requests.email}</td>
                    <td>{requests.item}</td>
                    <td>{requests.message}</td>
                    <td>
                        <a className="btn btn-danger" href={`/update/${requests._id}`}>
                            <i className="fas fa-edit"></i>&nbsp;Update
                        </a>

                        <h>    </h>
                        
                        <a className="btn btn-secondary" href="#" onClick={()=>deleteRequest(requests._id)}>
                            <i className="fas fa-trash-alt"></i>&nbsp;Delete
                        </a>
                        

                    </td>
                </tr>
                )
                
            
            
           
        })}

            </tbody>
        </table>

        </div>

        <br></br>

            <a className="btn btn-outline-danger" href="#" onClick={generatePDF}>
                <i className="fas fa-download"></i>&nbsp;Download
            </a>

            <br></br>
        

        
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