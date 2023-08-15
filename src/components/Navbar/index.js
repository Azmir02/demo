import React, { useEffect, useState } from "react";
import { HiBars3CenterLeft, HiOutlineShoppingBag } from "react-icons/hi2";
import { Menudata } from "./Menudata";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { HiBars3 } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import Logo from "../../svg/Logo";
import Love from "../../svg/Love";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import MobileLogo from "../../svg/LogoMobile";
import MobileLogo2 from "../../svg/MobileLogo2";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  // const device = useMediaQuery("(max-width:992px)");

  useEffect(() => {
    setShow(true);
  }, [window.location.reload]);

  useEffect(() => {
    const stickyNavbar = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", stickyNavbar);
  }, []);
  return (
    <>
      {show ? (
        <div className="bg-primaryColor py-2 hidden lg:block">
          <div className="w-[90%] mx-auto">
            <div className="relative">
              <div className="w-[100%] text-center">
                <p className="font-JustSans text-white text-center text-[14px]">
                  Ramadhan day get discount 50%.{" "}
                  <a className="hover:underline" href="#">
                    Shop Now!
                  </a>
                </p>
              </div>
              <div className="absolute top-[50%] translate-y-[-50%] right-0">
                <div
                  className="w-[25px] h-[25px] flex items-center justify-center bg-[rgba(255,255,255,0.2)] rounded-full cursor-pointer ml-auto"
                  onClick={() => setShow(false)}
                >
                  <AiOutlineClose fill="#fff" size={15} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div>
        <div
          className={
            show
              ? "mt-0 hidden xl:block"
              : "absolute top-0 left-0 w-full z-50 hidden xl:block"
          }
        >
          <div className="nav">
            <div className="w-[90%] mx-auto">
              <div
                className={
                  showNavbar
                    ? "w-full flex justify-between items-center py-[10px]"
                    : "w-full flex justify-between items-center py-[21px] border-b border-solid border-[#DDDDDD]"
                }
              >
                <div className="w-[35%] flex justify-between items-center">
                  <a href="#">
                    <Logo />
                  </a>
                </div>
                <div className="w-[30%] flex justify-center">
                  <div className="flex items-center w-full border border-solid border-[#939393] py-[19px] px-[15px] rounded-[10px]">
                    <div>
                      <BsSearch fill="#939393" size={18} />
                    </div>
                    <input
                      style={{
                        background: "transparent",
                        fontSize: "14px",
                      }}
                      type="text"
                      placeholder="Search Cases..."
                      className="border-none w-full outline-none ml-3 font-JustSans text-xs text-[#626262] placeholder:text-[#CCCCCC]"
                    ></input>
                  </div>
                </div>
                <div className="w-[30%] flex items-center justify-between">

                  <div className="flex items-center justify-between ml-auto">
                    <div className="relative cursor-pointer">
                      <div className="absolute top-0 right-[-1px]">
                        <Love />
                      </div>
                      <HiOutlineShoppingBag size={25} stroke="#626262" />
                    </div>
                    <div className="ml-8 cursor-pointer flex items-center">
                      <CiUser size={25} fill="#626262" />
                      <span className="font-JustSans text-sm text-[#626262] ml-[8px]">Log In</span>
                    </div>
                    <div className="flex items-center ml-8">
                      <img
                        src="../../../usa.png"
                        alt="flag"
                        className="w-[30px] h-[30px] object-cover"
                      />
                      <span className="font-JustSans text-[#000] text-[14px] ml-2">
                        $USD
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-[12px] w-full static">
            <ul className="flex gap-20 justify-center text-[#626262]">
              {Menudata.map((item, i) => (
                <li
                  key={i}
                  className="font-JustSans text-[16px] font-normal transition duration-150 ease-out hover:text-primaryColor"
                >
                  {" "}
                  <a href={item.link}>{item.title}</a>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={
          show
            ? "absolute top-0 left-0 w-full z-50 mt-0 block xl:hidden"
            : "absolute top-0 left-0 w-full z-50 block xl:hidden"
        }
      >
        <div className={showNavbar ? "nav stickynav" : "nav "}>
          <div className="w-[98%] 2xl:w-[90%] mx-auto">
            <div
              className={
                showNavbar
                  ? "w-full flex justify-between items-center"
                  : "w-full flex justify-between items-center py-[10px] lg:py-[70px]"
              }
            >
              <div className="w-[20%] sm:w-[10%]  flex justify-center scale-75 md:hidden">
                <a href="#" >
                  <MobileLogo />
                </a>
              </div>
              <div className="w-[30%] md:w-[20%] md:ml-2 ml-0 hidden justify-center md:flex scale-75">
                <a href="#">
                  <MobileLogo2 />
                </a>
              </div>

              <div
                className="w-[20%] flex justify-end cursor-pointer pr-2"
                onClick={() => setIsTrue(true)}
              >
                <HiBars3 size={30} fill="#626262" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isTrue && (
        <motion.div
          animate={{
            left: isTrue ? "calc(100vw - 320px)" : "100%",
            transition: {
              duration: 0.5,
            },
          }}
          className="sidebar fixed top-0 left-[100%] h-[100vh] bg-[#fff] z-[99] block xl:hidden"
        >
          <div
            className="absolute right-[15px] top-[15px] cross cursor-pointer"
            onClick={() => setIsTrue(false)}
          >
            <RxCross2 size={30} />
          </div>
          <div className="h-full">
            <div className="flex items-center justify-center h-full flex-col">
              <ul className="text-[#626262] text-center">
                {Menudata.map((item, i) => (
                  <li
                    key={i}
                    className="font-JustSans my-[20px] text-[16px] font-normal transition duration-150 ease-out hover:text-primaryColor"
                  >
                    {" "}
                    <a href={item.link}>{item.title}</a>{" "}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center mt-[30px]">
                <div className="relative cursor-pointer">
                  <div className="absolute top-0 right-[-1px]">
                    <Love />
                  </div>
                  <HiOutlineShoppingBag size={25} stroke="#626262" />
                </div>
                <div className="ml-8 cursor-pointer">
                  <CiUser size={25} fill="#626262" />
                </div>
                <div className="flex items-center ml-8">
                  <img
                    src="../../../usa.png"
                    alt="flag"
                    className="w-[30px] h-[30px] object-cover"
                  />
                  <span className="font-JustSans text-[#000] text-[14px] ml-2">
                    $USD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
