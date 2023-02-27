import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    cartState: false,
    cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '') : [],
    cartTotalAmount:0,
    cartTotalQuantity:0,
}
const cartSlice =  createSlice({
    name:'cart',
    initialState,
    reducers:{
        setOpenCart(state,action){
            state.cartState = action.payload.cartState;
        },
        setCloseCart(state,action){
            state.cartState = action.payload.cartState;
        },
        setAddItemToCart(state,action){
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;
                toast("Item QTY Increased",{
                    style:{background:'#0637d2'}
                })
            } else{
                const temp = {...action.payload,cartQuantity:1}
                state.cartItems.push(temp);
                toast.success(`${action.payload.title} added to Cart`,{
                    style: { background: '#0637d2' }
                })
            }
            localStorage.setItem('cart',JSON.stringify(state.cartItems));
        },
        setRemoveItemFromToCart(state,action){
            const filtered = state.cartItems.filter((item) => item.id !== action.payload);
            const finded = state.cartItems.find((item) => item.id !== action.payload);
            state.cartItems = filtered
            toast.success(`${finded.title} remove From Cart`,{
                style:{background:'#ff466e'}
            })
        },
        setIncreaseCartItems(state,action){
            state.cartItems.find(item => {
                if(item.id === action.payload){
                    if(item.cartQuantity >= 0){
                        item.cartQuantity += 1
                    }
                }
            })
            toast.success('Item Qty Increased',{
                style:{background:'#00b0d6'}
            })
            localStorage.setItem('cart',JSON.stringify(state.cartItems));
        },
        setDecreaseCartItems(state,action){
            state.cartItems.find((item) => {
                if(item.id === action.payload){
                    if(item.cartQuantity > 1){
                        item.cartQuantity -= 1
                        toast.success(`Item Decreased`,{
                            style:{background:'#da4787'}
                        })
                    }else{
                        const filtered = state.cartItems.filter(item => item.id !== action.payload)
                        state.cartItems = filtered;
                        toast.success(`Item removed from Cart`,{
                            style:{background:'#da4787'}
                        })
                    }
                }
            });
            localStorage.setItem('cart',JSON.stringify(state.cartItems))
        },
        setClearCartItems(state){
            state.cartItems = [],
            state.cartTotalQuantity = 0,
            toast.success('Cart Cleared',{
                style:{background:'#ff466e'}
            })
            localStorage.setItem('cart',JSON.stringify(state.cartItems))
        },
        setGetTotals(state){
            let amount = 0;
            const total = state.cartItems.map((item) =>{
                state.cartTotalQuantity = state.cartItems.length
                amount += Number(item.price * item.cartQuantity)
                state.cartTotalAmount = amount
            })
        },
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;