import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../Redux/CartSlice";
import Navbar from "../Components/Navbar";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast from "react-hot-toast";


const CartPage = () => {
  const dispatch = useDispatch();

  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  return (
    <>
      <div>
        <Navbar />
        <div className="p-10">
          <h1 className="text-2xl font-bold mb-5">Your Cart</h1>

          {cartItems.length === 0 && (
            <h2 className="text-lg text-gray-500">Cart is Empty</h2>
          )}

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 border rounded mb-4"
            >
              <div className="flex items-center gap-4">
                <img src={item.img} className="w-20 h-20 rounded" />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="font-bold text-orange-500">₹{item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => dispatch(decreaseQty(item))}
                  className="w-8 h-8 bg-red-200 font-bold rounded-full"
                >
                  -
                </button>

                <span className="text-lg font-semibold">{item.qty}</span>

                <button
                  onClick={() => dispatch(increaseQty(item))}
                  className="w-8 h-8 bg-green-200 font-bold rounded-full"
                >
                  +
                </button>
                <RiDeleteBin6Line
                  onClick={() => { dispatch(removeItem(item.id))
                    toast.error("Item removed")
                  }}
                  className="text-red-500 text-2xl cursor-pointer hover:text-red-700"
                />
              </div>
            </div>
          ))}

          {cartItems.length > 0 && (
            <h2 className="mt-6 text-xl font-bold">
              Total Price: ₹{totalPrice}
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
