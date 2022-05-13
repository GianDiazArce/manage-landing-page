import { useState } from "react";
import { CustomButton, CustomLogo } from "../custom";

export const Footer = () => {
  const [showError, setShowError] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
    if (e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <footer className="w-full bg-blue-very-dark text-gray-light">
      <div className="container flex flex-col-reverse md:flex-row items-center justify-between py-16">
        <div className="flex w-full flex-col-reverse gap-8 md:gap-8 md:flex-col justify-between items-center">
          <CustomLogo inverted />
          <div className="flex w-full justify-between md:justify-center md:gap-10">
            <a href="#">
              <i className="fa-brands fa-facebook-square text-4xl md:text-xl hover:text-red-bright transition-colors"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube text-4xl md:text-xl hover:text-red-bright transition-colors"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter text-4xl md:text-xl hover:text-red-bright transition-colors"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-pinterest text-4xl md:text-xl hover:text-red-bright transition-colors"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram text-4xl md:text-xl hover:text-red-bright transition-colors"></i>
            </a>
          </div>
        </div>
        <div className="w-full flex justify-evenly md:gap-0 my-8 md:my-0 ">
          <ul className="flex flex-col gap-3 justify-between  ">
            <li>
              <a className="hover:text-red-bright" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-red-bright" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:text-red-bright" href="#">
                Products
              </a>
            </li>
            <li>
              <a className="hover:text-red-bright" href="#">
                About Us
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-3 ">
            <li>
              <a href="#" className="hover:text-red-bright">
                Carrers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-bright">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-bright">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between w-full md:gap-8">
          <div className="flex gap-2">
            <div className="flex flex-col relative w-full">
              <input
                className={`rounded-full px-7 py-3 text-blue-dark-grayish text-xs border-2 outline-none min-w-full ${
                  showError ? "border-red-bright " : ""
                }`}
                placeholder="Updates in your inbox..."
                type="email"
                autoComplete="off"
                onChange={handleInputChange}
                value={emailValue}
              />
              {showError && (
                <span className="absolute -bottom-6 left-6 italic text-red-bright/70 font-light text-xs">
                  Please insert a valid email
                </span>
              )}
            </div>
            <CustomButton text="Go" />
          </div>
          <div className="ml-auto hidden md:flex">
            <p className="paragraph text-xs">
              Copyright 2020. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
