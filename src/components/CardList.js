import React, { useCallback, useEffect, useState } from 'react'
import PortalPopup from '../components/PortalPopup'
import ModalReedemKupon from './ModalReedemKupon';
import { useDispatch, useSelector } from 'react-redux';
import { getCoupon } from '../redux/actions/couponAction';

const CardList = () => {
    const [isModalReedemKuponOpen, setModalReedemKuponOpen] = useState(false);

    const openModalReedemKupon = useCallback(() => {
        setModalReedemKuponOpen(true);
    }, []);

    const closeModalReedemKupon = useCallback(() => {
        setModalReedemKuponOpen(false);
    }, []);


    const coupon = useSelector((state) => state.coupon)
    console.log('COUPON',coupon)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCoupon())
    }, [])

  return (
    <>
        <div className="flex flex-col items-start justify-center gap-[24px] text-base-black-russian-1">
            <div className="flex flex-row items-start justify-start gap-[24px]">
              <div className="w-[305px] shrink-0 flex flex-col items-center justify-center">
                <img
                  className="relative w-[305px] h-[305px] shrink-0 object-cover"
                  alt=""
                  src="../image1@2x.png"
                />
                <div className="self-stretch rounded-t-none rounded-b bg-primary-white flex flex-col p-4 items-start justify-center gap-[10px]">
                  <b className="self-stretch relative text-2xl leading-[22px] capitalize">
                    Bakso Boedjangan
                  </b>
                  <div className="self-stretch flex flex-row items-center justify-between text-4xl text-green font-text-small">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <div className="relative font-semibold">20%</div>
                      <div className="relative text-lg font-medium text-gray-400">
                        Off
                      </div>
                    </div>
                    <div className="rounded-small bg-primary-white flex flex-row py-2 pr-2.5 pl-3.5 items-center justify-center gap-[2px] text-sm text-gray-700 font-mulish border-[1px] border-solid border-gray-800">
                      <div className="relative font-semibold">{`T&C`}</div>
                      <img
                        className="relative w-3 h-3 shrink-0 overflow-hidden"
                        alt=""
                        src="../fluentchevrondown16regular.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col py-6 px-0 items-start justify-start gap-[16px]">
                    <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
                    <div className="flex flex-col items-start justify-start gap-[24px]">
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <b className="relative tracking-[0.5px]">
                          Terms and Condition
                        </b>
                        <img
                          className="relative w-[18px] h-[18px] shrink-0 overflow-hidden"
                          alt=""
                          src="../fluentdismiss24filled.svg"
                        />
                      </div>
                      <div className="w-[273px] flex flex-col items-start justify-center gap-[16px] text-base">
                        <div className="relative tracking-[0.5px]">
                          20% discount valid per transaction
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-[inherit] font-inherit">
                          <div className="self-stretch relative tracking-[0.5px]">
                            <ul className="m-0 pl-[19px]">
                              Redemable at all Baskin Robbins stores in
                              Indonesia.
                            </ul>
                          </div>
                          <div className="self-stretch relative tracking-[0.5px]">
                            <ul className="m-0 pl-[19px]">
                              <span>{`Terms can change at any time without futher notice `}</span>
                              <span className="text-teal">see more</span>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
                  </div>
                  <div className="self-stretch relative text-sm capitalize text-tints-black-russian-1-tints-3-aluminium">
                    Promo sampai 31 Desember 2022
                  </div>
                  <div
                    className="self-stretch rounded bg-green flex flex-row py-2.5 px-0 items-center justify-center cursor-pointer text-primary-white"
                    onClick={openModalReedemKupon}
                  >
                    <b className="relative capitalize">Tukarkan</b>
                  </div>
                </div>
              </div>
              <div className="w-[305px] shrink-0 flex flex-col items-center justify-center">
                <img
                  className="relative w-[305px] h-[305px] shrink-0 object-cover"
                  alt=""
                  src="../image2@2x.png"
                />
                <div className="self-stretch rounded-t-none rounded-b bg-primary-white flex flex-col p-4 items-start justify-center gap-[10px]">
                  <b className="self-stretch relative text-2xl leading-[22px] capitalize">
                    Baskin Robbins
                  </b>
                  <div className="self-stretch flex flex-row items-center justify-between text-4xl text-green font-text-small">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <div className="relative font-semibold">20%</div>
                      <div className="relative text-lg font-medium text-gray-400">
                        Off
                      </div>
                    </div>
                    <div className="rounded-small bg-primary-white flex flex-row py-2 pr-2.5 pl-3.5 items-center justify-center gap-[2px] text-sm text-gray-700 font-mulish border-[1px] border-solid border-gray-800">
                      <div className="relative font-semibold">{`T&C`}</div>
                      <img
                        className="relative w-3 h-3 shrink-0 overflow-hidden"
                        alt=""
                        src="../fluentchevrondown16regular.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col py-6 px-0 items-start justify-start gap-[16px]">
                    <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
                    <div className="flex flex-col items-start justify-start gap-[24px]">
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <b className="relative tracking-[0.5px]">
                          Terms and Condition
                        </b>
                        <img
                          className="relative w-[18px] h-[18px] shrink-0 overflow-hidden"
                          alt=""
                          src="../fluentdismiss24filled1.svg"
                        />
                      </div>
                      <div className="w-[273px] flex flex-col items-start justify-center gap-[16px] text-base">
                        <div className="relative tracking-[0.5px]">
                          20% discount valid per transaction
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-[inherit] font-inherit">
                          <div className="self-stretch relative tracking-[0.5px]">
                            <ul className="m-0 pl-[19px]">
                              Redemable at all Baskin Robbins stores in
                              Indonesia.
                            </ul>
                          </div>
                          <div className="self-stretch relative tracking-[0.5px]">
                            <ul className="m-0 pl-[19px]">
                              <span>{`Terms can change at any time without futher notice `}</span>
                              <span className="text-teal">see more</span>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
                  </div>
                  <div className="self-stretch relative text-sm capitalize text-tints-black-russian-1-tints-3-aluminium">
                    Promo sampai 31 Desember 2022
                  </div>
                  <div
                    className="self-stretch rounded bg-green flex flex-row py-2.5 px-0 items-center justify-center cursor-pointer text-primary-white"
                    onClick={openModalReedemKupon}
                  >
                    <b className="relative capitalize">Tukarkan</b>
                  </div>
                </div>
              </div>
              <div className="w-[305px] shrink-0 flex flex-col items-center justify-center">
                <img
                  className="relative w-[305px] h-[305px] shrink-0 object-cover"
                  alt=""
                  src="../image3@2x.png"
                />
                <div className="self-stretch rounded-t-none rounded-b bg-primary-white flex flex-col p-4 items-start justify-center gap-[10px]">
                  <b className="self-stretch relative text-2xl leading-[22px] capitalize">
                    Coffee Bean
                  </b>
                  <div className="self-stretch flex flex-row items-center justify-between text-4xl text-green font-text-small">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <div className="relative font-semibold">20%</div>
                      <div className="relative text-lg font-medium text-gray-400">
                        Off
                      </div>
                    </div>
                    <div className="rounded-small bg-primary-white flex flex-row py-2 pr-2.5 pl-3.5 items-center justify-center gap-[2px] text-sm text-gray-700 font-mulish border-[1px] border-solid border-gray-800">
                      <div className="relative font-semibold">{`T&C`}</div>
                      <img
                        className="relative w-3 h-3 shrink-0 overflow-hidden"
                        alt=""
                        src="../fluentchevrondown16regular2.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col py-6 px-0 items-start justify-start gap-[16px]">
                    <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
                    <div className="flex flex-col items-start justify-start gap-[24px]">
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <b className="relative tracking-[0.5px]">
                          Terms and Condition
                        </b>
                        <img
                          className="relative w-[18px] h-[18px] shrink-0 overflow-hidden"
                          alt=""
                          src="../fluentdismiss24filled2.svg"
                        />
                      </div>
                      <div className="w-[273px] flex flex-col items-start justify-center gap-[16px] text-base">
                        <div className="relative tracking-[0.5px]">
                          20% discount valid per transaction
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-[inherit] font-inherit">
                          <div className="self-stretch relative tracking-[0.5px]">
                            <ul className="m-0 pl-[19px]">
                              Redemable at all Baskin Robbins stores in
                              Indonesia.
                            </ul>
                          </div>
                          <div className="self-stretch relative tracking-[0.5px]">
                            <ul className="m-0 pl-[19px]">
                              <span>{`Terms can change at any time without futher notice `}</span>
                              <span className="text-teal">see more</span>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
                  </div>
                  <div className="self-stretch relative text-sm capitalize text-tints-black-russian-1-tints-3-aluminium">
                    Promo sampai 31 Desember 2022
                  </div>
                  <div
                    className="self-stretch rounded bg-gray-300 flex flex-row py-2.5 px-0 items-center justify-center cursor-pointer text-gray-100"
                    onClick={openModalReedemKupon}
                  >
                    <b className="relative capitalize">Tukarkan</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[24px]">
              <div className="w-[305px] shrink-0 flex flex-col items-center justify-center">
                <img
                  className="relative w-[305px] h-[305px] shrink-0 object-cover"
                  alt=""
                  src="../image4@2x.png"
                />
                <div className="self-stretch rounded-t-none rounded-b bg-primary-white flex flex-col p-4 items-start justify-center gap-[10px]">
                  <b className="self-stretch relative text-2xl leading-[22px] capitalize">
                    Gyu Katsu Nikaido
                  </b>
                  <div className="self-stretch flex flex-row items-center justify-between text-4xl text-green font-text-small">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <div className="relative font-semibold">20%</div>
                      <div className="relative text-lg font-medium text-gray-400">
                        Off
                      </div>
                    </div>
                    <div className="rounded-small bg-primary-white flex flex-row py-2 pr-2.5 pl-3.5 items-center justify-center gap-[2px] text-sm text-gray-700 font-mulish border-[1px] border-solid border-gray-800">
                      <div className="relative font-semibold">{`T&C`}</div>
                      <img
                        className="relative w-3 h-3 shrink-0 overflow-hidden"
                        alt=""
                        src="../fluentchevrondown16regular.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col py-6 px-0 items-start justify-start gap-[16px]">
                    <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
                    <div className="flex flex-col items-start justify-start gap-[24px]">
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <b className="relative tracking-[0.5px]">
                          Terms and Condition
                        </b>
                        <img
                          className="relative w-[18px] h-[18px] shrink-0 overflow-hidden"
                          alt=""
                          src="../fluentdismiss24filled.svg"
                        />
                      </div>
                      <div className="w-[273px] flex flex-col items-start justify-center gap-[16px] text-base">
                        <div className="relative tracking-[0.5px]">
                          20% discount valid per transaction
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-[inherit] font-inherit">
                          <div className="self-stretch relative tracking-[0.5px]">
                            <ul className="m-0 pl-[19px]">
                              Redemable at all Baskin Robbins stores in
                              Indonesia.
                            </ul>
                          </div>
                          <div className="self-stretch relative tracking-[0.5px]">
                            <ul className="m-0 pl-[19px]">
                              <span>{`Terms can change at any time without futher notice `}</span>
                              <span className="text-teal">see more</span>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
                  </div>
                  <div className="self-stretch relative text-sm capitalize text-tints-black-russian-1-tints-3-aluminium">
                    Promo sampai 31 Desember 2022
                  </div>
                  <div
                    className="self-stretch rounded bg-green flex flex-row py-2.5 px-0 items-center justify-center cursor-pointer text-primary-white"
                    onClick={openModalReedemKupon}
                  >
                    <b className="relative capitalize">Tukarkan</b>
                  </div>
                </div>
              </div>
              <div className="w-[305px] shrink-0 flex flex-col items-center justify-center">
                <img
                  className="relative w-[305px] h-[305px] shrink-0 object-cover"
                  alt=""
                  src="../image5@2x.png"
                />
                <div className="self-stretch rounded-t-none rounded-b bg-primary-white flex flex-col p-4 items-start justify-center gap-[10px]">
                  <b className="self-stretch relative text-2xl leading-[22px] capitalize">
                    tasty Kitchen
                  </b>
                  <div className="self-stretch flex flex-row items-center justify-between text-4xl text-green font-text-small">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <div className="relative font-semibold">20%</div>
                      <div className="relative text-lg font-medium text-gray-400">
                        Off
                      </div>
                    </div>
                    <div className="rounded-small bg-primary-white flex flex-row py-2 pr-2.5 pl-3.5 items-center justify-center gap-[2px] text-sm text-gray-700 font-mulish border-[1px] border-solid border-gray-800">
                      <div className="relative font-semibold">{`T&C`}</div>
                      <img
                        className="relative w-3 h-3 shrink-0 overflow-hidden"
                        alt=""
                        src="../fluentchevrondown16regular.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col py-6 px-0 items-start justify-start gap-[16px]">
                    <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
                    <div className="flex flex-col items-start justify-start gap-[24px]">
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <b className="relative tracking-[0.5px]">
                          Terms and Condition
                        </b>
                        <img
                          className="relative w-[18px] h-[18px] shrink-0 overflow-hidden"
                          alt=""
                          src="../fluentdismiss24filled1.svg"
                        />
                      </div>
                      <div className="w-[273px] flex flex-col items-start justify-center gap-[16px] text-base">
                        <div className="relative tracking-[0.5px]">
                          20% discount valid per transaction
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-[inherit] font-inherit">
                          <div className="self-stretch relative tracking-[0.5px]">
                            <ul className="m-0 pl-[19px]">
                              Redemable at all Baskin Robbins stores in
                              Indonesia.
                            </ul>
                          </div>
                          <div className="self-stretch relative tracking-[0.5px]">
                            <ul className="m-0 pl-[19px]">
                              <span>{`Terms can change at any time without futher notice `}</span>
                              <span className="text-teal">see more</span>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
                  </div>
                  <div className="self-stretch relative text-sm capitalize text-tints-black-russian-1-tints-3-aluminium">
                    Promo sampai 31 Desember 2022
                  </div>
                  <div
                    className="self-stretch rounded bg-green flex flex-row py-2.5 px-0 items-center justify-center cursor-pointer text-primary-white"
                    onClick={openModalReedemKupon}
                  >
                    <b className="relative capitalize">Tukarkan</b>
                  </div>
                </div>
              </div>
              <div className="w-[305px] shrink-0 flex flex-col items-center justify-center">
                <img
                  className="relative w-[305px] h-[305px] shrink-0 object-cover"
                  alt=""
                  src="../image3@2x.png"
                />
                <div className="self-stretch rounded-t-none rounded-b bg-primary-white flex flex-col p-4 items-start justify-center gap-[10px]">
                  <b className="self-stretch relative text-2xl leading-[22px] capitalize">
                    Warunk Upnormal
                  </b>
                  <div className="self-stretch flex flex-row items-center justify-between text-4xl text-green font-text-small">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <div className="relative font-semibold">20%</div>
                      <div className="relative text-lg font-medium text-gray-400">
                        Off
                      </div>
                    </div>
                    <div className="rounded-small bg-primary-white flex flex-row py-2 pr-2.5 pl-3.5 items-center justify-center gap-[2px] text-sm text-gray-700 font-mulish border-[1px] border-solid border-gray-800">
                      <div className="relative font-semibold">{`T&C`}</div>
                      <img
                        className="relative w-3 h-3 shrink-0 overflow-hidden"
                        alt=""
                        src="../fluentchevrondown16regular2.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col py-6 px-0 items-start justify-start gap-[16px]">
                    <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
                    <div className="flex flex-col items-start justify-start gap-[24px]">
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <b className="relative tracking-[0.5px]">
                          Terms and Condition
                        </b>
                        <img
                          className="relative w-[18px] h-[18px] shrink-0 overflow-hidden"
                          alt=""
                          src="../fluentdismiss24filled2.svg"
                        />
                      </div>
                      <div className="w-[273px] flex flex-col items-start justify-center gap-[16px] text-base">
                        <div className="relative tracking-[0.5px]">
                          20% discount valid per transaction
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-[inherit] font-inherit">
                          <div className="self-stretch relative tracking-[0.5px]">
                            <ul className="m-0 pl-[19px]">
                              Redemable at all Baskin Robbins stores in
                              Indonesia.
                            </ul>
                          </div>
                          <div className="self-stretch relative tracking-[0.5px]">
                            <ul className="m-0 pl-[19px]">
                              <span>{`Terms can change at any time without futher notice `}</span>
                              <span className="text-teal">see more</span>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
                  </div>
                  <div className="self-stretch relative text-sm capitalize text-tints-black-russian-1-tints-3-aluminium">
                    Promo sampai 31 Desember 2022
                  </div>
                  <div
                    className="self-stretch rounded bg-green flex flex-row py-2.5 px-0 items-center justify-center cursor-pointer text-primary-white"
                    onClick={openModalReedemKupon}
                  >
                    <b className="relative capitalize">Tukarkan</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[24px]">
              <div className="w-[305px] shrink-0 flex flex-col items-center justify-center">
                <img
                  className="relative w-[305px] h-[305px] shrink-0 object-cover"
                  alt=""
                  src="../image7@2x.png"
                />
                <div className="self-stretch rounded-t-none rounded-b bg-primary-white flex flex-col p-4 items-start justify-center gap-[10px]">
                  <b className="self-stretch relative text-2xl leading-[22px] capitalize">
                    Wardani Bali
                  </b>
                  <div className="self-stretch flex flex-row items-center justify-between text-4xl text-green font-text-small">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <div className="relative font-semibold">20%</div>
                      <div className="relative text-lg font-medium text-gray-400">
                        Off
                      </div>
                    </div>
                    <div className="rounded-small bg-primary-white flex flex-row py-2 pr-2.5 pl-3.5 items-center justify-center gap-[2px] text-sm text-gray-700 font-mulish border-[1px] border-solid border-gray-800">
                      <div className="relative font-semibold">{`T&C`}</div>
                      <img
                        className="relative w-3 h-3 shrink-0 overflow-hidden"
                        alt=""
                        src="../fluentchevrondown16regular.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col py-6 px-0 items-start justify-start gap-[16px]">
                    <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
                    <div className="flex flex-col items-start justify-start gap-[24px]">
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <b className="relative tracking-[0.5px]">
                          Terms and Condition
                        </b>
                        <img
                          className="relative w-[18px] h-[18px] shrink-0 overflow-hidden"
                          alt=""
                          src="../fluentdismiss24filled.svg"
                        />
                      </div>
                      <div className="w-[273px] flex flex-col items-start justify-center gap-[16px] text-base">
                        <div className="relative tracking-[0.5px]">
                          20% discount valid per transaction
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-[inherit] font-inherit">
                          <div className="self-stretch relative tracking-[0.5px]">
                            <ul className="m-0 pl-[19px]">
                              Redemable at all Baskin Robbins stores in
                              Indonesia.
                            </ul>
                          </div>
                          <div className="self-stretch relative tracking-[0.5px]">
                            <ul className="m-0 pl-[19px]">
                              <span>{`Terms can change at any time without futher notice `}</span>
                              <span className="text-teal">see more</span>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
                  </div>
                  <div className="self-stretch relative text-sm capitalize text-tints-black-russian-1-tints-3-aluminium">
                    Promo sampai 31 Desember 2022
                  </div>
                  <div
                    className="self-stretch rounded bg-green flex flex-row py-2.5 px-0 items-center justify-center cursor-pointer text-primary-white"
                    onClick={openModalReedemKupon}
                  >
                    <b className="relative capitalize">Tukarkan</b>
                  </div>
                </div>
              </div>
              <div className="w-[305px] shrink-0 flex flex-col items-center justify-center">
                <img
                  className="relative w-[305px] h-[305px] shrink-0 object-cover"
                  alt=""
                  src="../image8@2x.png"
                />
                <div className="self-stretch rounded-t-none rounded-b bg-primary-white flex flex-col p-4 items-start justify-center gap-[10px]">
                  <b className="self-stretch relative text-2xl leading-[22px] capitalize">
                    Wendys’s
                  </b>
                  <div className="self-stretch flex flex-row items-center justify-between text-4xl text-green font-text-small">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <div className="relative font-semibold">20%</div>
                      <div className="relative text-lg font-medium text-gray-400">
                        Off
                      </div>
                    </div>
                    <div className="rounded-small bg-primary-white flex flex-row py-2 pr-2.5 pl-3.5 items-center justify-center gap-[2px] text-sm text-gray-700 font-mulish border-[1px] border-solid border-gray-800">
                      <div className="relative font-semibold">{`T&C`}</div>
                      <img
                        className="relative w-3 h-3 shrink-0 overflow-hidden"
                        alt=""
                        src="../fluentchevrondown16regular.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col py-6 px-0 items-start justify-start gap-[16px]">
                    <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
                    <div className="flex flex-col items-start justify-start gap-[24px]">
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <b className="relative tracking-[0.5px]">
                          Terms and Condition
                        </b>
                        <img
                          className="relative w-[18px] h-[18px] shrink-0 overflow-hidden"
                          alt=""
                          src="../fluentdismiss24filled1.svg"
                        />
                      </div>
                      <div className="w-[273px] flex flex-col items-start justify-center gap-[16px] text-base">
                        <div className="relative tracking-[0.5px]">
                          20% discount valid per transaction
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-[inherit] font-inherit">
                          <div className="self-stretch relative tracking-[0.5px]">
                            <ul className="m-0 pl-[19px]">
                              Redemable at all Baskin Robbins stores in
                              Indonesia.
                            </ul>
                          </div>
                          <div className="self-stretch relative tracking-[0.5px]">
                            <ul className="m-0 pl-[19px]">
                              <span>{`Terms can change at any time without futher notice `}</span>
                              <span className="text-teal">see more</span>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
                  </div>
                  <div className="self-stretch relative text-sm capitalize text-tints-black-russian-1-tints-3-aluminium">
                    Promo sampai 31 Desember 2022
                  </div>
                  <div
                    className="self-stretch rounded bg-green flex flex-row py-2.5 px-0 items-center justify-center cursor-pointer text-primary-white"
                    onClick={openModalReedemKupon}
                  >
                    <b className="relative capitalize">Tukarkan</b>
                  </div>
                </div>
              </div>
              <div className="w-[305px] shrink-0 flex flex-col items-center justify-center">
                <img
                  className="relative w-[305px] h-[305px] shrink-0 object-cover"
                  alt=""
                  src="../image9@2x.png"
                />
                <div className="self-stretch rounded-t-none rounded-b bg-primary-white flex flex-col p-4 items-start justify-center gap-[10px]">
                  <b className="self-stretch relative text-2xl leading-[22px] capitalize">
                    Antavaya
                  </b>
                  <div className="self-stretch flex flex-row items-center justify-between text-4xl text-green font-text-small">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <div className="relative font-semibold">1.000.000</div>
                      <div className="relative text-lg font-medium text-gray-400 hidden">
                        Off
                      </div>
                    </div>
                    <div className="rounded-small bg-primary-white flex flex-row py-2 pr-2.5 pl-3.5 items-center justify-center gap-[2px] text-sm text-gray-700 font-mulish border-[1px] border-solid border-gray-800">
                      <div className="relative font-semibold">{`T&C`}</div>
                      <img
                        className="relative w-3 h-3 shrink-0 overflow-hidden"
                        alt=""
                        src="../fluentchevrondown16regular2.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-col py-6 px-0 items-start justify-start gap-[16px]">
                    <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
                    <div className="flex flex-col items-start justify-start gap-[24px]">
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <b className="relative tracking-[0.5px]">
                          Terms and Condition
                        </b>
                        <img
                          className="relative w-[18px] h-[18px] shrink-0 overflow-hidden"
                          alt=""
                          src="../fluentdismiss24filled2.svg"
                        />
                      </div>
                      <div className="w-[273px] flex flex-col items-start justify-center gap-[16px] text-base">
                        <div className="relative tracking-[0.5px]">
                          20% discount valid per transaction
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-[inherit] font-inherit">
                          <div className="self-stretch relative tracking-[0.5px]">
                            <ul className="m-0 pl-[19px]">
                              Redemable at all Baskin Robbins stores in
                              Indonesia.
                            </ul>
                          </div>
                          <div className="self-stretch relative tracking-[0.5px]">
                            <ul className="m-0 pl-[19px]">
                              <span>{`Terms can change at any time without futher notice `}</span>
                              <span className="text-teal">see more</span>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-gray-200" />
                  </div>
                  <div className="self-stretch relative text-sm capitalize text-tints-black-russian-1-tints-3-aluminium">
                    Promo sampai 31 Desember 2022
                  </div>
                  <div
                    className="self-stretch rounded bg-green flex flex-row py-2.5 px-0 items-center justify-center cursor-pointer text-primary-white"
                    onClick={openModalReedemKupon}
                  >
                    <b className="relative capitalize">Tukarkan</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isModalReedemKuponOpen && (
            <PortalPopup
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Centered"
            onOutsideClick={closeModalReedemKupon}
            >
            <ModalReedemKupon onClose={closeModalReedemKupon} />
            </PortalPopup>
        )}
        </>
  )
}

export default CardList