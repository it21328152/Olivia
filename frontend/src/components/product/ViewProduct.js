import React, {useState, useEffect,useRef} from 'react';
import axios from "axios";
import {useReactToPrint} from "react-to-print";
import {Link} from 'react-router-dom';


export default function ViewProduct(){

    const conponentPDF = useRef();
    const[products, setProducts] = useState([]);
    const[search, setsearch] = useState([]);
    console.log(search)

    

    useEffect(()=>{
        function getProducts() {
            axios.get("http://localhost:8070/product/viewproduct").then((res)=>{
               setProducts(res.data);
               console.log(res);
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getProducts();

        
    
    } ) 

    


  
    
   

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
              
                <h1 class="card-title" style={{fontSize: '90px'}}><b>NEW</b> <b style={{color: 'lightpink'}}>COLLECTION</b></h1>
                <br></br>
                <br></br>
                <br></br>
             </div>
           </div>




        
        <div style={{width:'1350px'}} >
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <form class="d-flex">
        <input class="form-control me-2 " type="text" onChange={(e) => setsearch(e.target.value)} placeholder="Search by Product Name" aria-label="Search"/>
        </form>
        <br></br>
        <br></br>
        <br></br>
        <div>
        <div ref={conponentPDF} style={{width:'100%'}}>
        




        <div class="row row-cols-1 row-cols-md-3 g-4" style={{marginLeft: '20px'}}>
        {products.filter((products) => {
                return search.toString().toLowerCase() === '' ? products: products.pname.toString().toLowerCase().includes(search);
                
            }).map((products, index) => {
                return(

            <div class="col" style={{maxWidth: '420px',marginLeft: '20px'}}>
            <div class="card" style={{backgroundColor:'#E0E0E0'}} key={products._id}>
            <br></br>
            <center>
            <h3 class="card-title"><b class="text-danger">{products.pname}</b></h3>
            <br></br>
            <img src="t1.jpg" class="card-img-top" alt="..." style={{maxWidth: '370px'}}/>
                    <div class="card text-dark bg-light mb-3" style={{maxWidth: '370px'}}>
                    <div class="card-header" style={{textAlign: 'left'}}>
                    <a className="btn btn-danger btn-sm"style={{marginLeft: '120px'}} href={`/getproductpage/${products._id}`}>
                    <i class="fa-solid fa-star"></i>&nbsp;&nbsp;Review
                        </a>
                    <h6 class="card-title"><b>Price:&nbsp;&nbsp;</b>Rs.{products.price}</h6>
                    <br></br>
                    <h6 class="card-title"><b>Size:&nbsp;&nbsp;</b>{products.psize}</h6>
                    <br></br>
                    <h6 class="card-title"><b>Colour:&nbsp;&nbsp;</b>{products.pcolour}</h6>
                    <br></br>
                    <h6 class="card-title"><b>Available Stock:&nbsp;&nbsp;</b>{products.pstock}</h6>
                    <br></br>
                    <a className="btn btn-danger"style={{marginLeft: '120px'}}>
                    <i class="fa-solid fa-cart-shopping"></i>&nbsp;Buy
                        </a>
                    </div>
                    
                    </div>
            
            </center>
            <br></br>
            
            </div>
        </div>
                
                )
                
            
            
           
        })}
        
        </div>
            
















            

        </div>

        <br></br>

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
                <h5 style={{textAlign: 'left'}}><i class="fa-solid fa-envelope"></i> &nbsp;&nbsp;&nbsp;ecowaste@gmail.com</h5>
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