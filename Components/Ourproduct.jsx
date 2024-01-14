import React from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { GoGitCompare } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
const Ourproduct = () => {
  return (
    <div className="w-[98%] m-auto">
      <div className="mt-5 justify-center items-center  ">
        <h2 className="py-3 col-12 text-center text-black text-[30px] font-semibold">
          Our Product
        </h2>

        <div className="row  m-auto items-center">
          <div className="col-lg-3  col-md-4 col-6 py-2">
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
          <div className="col-lg-3 col-md-4 col-6 py-2">
            <div className="hoverimage bg-slate-300">
              <img
                src="https://nikitoskokos.github.io/Funiro/Funiro/img/products/02.jpg"
                alt="Avatar"
                className="image"
              />
              <div className="py-2 px-3">
                <h2 className="text-[20px] text-white font-semibold">
                  Leviosa
                </h2>
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
          <div className="col-lg-3 col-md-4 col-6 py-2">
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
                <h2 className="text-[20px] text-white font-semibold">
                  Lolitos
                </h2>
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
          <div className="col-lg-3 col-md-4 col-6 py-2">
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
                <h2 className="text-[20px] text-white font-semibold">
                  Respira
                </h2>
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

          <div className="col-lg-3 col-md-4 col-6 py-2">
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

          <div className="col-lg-3 col-md-4 col-6 py-2">
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

          <div className="col-lg-3 col-md-4 col-6 py-2">
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
                <p className="text-[15px] text-white font-light">
                  Cafe bed set
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

          <div className="col-lg-3 col-md-4 col-6 py-2">
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
        </div>

        <div className="  items-center justify-center flex">
          <Button variant="outline-warning">Show More</Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Ourproduct;
