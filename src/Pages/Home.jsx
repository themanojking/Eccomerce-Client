import React from "react";
import Navbar from "../Components/Navbar";
import { homeMenu } from "../Utils/Data";
import { Link } from "react-router-dom";
import FoodCard from "../Components/FoodCard";


const Home = () => {
  return (
    <>
      <div className="lg:mx-20 mx-3">
        <Navbar />
        <div className="mt-24 ">
          <div>
            <center>
              <img
                src="assets/home2.png"
                alt="homeimage"
                className="p-3  rounded-4xl"
              />
            </center>
          </div>
          <div className="mt-10 p-2">
            <h1 className="text-2xl md:text-4xl font-semibold">
              Explore our menu
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-semibold mt-5 max-w-[1000px] leading-relaxed">
              Explore our menu and embark on a culinary journey like no other.
              Each dish is crafted to delight your taste buds and satisfy your
              cravings. Dive into flavors that will turn every meal into a
              memorable experience.
            </p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-10 md:gap-20 mt-10 ">
            {homeMenu.map((item) => (
              <div key={item.id} className="w-20 space-y-5 ">
                <Link to={item.link}>
                  <img src={item.img} alt={item.alt} className=""></img>
                  <h3 className="flex justify-center items-center text-lg font-bold mt-5">
                    {item.text}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
          <center>
            <hr className="mt-10 w-[70%]" />
          </center>
          <div className="mt-8">
             <h1 className="text-4xl font-bold">Top dishes near you</h1>
          </div>
            <FoodCard />
        </div>
      </div>
    </>
  );
};

export default Home;
