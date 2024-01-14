"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/Constants";
import logo from "../public/my_logo.png";
import { BsPersonFillExclamation } from "react-icons/bs";
import heart from "../public/heart.svg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { MdMenuOpen } from "react-icons/md";
import Transition from "../Components/Transition";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import clos from "../public/close.png";
import Button from "../Components/Button";
export default function Home() {
  const [activeIndec, SetactiveIndec] = useState(0);
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");
  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);
  return (
    <main className="absolute z-50 w-[100%] h-[90px]  navbar-expand-lg d-flex align-items-center bg-white py-4 p-10 ">
      <div className="container flex justify-between items-center ">
        <div className="flex justify-content-left items-center ">
          <Image src={logo} alt="logo" width={70} />
          <span className="text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 hidden md:flex">
            Ngan kang
          </span>
        </div>
        <nav className="flex-col md:flex-row hidden md:flex navbar ">
          <ul className="gap-5 flex  text-white">
            {isRouting && <Transition />}
            {navigation.map((nav, index) => (
              <div
                key={index}
                className={
                  "flex space-x-3 p-2 rounded cursor-pointer" +
                  (activeIndec === index ? " text-black font-semibold  " : " ")
                }
                onClick={() => SetactiveIndec(index)}
              >
                <Link href={nav.href}>
                  <span className="text-black font-semibold">{nav?.name}</span>
                </Link>
              </div>
            ))}
          </ul>
        </nav>
        <div>
          <div className="flex gap-3">
            <a href="/Blog" className="text-black text-[20px]">
              <BsPersonFillExclamation />
            </a>
            <a href="/" className="text-white" width={20}></a>
            <Button />
            <a href="/" className="text-white">
              <Image src={heart} alt="personal" width={20} />
            </a>
            <a href="/" className="text-black text-[20px]">
              <HiOutlineShoppingCart />
            </a>
          </div>
        </div>
        <button
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          className="navbar-toggler flex-col md:hidden "
        >
          {" "}
          <MdMenuOpen className="size-8" />
        </button>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">
            <div className="flex justify-content-left items-center ">
              <Image src={logo} alt="logo" width={70} />
              <span className="text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 ">
                Ngan kang
              </span>
            </div>
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <Image src={clos} alt="close" sizes="30" />{" "}
          </button>
        </div>
        <div className="offcanvas-body justify-start z-50">
          <ul className="flex-col md:hidden navbar ">
            {isRouting && <Transition />}
            {navigation.map((nav, index) => (
              <div
                key={index}
                className={
                  "flex space-x-3 p-2 rounded cursor-pointer" +
                  (activeIndec === index ? "  text-black font-semibold  " : " ")
                }
                onClick={() => SetactiveIndec(index)}
              >
                <Link href={nav.href}>
                  <span className="text-black font-semibold">{nav?.name}</span>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
