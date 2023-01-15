import React from 'react'

const Navbar = () => {
  return (
     <div className="absolute top-[0px] left-[calc(50%_-_637.5px)] bg-base-black-russian-2 w-[1275px] flex flex-row py-6 px-[120px] box-border items-center justify-between text-tints-black-russian-1-tints-5-mischka w-max">
          <div className="flex flex-row items-center justify-center gap-[93px]">
            <img
              className="relative w-28 h-9 shrink-0 object-cover"
              alt=""
              src="../logo-cubmu1@2x.png"
            />
            <div className="flex flex-row items-start justify-start gap-[50px]">
              <b className="relative tracking-[0.04em] leading-[24px] uppercase">
                Home
              </b>
              <div className="relative tracking-[0.04em] leading-[24px] uppercase">
                Live TV
              </div>
              <div className="flex flex-row items-center justify-center gap-[2px]">
                <div className="relative tracking-[0.04em] leading-[24px] uppercase">
                  Kategori
                </div>
                <img
                  className="relative w-[21px] h-[21px] shrink-0 overflow-hidden"
                  alt=""
                  src="../chevron-right.svg"
                />
              </div>
              <div className="relative tracking-[0.04em] leading-[24px] uppercase">
                Catch UP
              </div>
              <div className="relative tracking-[0.04em] leading-[24px] uppercase">
                My List
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[32px] text-primary-white">
            <div className="flex flex-row items-center justify-center gap-[24px]">
              <img
                className="relative w-6 h-6 shrink-0"
                alt=""
                src="../lomaoutlinesearch.svg"
              />
              <img
                className="relative w-6 h-6 shrink-0"
                alt=""
                src="../vuesaxboldnotification.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-[8px]">
              <img
                className="relative w-8 h-8 shrink-0"
                alt=""
                src="../avatar.svg"
              />
              <img
                className="relative w-8 h-8 shrink-0 object-cover hidden"
                alt=""
                src="../ellipse-127@2x.png"
              />
              <div className="relative tracking-[0.04em] leading-[24px] uppercase font-semibold">
                BERUANGair
              </div>
              <img
                className="relative w-4 h-4 shrink-0"
                alt=""
                src="../vuesaxboldarrowdown.svg"
              />
            </div>
          </div>
        </div> 
  )
}

export default Navbar