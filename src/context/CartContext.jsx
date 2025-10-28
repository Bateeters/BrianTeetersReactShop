import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

function CartReducer(state, action) {
    switch(action.type) {
        case "ADD_ITEM": {
            // get item
            const item = action.payload;

            // check if item is already in cart (true or false)
            const existingItem = state.cart.find((i) => i.id === item.id);

            let updatedCart;
            if (existingItem) {
                // if it exists, increase quantity
                updatedCart = state.cart.map((i) =>
                    // does any current item (i) id match the new item (item) id
                    // if so, get i quantity and add item quantity to it
                    // if not, keep i quantity
                    i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                );
            } else {
                // if it's not already in cart, add it as new item
                updatedCart = [...state.cart, item];
            }

            return {...state, cart: updatedCart}
        };
        case "REMOVE_ITEM": {
            // get item
            const id = action.payload;

            // get current cart
            // filter through the cart and find every item that does NOT match the id
            const updatedCart = state.cart.filter((item) => item.id !== id);
            
            // return the updated cart (one showing everything that does NOT match)
            return { ...state, cart: updatedCart };
        };
        case "CLEAR_CART": {
            const updatedCart = [];

            return {...state, cart: updatedCart};
        }

        default: return state
    }
}

function CartProvider({children}) {
    const initialCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const [state, dispatch] = useReducer(CartReducer, {cart: initialCart});

    useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(state.cart));
    }, [state.cart])

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
