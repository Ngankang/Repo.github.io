import React from "react";
import Image from "next/image";
import dinani from "../public/Dinina.webp";
import diningromm from "../public/0577182f-tornando-gif.gif";
import dining from "../public/diningroom.gif";
const Homeshop = () => {
  return (
    <div className="w-[98%] m-auto">
      <div className="mt-5 justify-center items-center  d-flex">
        <div className="w-[90%]">
          <h1 className="col-12 text-center text-black text-[30px] font-semibold">
            Browser The Ranger
          </h1>
          <p className="font-[khmer] font-[15px] mb-5  text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {/* show srean lg  */}

          <div className=" row w-100 justify-between  text-center">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12  px-2">
              <Image
                src={diningromm}
                className="card-img-top"
                style={{ width: "30rem", height: "35rem" }}
                alt="logo"
              />
              <div className="card-body">
                <p className="card-text">DINING</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12  mb-4 px-2">
              <Image
                src={dinani}
                className="card-img-top"
                style={{ width: "30rem", height: "35rem" }}
                alt="logo"
              />
              <div className="card-body">
                <p className="card-text">LIVING</p>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-6 col-12  mb-4 px-2">
              <Image
                src={dining}
                className="card-img-top"
                style={{ width: "30rem", height: "35rem" }}
                alt="logo"
              />
              <div className="card-body">
                <p className="card-text">BEDROOM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeshop;