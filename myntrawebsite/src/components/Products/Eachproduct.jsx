import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataServiceObj } from './productService';
import { useDispatch, useSelector } from "react-redux";
const Eachproduct = () => {

    const [product, setProduct] = useState(null);
    const [qty,setQty]=useState("");
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState('');

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

    const dispatch = useDispatch();
    useEffect(() => {
        // Fetch the product details based on the id parameter
        dataServiceObj.getproductbyid(id)
            .then(res => {
                setProduct(res.data);
            })
            .catch(error => {
                console.error("Error fetching product details:", error);
            });
    }, [id]);

    function addToCart(){
        console.log("add clicked");
        dispatch({type:"ADDITEM",product:{...product,qty:qty,selectedSize:selectedSize}});
    }
    {/*const addToCart = async (productId) => {
        try {
          // Fetch product details by productId
          const productResponse = await dataServiceObj.getproductbyid(productId);
          const productData = productResponse.data;
          
          // Send a POST request to add the product to the cart on the server
          await axios.post('http://localhost:3500/cart', productData);
      
          // Fetch updated cart items after adding the product
          fetchCartItems();
        } catch (error) {
          console.error('Error adding product to cart:', error);
        }
      };*/}

    return (
        <div>
            {product ? (
                <div className="product-card" style={{display:'flex',justifyContent:'center',alignItems:'center',background:"skyblue"}}>
                    <img src={product.pimg} alt={product.pname} className="product-image" style={{width:"30%",padding:"20px",margin:"5px"}} />
                    <div className="product-details">
                        <h2 className="product-name">{product.pname}</h2>
                        <p className="product-description">{product.pdesc}</p>
                        <div style={{display:'flex',alignItems:'center'}}>
          <h4>Rs. {product.price-(product.price * 5)/100}</h4>  
          <h6 style={{textDecoration:'line-through', color:'#999999',marginLeft:'10px'}} > MRP Rs. {product.price}  </h6>
          <h4 style={{color:'green', marginLeft:'10px'}}>(5% OFF)</h4>
          </div>
                        {/* <p className="product-price">Price: {product.price}</p> */}
                        <p className="product-sizes">Available Sizes: {product.size.join(', ')}</p>
                        <input type="Number" value={qty>0?qty:0} onChange={(e)=>setQty(e.target.value)}  />
                        <div>
      <h2>Please select a size:</h2>
      <select value={selectedSize} onChange={handleSizeChange}>
        <option value="">Select Size</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
      {selectedSize && <p>Selected size: {selectedSize}</p>}
    </div>
                        <button onClick={()=>addToCart()}>Addtocart</button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            
        </div>
    );
};

export default Eachproduct;
