"use client";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { GiChampions } from "react-icons/gi";
import { BiSolidCheckShield } from "react-icons/bi";
import { FaBoxesPacking } from "react-icons/fa6";
import { FcOnlineSupport } from "react-icons/fc";
import Footer from "@/Components/Footer";
const page = () => {
  return (
    <div className="w-100 m-auto py-5  h-screen">
      <div
        className=" py-3 relative flex items-center w-full h-[400px] bg-cover bg-center justify-center"
        style={{
          backgroundImage:
            "url(https://www.houseopedia.com/wp-content/uploads/2023/07/Spice-Up-Your-Homes-Decor-With-Texture-e1690576256697-770x360.jpeg)",
        }}
      >
        <div className="items-center  w-100 justify-center text-center">
          <h1 className="text-[35px] py-3 font-semibold text-black">
            Chart
          </h1>
          <div>
            <a href="/" className="font-semibold">
              Home
            </a>
            <span> / Chart</span>
          </div>
        </div>
      </div>
      <div className="lg:w-[90%] md:w-[95%] m-auto py-5 ">
        <div className="row  justify-start">
          <div className="col-lg-8 py-2">
            <table className="w-100">
              <tr className="w-100 bg-[#F5DEB3]  rounded-[10px]">
                <th className="py-3 px-3 text-[15px] font-semibold">Product</th>
                <th className="py-3 text-[15px] font-semibold">Price</th>
                <th className="py-3 text-[15px] font-semibold">Quantity</th>
                <th className="py-3 text-[15px] font-semibold">Subtotal</th>
              </tr>
              <div style={{ marginTop: "20px" }}></div>
              <tr>
                <td className="flex px-3 items-center">
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "10px",
                    }}
                    src="https://www.getmycouch.com/cdn/shop/files/ummed-sofa-set_grande.jpg?v=1687610639"
                  />
                  <p className=" px-4 lg:text-[15px] sm:text-[10px] text-[10px] font-light">Asgaard sofa</p>
                </td>
                <td className=" lg:text-[15px] sm:text-[10px] text-[10px] font-light">Rs. 250,000.00</td>
                <td className=" text-center items-center justify-center">
                  <p
                    style={{
                      width: "30px",
                      height: "30px",
                      border: "1px solid black",
                      borderRadius: "5px",
                    }}
                  >
                    1
                  </p>
                </td>
                <td className="items-center lg:text-[15px] sm:text-[10px] text-[10px] font-light  justify-between">
                  <p className="flex font-semibold">
                    Rs. 250,000.00{" "}
                    <span className="flex ml-5 cursor-pointer lg:text-[20px] sm:text-[15px] text-[15px]">
                      <MdDeleteForever />
                    </span>
                  </p>
                </td>
              </tr>
            </table>
          </div>
          <div className="col-lg-4 py-2">
            <div className="bg-[#F5DEB3] text-center items-center justify-center rounded-[10px] py-3">
              <h1 className="text-[25px] font-semibold p-2 mb-3">
                Cart Totals
              </h1>

              <p className="text-[15px] font-semibold ">
                Subtotal{" "}
                <span className=" font-light ml-5">Rs. 250,000.00</span>
              </p>

              <p className="py-2 mb-2 text-[15px] font-semibold ">
                Totat <span className=" font-light ml-5 text-[#CD853F]">Rs. 250,000.00</span>
              </p>
              <a
                href="/CheckOut"
                className="py-2 px-4 font-semibold  rounded-[5px]  "
                style={{ border: "1px solid black", marginTop: "10px" }}
              >
                Check Out
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[98%] m-auto" >
        <div className="row justify-center items-center py-5 bg-[#F5DEB3] mt-5">
          <div className="col-lg-3 col-md-6 items-center flex justify-center py-2">
            <span className="text-[40px]">
              <GiChampions />
            </span>
            <div className="px-2">
              <h1 className="text-[20px] font-semibold">High Quality</h1>
              <p className="text-[13px]">Crafted from top materials</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items-center flex justify-center py-2">
            <span className="text-[40px]">
              <BiSolidCheckShield />
            </span>
            <div className="px-2">
              <h1 className="text-[20px] font-semibold">Warranty Protection</h1>
              <p className="text-[13px]">Over 2 year</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items-center flex justify-center py-2">
            <span className="text-[40px]">
              <FaBoxesPacking />
            </span>
            <div className="px-2">
              <h1 className="text-[20px] font-semibold">Free Shipping</h1>
              <p className="text-[13px]">Oder over 150$</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items-center flex justify-center py-2">
            <span className="text-[40px]">
              <FcOnlineSupport />
            </span>
            <div className="px-2">
              <h1 className="text-[20px] font-semibold">24 / 7 Support</h1>
              <p className="text-[13px]">Dedicated Support</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
