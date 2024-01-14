"use client";
import React from "react";
import { IoIosStar } from "react-icons/io";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import { GiChampions } from "react-icons/gi";
import { BiSolidCheckShield } from "react-icons/bi";
import { FaBoxesPacking } from "react-icons/fa6";
import { FcOnlineSupport } from "react-icons/fc";
import Form from "react-bootstrap/Form";
import Footer from "@/Components/Footer";
const page = () => {
  return (
    <div className="w-100 h-screen">
      <div
        className=" py-3 relative flex items-center w-full h-[400px] bg-cover bg-center justify-center"
        style={{
          backgroundImage:
            "url(https://www.houseopedia.com/wp-content/uploads/2023/07/Spice-Up-Your-Homes-Decor-With-Texture-e1690576256697-770x360.jpeg)",
        }}
      >
        <div className="items-center  w-100 justify-center text-center">
          <h1 className="text-[35px] py-3 font-semibold text-black">
            Product Comparision
          </h1>
          <div>
            <a href="/" className="font-semibold">
              Home
            </a>
            <span> / Comparision</span>
          </div>
        </div>
      </div>
      <div className="w-[95%] m-auto py-5 items-center ">
        <div className="row w-100 items-start px-4   ">
          <div className="col-lg-3 col-md-4 col-sm-6 col-6  py-3">
            <h2 className=" text-[25px] font-semibold text-black">
              Go to Product page for more Products
            </h2>
            <button
              className="py-3 text-[15px] font-light"
              style={{ textDecoration: "underline" }}
            >
              View More
            </button>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6  py-2">
            <img
              style={{ width: "300px", height: "200px", borderRadius: "5px" }}
              src="https://m.media-amazon.com/images/I/61zUlbcbtaL._AC_UF1000,1000_QL80_DpWeblab_.jpg"
            />
            <h2 className="py-2 text-[20px] font-semibold">Asgaard Sofa</h2>
            <p>Rs 250.000.000</p>
            <div className="flex items-center py-2">
              <p className="d-flex text-[#DAA520] ">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <FaRegStarHalfStroke />
              </p>
              |
              <span className="text-[15px] font-light"> 5 Customer Review</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6  py-2">
            <img
              style={{ width: "300px", height: "200px", borderRadius: "5px" }}
              src="https://m.media-amazon.com/images/I/71u3F2NZ9gL._AC_UF1000,1000_QL80_DpWeblab_.jpg"
            />
            <h2 className="py-2 text-[20px] font-semibold">Outdoor Sofa Set</h2>
            <p>Rs 250.000.000</p>
            <div className="flex items-center py-2">
              <p className="d-flex text-[#DAA520] ">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <FaRegStarHalfStroke />
              </p>
              |
              <span className="text-[15px] font-light"> 5 Customer Review</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6  py-2">
            <h1 className="py-3 text-[25px] font-semibold">Add A Product</h1>
            <Form.Select
              aria-label="Default select example"
              className="bg-[#DAA520]"
            >
              <option>Choose a Product</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </div>
        
        <div className="row px-4 w-[95%] m-auto mt-5">
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 px-5 " style={{ border: "1px solid black" }}>
            <h1 className="text-[20px] font-semibold py-3">General</h1>
            <p className="text-[15px] font-light py-3">Sales Package</p>
            <p className="text-[15px] font-light py-3">Model Number</p>
            <p className="text-[15px] font-light py-3">Secondary Material</p>
            <p className="text-[15px] font-light py-3">Configuration</p>
            <p className="text-[15px] font-light py-3">Upholstery Material</p>
            <p className="text-[15px] font-light py-3">Upholstery Color</p>
            <h1 className="text-[20px] font-semibold py-3">Product</h1>
            <p className="text-[15px] font-light py-3">Filling Material</p>
            <p className="text-[15px] font-light py-3">Finish Type</p>
            <p className="text-[15px] font-light py-3">Adjustable Headrest</p>
            <p className="text-[15px] font-light py-3">Maximum Load Capacity</p>
            <p className="text-[15px] font-light py-3">Origin of Manufacture</p>
            <h1 className="text-[20px] font-semibold py-3">Dimensions</h1>
            <p className="text-[15px] font-light py-3">Width</p>
            <p className="text-[15px] font-light py-3">Height</p>
            <p className="text-[15px] font-light py-3">Depth</p>
            <p className="text-[15px] font-light py-3">Weight</p>
            <p className="text-[15px] font-light py-3">Seat Height</p>
            <p className="text-[15px] font-light py-3">Leg Height</p>
            <h1 className="text-[20px] font-semibold py-3">Warranty</h1>
            <p className="text-[15px] font-light py-3">Warranty Summary</p>
            <p className="text-[15px] font-light py-3">Warranty Service Type</p>
            <p className="text-[15px] font-light py-3">Covered in Warranty</p>
            <p className="text-[15px] font-light py-3">
              Not Covered in Warranty
            </p>
            <p className="text-[15px] font-light py-3">Domestic Warranty</p>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 px-5 " style={{ border: "1px solid black" }}>
            <h1 className="text-[20px] font-semibold py-4"></h1>

            <p className="text-[15px] font-light py-3">1 sectional sofa</p>
            <p className="text-[15px] font-light py-3">TFCBLIGRBL6SRHS</p>
            <p className="text-[15px] font-light py-3">Solid Wood</p>
            <p className="text-[15px] font-light py-3">L-shaped</p>
            <p className="text-[15px] font-light py-3">Fabric + Cotton</p>
            <p className="text-[15px] font-light py-3">Bright Grey & Lion</p>
            <h1 className="text-[20px] font-semibold py-4"></h1>

            <p className="text-[15px] font-light py-3">Foam</p>
            <p className="text-[15px] font-light py-3">Bright Grey & Lion</p>
            <p className="text-[15px] font-light py-3">No</p>
            <p className="text-[15px] font-light py-3">280 KG</p>
            <p className="text-[15px] font-light py-3">India</p>
            <h1 className="text-[20px] font-semibold py-4"></h1>

            <p className="text-[15px] font-light py-3">265.32 cm</p>
            <p className="text-[15px] font-light py-3">76 cm</p>
            <p className="text-[15px] font-light py-3">167.76 cm</p>
            <p className="text-[15px] font-light py-3">45 KG</p>
            <p className="text-[15px] font-light py-3">41.52 cm</p>
            <p className="text-[15px] font-light py-3">5.46 cm</p>
            <h1 className="text-[20px] font-semibold py-4"></h1>

            <p className="text-[15px] font-light py-3">
              1 Year Manufacturing Warranty
            </p>
            <p className="text-[15px] font-light py-3">
              For Warranty Claims or Any Product Related Issues Please Email at
              operations@trevifurniture.com
            </p>
            <p className="text-[15px] font-light py-3">
              Warranty Against Manufacturing Defect
            </p>
            <p className="text-[15px] font-light py-3">
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage
            </p>
            <p className="text-[15px] font-light py-3">1 Year</p>
            <Button variant="warning" className="px-3 mb-4 bg-[#CD853F]">
              Add To Chart
            </Button>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 px-5 " style={{ border: "1px solid black" }}>
            <h1 className="text-[20px] font-semibold py-4"></h1>

            <p className="text-[15px] font-light py-3">
              1 Three Seater, 2 Single Seater
            </p>
            <p className="text-[15px] font-light py-3">DTUBLIGRBL568</p>
            <p className="text-[15px] font-light py-3">Solid Wood</p>
            <p className="text-[15px] font-light py-3">L-shaped</p>
            <p className="text-[15px] font-light py-3">Fabric + Cotton</p>
            <p className="text-[15px] font-light py-3">Bright Grey & Lion</p>
            <h1 className="text-[20px] font-semibold py-4"></h1>
            <p className="text-[15px] font-light py-3">Matte</p>
            <p className="text-[15px] font-light py-3">Bright Grey & Lion</p>
            <p className="text-[15px] font-light py-3">yes</p>
            <p className="text-[15px] font-light py-3">300 KG</p>
            <p className="text-[15px] font-light py-3">India</p>
            <h1 className="text-[20px] font-semibold py-4"></h1>
            <p className="text-[15px] font-light py-3">265.32 cm</p>
            <p className="text-[15px] font-light py-3">76 cm</p>
            <p className="text-[15px] font-light py-3">167.76 cm</p>
            <p className="text-[15px] font-light py-3">45 KG</p>
            <p className="text-[15px] font-light py-3">41.52 cm</p>
            <p className="text-[15px] font-light py-3">5.46 cm</p>
            <h1 className="text-[20px] font-semibold py-4"></h1>
            <p className="text-[15px] font-light py-3">
              1.2 Year Manufacturing Warranty
            </p>
            <p className="text-[15px] font-light py-3">
              For Warranty Claims or Any Product Related Issues Please Email at
              support@xyz.com
            </p>
            <p className="text-[15px] font-light py-3">
              Warranty of the product is limited to manufacturing defects only.
            </p>
            <p className="text-[15px] font-light py-3">
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage.
            </p>
            <p className="text-[15px] font-light py-3">3 Months</p>
            <Button variant="warning" className="px-3 mb-4 py-2 bg-[#CD853F] ">
              Add To Chart
            </Button>
          </div>
          <div className="col-lg-3 d-lg-flex d-md-none" style={{ border: "1px solid black" }}></div>
        </div>
        <div>
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
                <h1 className="text-[20px] font-semibold">
                  Warranty Protection
                </h1>
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
      </div>
      <Footer/>
    </div>
  );
};

export default page;
