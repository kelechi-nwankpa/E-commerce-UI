
 import {useReducer, createContext} from 'react';

 //initial state
 const intialState = {
    cart:{}
 };

 const cartContext = createContext({});

 function cartReducer(state, action){
    switch (action.type){
        case "ADD_TO_CART":
            
            const item = state.cart[action.payload.id];
            return{
                ...state,
                cart: {
                    ...state.cart,
                    [action.payload.id]: item ? {
                        ...item,
                        qty: item.qty +1,
                    } : {
                        ...action.payload,
                        qty:1,
                    }
                }
            }
        case "REMOVE_FROM_CART":
            let newCart = {...state.cart};
            delete newCart[action.payload.id];
            return {
                ...state,
                cart: newCart,
            }
        default:
            return state;
    }
 }
 // context provider

 const Provider = ({children}) =>{
    const [state, dispatch] = useReducer(cartReducer, intialState);
    return(
        <cartContext.Provider value={{state, dispatch}}>
            {children}
        </cartContext.Provider>
    );
 }

 export {cartContext, Provider};