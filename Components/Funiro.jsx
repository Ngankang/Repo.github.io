"use client";
import Button from "react-bootstrap/Button";
import { FaArrowAltCircleRight } from "react-icons/fa";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Funiro = () => {
  const [swiperRef, setSwiperRef] = useState(null);


  return (
    <div className="w-[98%] m-auto mt-4">
      <div className="row  items-center m-auto   bg-[#e4e2e2]">
        <div className="col-lg-8 ">
          <div className="row  px-3">
            <div className="col-lg-7 col-md-6">
              <div className="w-100 h-100 justify-center items-center flex">
                <div className="">
                  <h1 className="text-[30px] font-semibold ">
                    50+ Beautiful rooms <br /> inspiration
                  </h1>
                  <p className="text-[15px]">
                    Our design already made a lot beautiful <br /> prototip of
                    rooms that inspire you{" "}
                  </p>
                  <Button className="mt-3" variant="warning">
                    Explor More
                  </Button>{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 py-3">
              <div style={{ width: "100%", position: "relative" }}>
                <img
                  src="https://www.bhg.com/thmb/hG7_GX5I0I-8i-ZgvCOCosObvE8=/1244x0/filters:no_upscale():strip_icc()/bedroom-wooden-accent-wall-9KdgK5zqKcz9ukcu6xy1Hx-c1217ee14b1b43e0ae82ec2046743af5.jpg"
                  alt="bedroom"
                />
                <div className="positions flex ">
                  <div
                    style={{
                      background: "transparent",
                      backdropFilter: "blur(2px)",
                      padding: "10px",
                    }}
                  >
                    <p className="text-[15px]">01___Bed room</p>
                    <h2 className="text-[20px]">Inner Peace</h2>
                  </div>
                  <a
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      fontSize: "20px",
                      padding: "10px",
                      background: "#DAA520",
                      cursor: "pointer",
                    }}
                  >
                    <FaArrowAltCircleRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 ">
          <div className="d-lg-flex d-md-none d-none">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={1.3}
              centeredSlides={true}
              spaceBetween={20}
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img style={{width:"350px" , height:"400px"}} src="https://www.oakfurnitureland.co.uk/blog/wp-content/uploads/2021/11/Oak_furnitureland_highgate_chest_credit_rachelslovelyhome-1920x2560.jpeg" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img style={{width:"350px" , height:"400px"}} src="https://cdn.webshopapp.com/shops/192182/files/433693133/1500x1500x2/industrial-table-lamp-fungi.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img style={{width:"350px" , height:"400px"}} src="https://i.pinimg.com/736x/35/b9/d8/35b9d86bf3de25822b311858e3f801a9.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img style={{width:"350px" , height:"400px"}} src="https://www.bhg.com/thmb/O308V5FawLSwluNQ8K1RHHtIW1I=/1244x0/filters:no_upscale():strip_icc()/modern-bedroom-neutrals-gold-sconces-7bLa8Fz-4H883NnY4KOJvi-261ce61898a340ff9cf6352ba1744ab7.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="d-lg-none d-md-flex d-flex py-3">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={1.3}
              centeredSlides={true}
              spaceBetween={20}
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img style={{width:"100%" , height:"400px"}} src="https://www.oakfurnitureland.co.uk/blog/wp-content/uploads/2021/11/Oak_furnitureland_highgate_chest_credit_rachelslovelyhome-1920x2560.jpeg" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img style={{width:"100%" , height:"400px"}} src="https://cdn.webshopapp.com/shops/192182/files/433693133/1500x1500x2/industrial-table-lamp-fungi.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img style={{width:"100%" , height:"400px"}} src="https://i.pinimg.com/736x/35/b9/d8/35b9d86bf3de25822b311858e3f801a9.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img style={{width:"100%" , height:"400px"}} src="https://www.bhg.com/thmb/O308V5FawLSwluNQ8K1RHHtIW1I=/1244x0/filters:no_upscale():strip_icc()/modern-bedroom-neutrals-gold-sconces-7bLa8Fz-4H883NnY4KOJvi-261ce61898a340ff9cf6352ba1744ab7.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Funiro;
