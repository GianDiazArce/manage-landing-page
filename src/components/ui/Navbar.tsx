import { useState } from "react";
import { CustomButton, CustomLogo, CustomMenuHamburguer } from "../custom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-row justify-between py-8 items-center min-h-[104px] ">
      <CustomLogo />
      <ul className="hidden md:flex flex-row gap-7 text-sm items-center text-blue-dark">
        <li className="hover:opacity-50">
          <a href="#">Pricing</a>
        </li>
        <li className="hover:opacity-50">
          <a href="#">Product</a>
        </li>
        <li className="hover:opacity-50">
          <a href="#">About Us</a>
        </li>
        <li className="hover:opacity-50">
          <a href="#">Careers</a>
        </li>
        <li className="hover:opacity-50">
          <a href="#">Community</a>
        </li>
      </ul>
      <div className="hidden md:flex">
        <CustomButton text="Get started" />
      </div>

      <div
        className={`flex md:hidden ${
          isMenuOpen
            ? "fixed top-1 left-0 h-[100vh] w-[100vw] bg-gradient-to-b from-gray-light/[.3] via-black/[.2] to-black/[.8] z-50"
            : "relative"
        }`}
      >
        <div>
          <div
            className={`z-20 ${
              isMenuOpen ? "fixed top-8 right-5" : "relative"
            }`}
          >
            <CustomMenuHamburguer
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen((oldState) => !oldState)}
            />
          </div>
        </div>
        {isMenuOpen && (
          <ul className="absolute top-28 left-0 right-0 mx-auto w-10/12 bg-gray-light text-blue-dark flex flex-col items-center gap-5 py-5 font-bold">
            <li className="hover:opacity-50">
              <a href="#">Pricing</a>
            </li>
            <li className="hover:opacity-50">
              <a href="#">Product</a>
            </li>
            <li className="hover:opacity-50">
              <a href="#">About Us</a>
            </li>
            <li className="hover:opacity-50">
              <a href="#">Careers</a>
            </li>
            <li className="hover:opacity-50">
              <a href="#">Community</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
