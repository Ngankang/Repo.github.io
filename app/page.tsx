import React from "react";
import Homeshop from "../Components/Homeshop";
import Ourproduct from "../Components/Ourproduct";
import Button from "react-bootstrap/Button";
import Furnitor from "../Components/Furnitor";
import Funiro from "../Components/Funiro";
import Footer from "../Components/Footer";
export default function Home() {
  return (
    <div className="w-100 h-screen">
      <div
        className=" relative flex items-center w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://www.kingliving.com.au/pub/media/blog/sofa-explainer/02-1977.gif)",
        }}
      >
        <div className="md:flex hidden Blurver absolute right-0 z-[10]  w-[450px] h-[350px]  mr-20  px-4 py-4 rounded-[10px]">
          <div>
            <p className="font-[khmer] font-[15px] ">New Arrival</p>
            <h1 className="text-[35px] mb-3  font-semibold text-[#FFA500]">
              Discover Our <br /> New Collection
            </h1>
            <p className="font-[khmer] font-[15px] mb-3">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              dolore est saepe molestiae ea esse expedita soluta maxime placeat?
              Dignissimos veniam illum vitae, sunt maxime expedita. Aliquid
              consectetur fuga id!
            </p>
            <Button href="#">BY NOW</Button>
          </div>
        </div>
        <div className="flex-col md:hidden Blurver absolute right-0 z-[10]  w-[300px] h-[370px] mr-7 px-4 py-4 rounded-[10px]">
          <div>
            <p className="font-[khmer] font-[15px] ">New Arrival</p>
            <h1 className="text-[30px] mb-3  font-semibold text-[#FFA500]">
              Discover Our <br /> New Collection
            </h1>
            <p className="font-[khmer] font-[10px] mb-3">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              dolore est saepe molestiae ea esse expedita soluta maxime placeat?
              Dignissimos veniam illum vitae, sunt maxime expedita. Aliquid
              consectetur fuga id!
            </p>
            <Button href="#">BY NOW</Button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Homeshop />
          <Ourproduct />
          <Funiro />
          <Furnitor />
        </div>
      </div>
      <Footer />
    </div>
  );
}
