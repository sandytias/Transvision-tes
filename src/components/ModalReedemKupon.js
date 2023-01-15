import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ModalReedemKupon = () => {
  const navigate = useNavigate();

  const onButtonPrimaryClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative rounded-[36px] shadow-[0px_8px_24px_rgba(0,_0,_0,_0.15)] flex flex-row items-center justify-center max-w-full max-h-full overflow-auto text-center text-3xl text-black font-text-small">
      <div className="flex flex-row items-start justify-start">
        <img
          className="relative rounded-tl-base rounded-tr-none rounded-br-none rounded-bl-base w-[343px] h-[343px] shrink-0 object-cover"
          alt=""
          src="../image@2x.png"
        />
        <div className="rounded-tl-none rounded-tr-base rounded-br-base rounded-bl-none bg-primary-white flex flex-col py-6 px-8 items-center justify-start gap-[49px]">
          <div className="w-[436px] flex flex-col items-start justify-center text-left">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-semibold">Bakso Boedjangan</div>
                <div className="relative text-base text-gray-900">
                  Promo sampai 31 Januari 2022
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[6px] text-[32px] text-green">
                <div className="relative font-semibold">20%</div>
                <div className="relative text-3xl font-medium text-gray-400 hidden">
                  Off
                </div>
              </div>
            </div>
          </div>
          <div className="w-[308px] flex flex-col items-center justify-center text-green">
            <div className="flex flex-col items-center justify-center gap-[16px]">
              <div className="relative font-semibold">
                <p className="[margin-block-start:0] [margin-block-end:0px]">{`Coupon Successfully `}</p>
                <p className="m-0">Redeemed</p>
              </div>
              <div className="relative text-lg text-gray-1000 text-left">
                12:30 PM
              </div>
            </div>
          </div>
          <div
            className="rounded-xl bg-green w-[436px] flex flex-row py-3.5 px-6 box-border items-center justify-center cursor-pointer text-lg text-grayscale-background font-desktop-link-small"
            onClick={onButtonPrimaryClick}
          >
            <div className="relative tracking-[0.75px] leading-[28px] font-semibold">
              DONE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalReedemKupon;
