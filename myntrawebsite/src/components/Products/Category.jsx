import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
import { dataServiceObj } from "./productService";
const Category = () => {

    const [products, setProducts] = useState([]);
    const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3500/products?catid=${id}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products by category:', error);
        // Handle error
      }
    };

    fetchData();
  }, []);

  function handleDelete(id){
    // eslint-disable-next-line no-restricted-globals
    const result = confirm("Are you sure you want to proceed?");

    if(result==true){
        dataServiceObj.deleteproduct(id);
        dataServiceObj.getAllproducts().then(resData => {
            setProducts(resData.data);
          });
    }
}

return (
    <>
    <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",padding:"20px"}}>
        
    {products.map(item=><div className="product-card" style={{background:"skyblue",padding:"20px",width:"20%",margin:"10px"}}>
    <img src={item.pimg} alt={item.pname} className="product-image" style={{height:"200px"}} />
    <div>
    <div className="product-details">
        <h2 className="product-name">{item.pname}</h2>
        <p className="product-price">Price: {item.price}</p>
    </div>
    <button onClick={()=>handleDelete(item.id)}>Delete</button>
    <button><Link to={`/product/${item.id}`}>Details</Link></button>
    <button><Link to={`/editproduct/${item.id}`}>Edit</Link></button>
    </div>
</div>

    )}
</div>
</>
)
}

export default Category