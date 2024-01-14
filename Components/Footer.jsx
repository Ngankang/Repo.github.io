"use client";
import React from "react";
const Footer = () => {
  return (
    <div>
      <div className="container mt-4">
        <hr />
        <footer className="py-5">
          <div className="row px-10">
            <div className="col-6 col-md-2 mb-3">
              <h5 className="text-[25px] font-semibold text-black mb-3">
                Funiro.
              </h5>
              <p>400 Univesity Drive Seilter 200 Coral Gable, FL 33134 USA</p>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5 className="text-[20px]  mb-3">Like</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Shop
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5 className="text-[20px]  mb-3">Help</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Peyment Options
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Returns
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Privacy & Publicies
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5 className="text-[20px]  mb-3">NewSletter</h5>

                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Email address"
                  />
                  <button className="bg-primary py-1 px-3 rounded-[5px] text-white" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row  py-4  border-top">
            <p>&copy; 2023 Funiro. All rights reserved.</p>
            
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
