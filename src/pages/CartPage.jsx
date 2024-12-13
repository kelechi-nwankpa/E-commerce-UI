import { useContext } from "react";
import { cartContext } from "../context";
import CartCard from "../components/CartCard";

const Cart = () => {
  const { state, dispatch } = useContext(cartContext);
  const { cart } = state;

  const cartItems = Object.values(cart);

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const handleIncrement = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id } });
  };

  const handleDecrement = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id } });
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="row">
          {cartItems.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-3">
              <CartCard
                item={item}
                onRemove={handleRemove}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Your cart is empty!</p>
      )}
    </div>
  );
};

export default Cart;
