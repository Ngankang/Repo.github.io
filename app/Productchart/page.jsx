"use client";
import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import Badge from "react-bootstrap/Badge";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { GoGitCompare } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import Button from "react-bootstrap/Button";
import Footer from "@/Components/Footer";
import { TbShoppingBagX } from "react-icons/tb";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Collapse from "react-bootstrap/Collapse";
import "bootstrap/dist/js/bootstrap.min.js";

const size = [
  {
    name: "L",
  },
  {
    name: "Xl",
  },
  {
    name: "XS",
  },
];
const page = () => {
  const [open, setOpen] = useState(false);
  const [ativesize, setActivesize] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const untoggleMenu = () => {
    setMenuOpen(false);
  };

  const [valuesum, setsum] = useState(1);
  const [indeximg, setIndeximg] = useState(
    "https://m.media-amazon.com/images/I/51asAADpLRL.jpg"
  );
  function image1() {
    setIndeximg("https://m.media-amazon.com/images/I/51asAADpLRL.jpg");
  }
  function image2() {
    setIndeximg(
      "https://i5.walmartimages.com/asr/a953f13a-b91c-4f31-8a07-1a950c84cfd9.da4fbe29fefcaf566247968dc385f9b5.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
    );
  }
  function image3() {
    setIndeximg(
      "https://images.thdstatic.com/productImages/88b67d59-116e-4031-837a-e0ed4bbe13da/svn/dark-gray-harper-bright-designs-sectional-sofas-gtt009aar-e1_600.jpg"
    );
  }
  function image4() {
    setIndeximg("https://i.ebayimg.com/images/g/H88AAOSwFsZjoXu5/s-l400.jpg");
  }
  function subtract() {
    setsum(valuesum - 1);
  }
  function sum() {
    setsum(valuesum + 1);
  }
  return (
    <div className="w-[98%] m-auto py-5  h-screen">
      <div className="row  py-5">
        <div className="py-4 px-5 w-100 items-center bg-[#F5DEB3] ">
          <a href="/" className="text-[15px] font-light">
            Home
          </a>
          <a href="/Shop" className="text-[15px] font-light">
            {" "}
            / Shop
          </a>
          <span className="font-semibold"> | Asgaard Sofa</span>
        </div>
        <div className="col-lg-6 py-2 bg-[#F5F5F5]">
          <div className="row w-100 justify-center  ">
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <div className="w-100 ">
                <div
                  onClick={image1}
                  style={{
                    right: "0",
                    display: "flex",
                    justifyContent: "right",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "5px",
                      margin: "10px 5px",
                      right: "0",
                    }}
                    src="https://m.media-amazon.com/images/I/51asAADpLRL.jpg"
                  />
                </div>
                <div
                  onClick={image2}
                  style={{
                    right: "0",
                    display: "flex",
                    justifyContent: "right",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "5px",
                      margin: "10px 5px",
                      right: "0",
                    }}
                    src="https://i5.walmartimages.com/asr/a953f13a-b91c-4f31-8a07-1a950c84cfd9.da4fbe29fefcaf566247968dc385f9b5.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
                  />
                </div>
                <div
                  onClick={image3}
                  style={{
                    right: "0",
                    display: "flex",
                    justifyContent: "right",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "5px",
                      margin: "10px 5px",
                      right: "0",
                    }}
                    src="https://images.thdstatic.com/productImages/88b67d59-116e-4031-837a-e0ed4bbe13da/svn/dark-gray-harper-bright-designs-sectional-sofas-gtt009aar-e1_600.jpg"
                  />
                </div>
                <div
                  onClick={image4}
                  style={{
                    right: "0",
                    display: "flex",
                    justifyContent: "right",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "5px",
                      margin: "10px 5px",
                      right: "0",
                    }}
                    src="https://i.ebayimg.com/images/g/H88AAOSwFsZjoXu5/s-l400.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-8">
              <img
                style={{
                  width: "500px",
                  height: "500px",
                  borderRadius: "10px",
                }}
                src={indeximg}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 py-2 bg-[#F5F5F5]">
          <div className="py-2 px-2">
            <h1 className="text-[30px] font-semibold text-black py-2">
              Argaard Sofa
            </h1>
            <p className="text-[15px] font-light">Rs 2.000.000</p>
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
            <p className="text-[15px] font-semibold py-2 ">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <div>
              <p className="text-[13px] font-light py-2">Size</p>
              <div className="flex py-2">
                {size.map((nav, index) => (
                  <div
                    key={index}
                    className={
                      "flex mr-3 rounded cursor-pointer" +
                      (ativesize === index
                        ? " text-black font-semibold  bg-[#DAA520]"
                        : " ")
                    }
                    onClick={() => setActivesize(index)}
                  >
                    <span
                      className=" p-2 rounded text-black font-semibold"
                      style={{ border: "1px solid black" }}
                    >
                      {nav?.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[13px] font-light py-2">Color</p>
            <div className="flex cursor-pointer">
              <p className="p-3 bg-[#8B4513] mr-2 rounded-[50%]"></p>
              <p className="p-3 bg-[#000000] mr-2 rounded-[50%]"></p>
              <p className="p-3 bg-[#4B0082] mr-2 rounded-[50%]"></p>
            </div>
            <div className="flex py-4">
              <div
                style={{
                  display: "flex",
                  border: "1px solid black",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  marginRight: "10px",
                }}
              >
                <p onClick={subtract} className="cursor-pointer ">
                  {" "}
                  -{" "}
                </p>
                <p className="px-3">{valuesum} </p>
                <p onClick={sum} className="cursor-pointer">
                  {" "}
                  +{" "}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  border: "1px solid black",
                  padding: "5px 20px",
                  borderRadius: "5px",
                  marginRight: "10px",
                }}
              >
                <div className=" cursor-pointer" onClick={toggleMenu}>
                  Add To chart
                </div>
              </div>
              <div className={` menu ${isMenuOpen ? "visible" : " "} `}>
                <div className="py-2 px-2">
                  <div className="flex justify-between items-center">
                    <h2 className="text-[20px] py-3 px-2 font-semibold">
                      Shopping Cart
                    </h2>
                    <span
                      className=" cursor-pointer"
                      type="buttom "
                      onClick={untoggleMenu}
                    >
                      <TbShoppingBagX />
                    </span>
                  </div>
                  <hr />
                  <div>
                    <div className="flex justify-between py-2 items-center">
                      <div className="flex items-center justify-center">
                        <img
                          style={{
                            width: "70px",
                            height: "70px",
                            border: "1px solid black",
                            borderRadius: "5px",
                          }}
                          src="https://www.at-home.co.in/cdn/shop/products/159LYf_1.jpg?v=1652776402"
                        />
                        <div className="px-2">
                          <h2 className=" text-[15px] font-semibold">
                            Asgaard Sofa
                          </h2>
                          <p className=" text-[13px] font-light">
                            1 x{" "}
                            <span className="text-[#F4A460]">
                              Rs 250.000.000
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className=" cursor-pointer text-[20px]">
                        <IoMdCloseCircleOutline />
                      </div>
                    </div>
                    <div className="flex justify-between py-2 items-center">
                      <div className="flex items-center justify-center">
                        <img
                          style={{
                            width: "70px",
                            height: "70px",
                            border: "1px solid black",
                            borderRadius: "5px",
                          }}
                          src="https://mysleepyhead.com/media/catalog/product/4/t/4thaug_2ndhalf5934_blue_1_1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=375&width=840&auto=webp&format=pjpg"
                        />
                        <div className="px-2">
                          <h2 className=" text-[15px] font-semibold">
                            Asgaard Sofa
                          </h2>
                          <p className=" text-[13px] font-light">
                            1 x{" "}
                            <span className="text-[#F4A460]">
                              Rs 250.000.000
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className=" cursor-pointer text-[20px]">
                        <IoMdCloseCircleOutline />
                      </div>
                    </div>
                    <h2 className="mt-5 py-2 text-[15px] font-semibold">
                      {" "}
                      Subtotal{" "}
                      <span className="text-[#CD853F] ml-5">Rs 520.00.000</span>
                    </h2>
                  </div>
                  <hr className="py-2" />
                  <div className="flex">
                    <a href="/Chart"
                      style={{
                        padding: "5px 10px",
                        border: "1px solid black",
                        borderRadius: "10px",
                        fontSize: "13px",
                        marginRight: "10px",
                      }}
                    >
                      Cart
                    </a>
                    <a href="/CheckOut"
                      style={{
                        padding: "5px 10px",
                        border: "1px solid black",
                        borderRadius: "10px",
                        fontSize: "13px",
                        marginRight: "10px",
                      }}
                    >
                      Checkout
                    </a>
                    <a
                      href="/Comparision"
                      style={{
                        padding: "5px 10px",
                        border: "1px solid black",
                        borderRadius: "10px",
                        fontSize: "13px",
                        marginRight: "10px",
                      }}
                    >
                      Comparison
                    </a>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  border: "1px solid black",
                  padding: "5px 20px",
                  borderRadius: "5px",
                  marginRight: "10px",
                }}
              >
                <a href="/"> + Compare</a>
              </div>
            </div>
            <hr className="py-2" />
            <div className="flex">
              <div className=" mr-4">
                <p className="py-2">SKU</p>
                <p className="py-2">Category</p>
                <p className="py-2">Tags</p>
                <p className="py-2">Share</p>
              </div>
              <div>
                <p className="py-2">: SS001</p>
                <p className="py-2">: Sofas</p>
                <p className="py-2">: Sofas , Home , Chair , Shop</p>
                <p className="py-2 flex">
                  :{" "}
                  <a href="" className="text-[20px] px-2">
                    <FaFacebook />
                  </a>
                  <a href="" className="text-[20px] px-2">
                    <RxLinkedinLogo />
                  </a>
                  <a href="" className="text-[20px] px-2">
                    <AiFillTwitterCircle />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-[95%] m-auto py-4 px-3  items-center">
        <div className=" items-center text-center">
          <h1 className="text-[25px] font-semibold px-3">
            Desciption{" "}
            <span className="font-light px-3"> Additional Information </span>
            <span className="font-light px-3">Reviews [5] </span>
          </h1>
        </div>
        <div className="py-3 px-5">
          <p className="text-[15px] font-light py-2">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-[15px] font-light py-2">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
      </div>
      <div className="row px-5 items-center justify-center">
        <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2">
          <img
            className=" rounded-[5px]"
            src="https://casavogue.ca/cdn/shop/files/lolita-casavogue-franco-ferri-1_4c3a1430-e6ee-4830-944c-8f03be84689e.jpg?v=1690209603"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2">
          <img
            className=" rounded-[5px]"
            src="https://i.pinimg.com/736x/6d/b3/7a/6db37acaa8166694295a3ad42d09e63e.jpg"
          />
        </div>
      </div>
      <hr className="py-2 mt-5" />
      <div>
        <div className=" items-center text-center py-3">
          <h1 className="text-[25px] font-semibold px-3">Related Products</h1>
        </div>
        <div className="row px-5">
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
                  <button
                    type="button"
                    className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                  >
                    {" "}
                    Add to Cart
                  </button>
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
                  <button
                    type="button"
                    className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                  >
                    {" "}
                    Add to Cart
                  </button>
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
                  <button
                    type="button"
                    className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                  >
                    {" "}
                    Add to Cart
                  </button>
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
                  <button
                    type="button"
                    className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                  >
                    {" "}
                    Add to Cart
                  </button>
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
            <Collapse in={open}>
              <div id="example-collapse-text">
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
                      <button
                        type="button"
                        className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                      >
                        {" "}
                        Add to Cart
                      </button>
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
            </Collapse>
          </div>
          <div className="col-lg-3 col-md-4 col-6 py-2">
            <Collapse in={open}>
              <div id="example-collapse-text">
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
                      <button
                        type="button"
                        className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                      >
                        {" "}
                        Add to Cart
                      </button>
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
            </Collapse>
          </div>
          <div className="col-lg-3 col-md-4 col-6 py-2">
            <Collapse in={open}>
              <div id="example-collapse-text">
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
                      <button
                        type="button"
                        className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                      >
                        {" "}
                        Add to Cart
                      </button>
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
            </Collapse>
          </div>
          <div className="col-lg-3 col-md-4 col-6 py-2">
            <Collapse in={open}>
              <div id="example-collapse-text">
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
                      <button
                        type="button"
                        className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                      >
                        {" "}
                        Add to Cart
                      </button>
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
            </Collapse>
          </div>
          <div className="col-lg-3 col-md-4 col-6 py-2">
            <Collapse in={open}>
              <div id="example-collapse-text">
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
                      <button
                        type="button"
                        className="text-[15px] bg-white text-[#EE6957] py-2 px-3 hover:bg-primary"
                      >
                        {" "}
                        Add to Cart
                      </button>
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
            </Collapse>
          </div>
        </div>

        <div className=" py-2  items-center justify-center flex">
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            variant="outline-warning"
          >
            Show More
          </Button>{" "}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
