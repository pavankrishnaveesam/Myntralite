import { legacy_createStore as createStore } from 'redux';
import axios from 'axios';

const initialState = {
    products: [],
    count: 0
};

// Reducer Function
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDITEM": {
            const existingProductIndex = state.products.findIndex(item => item.id === action.product.id);
            if (existingProductIndex !== -1) {
                // If the product is already in the cart, update the quantity
                const updatedProducts = [...state.products];
                updatedProducts[existingProductIndex].qty=parseInt(updatedProducts[existingProductIndex].qty) + parseInt(action.product.qty);
                
                let arr=updatedProducts.map(item=>({
                    id: `${item.id}ci`,
                    userid:  `${item.id}uid`,
                    pid: item.id,
                    qty: item.qty,
                    amount: parseInt(item.price)*parseInt(item.qty)
                  }));
                
                
                updateCartData(arr);
                return {
                    ...state,
                    products: updatedProducts,
                    count: parseInt(state.count) + parseInt(action.product.qty)
                };
            } else {
                // If the product is not in the cart, add it
                const updatedProducts = [...state.products];
                let arr=updatedProducts.map(item=>({
                    id: `${item.id}ci`,
                    userid:  `${item.id}uid`,
                    pid: item.id,
                    qty: item.qty,
                    amount: parseInt(item.price)*parseInt(item.qty)
                  }));
                
                
                updateCartData(arr);
                return {
                    ...state,
                    products: [...state.products, action.product],
                    count: parseInt(state.count) + parseInt(action.product.qty)
                };
            }
        }
        
        case "REMOVEITEM": {
            const productId = action.payload;
            const updatedProducts = state.products.filter(product => product.id !== productId);
            let arr=updatedProducts.map(item=>({
                id: `${item.id}ci`,
                userid:  `${item.id}uid`,
                pid: item.id,
                qty: item.qty,
                amount: parseInt(item.price)*parseInt(item.qty)
              }));
            
            
            updateCartData(arr);
            return {
                ...state,
                products: updatedProducts,
                count: state.count-parseInt(state.products.find(product => product.id == productId).qty)
            };
        }

        case "EMPTYCART": {
            return initialState; // Reset the state to the initial state
        }
        
        default:
            return state;
    }
};


const updateCartData = async (cartData) => {
    try {
        // Assuming your server endpoint for updating cart data is '/carts'
        await axios.post("http://localhost:3500/carts", cartData);
        console.log("Cart data updated successfully");
    } catch (error) {
        console.error("Error updating cart data:", error);
    }
};


// Create Store
const cartStore = createStore(cartReducer);

export default cartStore;
