import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

  return (
    <div className="flex justify-center m-3">
      <div className="w-[60vw] m-3 p-3 border border-gray-400 rounded-xl font-bold text-xl">
        <div className= "flex justify-between">
        <h1 className="border border-gray-300 p-2 rounded-md"> Cart 🛒</h1>
        <button className="border border-gray-300 p-2 rounded-md" onClick={handleClearCart}>Clear Cart 🗑</button>
        </div>
      <div>
      { cartItems.map((items) => (
                    <MenuItem itemData = {items}/>
                ))}
      </div>
      </div>
    </div>
  );
};

export default Cart;
