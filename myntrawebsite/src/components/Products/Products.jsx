import { useEffect,useState } from "react";
import { dataServiceObj } from "./productService";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Products(){
    const [ProductsArray, setProductsArray] = useState([]);
    
    useEffect(() => {
        // Fetch data from the API using dataServiceObj.getAllProducts()
        // Then set the fetched data to productsArray using setProductsArray
        dataServiceObj.getAllproducts().then(resData => {
          setProductsArray(resData.data);
        });
      }, []);
    

        

    function handleDelete(id){
        // eslint-disable-next-line no-restricted-globals
        const result = confirm("Are you sure you want to proceed?");
    
        if(result==true){
            dataServiceObj.deleteproduct(id);
            dataServiceObj.getAllproducts().then(resData => {
                setProductsArray(resData.data);
              });
        }
    }

    
      

    return(


        <>
        {sessionStorage.getItem("user-token")=="ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS"?<h3><Link to="/createproduct" >CreateNewProduct</Link></h3>:null}
        <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",padding:"20px"}}>
        
            {ProductsArray.map(item=><div className="product-card" style={{padding:"20px",width:"25%",margin:"10px"}}>
            <img src={item.pimg} alt={item.pname} className="product-image" style={{height:"200px"}} />
            <div>
            <div className="product-details">
                <h2 className="product-name">{item.pname}</h2>
                <div style={{marginLeft:'1px'}}>
                        <span style={{fontSize:'15px'}}><b>Rs. {item.price-(item.price * 5)/100}</b></span>  
                        <span style={{textDecoration:'line-through', color:'#999999',marginLeft:'10px',fontSize:'13px'}} > MRP Rs. {item.price}  </span>
                        <span style={{color:'green', marginLeft:'10px',fontSize:'14px'}}>(5% OFF)</span>
                        </div>
                {/* <p className="product-price">Price: {item.price}</p> */}
            </div>
            
            {sessionStorage.getItem("user-token")=="ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS"?<button onClick={()=>handleDelete(item.id)}>Delete</button>:null}
            <button><Link to={`/product/${item.id}`}>Details</Link></button>
            {sessionStorage.getItem("user-token")=="ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS"?<button><Link to={`/editproduct/${item.id}`}>Edit</Link></button>:null}
            
            </div>
        </div>

            )}
        </div>
        </>
    );
}