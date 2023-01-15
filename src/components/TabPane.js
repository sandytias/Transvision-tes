import React from 'react'

const TabPane = () => {
  return (
    <ul style={{listStyle: 'none', color: 'white'}} className="self-stretch flex flex-row items-center justify-start text-tints-black-russian-1-tints-5-mischka">
            <div className="shadow-[0px_-3px_0px_#df4949_inset] flex flex-col items-start justify-start text-primary-white">
              <div className="bg-base-black-russian-2 w-[160.5px] flex flex-col py-4 px-0 box-border items-center justify-center">
                <div className="flex flex-row py-0 px-5 items-center justify-center gap-[8px]">
                  <img
                    className="relative w-5 h-5 shrink-0 overflow-hidden"
                    alt=""
                    src="../fluentfood20regular.svg"
                  />
                  <li className="relative font-semibold">All</li>
                  <div className="rounded-large bg-counter-background overflow-hidden hidden flex-row py-px px-1.5 items-center justify-center text-center text-sm text-text-active-color font-text-small">
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-[0px_-3px_0px_#68696a_inset] flex flex-col items-start justify-start">
              <div className="bg-base-black-russian-2 w-[160.5px] flex flex-col py-4 px-0 box-border items-center justify-center">
                <div className="flex flex-row py-0 px-5 items-center justify-center gap-[8px]">
                  <img
                    className="relative w-5 h-5 shrink-0 overflow-hidden"
                    alt=""
                    src="../fluentfood20regular1.svg"
                  />
                  <div className="relative font-semibold">Food</div>
                  <div className="rounded-large bg-counter-background overflow-hidden hidden flex-row py-px px-1.5 items-center justify-center text-center text-sm text-text-active-color font-text-small">
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-[0px_-3px_0px_#68696a_inset] flex flex-col items-start justify-start">
              <div className="bg-base-black-russian-2 w-[160.5px] flex flex-col py-4 px-0 box-border items-center justify-center">
                <div className="flex flex-row py-0 px-5 items-center justify-center gap-[8px]">
                  <img
                    className="relative w-5 h-5 shrink-0 overflow-hidden"
                    alt=""
                    src="../fluentfood20regular1.svg"
                  />
                  <div className="relative font-semibold">Movies</div>
                  <div className="rounded-large bg-counter-background overflow-hidden hidden flex-row py-px px-1.5 items-center justify-center text-center text-sm text-text-active-color font-text-small">
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-[0px_-3px_0px_#68696a_inset] flex flex-col items-start justify-start">
              <div className="bg-base-black-russian-2 w-[160.5px] flex flex-col py-4 px-0 box-border items-center justify-center">
                <div className="flex flex-row py-0 px-5 items-center justify-center gap-[8px]">
                  <img
                    className="relative w-5 h-5 shrink-0 overflow-hidden"
                    alt=""
                    src="../fluentfood20regular.svg"
                  />
                  <div className="relative font-semibold">Shop</div>
                  <div className="rounded-large bg-counter-background overflow-hidden hidden flex-row py-px px-1.5 items-center justify-center text-center text-sm text-text-active-color font-text-small">
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-[0px_-3px_0px_#68696a_inset] flex flex-col items-start justify-start">
              <div className="bg-base-black-russian-2 w-[160.5px] flex flex-col py-4 px-0 box-border items-center justify-center">
                <div className="flex flex-row py-0 px-5 items-center justify-center gap-[8px]">
                  <img
                    className="relative w-5 h-5 shrink-0 overflow-hidden"
                    alt=""
                    src="../fluentfood20regular.svg"
                  />
                  <div className="relative font-semibold">Travel</div>
                  <div className="rounded-large bg-counter-background overflow-hidden hidden flex-row py-px px-1.5 items-center justify-center text-center text-sm text-text-active-color font-text-small">
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-[0px_-3px_0px_#68696a_inset] flex flex-col items-start justify-start">
              <div className="bg-base-black-russian-2 w-[160.5px] flex flex-col py-4 px-0 box-border items-center justify-center">
                <div className="flex flex-row py-0 px-5 items-center justify-center gap-[8px]">
                  <img
                    className="relative w-5 h-5 shrink-0 overflow-hidden"
                    alt=""
                    src="../fluentfood20regular.svg"
                  />
                  <div className="relative font-semibold">Other</div>
                  <div className="rounded-large bg-counter-background overflow-hidden hidden flex-row py-px px-1.5 items-center justify-center text-center text-sm text-text-active-color font-text-small">
                  </div>
                </div>
              </div>
            </div>
          </ul>
  )
}

export default TabPane