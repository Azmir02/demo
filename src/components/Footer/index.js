import React from "react";
import Logo from "../../svg/Logo";
import Visa from "../../svg/Visa";
import Express from "../../svg/Express";
import Master from "../../svg/Master";
import LogoFooter from "../../svg/Logo2";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#233040] pt-[72px] px-5">
        <div className="container">
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-center border-b-[1px] border-[hsla(0,_0%,_100%,_.1)] pb-[40px] lg:pb-[100px]">
              <div className="w-full lg:w-[40%] mb-6 lg:mb-0">
                <h4 className="font-Quart text-[20px] sm:text-[24px] lg:text-[28px] 2xl:text-[40px] text-white">
                  New Styles Every Week!
                </h4>
                <p className="font-JustSans text-[#E3E3E3] sm:text-[14px] lg:text-[18px] mt-3">
                  GET 20% OFF YOUR FIRST ORDER
                </p>
              </div>
              <div className="w-full lg:w-[40%] ml-auto">
                <div className=" w-full xl:w-[437px] relative ml-auto">
                  <input
                    type="text"
                    placeholder="Enter your email..."
                    className="py-[22px] pl-[18px] pr-[140px] rounded-[10px] w-full font-JustSans outline-none"
                  ></input>
                  <button className="py-[16px] px-[30px] bg-primaryColor rounded-[10px] font-JustSans text-white absolute top-[50%] translate-y-[-50%] right-[6px]">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-[30px] lg:pt-[80px] border-b-[1px] border-[hsla(0,_0%,_100%,_.1)] pb-[50px] lg:pb-[100px]">
              <div className="grid grid-cols-1 sm:grid-cols-[1fr,1fr] lg:grid-cols-[2fr,1fr,1fr,1fr] gap-10">
                <div>
                  <LogoFooter />
                  <p className="mt-5 font-JustSans text-[16px] pr-0 2xl:pr-[100px] 3xl:pr-[250px] text-white">
                    It is a long established fact that a reader will be
                    distracted by the readable content{" "}
                  </p>
                </div>
                <div>
                  <h5 className="font-Quart text-white text-[22px]">
                    Products
                  </h5>
                  <ul className="mt-[20px]">
                    <li className="font-JustSans text-[16px] mb-3 text-[#DDDDDD]">
                      <span className="hover:text-primaryColor transition ease-linear duration-75 cursor-pointer">
                        Saddlebags
                      </span>
                    </li>
                    <li className="font-JustSans text-[16px] mb-3 text-[#DDDDDD]">
                      <span className="hover:text-primaryColor transition ease-linear duration-75 cursor-pointer">
                        Saddlebags
                      </span>
                    </li>
                    <li className="font-JustSans text-[16px] mb-3 text-[#DDDDDD]">
                      <span className="hover:text-primaryColor transition ease-linear duration-75 cursor-pointer">
                        Saddlebags
                      </span>
                    </li>
                    <li className="font-JustSans text-[16px] mb-3 text-[#DDDDDD]">
                      <span className="hover:text-primaryColor transition ease-linear duration-75 cursor-pointer">
                        Saddlebags
                      </span>
                    </li>
                    <li className="font-JustSans text-[16px] mb-3 text-[#DDDDDD]">
                      <span className="hover:text-primaryColor transition ease-linear duration-75 cursor-pointer">
                        Saddlebags
                      </span>
                    </li>
                    <li className="font-JustSans text-[16px] mb-3 text-[#DDDDDD]">
                      <span className="hover:text-primaryColor transition ease-linear duration-75 cursor-pointer">
                        Saddlebags
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-Quart text-white text-[22px]">
                    Collection
                  </h5>
                  <ul className="mt-[20px]">
                    <li className="font-JustSans text-[16px] mb-3 text-[#DDDDDD]">
                      <span className="hover:text-primaryColor transition ease-linear duration-75 cursor-pointer">
                        {" "}
                        Bloom
                      </span>
                    </li>
                    <li className="font-JustSans text-[16px] mb-3 text-[#DDDDDD]">
                      <span className="hover:text-primaryColor transition ease-linear duration-75 cursor-pointer">
                        Amor
                      </span>
                    </li>
                    <li className="font-JustSans text-[16px] mb-3 text-[#DDDDDD]">
                      <span className="hover:text-primaryColor transition ease-linear duration-75 cursor-pointer">
                        Elements
                      </span>
                    </li>
                    <li className="font-JustSans text-[16px] mb-3 text-[#DDDDDD]">
                      <span className="hover:text-primaryColor transition ease-linear duration-75 cursor-pointer">
                        Coastal
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-Quart text-white text-[22px]">
                    Quick Links
                  </h5>
                  <ul className="mt-[20px]">
                    <li className="font-JustSans text-[16px] mb-3 text-[#DDDDDD]">
                      <span className="hover:text-primaryColor transition ease-linear duration-75 cursor-pointer">
                        Contact Us
                      </span>
                    </li>
                    <li className="font-JustSans text-[16px] mb-3 text-[#DDDDDD]">
                      <span className="hover:text-primaryColor transition ease-linear duration-75 cursor-pointer">
                        FAQ
                      </span>
                    </li>
                    <li className="font-JustSans text-[16px] mb-3 text-[#DDDDDD]">
                      <span className="hover:text-primaryColor transition ease-linear duration-75 cursor-pointer">
                        Blog
                      </span>
                    </li>
                    <li className="font-JustSans text-[16px] mb-3 text-[#DDDDDD]">
                      <span className="hover:text-primaryColor transition ease-linear duration-75  cursor-pointer">
                        Terms and conditions
                      </span>
                    </li>
                    <li className="font-JustSans text-[16px] mb-3 text-[#DDDDDD]">
                      <span className="hover:text-primaryColor transition  cursor-pointer ease-linear duration-75">
                        Privacy Policy
                      </span>
                    </li>
                    <li className="font-JustSans text-[16px] mb-3 text-[#DDDDDD]">
                      <span className="hover:text-primaryColor transition ease-linear  cursor-pointer duration-75">
                        Terms of Use
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="py-[20px] flex flex-col md:flex-row items-center justify-between">
              <p className="font-JustSans text-white text-center lg:text-start text-[14px] w-full md:w-[50%]">
                Copyright &copy;{" "}
                <span className="text-primaryColor">NON VITAE.</span> All rights
                reserved.
              </p>
              <div className="font-JustSans w-full md:w-[50%] text-white text-[14px] flex items-center justify-center md:justify-end mx-auto mt-[20px] md:mt-0">
                <p>We Accept:</p>
                <div className="flex ml-5">
                  <div className="mr-5">
                    <Visa />
                  </div>
                  <div className="mr-5">
                    <Express />
                  </div>
                  <div>
                    <Master />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
