import { useState, useCallback, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TabPane from "../components/TabPane";
import CardList from "../components/CardList";

const BenefitKupon = () => {

  return (
    <>
      <div className="relative  bg-base-black-russian-1 w-full h-[2223px] overflow-hidden text-left text-base text-tints-black-russian-1-tints-6-ghost font-mulish">
        <Navbar />
        <div className="absolute top-[144px] left-[156px] flex flex-col items-start justify-start gap-[24px] text-lg text-primary-white">
          <div className="self-stretch flex flex-col items-center justify-center gap-[12px] text-[26px] font-raleway">
            <div className="self-stretch h-[43px] shrink-0 flex flex-row items-center justify-start gap-[6px]">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6 shrink-0 object-cover hidden"
                  alt=""
                  src="../icon-fire@2x.png"
                />
                <b className="relative">Benefit Kupon Untuk Kamu</b>
                <div className="relative text-[inherit] tracking-[0.04em] font-medium font-inherit text-gray-600 hidden">
                  <ul className="m-0 pl-[21px]">{`8 MOVIE & SERIES`}</ul>
                </div>
              </div>
            </div>
            <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-base-black-russian-2" />
          </div>
          <TabPane />
          <CardList />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BenefitKupon;
