"use client";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { GiChampions } from "react-icons/gi";
import { BiSolidCheckShield } from "react-icons/bi";
import { FaBoxesPacking } from "react-icons/fa6";
import { FcOnlineSupport } from "react-icons/fc";
import Button from "react-bootstrap/Button";
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
          <h1 className="text-[35px] py-3 font-semibold text-black">Contact</h1>
          <div>
            <a href="/" className="font-semibold">
              Home
            </a>
            <span> / Contact</span>
          </div>
        </div>
      </div>
      <div className=" items-center  text-center py-5 ">
        <h1 className="text-[30px]  font-semibold text-black py-2">
          Get In Touch With Us
        </h1>
        <p>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us  An Email. <br /> Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>
      </div>
      <div className="row w-[98%] m-auto  lg:px-16">
        <div className="col-lg-2 "></div>
        <div className="col-lg-4 col-sm-6 col-12">
          <div className="d-flex py-2">
            <h3 className="text-[20px] font-semibold ">
              <FaLocationDot />
            </h3>
            <p className="text-[20px] px-3 font-semibold text-black">
              Address <br />
              <span className="text-[15px] font-light">
                236 5th SE Avenue, New York NY10000, United States
              </span>
            </p>
          </div>
          <div className="d-flex py-2">
            <h3 className="text-[20px] font-semibold text-black">
              <FaPhone />
            </h3>
            <p className="text-[20px] px-3 font-semibold text-black">
              Phone <br />
              <span className="text-[15px] font-light">
                Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
              </span>
            </p>
          </div>
          <div className="d-flex py-2">
            <h3 className="text-[20px] font-semibold text-black">
              <IoTimeSharp />
            </h3>
            <p className="text-[20px] px-3 font-semibold text-black">
              Working Time <br />
              <span className="text-[15px] font-light">
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </span>
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <form className="row  font-semibold py-4">
            <div className="py-2">
              <label for="validationDefault01" className="form-label">
                Your name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                required
              />
            </div>

            <div className=" py-2">
              <label for="validationDefault02" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="validationDefault02"
                required
              />
            </div>
            <div className=" py-2">
              <label for="validationDefault02" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                required
              />
            </div>
            <div className=" py-2">
              <label for="validationDefault02" className="form-label">
                Message
              </label>
              <textarea
                type="text"
                className="form-control"
                id="validationDefault02"
                required
              ></textarea>
            </div>
          </form>
          <Button variant="warning" className="bg-[#CD853F] ">
            Submit
          </Button>{" "}
        </div>
        <div className="col-lg-2"></div>
      </div>
      <div className="w-[98%] m-auto">
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
      <Footer/>
    </div>
  );
};

export default page;
