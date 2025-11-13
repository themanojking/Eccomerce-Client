import React from "react";
import { foodCard } from "../Utils/Data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQty, increaseQty } from "../Redux/CartSlice";
import toast from "react-hot-toast";

const FoodCard = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);


  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {foodCard.map((i) => {
          const existingItem = cartItems.find((x) => x.id === i.id);
          const qty = existingItem ? existingItem.qty : 0;

          return (
            <div
              key={i.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="relative w-full h-[200px]">
                <img
                  src={i.img}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                {qty === 0 ? (
                  <button
                    onClick={() => {
                      dispatch(addToCart(i));
                      toast.success("Added to cart");
                    }}
                    className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex justify-center items-center text-black shadow-md"
                  >
                    +
                  </button>
                ) : (
                  <div className="absolute bottom-3 right-3  bg-white rounded-full flex justify-center gap-3  items-center text-black shadow-md">
                    <button
                      onClick={() => {
                        dispatch(decreaseQty(i));
                        toast.success("Qty decreased");
                      }}
                      className="w-8 h-8 bg-red-100 rounded-full flex justify-center items-center text-red-600 font-bold"
                    >
                      -
                    </button>
                    <span className="font-semibold">{qty}</span>
                    <button
                      onClick={() => {
                        dispatch(increaseQty(i));
                        toast.success("Qty increased");
                      }}
                      className="w-8 h-8 bg-green-100 rounded-full flex justify-center items-center text-green-600 font-bold"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-[18px] text-black">
                  {i.title}
                </h3>

                {/* rating */}
                <div className="flex items-center my-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span
                      key={idx}
                      className={
                      "text-orange-500"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-gray-500 text-sm mt-1 leading-5">
                  {i.description}
                </p>

                <p className="text-orange-500 font-bold text-lg mt-3">
                  ₹{i.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodCard;
