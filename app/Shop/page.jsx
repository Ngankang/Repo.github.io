"use client";
import React from "react";
import Footer from "@/Components/Footer";
import { FaSlidersH } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { TfiLayoutSliderAlt } from "react-icons/tfi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { GoGitCompare } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { GiChampions } from "react-icons/gi";
import { BiSolidCheckShield } from "react-icons/bi";
import { FaBoxesPacking } from "react-icons/fa6";
import { FcOnlineSupport } from "react-icons/fc";
import Badge from "react-bootstrap/Badge";
const page = () => {
  return (
    <div className="w-100 h-screen">
      <div
        className=" relative flex items-center w-full h-[400px] bg-cover bg-center justify-center "
        style={{
          backgroundImage:
            "url(https://www.houseopedia.com/wp-content/uploads/2023/07/Spice-Up-Your-Homes-Decor-With-Texture-e1690576256697-770x360.jpeg)",
        }}
      >
        <div className="items-center  w-100 justify-center text-center">
          <h1 className="text-[35px] mb-3  font-semibold text-black">Shop</h1>
          <div>
            <a href="/" className="font-semibold">
              Home
            </a>
            <span> / Shop</span>
          </div>
        </div>
      </div>
      <div
        className="bg-[#F5DEB3] w-100 flexblong py-4 px-5 "
        style={{ marginBottom: "20px" }}
      >
        <div className="d-flex py-3">
          <div className="flex cursor-pointer text-[20px]">
            <FaSlidersH />
            <h2 className="px-2 text-[15px]">Filter</h2>
          </div>
          <div className="px cursor-pointer text-[20px]">
            <CgMenuGridR />
          </div>
          <div className="px-2 cursor-pointer text-[20px]">
            <TfiLayoutSliderAlt />
          </div>
          <div className="px-3"> | </div>
          <div>
            <h2>Showing 1 - 16 of 32 results</h2>
          </div>
        </div>
        <div className="d-flex cursor-pointer py-2">
          <h2 className="text-[15px] font-semibold">
            Show{" "}
            <span className="py-2 px-2 bg-[#F5F5F5] cursor-pointer font-light">
              16
            </span>{" "}
          </h2>
          <h2 className="px-3 text-[15px] font-semibold">
            Show by{" "}
            <span className="py-2 px-5 bg-[#F5F5F5] font-light cursor-pointer">
              default
            </span>
          </h2>
        </div>
      </div>
      <div className="row  m-auto items-center w-[95%] ">
        <div className="col-lg-3  col-md-4  col-6 py-2">
          <div className="hoverimage bg-slate-300">
            <Badge className="Badge py-3 rounded-[50%]" bg="danger">
              -30%
            </Badge>
            <img
              src="https://media.sofa.com/thumbor/unsafe/https%3A%2F%2Fmedia.sofa.com%2Fmedias%2FAW23-LP-2.png%3Fcontext%3DbWFzdGVyfHJvb3R8MzMxMTE5fGltYWdlL3BuZ3xoYzIvaGFmLzkwMjY4Mjg5NTk3NzQucG5nfDAwNWZiODgxZDk3NTE5MTA0ZTVhNmI5ZDMwMmY3YTQzOGMwYmQ3OTM2NTg1MGUxOTdiYzZkOTg2ZWFhYmZlY2Q"
              alt="Avatar"
              className="image"
            />
            <div className="py-2 px-3">
              <h2 className="text-[20px] text-white font-semibold">
                Syltherine
              </h2>
              <p className="text-[15px] text-white font-light">
                Sylish Cafe Chair
              </p>
              <h2 className="text-[20px] text-white font-semibold">
                Rp 2.500.000{" "}
                <span
                  style={{
                    textDecoration: "line-through",
                    fontSize: "15px",
                    fontWeight: "lighter",
                    marginRight: "5px",
                  }}
                >
                  Rp 5.500.000
                </span>
              </h2>
            </div>
            <div class="overlay">
              <div class="text">
                <a href="/Productchart"
                  className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                >
                  {" "}
                  Add to Cart
                </a>
                <div className="d-lg-flex  py-3 text-[20px]">
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <FaRegShareFromSquare className="mr-2 " /> Share
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    {" "}
                    <GoGitCompare className="mr-2" /> Compare
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <CiHeart className="mr-2" /> Like
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4  col-6 py-2">
          <div className="hoverimage bg-slate-300">
            <img
              src="https://nikitoskokos.github.io/Funiro/Funiro/img/products/02.jpg"
              alt="Avatar"
              className="image"
            />
            <div className="py-2 px-3">
              <h2 className="text-[20px] text-white font-semibold">Leviosa</h2>
              <p className="text-[15px] text-white font-light">
                Sylish Cafe Chair
              </p>
              <h2 className="text-[20px] text-white font-semibold">
                Rp 2.500.000{" "}
              </h2>
            </div>
            <div class="overlay">
              <div class="text">
                <a href="/Productchart"
                  className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                >
                  {" "}
                  Add to Cart
                </a>
                <div className="d-lg-flex py-3 text-[20px]">
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <FaRegShareFromSquare className="mr-2 " /> Share
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    {" "}
                    <GoGitCompare className="mr-2" /> Compare
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <CiHeart className="mr-2" /> Like
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4  col-6 py-2">
          <div className="hoverimage bg-slate-300">
            <Badge className="Badge py-3 rounded-[50%]" bg="danger">
              -50%
            </Badge>
            <img
              src="https://nikitoskokos.github.io/Funiro/Funiro/img/products/03.jpg"
              alt="Avatar"
              className="image"
            />
            <div className="py-2 px-3">
              <h2 className="text-[20px] text-white font-semibold">Lolitos</h2>
              <p className="text-[15px] text-white font-light">
                Loxari Big Sofa
              </p>
              <h2 className="text-[20px] text-white font-semibold">
                Rp 7.000.000{" "}
                <span
                  style={{
                    textDecoration: "line-through",
                    fontSize: "15px",
                    fontWeight: "lighter",
                    marginRight: "5px",
                  }}
                >
                  Rp 14.000.000
                </span>
              </h2>
            </div>
            <div class="overlay">
              <div class="text">
                <a href="/Productchart"
                  className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                >
                  {" "}
                  Add to Cart
                </a>
                <div className="d-lg-flex py-3 text-[20px]">
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <FaRegShareFromSquare className="mr-2 " /> Share
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    {" "}
                    <GoGitCompare className="mr-2" /> Compare
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <CiHeart className="mr-2" /> Like
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4  col-6 py-2">
          <div className="hoverimage bg-slate-300">
            <Badge className="Badge py-3 rounded-[50%]" bg-primary>
              New
            </Badge>
            <img
              src="https://www.avocadogreenmattress.com/cdn/shop/products/AVO_ZERO-WASTE-WOOD-STOOL_0071_2000w.jpg?v=1655935169"
              alt="Avatar"
              className="image"
            />
            <div className="py-2 px-3">
              <h2 className="text-[20px] text-white font-semibold">Respira</h2>
              <p className="text-[15px] text-white font-light">
                Outdoor bar table and stool
              </p>
              <h2 className="text-[20px] text-white font-semibold">
                Rp 500.000{" "}
              </h2>
            </div>
            <div class="overlay">
              <div class="text">
                <a href="/Productchart"
                  className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                >
                  {" "}
                  Add to Cart
                </a>
                <div className="d-lg-flex py-3 text-[20px]">
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <FaRegShareFromSquare className="mr-2 " /> Share
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    {" "}
                    <GoGitCompare className="mr-2" /> Compare
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <CiHeart className="mr-2" /> Like
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4  col-6 py-2">
          <div className="hoverimage bg-slate-300">
            <img
              src="https://casagold.in/cdn/shop/products/SEAHORSE1.jpg?crop=center&height=1200&v=1676890561&width=1200"
              alt="Avatar"
              className="image"
            />
            <div className="py-2 px-3">
              <h2 className="text-[20px] text-white font-semibold">Grifo</h2>
              <p className="text-[15px] text-white font-light">Night Lamp</p>
              <h2 className="text-[20px] text-white font-semibold">
                Rp 1.500.000{" "}
              </h2>
            </div>
            <div class="overlay">
              <div class="text">
                <a href="/Productchart"
                  className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                >
                  {" "}
                  Add to Cart
                </a>
                <div className="d-lg-flex py-3 text-[20px]">
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <FaRegShareFromSquare className="mr-2 " /> Share
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    {" "}
                    <GoGitCompare className="mr-2" /> Compare
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <CiHeart className="mr-2" /> Like
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4  col-6 py-2">
          <div className="hoverimage bg-slate-300">
            <Badge className="Badge py-3 rounded-[50%]" bg-primary>
              New
            </Badge>
            <img
              src="https://beltafrajumar.com/wp-content/uploads/2021/01/Klas-sofa-relax-gris3.jpg"
              alt="Avatar"
              className="image"
            />
            <div className="py-2 px-3">
              <h2 className="text-[20px] text-white font-semibold">Muggo</h2>
              <p className="text-[15px] text-white font-light">Small mug</p>
              <h2 className="text-[20px] text-white font-semibold">
                Rp 150.000{" "}
              </h2>
            </div>
            <div class="overlay">
              <div class="text">
                <a href="/Productchart"
                  className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                >
                  {" "}
                  Add to Cart
                </a>
                <div className="d-lg-flex py-3 text-[20px]">
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <FaRegShareFromSquare className="mr-2 " /> Share
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    {" "}
                    <GoGitCompare className="mr-2" /> Compare
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <CiHeart className="mr-2" /> Like
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4  col-6 py-2">
          <div className="hoverimage bg-slate-300">
            <Badge className="Badge py-3 rounded-[50%]" bg="danger">
              -50%
            </Badge>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntu-jA6jrMjsm16m9YF5pykR_mo_tiQ6Ung&usqp=CAU"
              alt="Avatar"
              className="image"
            />
            <div className="py-2 px-3">
              <h2 className="text-[20px] text-white font-semibold">Pingky</h2>
              <p className="text-[15px] text-white font-light">Cafe bed set</p>
              <h2 className="text-[20px] text-white font-semibold">
                Rp 7.000.000{" "}
                <span
                  style={{
                    textDecoration: "line-through",
                    fontSize: "15px",
                    fontWeight: "lighter",
                    marginRight: "5px",
                  }}
                >
                  Rp 14.000.000
                </span>
              </h2>
            </div>
            <div class="overlay">
              <div class="text">
                <a href="/Productchart"
                  className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                >
                  {" "}
                  Add to Cart
                </a>
                <div className="d-lg-flex py-3 text-[20px]">
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <FaRegShareFromSquare className="mr-2 " /> Share
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    {" "}
                    <GoGitCompare className="mr-2" /> Compare
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <CiHeart className="mr-2" /> Like
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4  col-6 py-2">
          <div className="hoverimage bg-slate-300">
            <Badge className="Badge py-3 rounded-[50%]" bg-primary>
              New
            </Badge>
            <img
              src="https://ph-live-01.slatic.net/p/d2b6f09d2a0f2235df2f3c6968a9e484.jpg"
              alt="Avatar"
              className="image"
            />
            <div className="py-2 px-3">
              <h2 className="text-[20px] text-white font-semibold">Potty</h2>
              <p className="text-[15px] text-white font-light">
                Minimalist flower pot
              </p>
              <h2 className="text-[20px] text-white font-semibold">
                Rp 500.000{" "}
              </h2>
            </div>
            <div class="overlay">
              <div class="text">
                <a href="/Productchart"
                  className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                >
                  {" "}
                  Add to Cart
                </a>
                <div className="d-lg-flex py-3 text-[20px]">
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <FaRegShareFromSquare className="mr-2 " /> Share
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    {" "}
                    <GoGitCompare className="mr-2" /> Compare
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <CiHeart className="mr-2" /> Like
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4  col-6 py-2">
          <div className="hoverimage bg-slate-300">
            <img
              src="https://casagold.in/cdn/shop/products/SEAHORSE1.jpg?crop=center&height=1200&v=1676890561&width=1200"
              alt="Avatar"
              className="image"
            />
            <div className="py-2 px-3">
              <h2 className="text-[20px] text-white font-semibold">Grifo</h2>
              <p className="text-[15px] text-white font-light">Night Lamp</p>
              <h2 className="text-[20px] text-white font-semibold">
                Rp 1.500.000{" "}
              </h2>
            </div>
            <div class="overlay">
              <div class="text">
                <a href="/Productchart"
                  className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                >
                  {" "}
                  Add to Cart
                </a>
                <div className="d-lg-flex py-3 text-[20px]">
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <FaRegShareFromSquare className="mr-2 " /> Share
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    {" "}
                    <GoGitCompare className="mr-2" /> Compare
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <CiHeart className="mr-2" /> Like
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4  col-6 py-2">
          <div className="hoverimage bg-slate-300">
            <Badge className="Badge py-3 rounded-[50%]" bg-primary>
              New
            </Badge>
            <img
              src="https://beltafrajumar.com/wp-content/uploads/2021/01/Klas-sofa-relax-gris3.jpg"
              alt="Avatar"
              className="image"
            />
            <div className="py-2 px-3">
              <h2 className="text-[20px] text-white font-semibold">Muggo</h2>
              <p className="text-[15px] text-white font-light">Small mug</p>
              <h2 className="text-[20px] text-white font-semibold">
                Rp 150.000{" "}
              </h2>
            </div>
            <div class="overlay">
              <div class="text">
                <a href="/Productchart"
                  className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                >
                  {" "}
                  Add to Cart
                </a>
                <div className="d-lg-flex py-3 text-[20px]">
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <FaRegShareFromSquare className="mr-2 " /> Share
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    {" "}
                    <GoGitCompare className="mr-2" /> Compare
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <CiHeart className="mr-2" /> Like
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4  col-6 py-2">
          <div className="hoverimage bg-slate-300">
            <Badge className="Badge py-3 rounded-[50%]" bg="danger">
              -50%
            </Badge>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntu-jA6jrMjsm16m9YF5pykR_mo_tiQ6Ung&usqp=CAU"
              alt="Avatar"
              className="image"
            />
            <div className="py-2 px-3">
              <h2 className="text-[20px] text-white font-semibold">Pingky</h2>
              <p className="text-[15px] text-white font-light">Cafe bed set</p>
              <h2 className="text-[20px] text-white font-semibold">
                Rp 7.000.000{" "}
                <span
                  style={{
                    textDecoration: "line-through",
                    fontSize: "15px",
                    fontWeight: "lighter",
                    marginRight: "5px",
                  }}
                >
                  Rp 14.000.000
                </span>
              </h2>
            </div>
            <div class="overlay">
              <div class="text">
                <a href="/Productchart"
                  className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                >
                  {" "}
                  Add to Cart
                </a>
                <div className="d-lg-flex py-3 text-[20px]">
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <FaRegShareFromSquare className="mr-2 " /> Share
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    {" "}
                    <GoGitCompare className="mr-2" /> Compare
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <CiHeart className="mr-2" /> Like
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4  col-6 py-2">
          <div className="hoverimage bg-slate-300">
            <Badge className="Badge py-3 rounded-[50%]" bg-primary>
              New
            </Badge>
            <img
              src="https://ph-live-01.slatic.net/p/d2b6f09d2a0f2235df2f3c6968a9e484.jpg"
              alt="Avatar"
              className="image"
            />
            <div className="py-2 px-3">
              <h2 className="text-[20px] text-white font-semibold">Potty</h2>
              <p className="text-[15px] text-white font-light">
                Minimalist flower pot
              </p>
              <h2 className="text-[20px] text-white font-semibold">
                Rp 500.000{" "}
              </h2>
            </div>
            <div class="overlay">
              <div class="text">
                <a href="/Productchart"
                  className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                >
                  {" "}
                  Add to Cart
                </a>
                <div className="d-lg-flex py-3 text-[20px]">
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <FaRegShareFromSquare className="mr-2 " /> Share
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    {" "}
                    <GoGitCompare className="mr-2" /> Compare
                  </h2>
                  <h2 className="d-flex py-2 px-2 cursor-pointer">
                    <CiHeart className="mr-2" /> Like
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 w-100 d-flex justify-center items-center ">
          <h2 className="px-3">
            <span className="py-2 px-3 cursor-pointer bg-[#F5DEB3] rounded-[5px]">
              1
            </span>
          </h2>
          <h2 className="px-3">
            <span className="py-2 px-3 cursor-pointer bg-[#f4eee4] rounded-[5px]">
              2
            </span>
          </h2>
          <h2 className="px-3">
            <span className="py-2 px-3 cursor-pointer bg-[#f4eee4] rounded-[5px]">
              3
            </span>
          </h2>
          <h2 className="px-3">
            <span className="py-2 px-3 cursor-pointer bg-[#f4eee4] rounded-[5px]">
              Next
            </span>
          </h2>
        </div>

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
