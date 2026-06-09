import React, { useState } from "react";
import PopUpCompo from "./PopUpCompo";

const ProductCart = ({ ShoesItem }) => {
  //  const [stockCount, setStockCount] = useState(0); // first i biuld for product bye component but i change and i convert the wislish product page
  const [isWishlisted, setisWishlisted] = useState(false);
  const [isloding, setIsloading] = useState(false);

  //   const increaseCount =()=>{
  //     if (stockCount < 10) {
  //  setStockCount(stockCount + 1)
  //    } else  {
  //     alert (`${stockCount} is a max product diliverd posible`)

  //    }
  //   }
  //    const decreaseCount =()=>{
  //     if (stockCount > 0) {
  //  setStockCount(stockCount - 1)
  //    }
  //   }
  // shoes data
  //  let data =  {
  //     price :5000,
  //     Productname: "Nike Sports Shoes",
  //   }

  // start and setTime for a moments
  const handleWishlisted = () => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
      setisWishlisted(true);

      setTimeout(() => {
        setisWishlisted(false);
      }, 3000);
    }, 2000);
    //  this is for remove wishlist and
    setIsloading(true);
  };

  return (
    <div className="card bg-base-100  w-full    md:w-auto     p-5">
      <div className="max-w-full  border-2 shadow-sm   rounded-2xl p-2 relative overflow-hidden">
        <figure>
          <img
            className="rounded-xl h-64 w-full object-cover "
            src={ShoesItem.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body flex md:justify-between lg:justify-between  2xl:justify-between items-center">
          <h2 className="card-title">
            <p className=" font-bold text-3xl "> {ShoesItem.productName} </p>
            <div className="badge badge-secondary text-2xl font-bold ">
              Price: {ShoesItem.price}₹
            </div>
          </h2>

          <div className="card-actions justify-end">
            {/* <div className="w-30 border-2 flex justify-between px-3 font-extrabold items-center text-3xl rounded-md mt-2"> 
        <button onClick={increaseCount}>+</button>
        {stockCount}
        <button onClick={decreaseCount}>-</button>
      </div> */}
            <div className="badge badge-outline">
              <button
                // disabled={stockCount === 0}
                onClick={handleWishlisted}
                className=" border-2 font-bold bg-blue-600 text-white w-30 p-3 my-1   rounded-md"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
        {/* this loder is i use mye old weder app animation like a reuseble loading animation */}
        {isloding && (
          <div className="absolute inset-0 z-10 flex justify-center items-center  bg-opacity-70 backdrop-blur-sm ">
            <svg
              className="animate-spin  w-12 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>

              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
        {/* user click wislist btn to  show the popup loder animation bye logical opretor */}
        {isWishlisted && <PopUpCompo />}
      </div>
    </div>
  );
};

export default ProductCart;
