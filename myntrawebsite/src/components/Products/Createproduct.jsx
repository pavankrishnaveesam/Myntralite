import { useEffect, useState } from "react"
import { dataServiceObj} from "./productService";
import { useParams } from "react-router-dom";


export default function Createproduct(){

    const [product,setProduct] = useState({
        id: "",
        pname: "",
        pdesc: "",
        pimg: "",
        price: "",
        size: [],
        catid:""
      });
    
      const { id } = useParams();

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

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
      
        if (type === 'checkbox') {
          // If the input is a checkbox, toggle the selected size
          const updatedSizes = checked
            ? [...product.size, value] // Add the size if checked
            : product.size.filter(size => size !== value); // Remove the size if unchecked
      
          setProduct(prevProduct => ({ ...prevProduct, [name]: updatedSizes }));
        } else {
          setProduct(prevProduct => ({ ...prevProduct, [name]: value }));
        }
    }
      
    function AddProduct(){
        let newProduct={
            id: product.id,
            pname: product.pname,
            pdesc: product.pdesc,
            pimg: product.pimg,
            price: product.price,
            size: product.size,
            catid:product.catid
          };
        dataServiceObj.addproduct(newProduct);    
        setProduct({
            id: "",
            pname: "",
            pdesc: "",
            pimg: "",
            price: "",
            size: [],
            catid:""
          });
    } 
    
    
    
    function Update(){ 
    
        dataServiceObj.updateById({
            id: product.id,
            pname: product.pname,
            pdesc: product.pdesc,
            pimg: product.pimg,
            price: product.price,
            size: product.size,
            catid:product.catid
          },product.id)
                     .then(()=>{setProduct({
                        id: "",
                        pname: "",
                        pdesc: "",
                        pimg: "",
                        price: "",
                        size: [],
                        catid:""
                      });});
    
    }
    
    

    return(
        <>
        <input type="text" name="id" placeholder="pid" value={product.id} onChange={handleChange}/>
        <input type="text" name="pname" placeholder="pname" value={product.pname} onChange={handleChange}/>
        <input type="text" name="pdesc" placeholder="pdesc" value={product.pdesc} onChange={handleChange}/>
        <input type="text" name="pimg" placeholder="pimg" value={product.pimg} onChange={handleChange}/>
        <input type="text" name="price" placeholder="price" value={product.price} onChange={handleChange}/>
        <label>Select Sizes:</label>
        <div>
            <input type="checkbox" id="sizeM" name="size" value="M" checked={product.size.includes('M')} onChange={handleChange} />
            <label htmlFor="sizeM">M</label>
        </div>
        <div>
            <input type="checkbox" id="sizeL" name="size" value="L" checked={product.size.includes('L')} onChange={handleChange} />
            <label htmlFor="sizeL">L</label>
        </div>
        <div>
            <input type="checkbox" id="sizeXL" name="size" value="XL" checked={product.size.includes('XL')} onChange={handleChange} />
            <label htmlFor="sizeXL">XL</label>
        </div>
        <div>
            <label htmlFor="dropdown">category:</label>
            <select id="dropdown" value={product.catid} onChange={handleChange}>
                <option value="">Select</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                {/* Add more options as needed */}
            </select>
        </div>
        <br/>
        <button onClick={AddProduct}>Add Product</button>
        <button onClick={Update}>Update</button>
        </>
    );
}