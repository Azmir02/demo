import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";
import e1 from "../images/e1.png";
import h1 from "../images/h1.png";
import h2 from "../images/h2.png";
import vivid1 from "../images/vivid1.svg";
import vivid2 from "../images/vivid2.svg";
import vivid3 from "../images/vivid3.svg";
import vivid4 from "../images/vivid4.svg";
import vivid5 from "../images/vivid5.svg";
import db1 from "../images/db1.svg";
import db2 from "../images/db2.svg";
import db3 from "../images/db3.svg";
import db4 from "../images/db4.svg";
import db5 from "../images/db5.svg";
import aw1 from "../images/aw1.svg";
import aw2 from "../images/aw2.svg";
import aw3 from "../images/aw3.svg";
import aw4 from "../images/aw4.svg";
import aw5 from "../images/aw5.svg";
import sb1 from "../images/sb1.svg";
import sb2 from "../images/sb2.svg";
import sb3 from "../images/sb3.svg";
import sb4 from "../images/sb4.svg";
import sb5 from "../images/sb5.svg";
import m1 from "../images/m1.svg";
import m2 from "../images/m2.svg";
import m3 from "../images/m3.svg";
import m4 from "../images/m4.svg";
import m5 from "../images/m5.svg";
import mb1 from "../images/mb1.svg";
import mb2 from "../images/mb2.svg";
import mb3 from "../images/mb3.svg";
import mb4 from "../images/mb4.svg";
import mb5 from "../images/mb5.svg";
import one from "../images/one.svg";
import two from "../images/two.svg";
import three from "../images/three.svg";
import four from "../images/four.svg";
import five from "../images/five.svg";
import six from "../images/five.svg";
import Slider from "react-slick";
import Sone from "../svg/Sone";
import Stwo from "../svg/Stwo";
import Sthree from "../svg/Sthree";
import Sfour from "../svg/Sfour";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import noData from "../svg/nodata.json";
import { ToastContainer, toast } from "react-toastify";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Carrow from "./Carrow";
import CrArrow from "./CrArrow";
import { RxCross2 } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";
import SmallNextArrow from "./smalNextlArrow";
import SmallPrevArrow from "./smallPrevArrow";
import { LayoutGroup } from "framer-motion";
import habib from '../images/habib.png'
import azmir from '../images/azmir.png'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import Reviews from "../svg/Reviews";
import Rnext from "./Rnext";
import Rprev from "./Rprev";
import { ShippingData } from "../data/CommonData";

// padding: 0 16px;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  border-radius: 30px;
  padding-bottom: 20px;
`;
const ProdductContainer = styled.div`
  min-width: 50%;
  // background-color: ${({ theme }) => theme.colors.bgSecondary};
`;
const ProductText = styled.div`
  color: #313131;
  font-family: Quart;
  font-size: 36px;
  padding-right: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 59px;
  text-transform: capitalize;
  margin-bottom: 30px;
`;
const ConfigContainer = styled.div`
  min-width: 50%;
  margin: 0 auto;
  padding: 0 16px;
  position: relative;
  padding-top: 180px;
`;
const ConfigWrapper = styled.div`
  margin-top: 70px;
  position: relative;
  :before {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.colors.dark3};
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    z-index: -3;
  }
  :after {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.colors.primary};
    height: 4px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    z-index: -3;
    left: 0;
  }
`;

const Config = styled.div`
  position: relative;
  z-index: 1;
`;

const ConfigStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme, step }) =>
    step === "completed" ? theme.colors.primary : "#fff"};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConfigCount = styled.span`
  font-size: 19px;
  color: ${({ theme, step }) =>
    step === "completed" ? theme.colors.textLight : theme.colors.dark2};
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const ConfigsLabelContainer = styled.div`
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ConfigLabel = styled.span`
  font-size: 19px;
  color: #4a154b;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px 0;
`;

const ButtonStyle = styled.button`
  border-radius: 8px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, dark }) =>
    !dark ? theme.colors.primary2 : theme.colors.dark2};
  color: #ffffff;
  cursor: pointer;
  padding: 14px 26px;
  width: fit-content;
  font-size: 18px;
  font-style: normal;
  font-family: JUSTSans;
  font-weight: 800;
  line-height: normal;
  text-transform: capitalize;
  :active {
    transform: scale(0.98);
  }
  :disabled {
    background: #f3e7f3;
    color: #000000;
    cursor: not-allowed;
  }
`;

// const CheckMark = styled.div`
//   font-size: 26px;
//   font-weight: 600;
//   color: #4a154b;
//   -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
//   -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
//   transform: scaleX(-1) rotate(-46deg);
// `;

