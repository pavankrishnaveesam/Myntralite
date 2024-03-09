import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cart() {
    const dispatch = useDispatch();
    const currentProducts = useSelector(state => state.products);
    const [cartArray, setCartArray] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0); // State to store total amount

    useEffect(() => {
        // Initialize cart array with current products
        setCartArray(currentProducts);
    }, [currentProducts]); // Update cart array whenever current products change

    // Function to remove an item from the cart
    const removeItem = (productId) => {
        // Dispatch an action to remove the item from the cart
        dispatch({ type: "REMOVEITEM", payload: productId });
    };

    // Calculate total amount whenever cartArray changes
    useEffect(() => {
        let total = 0;
        cartArray.forEach(item => {
            total += parseInt(item.qty) * parseInt(item.price);
        });
        setTotalAmount(total);
    }, [cartArray]);

    return (
        <>
            <div>
                <h2>Cart List</h2>
                <table border="2">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartArray.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.pname}</td>
                                <td>{item.selectedSize}</td>
                                <td>{item.price}</td>
                                <td>{item.qty}</td>
                                <td>{parseInt(item.qty) * parseInt(item.price)}</td>
                                <td><button onClick={() => removeItem(item.id)}>Remove</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                Pay {totalAmount}
            </div>
            <button style={{ position: "absolute", left: "300px" }}><Link to="/Checkout">Checkout</Link></button>
        </>
    );
}
