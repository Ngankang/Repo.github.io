"use client";
import React from "react";
import { MdOutlinePerson } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { TbMessageChatbot } from "react-icons/tb";
import { GiChampions } from "react-icons/gi";
import { BiSolidCheckShield } from "react-icons/bi";
import { FaBoxesPacking } from "react-icons/fa6";
import { FcOnlineSupport } from "react-icons/fc";
import { CiSearch } from "react-icons/ci";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
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
          <h1 className="text-[35px] py-3 font-semibold text-black">Blog</h1>
          <div>
            <a href="/" className="font-semibold">
              Home
            </a>
            <span> / Blog</span>
          </div>
        </div>
      </div>
      <div className="w-[95%] m-auto lg:p-8 ">
        <div className="row py-4">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12  ">
            <div>
              <div className="w-100">
                <img
                  style={{
                    width: "100%",
                    height: "400px",
                    borderRadius: "10px",
                  }}
                  src="https://st4.depositphotos.com/12985848/19675/i/450/depositphotos_196756876-stock-photo-closeup-view-potted-plant-laptop.jpg"
                />
              </div>
              <div className="d-flex py-3 ">
                <p className="flex text-[15px] px-3 ">
                  <MdOutlinePerson /> <span className="px-2">Admin</span>
                </p>
                <p className="flex text-[15px] px-3">
                  <MdBusinessCenter /> <span className="px-2">14 Oct 2022</span>
                </p>
                <p className="flex text-[15px] px-3">
                  <TbMessageChatbot /> <span className="px-2">Wood</span>
                </p>
              </div>
              <div>
                <h1 className=" text-[25px] font-semibold text-black py-3">
                  Going all-in with millennial design
                </h1>
                <p className="text-[15px] font-light py-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum
                </p>
                <button style={{ padding: "5px", textDecoration: "underline" }}>
                  Read more
                </button>
              </div>
            </div>
            <div>
              <div className="w-100">
                <img
                  style={{
                    width: "100%",
                    height: "400px",
                    borderRadius: "10px",
                  }}
                  src="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_640.jpg"
                />
              </div>
              <div className="d-flex py-3 ">
                <p className="flex text-[15px] px-3 ">
                  <MdOutlinePerson /> <span className="px-2">Admin</span>
                </p>
                <p className="flex text-[15px] px-3">
                  <MdBusinessCenter /> <span className="px-2">14 Oct 2022</span>
                </p>
                <p className="flex text-[15px] px-3">
                  <TbMessageChatbot /> <span className="px-2">Handmade</span>
                </p>
              </div>
              <div>
                <h1 className=" text-[25px] font-semibold text-black py-3">
                  Exploring new ways of decorating
                </h1>
                <p className="text-[15px] font-light py-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum
                </p>
                <button style={{ padding: "5px", textDecoration: "underline" }}>
                  Read more
                </button>
              </div>
            </div>
            <div>
              <div className="w-100">
                <img
                  style={{
                    width: "100%",
                    height: "400px",
                    borderRadius: "10px",
                  }}
                  src="https://burst.shopifycdn.com/photos/laptop-from-above.jpg?width=1000&format=pjpg&exif=0&iptc=0"
                />
              </div>
              <div className="d-flex py-3 ">
                <p className="flex text-[15px] px-3 ">
                  <MdOutlinePerson /> <span className="px-2">Admin</span>
                </p>
                <p className="flex text-[15px] px-3">
                  <MdBusinessCenter /> <span className="px-2">14 Oct 2022</span>
                </p>
                <p className="flex text-[15px] px-3">
                  <TbMessageChatbot /> <span className="px-2">Wood</span>
                </p>
              </div>
              <div>
                <h1 className=" text-[25px] font-semibold text-black py-3">
                  Handmade pieces that took time to make
                </h1>
                <p className="text-[15px] font-light py-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum
                </p>
                <button style={{ padding: "5px", textDecoration: "underline" }}>
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 ">
            <div>
              <div>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    name="username"
                  />
                  <InputGroup.Text id="inputGroupPrepend">
                    <CiSearch />
                  </InputGroup.Text>
                </InputGroup>
              </div>
              <h1 className="text-[25px] font-semibold py-4">Categories</h1>
              <table className="w-100 h-[280px] ">
                <tr className="text-[15px] font-light ">
                  <td>Crafts</td>
                  <td>2</td>
                </tr>
                <tr className="text-[15px] font-light ">
                  <td>Design</td>
                  <td>8</td>
                </tr>
                <tr className="text-[15px] font-light ">
                  <td>Handmade</td>
                  <td>7</td>
                </tr>
                <tr className="text-[15px] font-light ">
                  <td>Interior</td>
                  <td>1</td>
                </tr>
                <tr className="text-[15px] font-light ">
                  <td>Wood</td>
                  <td>6</td>
                </tr>
              </table>
            </div>
            <div className="py-5">
              <h1 className="text-[25px] font-semibold py-4">Recent Posts</h1>
              <div className="d-flex items-center py-3">
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "10px",
                  }}
                  src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZpcnN0JTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
                />
                <p className="text-[15px] font-semibold text-black p-2">
                  Going all-in with millennial design <br />
                  <span className="text-[10px] font-light">03 Aug 2022</span>
                </p>
              </div>
              <div className="d-flex items-center  py-3">
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "10px",
                  }}
                  src="https://c0.wallpaperflare.com/preview/847/634/542/black-business-camera-designer.jpg"
                />
                <p className="text-[15px] font-semibold text-black p-2">
                  Exploring new ways of decorating <br />
                  <span className="text-[10px] font-light">03 Aug 2022</span>
                </p>
              </div>
              <div className="d-flex items-center  py-3">
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "10px",
                  }}
                  src="https://www.shutterstock.com/image-photo/laptop-notepad-work-home-600nw-1708430374.jpg"
                />
                <p className="text-[15px] font-semibold text-black p-2">
                  Handmade pieces that took time to make
                  <br />
                  <span className="text-[10px] font-light">03 Aug 2022</span>
                </p>
              </div>
              <div className="d-flex items-center  py-3">
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "10px",
                  }}
                  src="https://www.shutterstock.com/image-photo/laptop-notepad-work-home-600nw-1708430374.jpg"
                />
                <p className="text-[15px] font-semibold text-black p-2">
                  Handmade pieces that took time to make
                  <br />
                  <span className="text-[10px] font-light">03 Aug 2022</span>
                </p>
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
      <Footer/>
    </div>
  );
};

export default page;
