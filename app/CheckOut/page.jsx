"use client";
import Footer from "@/Components/Footer";
import React from "react";
import Button from "react-bootstrap/Button";

import { GiChampions } from "react-icons/gi";
import { BiSolidCheckShield } from "react-icons/bi";
import { FaBoxesPacking } from "react-icons/fa6";
import { FcOnlineSupport } from "react-icons/fc";
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
            Check Out
          </h1>
          <div>
            <a href="/" className="font-semibold">
              Home
            </a>
            <span> / Check Out</span>
          </div>
        </div>
      </div>
      <div className="row w-[95%]  py-5 px-5 m-auto justify-center">
        <div className="col-lg-6 col-md-6 col-sm-6 col-12 lg:px-3 lg:py-3">
          <h1 className="text-[30px]  font-semibold text-black py-2">
            Billing details
          </h1>
          <form className="row  font-semibold">
            <div className="col-lg-6 py-2">
              <label for="validationDefault01" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                required
              />
            </div>
            <div className="col-lg-6 py-2">
              <label for="validationDefault02" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                required
              />
            </div>
            <div className="col-lg-12 py-2">
              <label for="validationDefault02" className="form-label">
                Company Name Optional
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                required
              />
            </div>
            <div className="col-lg-12 py-2">
              <label for="validationDefault04" className="form-label">
                Country / Region
              </label>
              <select className="form-select" id="validationDefault04" required>
                <option selected value="1">
                  Cambodian
                </option>
                <option selected value="2">
                  Thailand
                </option>
                <option selected value="3">
                  Vidnam
                </option>
              </select>
            </div>
            <div className="col-lg-12 py-2">
              <label for="validationDefault02" className="form-label">
                Street Address
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                required
              />
            </div>
            <div className="col-lg-12 py-2">
              <label for="validationDefault03" className="form-label">
                Town / City
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                required
              />
            </div>
            <div className="col-lg-12 py-2">
              <label for="validationDefault03" className="form-label">
                Province
              </label>
              <select className="form-select" id="validationDefault04" required>
                <option selected value="1">
                  Phnom Penh
                </option>
                <option selected value="2">
                  Prey Veng
                </option>
                <option selected value="3">
                  Svay Reing
                </option>
              </select>
            </div>

            <div className="col-lg-12 py-2">
              <label for="validationDefault05" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault05"
                required
              />
            </div>
            <div className="col-lg-12 py-2">
              <label for="validationDefault05" className="form-label">
                Phon Number
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault05"
                required
              />
            </div>
            <div className="col-lg-12 py-2">
              <label for="validationDefault05" className="form-label">
                Email address
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault05"
                required
              />
            </div>
            <div className="col-12 py-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck2"
                  required
                />
                <label className="form-check-label" for="invalidCheck2">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12 lg:py-4 lg:px-5">
          <div className="row lg:py-4 lg:px-3">
            <div className="col-lg-6 col-sm-6 col-6">
              <h1 className="text-[20px] font-semibold text-black">Product</h1>
              <p className=" font-light py-2">Asgaard sofa x 1</p>
              <p className="py-2">Subtotal</p>
              <p className="py-2">Total</p>
            </div>
            <div className="col-lg-6 col-sm-6 col-6 lg:text-end md:text-start">
              <h1 className="text-[20px] font-semibold text-black">Subtotal</h1>
              <p className="py-2"> Rs. 250,000.00</p>
              <p className="py-2">Rs. 250,000.00</p>
              <p className="lg:text-[25px] md:text-[20px] text-[#CD853F] font-semibold">
                Rs. 250,000.00
              </p>
            </div>
            <div className="col-l-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck2"
                  required
                />
                <label
                  className="form-check-label font-semibold"
                  for="invalidCheck2"
                >
                  Direct Bank Transfer
                </label>
                <p className=" font-light py-3">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
            </div>
            <div className="col-l-12">
              <div className="form-check">
                <input
                  className="form-check-input py-2"
                  type="checkbox"
                  value=""
                  id="invalidCheck2"
                  required
                />
                <label
                  className="form-check-label  font-light py-2"
                  for="invalidCheck2"
                >
                  Direct Bank Transfer
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input py-2"
                  type="checkbox"
                  value=""
                  id="invalidCheck2"
                  required
                />
                <label
                  className="form-check-label  font-light py-2"
                  for="invalidCheck2"
                >
                  Cash On Delivery
                </label>
                <p className=" font-light text-black">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <a href="" className=" font-semibold ">
                    {" "}
                    privacy policy.
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-12 items-center justify-center d-flex py-4 ">
              <Button variant="outline-warning" className="text-black">
                Place order
              </Button>{" "}
            </div>
          </div>
        </div>
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