const Animation = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const SummaryBarTop = (props) => {
  const { summary, steps, activeStep, setActiveStep, setDone } = props;

  const handleSummary = (v) => {

    steps.filter((step) => step.step === v.step).map(({ step }) => setActiveStep(step));

    setDone(false);
    const element = document.querySelector(`#accordion__heading-${v?.step}`)
    element?.click()

  };
  return (
    <div className="mb-12 ">
      <div className="font-Quart uppercase text-[#000] text-[14px] mb-6">
        Selected Options:
      </div>

      <div className="flex justify-between flex-wrap 2xl:flex-nowrap [&>*:nth-child(3)]:mt-[18px] [&>*:nth-child(4)]:mt-[18px] 2xl:[&>*:nth-child(3)]:mt-[0px] 2xl:[&>*:nth-child(4)]:mt-[0px]">
        {Object.values(summary).map((v, k) => {
          return (
            <div
              className="flex group w-[35%] 2xl:w-fit cursor-pointer"
              key={k}
              onClick={() => handleSummary(v)}
            >
              <img
                src={v.image}
                className={`${activeStep == v.step
                  ? "w-[43px] h-auto mr-3 ring ring-0 ring-2 ring-transparent  ring-[#E5493A]"
                  : "w-[43px] h-auto mr-3 ring ring-0 group-hover:ring-2 ring-transparent  group-hover:ring-[#E5493A]"
                  } ${v.display_name === "Color"
                    ? `rounded-[50px]`
                    : `rounded-[2px]`
                  } transition-all  ring-offset-0 group-hover:ring-offset-2`}
              />
              <div className="flex flex-col">
                <span
                  className={
                    activeStep == v.step
                      ? "font-JustSansExBold uppercase transition-all text-[#626262] text-[12px]"
                      : "font-JustSansExBold uppercase text-[#000] transition-all group-hover:text-[#626262] text-[12px]"
                  }
                >
                  {v.display_name}
                </span>
                <span className="capitalize text-[#626262] text-[14px]">
                  {v.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Summary = ({
  setTotalQuantity,
  count,
  setCount,
  totalPrice,
  showAnimate,
  prevSum,
  activeStep,
}) => {
  const colors =
    JSON.parse(localStorage.getItem("activeColor")) ||
    JSON.parse(localStorage.getItem("default"))
  const exhaust =
    JSON.parse(localStorage.getItem("activeExhaust")) ||
    JSON.parse(localStorage.getItem("defaultExhaust"));
  const Lids =
    JSON.parse(localStorage.getItem("activeLids")) ||
    JSON.parse(localStorage.getItem("defaultLids"));
  const Hardware =
    JSON.parse(localStorage.getItem("activeHard")) ||
    JSON.parse(localStorage.getItem("defaultHardware"));

  const increase = (e) => {
    e.preventDefault();
    setCount((prev) => prev + 1);
    localStorage.setItem("totalPrice", Number(totalPrice) + 40);
  };
  const decrease = (e) => {
    e.preventDefault();
    setCount((prev) => prev - 1);
    localStorage.setItem("totalPrice", Number(totalPrice) - 40);
  };
  useEffect(() => {
    localStorage.setItem("quantity", count);
    setTotalQuantity(count);
  }, [count]);

  return (
    <motion.div
      initial={{
        x: showAnimate ? 0 : -50,
        opacity: showAnimate ? 1 : 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        x: -50,
        opacity: 0,
      }}
      transition={{
        staggerChildren: 0.2,
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="md:mt-[30px] lg:px-[90px]"
    >
      <p className="text-[25px] lg:text-[32px] text-[#000] font-Quart">
        Your Configuration
      </p>
      {colors ? (
        <>
          <p className="text-[24px] text-[#626262] font-Quart mt-[20px] mb-[24px]">
            Color
          </p>
          <img src={colors?.img[0].img || colors} />
        </>
      ) : (
        <h2 className="text-[18px] lg:text-[24px] text-[#626262] font-Quart mt-[25px]">
          Please Select The Color
        </h2>
      )}

      {exhaust?.name || Lids?.name || Hardware?.name ? (
        <>
          <div className="flex flex-col sm:flex-row w-70% mt-[30px] sm:gap-[25px] xl:gap-[10px] 2xl:gap-[25px]">
            {exhaust?.name && (
              <div className="w-[95%] lg:w-[33%] xl:w-[35%] 2xl:w-[33%] mb-[25px] lg:mb-0">
                <h4 className=" text-[17px] xl:text-[12px] 2xl:text-[17px] text-[#626262] font-Quart">
                  {exhaust?.name}
                </h4>
                <div className="border border-solid border-[#626262] p-[10px] rounded-[8.85px] text-center mt-[18px]">
                  <img
                    src={exhaust?.img}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            {Lids?.name && (
              <div className="w-[95%] lg:w-[33%] xl:w-[35%] 2xl:w-[33%] mb-[25px] lg:mb-0">
                <h4 className=" text-[17px] xl:text-[12px] 2xl:text-[17px] text-[#626262] font-Quart">
                  {Lids.name}
                </h4>
                <div className="border border-solid border-[#626262] p-[10px] rounded-[8.85px] text-center mt-[18px]">
                  <img src={Lids?.img} className="w-full h-full object-cover" />
                </div>
              </div>
            )}
            {Hardware?.name && (
              <div className="w-[95%] lg:w-[33%] xl:w-[35%] 2xl:w-[33%] mb-[25px] lg:mb-0">
                <h4 className=" text-[17px] xl:text-[12px] 2xl:text-[17px] text-[#626262] font-Quart">
                  {Hardware?.name}
                </h4>
                <div className="border border-solid border-[#626262] p-[10px] rounded-[8.85px] text-center mt-[18px]">
                  <img
                    src={Hardware?.img}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col md:flex-row items-center mt-[40px] mb-[40px]">
            <div className="order-[1] md:order-[0] mt-[20px] lg:mt-0">
              <ButtonStyle onClick={prevSum} disabled={activeStep === 1} dark>
                <div style={{ marginTop: "2px", marginRight: "10px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9.57 5.92969L3.5 11.9997L9.57 18.0697"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.5019 12H3.67188"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                Back
              </ButtonStyle>
            </div>
            <div className=" w-[220px] text-center md:ml-auto">
              <div className="flex items-center gap-[8px] w-[250px] mb-[15px]">
                <p className="text-[32px] text-[#626262] mr-4 font-JustSans">
                  ${totalPrice}
                </p>
                <div className="flex items-center border border-solid border-[#626262] px-[10px] rounded-[8px] justify-center">
                  <button
                    className="mr-[25px] text-[#C4C4C4] text-[24px] focus:text-[#626262] mt-[-5px]"
                    onClick={decrease}
                    disabled={count == 1}
                  >
                    -
                  </button>
                  <span className="font-JustSans text-[24px]">{count}</span>
                  <button
                    className="ml-[25px] text-[#C4C4C4] text-[24px] focus:text-[#626262] mt-[-5px]"
                    onClick={increase}
                  >
                    +
                  </button>
                </div>
              </div>
              <button className="text-white w-full font-JustSans rounded-[8px] py-[14px] px-[26px] font-[800] bg-[#E5493A] text-[16px]  lg:hover:bg-[#2e2f31] transition ease-linear duration-100">
                Add to cart
              </button>
              <p className="font-JustSans text-[14px] mt-[15px] text-[#626262]">
                Free Shipping to US & Canada
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full">
          <Lottie animationData={noData} loop={true} />
          <h2 className="text-[18px] lg:text-[24px] text-[#626262] font-Quart mt-[25px] text-center">
            Please Select The Configurator
          </h2>
          <ButtonStyle
            onClick={prevSum}
            disabled={activeStep === 1}
            dark
            className="my-[20px]"
          >
            <div style={{ marginTop: "2px", marginRight: "10px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.57 5.92969L3.5 11.9997L9.57 18.0697"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.5019 12H3.67188"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            Back
          </ButtonStyle>
        </div>
      )}
    </motion.div>
  );
};
const SummaryBar = ({
  basicPrice,
  setBasicPrice,
  totalPrice,
  setShowToast,
  showToast,
  showHeight,
  exhaustList,
  HardwareLists,
  colorsLists,
  LidsLists,
  summary,
  setActiveStep,
  setShowHeight,
  setDone,
}) => {
  useEffect(() => {
    setBasicPrice(Number(totalPrice));
  }, []);
  return (
    <>
      <motion.div
        layout
        style={{
          height: showHeight ? "75vh" : "0",
          overflowY: "auto",
          transition: "0.3s",
        }}
      >
        <div className="border-b-2 border-[#626262] pb-[12px]">
          <div
            className="flex items-center group"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActiveStep(1);
              setShowHeight(false);
              setDone(false);
            }}
          >
            <img src={colorsLists?.img[0].img || summary.colors.image} />
            <div className="my-[15px] xl:my-[5px] ml-3">
              <h4 className="font-Quart text-[18px] text-white group-hover:text-primaryColor transition-all duration-75 ease-linear">
                Color
              </h4>
              <span className="font-JustSans text-[14px] xl:text-[28px] text-white mb-[12px] inline-block">
                {colorsLists?.name || summary.colors.name}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[15px]">
          <div
            className="w-full md:w-[50%] flex items-center mb-[40px] group"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActiveStep(2);
              setShowHeight(false);
              setDone(false);
            }}
          >
            <div className="w-[30%] sm:w-[25%] md:w-[30%] mr-7">
              <img
                className="w-full h-full object-cover"
                src={exhaustList?.img || summary.exhaust.image}
              />
            </div>
            <div>
              <h4 className="font-Quart text-[18px] sm:text-[24px] text-white group-hover:text-primaryColor transition-all duration-75 ease-linear">
                Exhaust
              </h4>
              <span className="font-JustSans text-[14px] sm:text-[18px] text-white mb-[12px] inline-block">
                {exhaustList?.name || summary.exhaust.name}
              </span>
            </div>
          </div>
          <div
            className="w-full md:w-[50%] flex items-center mb-[40px] group"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActiveStep(3);
              setShowHeight(false);
              setDone(false);
            }}
          >
            <div className="w-[30%] sm:w-[25%] md:w-[30%] mr-7">
              <img
                className="w-full h-full object-cover"
                src={LidsLists?.img || summary.lids.image}
              />
            </div>
            <div>
              <h4 className="font-Quart text-[18px] sm:text-[24px] text-white group-hover:text-primaryColor transition-all duration-75 ease-linear">
                Lids
              </h4>
              <span className="font-JustSans text-[14px] sm:text-[18px] text-white mb-[12px] inline-block">
                {LidsLists?.name || summary.lids.name}
              </span>
            </div>
          </div>
          <div
            className="w-full md:w-[50%] flex items-center  mb-[40px] group"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActiveStep(4);
              setShowHeight(false);
              setDone(false);
            }}
          >
            <div className="w-[30%] sm:w-[25%] md:w-[30%] mr-7">
              <img
                className="w-full h-full object-cover"
                src={HardwareLists?.img || summary.hardware.image}
              />
            </div>
            <div>
              <h4 className="font-Quart text-[18px] sm:text-[24px] text-white group-hover:text-primaryColor transition-all duration-75 ease-linear">
                Hardware
              </h4>
              <span className="font-JustSans text-[14px] sm:text-[18px] text-white mb-[12px] inline-block">
                {HardwareLists?.name || summary.hardware.name}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const SummaryBar2 = ({
  setActiveStep,
  activeStep,
  setDone,
  colorsLists,
  exhaustLists,
  HardwareLists,
  LidsLists,
  summary,
  showToast,
  setShowToast,
  basicPrice,
  setBasicPrice,
  totalPrice,
}) => {
  useEffect(() => {
    setBasicPrice(Number(totalPrice));
  }, []);

  const Edit = () => {
    return (
      <span className="text-[#EB8E85] ml-1 opacity-[.7] group-hover:opacity-[1] transition-all duration-400 lg:hidden xl:inline-block">
        (Edit)
      </span>
    );
  };

  const Separator = () => {
    return (
      <div className="text-[rgba(255,255,255,.2)] text-[20px] relative top-[-1px]">
        /
      </div>
    );
  };
  return (
    <>
      <div className="hidden lg:flex">
        <div className="flex justify-between items-center">
          <div className="flex text-[12px] xl:text-[14px] items-center gap-[35px]">
            <div
              className="flex items-center group"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveStep(1);
                setDone(false);
                const element = document.querySelector(`#accordion__heading-1`)
                element?.click()
              }}
            >
              <img
                className="w-[30px]"
                src={colorsLists?.img[0].img || summary.colors.image}
              />
              <span
                className={
                  activeStep == 1
                    ? "font-JustSans capitalize text-white ml-3 text-[#E5493A] underline"
                    : "font-JustSans capitalize text-white ml-3"
                }
              >
                {colorsLists?.name || summary.colors.name} <Edit />
              </span>
            </div>

            <Separator />
            <div
              className="flex items-center group"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveStep(2);
                setDone(false);
                const element = document.querySelector(`#accordion__heading-2`)
                element?.click()
              }}
            >
              <span
                className={
                  activeStep == 2
                    ? "font-JustSans capitalize text-white ml-3 text-[#E5493A] underline"
                    : "font-JustSans capitalize text-white ml-3"
                }
              >
                {exhaustLists?.name || summary.exhaust.name} <Edit />
              </span>
            </div>

            <Separator />

            <div
              className="flex items-center group"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveStep(3);
                setDone(false);
                const element = document.querySelector(`#accordion__heading-3`)
                element?.click()
              }}
            >
              <span
                className={
                  activeStep == 3
                    ? "font-JustSans capitalize text-white ml-3 text-[#E5493A] underline"
                    : "font-JustSans capitalize text-white ml-3"
                }
              >
                {LidsLists?.name || summary.lids.name} <Edit />
              </span>
            </div>

            <Separator />
            <div
              className="flex items-center group"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveStep(4);
                setDone(false);
                const element = document.querySelector(`#accordion__heading-4`)
                element?.click()
              }}
            >
              <span
                className={
                  activeStep == 4
                    ? "font-JustSans capitalize text-white ml-3 text-[#E5493A] underline"
                    : "font-JustSans capitalize text-white ml-3"
                }
              >
                {HardwareLists?.name || summary.hardware.name} <Edit />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};




const ProductConfigurator = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [count, setCount] = useState(1);
  const totalPrice = localStorage.getItem("totalPrice");
  const [mainPrice, setMainPrice] = useState(Number(totalPrice));
  const [done, setDone] = useState(false);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [showAnimate, setShowAnimate] = useState(false);
  const [openBar, setOpenBar] = useState(false);
  const [basicPrice, setBasicPrice] = useState(120);
  const [showToast, setShowToast] = useState(false);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const colorsLists = JSON.parse(localStorage.getItem("activeColor"));
  const exhaustLists = JSON.parse(localStorage.getItem("activeExhaust"));
  const LidsLists = JSON.parse(localStorage.getItem("activeLids"));
  const HardwareLists = JSON.parse(localStorage.getItem("activeHard"));
  const [totalQuantity, setTotalQuantity] = useState("");
  const [showHeight, setShowHeight] = useState(false);
  const chooseAccordion = useRef(null)

  const isSmall = useMediaQuery({
    query: "(max-width: 767.99px)",
  });
  const isSmallTwo = useMediaQuery({
    query: "(max-width: 991.99px)",
  });
  const isLarge = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const [summary, setSummary] = useState({
    colors: {
      display_name: "Color",
      name: "vivid black",
      image: vivid1,
      step: 1,
    },
    exhaust: {
      display_name: "Exhaust",
      name: "No Exhaust Cutouts",
      image: e1,
      step: 2,
    },
    lids: {
      display_name: "Lids",
      name: "No Lids",
      image: h1,
      step: 3,
    },
    hardware: {
      display_name: "Hardware",
      name: "Silver Hardware",
      image: h2,
      step: 4,
    },
  });

  useEffect(() => {
    if (window.location.reload) {
      localStorage.setItem('totalPrice', basicPrice)
    }
  }, [])




  useEffect(() => {
    setOpenBar(true);
  }, []);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  });

  const nextStep = () => {
    setActiveStep(activeStep + 1);
    setShowAnimate(false);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
    setShowAnimate(false);
  };
  const prevSum = () => {
    setActiveStep((prev) => Math.max(prev - 1, 4));
    setDone(false);
  };

  const Color = () => {
    const [searchValue, setSearchValue] = useState("");
    const [show, setShow] = useState(true);
    const [active, setActive] = useState(null);
    const [colorCat, setColorCat] = useState(null)
    const [defaultSelect, setDefaultSelect] = useState({
      name: "Vivid Black",
      img: [
        {
          img: "/static/media/vivid1.cc03cd42088a8299169be52fcd70e98d.svg"
        }
      ],
    });
    const [mainPrice, setMainPrice] = useState(120);
    const [showToast, setShowToast] = useState(false);

    const DefaultcolorList = [
      {
        name: "Vivid Black",
        img: [
          {
            img: vivid1,
          },
        ],
      },
      {
        name: "Denim Black",
        img: [
          {
            img: db1,
          },
        ],
      },
      {
        name: "Amber Whiskey",
        img: [
          {
            img: aw1,
          },
        ],
      },
      {
        name: "Superior Blue",
        img: [
          {
            img: sb1,
          },
        ],
      },
      {
        name: "Matt Black",
        img: [
          {
            img: m1,
          },
        ],
      },
      {
        name: "Primer",
        img: [
          {
            img: mb1,
          },
        ],
      },
    ]


    useEffect(() => {
      const colorList = [
        {
          name: "Vivid Black",
          img: [
            {
              img: vivid1,
            },
          ],
        },
        {
          name: "Denim Black",
          img: [
            {
              img: db1,
            },
          ],
        },
        {
          name: "Amber Whiskey",
          img: [
            {
              img: aw1,
            },
          ],
        },
        {
          name: "Superior Blue",
          img: [
            {
              img: sb1,
            },
          ],
        },
        {
          name: "Matt Black",
          img: [
            {
              img: m1,
            },
          ],
        },
        {
          name: "Primer",
          img: [
            {
              img: mb1,
            },
          ],
        },
      ].filter((c) => c.name.toLowerCase().includes(searchValue.toLowerCase()));

      setColorCat(colorList)
    }, [searchValue])

    const activeColor = (value) => {
      setActive(value.img[0].img);
      if (mainPrice === 120) {
        setMainPrice(mainPrice + 40);
      }
      localStorage.setItem("activeColor", JSON.stringify({ ...value }));
      setTimeout(() => {
        nextStep();
        const element = document.querySelector(`#accordion__heading-2`)
        element.click()
      }, 800);
    };

    useEffect(() => {
      const activeColor = JSON.parse(localStorage.getItem("activeColor"));
      const totalPrice = localStorage.getItem("totalPrice");
      setActive(activeColor?.img[0].img);
      setMainPrice(Number(totalPrice));
    }, []);

    useEffect(() => {
      localStorage.setItem("totalPrice", mainPrice);
    }, [mainPrice]);

    const removeTrack = () => {
      localStorage.removeItem("activeColor");
    };

    useEffect(() => {
      if (active == null) {
        localStorage.setItem("default", JSON.stringify({ ...defaultSelect }));
      } else {
        localStorage.removeItem("default");
      }
    }, [active]);

    useEffect(() => {
      window.addEventListener("beforeunload", removeTrack);
    }, []);

    const handleCart = () => {
      if (mainPrice === 120) {
        if (!showToast) {
          setShowToast(true);
          toast.error("Please choose your color first", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "dark",
            onClose: () => setShowToast(false),
          });
        }
      }
    };
    const Animation = {
      hidden: {
        y: -40,
      },
      visible: {
        y: 0,
      },
    };

    return (
      isSmall ?
        <div
          className="color-parent mx-auto justify-center"
        >
          <div className="relative">
            <input
              type="text"
              name=""
              className={`focus:outline-none text-[#626262] placeholder:text-[#626262] font-JustSans focus:ring-0 block w-full bg-[transparent] mb-[40px] px-[20px] border border-[#DDD] rounded-[16px] py-[20px] lg:py-[30px]`}
              placeholder={"Search all colors ..."}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M28.001 27.9991L21.0717 21.0698M21.0717 21.0698C22.9471 19.1943 24.0008 16.6507 24.0008 13.9984C24.0008 11.3462 22.9471 8.80252 21.0717 6.92709C19.1963 5.05165 16.6526 3.99805 14.0004 3.99805C11.3481 3.99805 8.80448 5.05165 6.92904 6.92709C5.05361 8.80252 4 11.3462 4 13.9984C4 16.6507 5.05361 19.1943 6.92904 21.0698C8.80448 22.9452 11.3481 23.9988 14.0004 23.9988C16.6526 23.9988 19.1963 22.9452 21.0717 21.0698Z"
                  stroke="#CCCCCC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className=" flex justify-between items-center ">
            <div className="flex justify-center font-JustSans items-center text-white text-[18px] font-[400] transition ease-in-out delay-150 cursor-pointer"></div>
          </div>
          <div className="h-[250px] xl:h-[200px] w-70% overflow-y-auto parent-color overflow-x-hidden ">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {colorCat?.map((v, k) => {
                return (
                  <label
                    className="flex justify-between items-start lg:items-center mb-[30px]"
                    key={k}
                  >
                    <div className="w-[80%]">
                      <div className="flex items-center gap-[8px] parent-checks cursor-pointer">
                        <input
                          type="checkbox"
                          onClick={() => activeColor(v)}
                          checked={active == null || undefined ? defaultSelect.img[0].img == v.img[0].img : active == v.img[0].img}
                        ></input>
                        <p className="text-[#000] text-[18px] 2xl:text-[24px] font-JustSans font-[400] ">
                          {v.name}
                        </p>
                      </div>
                    </div>

                    <div className="w-[50px]  mr-3 relative">
                      {v.img.map((image, i) => (
                        <div
                          className={
                            active == image.img
                              ? "w-[40px] h-[40px] mx-auto rounded-full cursor-pointer last:mr-[30px]"
                              : "w-[40px] h-[40px] mx-auto rounded-full cursor-pointer last:mr-[30px]"
                          }
                          key={i}
                        >
                          {
                            active == null || undefined ?
                              <img
                                className={
                                  defaultSelect.img[0].img == image.img
                                    ? "lg:w-[40px] lg:h-[40px] rounded-full border-2 border-[#e5493a] cursor-pointer "
                                    : "w-[40px] h-[40px] rounded-full cursor-pointer "
                                }
                                src={image.img}
                              /> : <img
                                className={
                                  active == image.img
                                    ? "w-[40px] h-[40px] mx-auto rounded-full border-2 border-[#e5493a] cursor-pointer "
                                    : "w-[40px] h-[40px] mx-auto rounded-full cursor-pointer "
                                }
                                src={image.img}
                              />
                          }
                        </div>
                      ))}
                    </div>
                    {v.img.map((i, k) => (
                      <ReactTooltip
                        id={i.img}
                        key={i}
                        place="top"
                        content={i.name}
                        effect="solid"
                      />
                    ))}
                  </label>
                );
              })}
            </div>
          </div>
        </div> :
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={Animation}
          transition={{
            staggerChildren: 0.4,
            duration: .3,
            ease: "easeInOut",
          }}
          className="color-parent justify-center"
        >
          <div className="relative">
            <input
              type="text"
              name=""
              className={`focus:outline-none text-[#626262] placeholder:text-[#626262] font-JustSans focus:ring-0 block w-full bg-[transparent] mb-[40px] px-[20px] border border-[#DDD] rounded-[16px] py-[20px] lg:py-[30px]`}
              placeholder={"Search all colors ..."}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M28.001 27.9991L21.0717 21.0698M21.0717 21.0698C22.9471 19.1943 24.0008 16.6507 24.0008 13.9984C24.0008 11.3462 22.9471 8.80252 21.0717 6.92709C19.1963 5.05165 16.6526 3.99805 14.0004 3.99805C11.3481 3.99805 8.80448 5.05165 6.92904 6.92709C5.05361 8.80252 4 11.3462 4 13.9984C4 16.6507 5.05361 19.1943 6.92904 21.0698C8.80448 22.9452 11.3481 23.9988 14.0004 23.9988C16.6526 23.9988 19.1963 22.9452 21.0717 21.0698Z"
                  stroke="#CCCCCC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    console.log(colorCat);
                    setColorCat(colorCat.filter((v) => (
                      v.name.includes("Vivid Black") || v.name.includes("Matt Black") || v.name.includes("Primer")
                    )))
                  }
                  else {
                    setColorCat(DefaultcolorList)
                  }

                }}
              ></input>
              <span>Standard Finishes</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    console.log(colorCat);
                    setColorCat(colorCat.filter((v) => (
                      v.name.includes("Denim Black") || v.name.includes("Amber Whiskey") || v.name.includes("Superior Blue")
                    )))
                  }
                  else {
                    setColorCat(DefaultcolorList)
                  }

                }}
              ></input>
              <span>Premium Finishes</span>
            </label>
          </div>
          <div className=" flex justify-between items-center ">
            <div className="flex justify-center font-JustSans items-center text-white text-[18px] font-[400] transition ease-in-out delay-150 cursor-pointer"></div>
          </div>
          <div className="h-[250px] xl:h-[200px] w-70% overflow-y-auto parent-color overflow-x-hidden ">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {colorCat?.map((v, k) => {
                return (
                  <label
                    className="flex justify-between items-start lg:items-center mb-[30px]"
                    key={k}
                  >
                    <div className="w-[80%]">
                      <div className="flex items-center gap-[8px] parent-checks cursor-pointer">
                        <input
                          type="checkbox"
                          onClick={() => activeColor(v)}
                          checked={active == null || undefined ? defaultSelect.img[0].img == v.img[0].img : active == v.img[0].img}
                        ></input>
                        <p className="text-[#000] text-[18px] 2xl:text-[24px] font-JustSans font-[400] ">
                          {v.name}
                        </p>
                      </div>
                    </div>

                    <div className="w-[50px]  mr-3 relative">
                      {v.img.map((image, i) => (
                        <div
                          className={
                            active == image.img
                              ? "w-[40px] h-[40px] mx-auto rounded-full cursor-pointer last:mr-[30px]"
                              : "w-[40px] h-[40px] mx-auto rounded-full cursor-pointer last:mr-[30px]"
                          }
                          key={i}
                        >
                          {
                            active == null || undefined ?
                              <img
                                className={
                                  defaultSelect.img[0].img == image.img
                                    ? "lg:w-[40px] lg:h-[40px] rounded-full border-2 border-[#e5493a] cursor-pointer "
                                    : "w-[40px] h-[40px] rounded-full cursor-pointer "
                                }
                                src={image.img}
                              /> : <img
                                className={
                                  active == image.img
                                    ? "w-[40px] h-[40px] mx-auto rounded-full border-2 border-[#e5493a] cursor-pointer "
                                    : "w-[40px] h-[40px] mx-auto rounded-full cursor-pointer "
                                }
                                src={image.img}
                              />
                          }
                        </div>
                      ))}
                    </div>
                    {v.img.map((i, k) => (
                      <ReactTooltip
                        id={i.img}
                        key={i}
                        place="top"
                        content={i.name}
                        effect="solid"
                      />
                    ))}
                  </label>
                );
              })}
            </div>
          </div>
        </motion.div >
    );
  };

  const Exhaust = () => {
    const [searchValue, setSearchValue] = useState("");
    const [show, setShow] = useState(true);
    const [active, setActive] = useState(null);
    const totalPrice = localStorage.getItem("totalPrice");
    const [defaultSelect, setDefaultSelect] = useState({
      name: "No Exhaust",
      img: "/static/media/e1.90be0cd19d138c1d3581.png",
    });
    const [mainPrice, setMainPrice] = useState(totalPrice);

    const activeExaust = (value) => {
      setActive(value?.name);
      if (!active) {
        setMainPrice(Number(mainPrice) + 10);
      }
      localStorage.setItem("activeExhaust", JSON.stringify({ ...value }));
      setTimeout(() => {
        nextStep();
        const element = document.querySelector(`#accordion__heading-3`)
        element.click()
      }, 800);
    };

    useEffect(() => {
      localStorage.setItem("totalPrice", mainPrice);
    }, [mainPrice]);

    useEffect(() => {
      const activeEx = JSON.parse(localStorage.getItem("activeExhaust"));
      setActive(activeEx?.name);
    }, []);
    const removeTrack = () => {
      localStorage.removeItem("activeExhaust");
    };

    useEffect(() => {
      window.addEventListener("beforeunload", removeTrack);
    }, []);

    useEffect(() => {
      if (active == null) {
        localStorage.setItem(
          "defaultExhaust",
          JSON.stringify({ ...defaultSelect })
        );
      } else {
        localStorage.removeItem("defaultExhaust");
      }
    }, [active]);

    const exhaustList = [
      { name: "Dual Exhaust", img: e1 },
      { name: "1 Exhaust", img: e1 },
      { name: "No Exhaust", img: e1 },
    ].filter((c) => c.name.toLowerCase().includes(searchValue.toLowerCase()));

    const Animation = {
      hidden: {
        y: -40,
      },
      visible: {
        y: 0,
      },
    };
    return (
      <>
        {
          isSmall ?
            <div

              className="exhaust-parent justify-center"
            >
              {/* <div className="relative">
                <input
                  type="text"
                  name=""
                  className={`focus:outline-none text-[#626262] placeholder:text-[#626262] font-JustSans focus:ring-0 block w-full bg-[transparent] mb-[40px] px-[20px] pr-[60px] lg:pr-0 border border-[#DDD] rounded-[16px] py-[20px] lg:py-[30px]`}
                  placeholder={"Please enter a search exhaust......"}
                  onChange={(e) => setSearchValue(e.target.value)}
                />

                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M28.001 27.9991L21.0717 21.0698M21.0717 21.0698C22.9471 19.1943 24.0008 16.6507 24.0008 13.9984C24.0008 11.3462 22.9471 8.80252 21.0717 6.92709C19.1963 5.05165 16.6526 3.99805 14.0004 3.99805C11.3481 3.99805 8.80448 5.05165 6.92904 6.92709C5.05361 8.80252 4 11.3462 4 13.9984C4 16.6507 5.05361 19.1943 6.92904 21.0698C8.80448 22.9452 11.3481 23.9988 14.0004 23.9988C16.6526 23.9988 19.1963 22.9452 21.0717 21.0698Z"
                      stroke="#CCCCCC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div> */}
              <div className="flex flex-col lg:flex-row w-70% sm:gap-[15px] xl:gap-[0]">
                {exhaustList.map((v, k) => (
                  <>
                    <label>
                      {
                        active == null || undefined ?
                          <div className="flex justify-between items-center mb-[30px]">
                            <div className="w-[60%]">
                              <div className="flex items-center parent-checks cursor-pointer" >
                                <input type="checkbox" onClick={() => activeExaust(v)} checked={active == null || undefined ? defaultSelect.name == v.name : active == v.name} />
                                <p className="text-[#626262] text-[16px] sm:text-[18px] font-[800] font-JustSans ml-[8px]">
                                  {v.name}
                                </p>
                              </div>
                              <div className="mt-2">
                                <span className="text-[#626262] text-[13px] sm:text-[15px] font-[400] font-JustSans">price: (+10$)</span>
                              </div>
                            </div>
                            <div
                              className={
                                defaultSelect.name == v.name
                                  ? "exhaust items-center xl:pb-[15px] pb-[5px] pt-[5px]  xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer w-[30%] border-2 border-[#e5493a]"
                                  : "exhaust items-center xl:pb-[15px] pb-[5px] pt-[5px]  xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer w-[30%]"
                              }
                              key={k}

                            >
                              <div className="w-[90%] m-auto mb-0">
                                <img src={v.img} className="w-full h-full object-cover" />
                              </div>
                            </div>
                          </div>
                          :
                          <div className="flex justify-between items-center mb-[30px]">
                            <div className="w-[60%]">
                              <label className="flex items-center parent-checks" >
                                <input type="checkbox" onClick={() => activeExaust(v)} checked={active == null || undefined ? defaultSelect.name == v.name : active == v.name} />
                                <p className="text-[#626262] text-[16px] sm:text-[18px] font-[800] font-JustSans ml-[8px]">
                                  {v.name}
                                </p>
                              </label>
                              <div className="mt-2">
                                <span className="text-[#626262] text-[13px] sm:text-[15px] font-[400] font-JustSans">price: (+10$)</span>
                              </div>
                            </div>
                            <div
                              className={
                                active == v.name
                                  ? "exhaust items-center xl:pb-[15px] pb-[5px] pt-[5px]  xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer w-[30%] border-2 border-[#e5493a]"
                                  : "exhaust items-center xl:pb-[15px] pb-[5px] pt-[5px]  xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer w-[30%]"
                              }
                              key={k}

                            >
                              <div className="w-[90%] m-auto mb-0">
                                <img src={v.img} className="w-full h-full object-cover" />
                              </div>
                            </div>
                          </div>
                      }
                    </label>
                  </>
                ))}
              </div>
            </div> :
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={Animation}
              transition={{
                staggerChildren: 0.4,
                duration: .3,
                ease: "easeInOut",
              }}
              className="exhaust-parent justify-center"
            >
              {/* <div className="relative">
                <input
                  type="text"
                  name=""
                  className={`focus:outline-none text-[#626262] placeholder:text-[#626262]  font-JustSans focus:ring-0 block w-full bg-[transparent] mb-[40px] px-[20px] pr-[60px] lg:pr-0 border border-[#DDD] rounded-[16px] py-[20px] lg:py-[30px]`}
                  placeholder={"Please enter a search exhaust......"}
                  onChange={(e) => setSearchValue(e.target.value)}
                />

                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M28.001 27.9991L21.0717 21.0698M21.0717 21.0698C22.9471 19.1943 24.0008 16.6507 24.0008 13.9984C24.0008 11.3462 22.9471 8.80252 21.0717 6.92709C19.1963 5.05165 16.6526 3.99805 14.0004 3.99805C11.3481 3.99805 8.80448 5.05165 6.92904 6.92709C5.05361 8.80252 4 11.3462 4 13.9984C4 16.6507 5.05361 19.1943 6.92904 21.0698C8.80448 22.9452 11.3481 23.9988 14.0004 23.9988C16.6526 23.9988 19.1963 22.9452 21.0717 21.0698Z"
                      stroke="#CCCCCC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div> */}
              {/* <div className=" flex justify-between items-center mb-[45px]">
                <p className="text-[24px] lg:text-[32px] text-[#000] font-Quart">
                  Exhaust
                </p>
                <div className="flex font-JustSans justify-center items-center text-white text-[18px] font-[400] transition ease-in-out delay-150 cursor-pointer"></div>
              </div> */}

              <div className="flex flex-col sm:flex-row w-70% sm:gap-[15px] xl:gap-[0]">
                {exhaustList.map((v, k) => (
                  <>
                    {active == null || undefined ? (
                      <div
                        className={
                          defaultSelect.name == v.name
                            ? "exhaust xl:mr-2 mb-[40px] items-center w-[70%] mx-auto xl:pb-[15px] pb-[20px] xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer border-2 border-[#e5493a]"
                            : "exhaust xl:mr-2 mb-[40px] items-center w-[70%] mx-auto xl:pb-[15px] pb-[20px]  xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer"
                        }
                        key={k}
                        onClick={() => activeExaust(v)}
                      >
                        <p className="h-[40px] pt-[10px] mb-[12px] text-[#313131] text-[15px] font-[800] text-center font-JustSans">
                          {v.name}
                        </p>
                        <div className="w-[90%] m-auto mb-0">
                          <img src={v.img} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center mt-3"><span className="text-[#626262] text-[15px] font-[400] font-JustSans">price: (+10$)</span></div>
                      </div>
                    ) : (
                      <div
                        className={
                          active == v.name
                            ? "exhaust xl:mr-2 mb-[40px] items-center w-[70%] mx-auto xl:pb-[15px] pb-[20px] xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer border-2 border-[#e5493a]"
                            : "exhaust xl:mr-2 mb-[40px] items-center w-[70%] mx-auto xl:pb-[15px] pb-[20px]  xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer"
                        }
                        key={k}
                        onClick={() => activeExaust(v)}
                      >
                        <p className="h-[40px] pt-[10px] mb-[12px] text-[#313131] text-[15px] font-[800] text-center font-JustSans">
                          {v.name}
                        </p>
                        <div className="w-[90%] m-auto mb-0">
                          <img src={v.img} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center mt-3"><span className="text-[#626262] text-[15px] font-[400] font-JustSans">price: (+10$)</span></div>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </motion.div>
        }
      </>
    );
  };

  const Lids = () => {
    const [searchValue, setSearchValue] = useState("");
    const [show, setShow] = useState(true);
    const [active, setActive] = useState(null);
    const totalPrice = localStorage.getItem("totalPrice");
    const [defaultSelect, setDefaultSelect] = useState({
      img: "/static/media/e1.90be0cd19d138c1d3581.png",
      name: "No Lids",
    });
    const [mainPrice, setMainPrice] = useState(totalPrice);

    const activeLids = (value) => {
      setActive(value?.name);
      if (!active) {
        setMainPrice(Number(mainPrice) + 10);
      }

      localStorage.setItem("activeLids", JSON.stringify({ ...value }));
      setTimeout(() => {
        nextStep();
        const element = document.querySelector(`#accordion__heading-4`)
        element.click()
      }, 800);
    };

    useEffect(() => {
      localStorage.setItem("totalPrice", mainPrice);
    }, [mainPrice]);

    useEffect(() => {
      const activeLids = JSON.parse(localStorage.getItem("activeLids"));
      setActive(activeLids?.name);
    }, []);

    const removeTrack = () => {
      localStorage.removeItem("activeLids");
    };

    useEffect(() => {
      window.addEventListener("beforeunload", removeTrack);
    }, []);

    useEffect(() => {
      if (active == null) {
        localStorage.setItem(
          "defaultLids",
          JSON.stringify({ ...defaultSelect })
        );
      } else {
        localStorage.removeItem("defaultLids");
      }
    }, [active]);

    const exhaustList = [
      { name: "Standard Lids", img: h1 },
      { name: "8in Speaker Lids", img: h2 },
      { name: "No Lids", img: e1 },
    ].filter((c) => c.name.toLowerCase().includes(searchValue.toLowerCase()));
    const Animation = {
      hidden: {
        y: -40,
      },
      visible: {
        y: 0,
      },
    };

    return (
      <>
        {
          isSmall ?
            <div

              className="lids-parent justify-center">
              {/* <div className="relative">
                <input
                  type="text"
                  name=""
                  className={`focus:outline-none text-[#000] font-JustSans focus:ring-0 block w-full bg-[transparent] mb-[40px] px-[20px] border border-[#DDD] rounded-[16px] py-[20px] lg:py-[30px]`}
                  placeholder={"Please enter a search lids......"}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M28.001 27.9991L21.0717 21.0698M21.0717 21.0698C22.9471 19.1943 24.0008 16.6507 24.0008 13.9984C24.0008 11.3462 22.9471 8.80252 21.0717 6.92709C19.1963 5.05165 16.6526 3.99805 14.0004 3.99805C11.3481 3.99805 8.80448 5.05165 6.92904 6.92709C5.05361 8.80252 4 11.3462 4 13.9984C4 16.6507 5.05361 19.1943 6.92904 21.0698C8.80448 22.9452 11.3481 23.9988 14.0004 23.9988C16.6526 23.9988 19.1963 22.9452 21.0717 21.0698Z"
                      stroke="#CCCCCC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div> */}
              <div className="flex flex-col lg:flex-row w-70% sm:gap-[15px] xl:gap-[0]">
                {exhaustList.map((v, k) => (
                  <>
                    <label>
                      {
                        active == null || undefined ?
                          <div className="flex items-center justify-between mb-[30px]">
                            <div className="w-[60%]">
                              <div className="flex items-center parent-checks cursor-pointer" >
                                <input type="checkbox" onClick={() => activeLids(v)} checked={active == null || undefined ? defaultSelect.name == v.name : active == v.name}></input>
                                <p className="text-[#626262] text-[16px] sm:text-[18px] font-[800] font-JustSans ml-[8px]">
                                  {v.name}
                                </p>
                              </div>
                              <div className="mt-2">
                                <span className="text-[#626262] text-[13px] sm:text-[15px] font-[400] font-JustSans">price: (+10$)</span>
                              </div>
                            </div>
                            <div
                              className={
                                defaultSelect.name == v.name
                                  ? "lids items-center xl:pb-[15px] pb-[5px] pt-[5px]  xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer w-[30%] border-2 border-[#e5493a]"
                                  : "lids items-center xl:pb-[15px] pb-[5px] pt-[5px]  xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer w-[30%]"
                              }
                              key={k}

                            >

                              <div className="w-[90%] m-auto mb-0">
                                <img src={v.img} className="w-full h-full object-cover" />
                              </div>
                            </div>
                          </div>
                          :
                          <div className="flex items-center justify-between mb-[30px]">
                            <div className="w-[60%]">
                              <div className="flex items-center parent-checks cursor-pointer" >
                                <input type="checkbox" onClick={() => activeLids(v)} checked={active == null || undefined ? defaultSelect.name == v.name : active == v.name}></input>
                                <p className="text-[#626262] text-[16px] sm:text-[18px] font-[800] font-JustSans ml-[8px]">
                                  {v.name}
                                </p>
                              </div>
                              <div className="mt-2">
                                <span className="text-[#626262] text-[13px] sm:text-[15px] font-[400] font-JustSans">price: (+10$)</span>
                              </div>
                            </div>
                            <div
                              className={
                                active == v.name
                                  ? "lids items-center xl:pb-[15px] pb-[5px] pt-[5px]  xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer w-[30%] border-2 border-[#e5493a]"
                                  : "lids items-center xl:pb-[15px] pb-[5px] pt-[5px]  xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer w-[30%]"
                              }
                              key={k}

                            >

                              <div className="w-[90%] m-auto mb-0">
                                <img src={v.img} className="w-full h-full object-cover" />
                              </div>
                            </div>
                          </div>
                      }
                    </label>
                  </>
                ))}
              </div>
            </div> :
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={Animation}
              transition={{
                staggerChildren: 0.4,
                duration: .3,
                ease: "easeInOut",
              }}
              className="lids-parent justify-center"
            >

              {/* <div className="relative">
                <input
                  type="text"
                  name=""
                  className={`focus:outline-none text-[#626262] placeholder:text-[#626262] font-JustSans focus:ring-0 block w-full bg-[transparent] mb-[40px] px-[20px] border border-[#DDD] rounded-[16px] py-[20px] lg:py-[30px]`}
                  placeholder={"Please enter a search lids......"}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M28.001 27.9991L21.0717 21.0698M21.0717 21.0698C22.9471 19.1943 24.0008 16.6507 24.0008 13.9984C24.0008 11.3462 22.9471 8.80252 21.0717 6.92709C19.1963 5.05165 16.6526 3.99805 14.0004 3.99805C11.3481 3.99805 8.80448 5.05165 6.92904 6.92709C5.05361 8.80252 4 11.3462 4 13.9984C4 16.6507 5.05361 19.1943 6.92904 21.0698C8.80448 22.9452 11.3481 23.9988 14.0004 23.9988C16.6526 23.9988 19.1963 22.9452 21.0717 21.0698Z"
                      stroke="#CCCCCC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div> */}


              <div className=" flex flex-col sm:flex-row w-70% sm:gap-[15px] xl:gap-[0]">
                {exhaustList.map((v, k) => (
                  <>
                    {active == null || undefined ? (
                      <div
                        className={
                          defaultSelect.name == v.name
                            ? "lids border-2 border-[#e5493a] xl:mr-2 items-center mb-[40px] mx-auto  pb-[20px]  w-[70%] xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer"
                            : "lids xl:mr-2 items-center  w-[70%]  pb-[20px] mx-auto mb-[40px] xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer"
                        }
                        key={k}
                        onClick={() => activeLids(v)}
                      >
                        <p className="h-[40px] font-JustSans pt-[10px] mb-[12px] text-[#313131] text-[15px] font-[800] text-center">
                          {v.name}
                        </p>
                        <div className="w-[90%] m-auto mb-0">
                          <img src={v.img} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center mt-3"><span className="text-[#626262] text-[15px] font-[400] font-JustSans">price: (+10$)</span></div>
                      </div>
                    ) : (
                      <div
                        className={
                          active == v.name
                            ? "lids border-2 border-[#e5493a] xl:mr-2 mx-auto mb-[40px] items-center  pb-[20px]  w-[70%] xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer"
                            : "lids xl:mr-2 items-center w-[70%] mx-auto  pb-[20px] mb-[40px] xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer"
                        }
                        key={k}
                        onClick={() => activeLids(v)}
                      >
                        <p className="h-[40px] font-JustSans pt-[10px] mb-[12px] text-[#313131] text-[15px] font-[800] text-center">
                          {v.name}
                        </p>
                        <div className="w-[90%] m-auto mb-0">
                          <img src={v.img} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center mt-3"><span className="text-[#626262] text-[15px] font-[400] font-JustSans">price: (+10$)</span></div>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </motion.div>
        }
      </>
    );
  };



  const Hardware = () => {
    const [searchValue, setSearchValue] = useState("");
    const [show, setShow] = useState(true);
    const [active, setActive] = useState(null);
    const totalPrice = localStorage.getItem("totalPrice");
    const [defaultSelect, setDefaultSelect] = useState({
      img: "/static/media/e1.90be0cd19d138c1d3581.png",
      name: "Silver Hardware",
    });
    const [mainPrice, setMainPrice] = useState(totalPrice);

    const activeHardware = (value) => {
      setActive(value?.name);
      if (!active) {
        setMainPrice(Number(mainPrice) + 10);
      }
      localStorage.setItem("activeHard", JSON.stringify({ ...value }));
      setTimeout(() => {
        nextStep();
        setDone(true);
      }, 800);
    };

    useEffect(() => {
      localStorage.setItem("totalPrice", mainPrice);
    }, [mainPrice]);

    useEffect(() => {
      const activeHared = JSON.parse(localStorage.getItem("activeHard"));
      setActive(activeHared?.name);
    }, []);

    const removeTrack = () => {
      localStorage.removeItem("activeHard");
    };

    useEffect(() => {
      window.addEventListener("beforeunload", removeTrack);
    }, []);
    useEffect(() => {
      if (active == null) {
        localStorage.setItem(
          "defaultHardware",
          JSON.stringify({ ...defaultSelect })
        );
      } else {
        localStorage.removeItem("defaultHardware");
      }
    }, [active]);

    const exhaustList = [
      { name: "Chrome", img: h1 },
      { name: "Black", img: h2 },
      { name: "Silver Hardware", img: e1 },
    ].filter((c) => c.name.toLowerCase().includes(searchValue.toLowerCase()));

    const Animation = {
      hidden: {
        y: -40,
      },
      visible: {
        y: 0,
      },
    };

    return (
      <>
        {
          isSmall ?
            <div

              className="hardware-parent justify-center"
            >

              {/* <div className="relative">
                <input
                  type="text"
                  name=""
                  className={`focus:outline-none text-[#626262] placeholder:text-[#626262]  font-JustSans focus:ring-0 block w-full bg-[transparent] mb-[40px] px-[20px] pr-[60px] lg:pr-0 border border-[#DDD] rounded-[16px] py-[20px] lg:py-[30px]`}
                  placeholder={"Please enter a search hardware......"}
                  onChange={(e) => setSearchValue(e.target.value)}
                />

                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M28.001 27.9991L21.0717 21.0698M21.0717 21.0698C22.9471 19.1943 24.0008 16.6507 24.0008 13.9984C24.0008 11.3462 22.9471 8.80252 21.0717 6.92709C19.1963 5.05165 16.6526 3.99805 14.0004 3.99805C11.3481 3.99805 8.80448 5.05165 6.92904 6.92709C5.05361 8.80252 4 11.3462 4 13.9984C4 16.6507 5.05361 19.1943 6.92904 21.0698C8.80448 22.9452 11.3481 23.9988 14.0004 23.9988C16.6526 23.9988 19.1963 22.9452 21.0717 21.0698Z"
                      stroke="#CCCCCC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div> */}


              <div className="flex flex-col lg:flex-row w-70% sm:gap-[15px] xl:gap-[0]">
                {exhaustList.map((v, k) => (
                  <>
                    <label>
                      {
                        active == null || undefined
                          ?
                          <div className="flex items-center justify-between mb-[30px]">
                            <div className="w-[60%]">
                              <div className="flex items-center parent-checks cursor-pointer" >
                                <input type="checkbox" onClick={() => activeHardware(v)} checked={active == v.name || defaultSelect.name == v.name}></input>
                                <p className="text-[#626262] text-[16px] sm:text-[18px] font-[800] font-JustSans ml-[8px]">
                                  {v.name}
                                </p>
                              </div>
                              <div className="mt-2">
                                <span className="text-[#626262] text-[13px] sm:text-[15px] font-[400] font-JustSans">price: (+10$)</span>
                              </div>
                            </div>
                            <div
                              className={
                                defaultSelect.name == v.name
                                  ? "items-center xl:pb-[15px] pb-[5px] pt-[5px]  xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer w-[30%] border-2 border-[#e5493a]"
                                  : "items-center xl:pb-[15px] pb-[5px] pt-[5px]  xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer w-[30%]"
                              }
                              key={k}
                              onClick={() => activeHardware(v)}
                            >

                              <div className="w-[90%] h-[80%] m-auto mb-0">
                                <img src={v.img} className="w-full h-full object-cover" />
                              </div>
                            </div>

                          </div>
                          :
                          <div className="flex items-center justify-between mb-[30px]">
                            <div className="w-[60%]">
                              <div className="flex items-center parent-checks cursor-pointer" >
                                <input type="checkbox" onClick={() => activeHardware(v)} checked={active == null || undefined ? defaultSelect.name == v.name : active == v.name}></input>
                                <p className="text-[#626262] text-[16px] sm:text-[18px] font-[800] font-JustSans ml-[8px]">
                                  {v.name}
                                </p>
                              </div>
                              <div className="mt-2">
                                <span className="text-[#626262] text-[13px] sm:text-[15px] font-[400] font-JustSans">price: (+10$)</span>
                              </div>
                            </div>
                            <div
                              className={
                                active == v.name
                                  ? "items-center xl:pb-[15px] pb-[5px] pt-[5px]  xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer w-[30%] border-2 border-[#e5493a]"
                                  : "items-center xl:pb-[15px] pb-[5px] pt-[5px]  xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer w-[30%]"
                              }
                              key={k}
                              onClick={() => activeHardware(v)}
                            >

                              <div className="w-[90%] h-[80%] m-auto mb-0">
                                <img src={v.img} className="w-full h-full object-cover" />
                              </div>
                            </div>
                          </div>
                      }
                    </label>
                  </>
                ))}
              </div>
            </div>
            :
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={Animation}
              transition={{
                staggerChildren: 0.4,
                duration: .3,
                ease: "easeInOut",
              }}
              className="hardware-parent justify-center"
            >

              {/* <div className="relative">
                <input
                  type="text"
                  name=""
                  className={`focus:outline-none text-[#626262] placeholder:text-[#626262]  font-JustSans focus:ring-0 block w-full bg-[transparent] mb-[40px] px-[20px] pr-[60px] lg:pr-0 border border-[#DDD] rounded-[16px] py-[20px] lg:py-[30px]`}
                  placeholder={"Please enter a search hardware......"}
                  onChange={(e) => setSearchValue(e.target.value)}
                />

                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M28.001 27.9991L21.0717 21.0698M21.0717 21.0698C22.9471 19.1943 24.0008 16.6507 24.0008 13.9984C24.0008 11.3462 22.9471 8.80252 21.0717 6.92709C19.1963 5.05165 16.6526 3.99805 14.0004 3.99805C11.3481 3.99805 8.80448 5.05165 6.92904 6.92709C5.05361 8.80252 4 11.3462 4 13.9984C4 16.6507 5.05361 19.1943 6.92904 21.0698C8.80448 22.9452 11.3481 23.9988 14.0004 23.9988C16.6526 23.9988 19.1963 22.9452 21.0717 21.0698Z"
                      stroke="#CCCCCC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div> */}


              <div className="flex flex-col sm:flex-row w-70% sm:gap-[15px] xl:gap-[0]">
                {exhaustList.map((v, k) => (
                  <>
                    {active == null || undefined ? (
                      <div
                        className={
                          defaultSelect.name == v.name
                            ? "border-2 border-[#e5493a] pb-[45px] xl:mr-2 mx-auto items-center mb-[40px]  w-[70%] xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer"
                            : "xl:mr-2 items-center pb-[45px] w-[70%] mx-auto xl:w-[216px] mb-[40px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer"
                        }
                        key={k}
                        onClick={() => activeHardware(v)}
                      >
                        <p className="h-[40px] font-JustSans pt-[10px] mb-[12px] text-[#313131] text-[15px] font-[800] text-center">
                          {v.name}
                        </p>
                        <div className="w-[90%] h-[80%] m-auto mb-0">
                          <img src={v.img} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center mt-2"><span className="text-[#626262] text-[15px] font-[400] font-JustSans">price: (+10$)</span></div>
                      </div>
                    ) : (
                      <div
                        className={
                          active == v.name
                            ? "border-2 border-[#e5493a] pb-[45px] mx-auto xl:mr-2 items-center mb-[40px] w-[70%] xl:w-[216px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer"
                            : "xl:mr-2 items-center pb-[45px] w-[70%] mx-auto xl:w-[216px] mb-[40px] bg-[#FFF] border-[#DDD] border rounded-[8px] cursor-pointer"
                        }
                        key={k}
                        onClick={() => activeHardware(v)}
                      >
                        <p className="h-[40px] font-JustSans pt-[10px] mb-[12px] text-[#313131] text-[15px] font-[800] text-center">
                          {v.name}
                        </p>
                        <div className="w-[90%] h-[80%] m-auto mb-0">
                          <img src={v.img} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center mt-2">
                          <span className="text-[#626262] text-[15px] font-[400] font-JustSans">price: (+10$)</span>
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </motion.div>
        }
      </>
    );
  };

  const steps = [
    {
      label: "Color",
      step: 1,
      Content: Color,
    },
    {
      label: "Exhaust",
      step: 2,
      Content: Exhaust,
    },
    {
      label: "Lids",
      Content: Lids,
      step: 3,
    },
    {
      label: "Hardware",
      Content: Hardware,
      step: 4,
    },
  ];

  const totalSteps = steps.length;

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const Rsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <Rnext />,
    prevArrow: <Rprev />,
    // responsive: [
    //   {
    //     breakpoint: 991,
    //     settings: {
    //       slidesToShow: 5,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 575,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  const parentSetings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const darkBar = true ? true : false;

  const smallSliderChild = {
    dots: false,
    infinite: true,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <SmallNextArrow />,
    prevArrow: <SmallPrevArrow />,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  const SmallParentSetings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  const increase = (e) => {
    e.preventDefault();
    setCount((prev) => prev + 1);
    localStorage.setItem("totalPrice", Number(totalPrice) + 40);
  };
  const decrease = (e) => {
    e.preventDefault();
    setCount((prev) => prev - 1);
    localStorage.setItem("totalPrice", Number(totalPrice) - 40);
  };

  const accordionViewHandler = (e) => {
    if (window.screen.width > 1199) return;
    const element = e.target.closest('.accordion__button')
    if (!element) return;
    if (element.getAttribute('aria-expanded') === 'true') return;

    // scroll the target element into view
    setTimeout(() => {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }, 200)
  }


  return (
    <>
      <ToastContainer limit={1} />
      <MainContainer className="main-parent">
        <ProdductContainer className="parent-left">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={Animation}
            viewport={{ once: true }}
            transition={{
              staggerChildren: 0.2,
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="mt-[100px] lg:mt-[130px] xl:mt-[35px] w-[95%] lg:w-[90%] xl:w-[90%] mx-auto xl:ml-auto xl:mx-0 flex flex-col justify-center mb-0 lg:mb-[30px]"
          >
            <ProductText className="left-heading">
              4.5” Stretched Saddlebags for Harley Touring (2014-2023)
            </ProductText>
            {isSmall && (
              <>
                <div className="relative">
                  <div className="parent-slider">
                    <Slider
                      asNavFor={nav2}
                      ref={slider1}
                      {...SmallParentSetings}
                    >
                      <div className="bg-[#F6F5F6] rounded-[15px] w-full h-[400px] inline-flex justify-center items-center big-image">
                        <Sthree />
                      </div>
                      <div className="bg-[#F6F5F6] rounded-[15px] w-full h-[400px] inline-flex justify-center items-center big-image">
                        <Sfour />
                      </div>
                      <div className="bg-[#F6F5F6] rounded-[15px] w-full h-[400px] inline-flex justify-center items-center big-image">
                        <Sone />
                      </div>
                      <div className="bg-[#F6F5F6] rounded-[15px] w-full h-[400px] inline-flex justify-center items-center big-image">
                        <Sfour />
                      </div>
                      <div className="bg-[#F6F5F6] rounded-[15px] w-full h-[400px] inline-flex justify-center items-center big-image">
                        <Stwo />
                      </div>
                      <div className="bg-[#F6F5F6] rounded-[15px] w-full h-[400px] inline-flex justify-center items-center big-image">
                        <Sone />
                      </div>
                      <div className="bg-[#F6F5F6] rounded-[15px] w-full h-[400px] inline-flex justify-center items-center big-image">
                        <Sthree />
                      </div>
                      <div className="bg-[#F6F5F6] rounded-[15px] w-full h-[400px] inline-flex justify-center items-center big-image">
                        <Sfour />
                      </div>
                    </Slider>
                  </div>
                  <div className="absolute top-[50%] translate-y-[-50%] right-[15px] w-[20%]">
                    <div className="small-slide">
                      <Slider
                        {...smallSliderChild}
                        asNavFor={nav1}
                        ref={slider2}
                        slidesToShow={5}
                        swipeToSlide={true}
                        focusOnSelect={true}
                      >
                        <div className="rounded-[7px]  w-[50px] h-[50px] cursor-pointer">
                          <img
                            src={s1}
                            className="object-contain mx-auto w-full h-full"
                          />
                        </div>
                        <div className="rounded-[7px]  w-[50px] h-[50px] cursor-pointer">
                          <img
                            src={s2}
                            className="object-contain mx-auto w-full h-full"
                          />
                        </div>
                        <div className="rounded-[7px]  w-[50px] h-[50px] cursor-pointer">
                          <img
                            src={s3}
                            className="object-contain mx-auto w-full h-full"
                          />
                        </div>
                        <div className="rounded-[7px]  w-[50px] h-[50px] cursor-pointer">
                          <img
                            src={s2}
                            className="object-contain mx-auto w-full h-full"
                          />
                        </div>
                        <div className="rounded-[7px]  w-[50px] h-[50px] cursor-pointer">
                          <img
                            src={s4}
                            className="object-contain mx-auto w-full h-full"
                          />
                        </div>
                        <div className="rounded-[7px]  w-[50px] h-[50px] cursor-pointer">
                          <img
                            src={s3}
                            className="object-contain mx-auto w-full h-full"
                          />
                        </div>
                        <div className="rounded-[7px]  w-[50px] h-[50px] cursor-pointer">
                          <img
                            src={s1}
                            className="object-contain mx-auto w-full h-full"
                          />
                        </div>
                        <div className="rounded-[7px]  w-[50px] h-[50px] cursor-pointer">
                          <img
                            src={s2}
                            className="object-contain mx-auto w-full h-full"
                          />
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
                <div className="reviews mt-[30px]">
                  <h4 className="font-JustSans text-[30px] lg:text-[48px] text-[#313131]">Our Customers Reviews</h4>
                  <Slider {...Rsettings}>
                    <div className="reviews_slider px-1">
                      <div className="flex justify-between items-center mt-[20px]">
                        <div>
                          <Reviews />
                        </div>
                        <div>
                          <span className="font-JustSans text-[18px] text-[#666]">10 July 2023</span>
                        </div>
                      </div>
                      <p className="font-JustSans text-[14px] lg:text-[18px] leading-[20px] lg:leading-[35px] text-[#666] mt-[30px]">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
                      </p>
                      <div className="flex justify-between items-center mt-[20px]">
                        <div className="flex items-center">
                          <div className="w-[58px] h-[58px]">
                            <img className="w-full h-full object-cover" src={habib} />
                          </div>
                          <div className="ml-5">
                            <p className="font-JustSans text-[18px] text-[#202020]">Habibur Rahman</p>
                            <span className="font-JustSans text-[18px] text-[#666]">CEO XYZ</span>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="reviews_slider px-1">
                      <div className="flex justify-between items-center mt-[20px]">
                        <div>
                          <Reviews />
                        </div>
                        <div>
                          <span className="font-JustSans text-[18px] text-[#666]">10 July 2023</span>
                        </div>
                      </div>
                      <p className="font-JustSans text-[14px] lg:text-[18px] leading-[20px] lg:leading-[35px] text-[#666] mt-[30px]">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
                      </p>
                      <div className="flex justify-between items-center mt-[20px]">
                        <div className="flex items-center">
                          <div className="w-[58px] h-[58px]">
                            <img className="w-full h-full object-cover" src={azmir} />
                          </div>
                          <div className="ml-5">
                            <p className="font-JustSans text-[18px] text-[#202020]">Habibur Rahman</p>
                            <span className="font-JustSans text-[18px] text-[#666]">CEO XYZ</span>
                          </div>
                        </div>

                      </div>
                    </div>

                  </Slider>
                </div>
                <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center flex-wrap mt-[40px]">
                  {
                    ShippingData.map((item, i) => (
                      <div className="w-full flex flex-col sm:flex-row items-center justify-between mb-[20px]" key={i}>
                        <div className="w-[50px] h-[50px] bg-[#F2F4F5] flex items-center justify-center rounded-[4px]">
                          {item.icons}
                        </div>
                        <div className="w-[78%] sm:w-[88%] text-center sm:text-start">
                          <h5 className="font-JustSans text-[20px] font-[500] text-[#313131]">{item.title}</h5>
                          <p className="font-JustSans text-[14px] text-[#313131]">{item.desc}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </>
            )}
            {isLarge && (
              <>
                <div className="parent-slider">
                  <Slider asNavFor={nav2} ref={slider1} {...parentSetings}>
                    <div className="bg-[#F6F5F6] rounded-[15px] mb-[60px] w-full xl:h-[500px] 4xl:h-[600px] inline-flex justify-center items-center big-image">
                      <Sthree />
                    </div>
                    <div className="bg-[#F6F5F6] rounded-[15px] mb-[60px] w-full xl:h-[500px] 4xl:h-[600px] inline-flex justify-center items-center big-image">
                      <Sfour />
                    </div>
                    <div className="bg-[#F6F5F6] rounded-[15px] mb-[60px] w-full xl:h-[500px] 4xl:h-[600px] inline-flex justify-center items-center big-image">
                      <Sone />
                    </div>
                    <div className="bg-[#F6F5F6] rounded-[15px] mb-[60px] w-full xl:h-[500px] 4xl:h-[600px] inline-flex justify-center items-center big-image">
                      <Sfour />
                    </div>
                    <div className="bg-[#F6F5F6] rounded-[15px] mb-[60px] w-full xl:h-[500px] 4xl:h-[600px] inline-flex justify-center items-center big-image">
                      <Stwo />
                    </div>
                    <div className="bg-[#F6F5F6] rounded-[15px] mb-[60px] w-full xl:h-[500px] 4xl:h-[600px] inline-flex justify-center items-center big-image">
                      <Sone />
                    </div>
                    <div className="bg-[#F6F5F6] rounded-[15px] mb-[60px] w-full xl:h-[500px] 4xl:h-[600px] inline-flex justify-center items-center big-image">
                      <Sthree />
                    </div>
                    <div className="bg-[#F6F5F6] rounded-[15px] mb-[60px] w-full xl:h-[500px] 4xl:h-[600px] inline-flex justify-center items-center big-image">
                      <Sfour />
                    </div>
                  </Slider>
                </div>
                <div className="product-slider">
                  <Slider
                    {...settings}
                    asNavFor={nav1}
                    ref={slider2}
                    slidesToShow={6}
                    swipeToSlide={true}
                    focusOnSelect={true}
                  >
                    <div className="bg-[#F6F5F6] rounded-[7px]  w-[125px] h-[100px] cursor-pointer">
                      <img
                        src={s1}
                        className="object-contain mx-auto w-full h-full"
                      />
                    </div>
                    <div className="bg-[#F6F5F6] rounded-[7px]  w-[125px] h-[100px] cursor-pointer">
                      <img
                        src={s2}
                        className="object-contain mx-auto w-full h-full"
                      />
                    </div>
                    <div className="bg-[#F6F5F6] rounded-[7px]  w-[125px] h-[100px] cursor-pointer">
                      <img
                        src={s3}
                        className="object-contain mx-auto w-full h-full"
                      />
                    </div>
                    <div className="bg-[#F6F5F6] rounded-[7px]  w-[125px] h-[100px] cursor-pointer">
                      <img
                        src={s2}
                        className="object-contain mx-auto w-full h-full"
                      />
                    </div>
                    <div className="bg-[#F6F5F6] rounded-[7px]  w-[125px] h-[100px] cursor-pointer">
                      <img
                        src={s4}
                        className="object-contain mx-auto w-full h-full"
                      />
                    </div>
                    <div className="bg-[#F6F5F6] rounded-[7px]  w-[125px] h-[100px] cursor-pointer">
                      <img
                        src={s3}
                        className="object-contain mx-auto w-full h-full"
                      />
                    </div>
                    <div className="bg-[#F6F5F6] rounded-[7px]  w-[125px] h-[100px] cursor-pointer">
                      <img
                        src={s1}
                        className="object-contain mx-auto w-full h-full"
                      />
                    </div>
                    <div className="bg-[#F6F5F6] rounded-[7px]  w-[125px] h-[100px] cursor-pointer">
                      <img
                        src={s2}
                        className="object-contain mx-auto w-full h-full"
                      />
                    </div>
                  </Slider>
                </div>
                <div className="reviews mt-[30px]">
                  <h4 className="font-JustSans text-[48px] text-[#313131]">Our Customers Reviews</h4>
                  <Slider {...Rsettings}>
                    <div className="reviews_slider px-1">
                      <div className="flex justify-between items-center mt-[20px]">
                        <div>
                          <Reviews />
                        </div>
                        <div>
                          <span className="font-JustSans text-[18px] text-[#666]">10 July 2023</span>
                        </div>
                      </div>
                      <p className="font-JustSans text-[18px] leading-[35px] text-[#666] mt-[30px]">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
                      </p>
                      <div className="flex justify-between items-center mt-[20px]">
                        <div className="flex items-center">
                          <div className="w-[58px] h-[58px]">
                            <img className="w-full h-full object-cover" src={habib} />
                          </div>
                          <div className="ml-5">
                            <p className="font-JustSans text-[18px] text-[#202020]">Habibur Rahman</p>
                            <span className="font-JustSans text-[18px] text-[#666]">CEO XYZ</span>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="reviews_slider px-1">
                      <div className="flex justify-between items-center mt-[20px]">
                        <div>
                          <Reviews />
                        </div>
                        <div>
                          <span className="font-JustSans text-[18px] text-[#666]">10 July 2023</span>
                        </div>
                      </div>
                      <p className="font-JustSans text-[18px] leading-[35px] text-[#666] mt-[30px]">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
                      </p>
                      <div className="flex justify-between items-center mt-[20px]">
                        <div className="flex items-center">
                          <div className="w-[58px] h-[58px]">
                            <img className="w-full h-full object-cover" src={azmir} />
                          </div>
                          <div className="ml-5">
                            <p className="font-JustSans text-[18px] text-[#202020]">Azmir Uddin</p>
                            <span className="font-JustSans text-[18px] text-[#666]">CEO XYZ</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </Slider>
                </div>
                <div className="flex justify-between items-center flex-wrap mt-[40px]">
                  {
                    ShippingData.map((item, i) => (
                      <div className="w-[32%] md:w-[48%] lg:w-[50%] 3xl:w-[32%] flex xl:flex-col 4xl:flex-row justify-between md:last:mt-[20px] 3xl:last:mt-[0px]" key={i}>
                        <div className="w-[50px] h-[50px] xl:mb-[8px] 2xl:mb-0  bg-[#F2F4F5] flex items-center justify-center rounded-[4px]">
                          {item.icons}
                        </div>
                        <div className="w-[78%] md:w-[85%] 3xl:pl-2 4xl:w-[78%]">
                          <h5 className="font-JustSans text-[20px] lg:text-[18px] 4xl:text-[20px] font-[500] text-[#313131]">{item.title}</h5>
                          <p className="font-JustSans text-[14px] leading-[25px] text-[#313131]">{item.desc}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </>
            )}
          </motion.div>
        </ProdductContainer>
        <ConfigContainer className="parent-right">
          {/* <div className="hidden xl:block mx-auto sm:w-[86%] lg:w-[83%] xl:w-[90%] 2xl:w-[90%] 3xl:w-[80%] w-[90%]">
            <SummaryBarTop
              summary={summary}
              steps={steps}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              setDone={setDone}
            />
          </div> */}
          <div className="desc mx-auto sm:w-[96%] lg:w-[92%] xl:w-[90%] 3xl:w-[81%] w-[90%] mb-[20px] 4xl:mb-[40px]">
            <h4 className="font-JustSans text-[18px] md:text-[24px] xl:text-[18px] 2xl:text-[24px] 4xl:pr-[100px]">DUAL EXHAUST 4.5" STRETCHED SADDLEBAGS FOR HARLEY DAVIDSON (2014-2023)</h4>
            <p className="font-JustSans text-[14px] md:text-[18px] xl:text-[14px] 2xl:text-[18px] text-[#626262] mt-[18px] lg:mt-[24px] lg:pr-[90px] xl:pr-0 4xl:pr-[150px] leading-[20px] md:leading-[35px] xl:leading-[25px] 2xl:leading-[35px]">Looking for that stretched look on your 2014-2023 Harley? Our 4.5" stretched bags are the first one piece injection ABS bags to hit the market for Harley's newest generation of bikes!</p>
          </div>
          {
            !done && <div className="hidden xl:block border-b-2 border-[#ffffff1a] pb-[20px] lg:pb-[10px] mb-[20px] xl:mb-[10px] mx-[88px] xl:mx-[30px] 4xl:mx-[88px]">
              <div className="flex items-center justify-between">
                <p className="text-[32px] text-[#626262] mr-4 font-JustSans">
                  <sup className="text-[18px] mr-[10px]">from</sup>${totalPrice}
                </p>
                <button className="text-white font-JustSans rounded-[8px] py-[14px] px-[26px] font-[800] bg-[#E5493A] text-[16px] hover:bg-[#2e2f31] transition ease-linear duration-100">
                  Add to cart
                </button>
              </div>
            </div>
          }
          {done ? (
            <Summary
              setTotalQuantity={setTotalQuantity}
              setMainPrice={setMainPrice}
              mainPrice={mainPrice}
              totalPrice={totalPrice}
              count={count}
              setCount={setCount}
              showAnimate={showAnimate}
              prevSum={prevSum}
              activeStep={activeStep}
            />
          ) : (
            <div className="lg:w-[95%] xl:w-[90%] 2xl:w-[90%] 4xl:w-[80%] w-[100%] lg:m-auto lg:mt-[45px]">

              <Accordion allowZeroExpanded="true" preExpanded={['1']}>
                {steps.map(({ Content, step, label }, index) => (
                  <div key={step}>
                    <AccordionItem uuid={step.toString()} >
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <h3 onClick={accordionViewHandler} className="flex items-center font-Quart text-[#000] text-[20px]"> <span className="font-JustSans text-white text-[18px] mr-[15px]">0{step}</span>{label}</h3>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <Content key={step} />
                      </AccordionItemPanel>
                    </AccordionItem>
                  </div>
                ))}
              </Accordion>
            </div>
          )}



          {isSmallTwo ? (
            <LayoutGroup>
              <motion.div
                layout
                className={`cursor-pointer mx-auto fixed bottom-0 left-0 w-full ${darkBar
                  ? `bg-[rgba(85,85,85,.8)] border-[rgba(255,255,255,.2)]`
                  : `bg-[rgba(255,255,255,.85)] border-[#fff]`
                  } backdrop-filter backdrop-blur-[10px] border  border-l-0 border-r-0 border-b-0 lg:border-t-0 lg:bg-[#222] px-[20px] lg:px-[12px] xl:px-[50px] py-5 lg:py-2 z-[99] rounded-[25px_25px_0_0] lg:rounded-none`}
              >
                {isSmallTwo && showHeight && (
                  <div
                    className="w-[40px] mt-[15px] h-[40px] rounded-full bg-[rgba(255,255,255,.4)] border-[#fff] lg:w-fit lg:h-fit lg:bg-[rgba(255,255,255,0.0)] flex justify-center items-center backdrop-filter backdrop-blur-md lg:border-none lg:top-[50%] translate-y-[-50%] left-[15px]"
                    onClick={() => setShowHeight(false)}
                  >
                    <RxCross2
                      size={20}
                      color="#fff"
                      className="cursor-pointer"
                    />
                  </div>
                )}
                <div className={`flex items-center`}>

                  <SummaryBar2
                    setActiveStep={setActiveStep}
                    activeStep={activeStep}
                    setDone={setDone}
                    colorsLists={colorsLists}
                    exhaustLists={exhaustLists}
                    LidsLists={LidsLists}
                    HardwareLists={HardwareLists}
                    summary={summary}
                    basicPrice={basicPrice}
                    setBasicPrice={setBasicPrice}
                    showToast={showToast}
                    setShowToast={setShowToast}
                    totalPrice={totalPrice}
                  />
                  <div onClick={() => setShowHeight(true)}>
                    <span
                      className={`lg:hidden font-JustSans ${darkBar ? `text-white` : `text-[#222]`
                        } lg:text-white text-[18px]`}
                    >
                      Summary
                    </span>
                  </div>

                  <div className="flex ml-auto">
                    <div className="flex items-center gap-[8px]">
                      <div className="flex flex-col w-full">
                        <p className="text-[10px] uppercase text-white font-JustSans tracking-[2px] leading-[1.1] mr-4 w-full hidden lg:flex ">
                          Your total
                        </p>
                        <p
                          className={`text-[24px] ${darkBar ? `text-white` : `text-[#222]`
                            } lg:text-white font-JustSans lg:mr-4 leading-[1.1]`}
                        >
                          ${totalPrice}
                        </p>
                      </div>
                      <div className="hidden lg:flex items-center bg-[rgba(255,255,255,.1)] border border-[rgba(0,0,0,.2)] lg:border-[rgba(255,255,255,.2)] px-[10px] pt-[6px] pb-[7px] rounded-[8px] justify-center">
                        <button
                          className="mr-[14px] text-[#222] lg:text-[#fff] text-[17px] focus:text-[#626262]"
                          onClick={decrease}
                          disabled={count == 1}
                        >
                          -
                        </button>
                        <span className="font-JustSans text-[17px] text-[#222] lg:text-white text-center">
                          {totalQuantity || 1}
                        </span>
                        <button
                          className="ml-[14px] text-[#222] lg:text-[#fff] text-[17px] focus:text-[#626262]"
                          onClick={increase}
                        >
                          +
                        </button>
                      </div>
                      <button className="whitespace-nowrap text-white w-full font-JustSans rounded-[8px] py-[10px] px-[15px] lg:px-[26px] font-[800] bg-[#E5493A] text-[14px]  lg:hover:text-[#E5493A] lg:hover:bg-[#fff] transition ease-linear duration-100">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                {isSmallTwo && (
                  <SummaryBar
                    basicPrice={basicPrice}
                    setBasicPrice={setBasicPrice}
                    totalPrice={totalPrice}
                    setShowToast={setShowToast}
                    showToast={showToast}
                    showHeight={showHeight}
                    colorsLists={colorsLists}
                    exhaustList={exhaustLists}
                    LidsLists={LidsLists}
                    HardwareLists={HardwareLists}
                    summary={summary}
                    setActiveStep={setActiveStep}
                    setShowHeight={setShowHeight}
                    setDone={setDone}
                  />
                )}
              </motion.div>
            </LayoutGroup>
          ) : (
            <div
              layout
              className={`cursor-pointer mx-auto fixed bottom-0 left-0 w-full ${darkBar
                ? `bg-[rgba(85,85,85,.8)] border-[rgba(255,255,255,.2)]`
                : `bg-[rgba(255,255,255,.85)] border-[#fff]`
                } backdrop-filter backdrop-blur-[10px] border  border-l-0 border-r-0 border-b-0 lg:border-t-0 lg:bg-[#222] px-[20px] lg:px-[12px] xl:px-[50px] py-5 lg:py-2 z-[99] rounded-[25px_25px_0_0] lg:rounded-none`}
            >
              <div className={`flex items-center`}>
                {isSmallTwo && showHeight && (
                  <div
                    className="absolute w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,.4)] border-[#fff] top-[-3px] lg:w-fit lg:h-fit lg:bg-[rgba(255,255,255,0.0)] flex justify-center items-center backdrop-filter backdrop-blur-md lg:border-none lg:top-[50%] translate-y-[-50%] left-[15px]"
                    onClick={() => setShowHeight(false)}
                  >
                    <RxCross2
                      size={20}
                      color="#fff"
                      className="cursor-pointer"
                    />
                  </div>
                )}
                <SummaryBar2
                  setActiveStep={setActiveStep}
                  activeStep={activeStep}
                  setDone={setDone}
                  colorsLists={colorsLists}
                  exhaustLists={exhaustLists}
                  LidsLists={LidsLists}
                  HardwareLists={HardwareLists}
                  summary={summary}
                  basicPrice={basicPrice}
                  setBasicPrice={setBasicPrice}
                  showToast={showToast}
                  setShowToast={setShowToast}
                  totalPrice={totalPrice}
                />
                <span
                  className={`lg:hidden font-JustSans ${darkBar ? `text-white` : `text-[#222]`
                    } lg:text-white text-[18px]`}
                  onClick={() => setShowHeight(true)}
                >
                  Summary
                </span>

                <div className="flex ml-auto">
                  <div className="flex items-center gap-[8px]">
                    <div className="flex flex-col w-full">
                      <p className="text-[10px] uppercase text-white font-JustSans tracking-[2px] leading-[1.1] mr-4 w-full hidden lg:flex ">
                        Your total
                      </p>
                      <p
                        className={`text-[24px] ${darkBar ? `text-white` : `text-[#222]`
                          } lg:text-white font-JustSans lg:mr-4 leading-[1.1]`}
                      >
                        ${totalPrice}
                      </p>
                    </div>
                    <div className="hidden lg:flex items-center bg-[rgba(255,255,255,.1)] border border-[rgba(0,0,0,.2)] lg:border-[rgba(255,255,255,.2)] px-[10px] pt-[6px] pb-[7px] rounded-[8px] justify-center">
                      <button
                        className="mr-[14px] text-[#222] lg:text-[#fff] text-[17px] focus:text-[#626262]"
                        onClick={decrease}
                        disabled={count == 1}
                      >
                        -
                      </button>
                      <span className="font-JustSans text-[17px] text-[#222] lg:text-white text-center">
                        {totalQuantity || 1}
                      </span>
                      <button
                        className="ml-[14px] text-[#222] lg:text-[#fff] text-[17px] focus:text-[#626262]"
                        onClick={increase}
                      >
                        +
                      </button>
                    </div>
                    <button className="whitespace-nowrap text-white w-full font-JustSans rounded-[8px] py-[10px] px-[15px] lg:px-[26px] font-[800] bg-[#E5493A] text-[14px]  lg:hover:text-[#E5493A] lg:hover:bg-[#fff] transition ease-linear duration-100">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              {isSmallTwo && (
                <SummaryBar
                  basicPrice={basicPrice}
                  setBasicPrice={setBasicPrice}
                  totalPrice={totalPrice}
                  setShowToast={setShowToast}
                  showToast={showToast}
                  showHeight={showHeight}
                  colorsLists={colorsLists}
                  exhaustList={exhaustLists}
                  LidsLists={LidsLists}
                  HardwareLists={HardwareLists}
                  summary={summary}
                />
              )}
            </div>
          )}
        </ConfigContainer >
      </MainContainer >
    </>
  );
};

export default ProductConfigurator;
