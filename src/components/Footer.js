import React from 'react'

const Footer = () => {
  return (
    <div className="absolute top-[1869px] left-[0px] bg-base-black-russian-2 w-[1500px] flex flex-col pt-14 px-8 pb-10 box-border items-center justify-center gap-[37px]">
          <div className="w-[1112px] flex flex-row items-center justify-between">
            <div className="w-[457px] shrink-0 flex flex-col items-start justify-start gap-[32px]">
              <div className="self-stretch flex flex-col items-start justify-center gap-[24px]">
                <div className="flex flex-row pt-0 px-0 pb-[5px] items-center justify-center">
                  <img
                    className="relative w-[163px] h-[52px] shrink-0 object-cover"
                    alt=""
                    src="../logo-cubmu@2x.png"
                  />
                </div>
                <div className="self-stretch relative leading-[24px]">
                  CubMu adalah layanan streaming dari Transvision yang
                  menyediakan berbagai konten VOD menarik dan menghibur. Nikmati
                  semua konten dari CubMu di berbagai platform media Android,
                  IOS, TV, dan Website
                </div>
                <div className="hidden flex-row items-center justify-center gap-[16px] text-gray-500">
                  <div className="flex flex-row items-center justify-center gap-[8px]">
                    <div className="relative font-semibold">
                      Today Page Viewer
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[2px] text-primary-white">
                      <div className="relative font-semibold">11.783K</div>
                      <img
                        className="relative w-5 h-5 shrink-0 overflow-hidden"
                        alt=""
                        src="../fluentlive20filled.svg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-[8px]">
                    <div className="relative font-semibold">Yesterday</div>
                    <div className="relative font-semibold text-primary-white">
                      10.153K
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[350px] h-[18px] shrink-0 text-xl text-primary-white">
                <div className="absolute top-[0px] left-[390px] hidden flex-col items-start justify-center gap-[24px]">
                  <b className="relative capitalize">FAQ</b>
                  <div className="flex flex-col items-start justify-start gap-[20px] text-base text-dark-text">
                    <div className="relative">Account</div>
                    <div className="relative">Manage Deliveries</div>
                    <div className="relative">Orders</div>
                    <div className="relative">Payments</div>
                    <div className="relative">Returns</div>
                    <div className="relative">Privacy Policy</div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[195px] hidden flex-col items-start justify-center gap-[24px]">
                  <b className="relative capitalize">Support</b>
                  <div className="flex flex-col items-start justify-start gap-[20px] text-base text-dark-text">
                    <div className="relative">Contact us</div>
                    <div className="relative">Online Chat</div>
                    <div className="relative">Whatsapp</div>
                    <div className="relative">Telegram</div>
                    <div className="relative">Ticketing</div>
                    <div className="relative">Call Center</div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-center gap-[24px]">
                  <b className="relative capitalize hidden">Sitemap</b>
                  <div className="flex flex-row items-center justify-center gap-[20px] text-base text-tints-black-russian-1-tints-6-ghost">
                    <div className="relative capitalize">
                      Syarat dan Ketentuan
                    </div>
                    <img
                      className="relative w-1 h-1 shrink-0"
                      alt=""
                      src="../divider.svg"
                    />
                    <div className="relative capitalize">FAQ</div>
                    <img
                      className="relative w-1 h-1 shrink-0"
                      alt=""
                      src="../divider.svg"
                    />
                    <div className="relative capitalize">Tentang Kami</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px] text-xl text-primary-white">
              <div className="relative w-[165px] h-[109px] shrink-0">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../background.svg"
                />
                <b className="absolute top-[65.14%] left-[10.91%] capitalize">
                  Facebook
                </b>
                <div className="absolute top-[50.46%] left-[10.91%] text-sm text-text-manatee-t2">
                  Follow us on
                </div>
              </div>
              <div className="relative w-[165px] h-[109px] shrink-0">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../background1.svg"
                />
                <b className="absolute top-[65.14%] left-[10.91%] capitalize">
                  Twitter
                </b>
                <div className="absolute top-[50.46%] left-[10.91%] text-sm text-text-manatee-t2">
                  Follow us on
                </div>
              </div>
              <div className="relative w-[165px] h-[109px] shrink-0">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../background2.svg"
                />
                <b className="absolute top-[65.14%] left-[10.91%] capitalize">
                  Instagram
                </b>
                <div className="absolute top-[50.46%] left-[10.91%] text-sm text-text-manatee-t2">
                  Follow us on
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1140px] flex flex-row items-center justify-between">
            <div className="relative">© 2022, CubMu All Rights Reserved</div>
          </div>
        </div>
  )
}

export default Footer