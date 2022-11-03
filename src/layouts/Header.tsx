import React, { useContext, useEffect, useRef, useState } from "react";

import { ReactComponent as Ring } from "assets/svg/ring.svg";
import { ReactComponent as Menu } from "assets/svg/menu.svg";

import { msg } from "config/variable";
import { LayoutContext } from "./Root";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const ctx = useContext(LayoutContext);
  const { setNavOpen, navOpen } = ctx;

  const toggle = () => {
    setOpen(!open);
  };

  const useOutsideAlerter = (ref: any, close: any) => {
    useEffect(() => {
      const handleClickOutSide = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) close(false);
      };

      document.addEventListener("mousedown", handleClickOutSide);
      return () => {
        document.removeEventListener("mousedown", handleClickOutSide);
      };
    }, [ref, close]);
  };

  const MsgRef = useRef(null);
  useOutsideAlerter(MsgRef, setOpen);

  const menuToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="flex items-center justify-between p-[10px] w-full absolute z-[1]">
      <div className="flex items-center gap-1 pl-4">
        <div
          className="w-12 h-12 bg-[#0f0f0f] rounded-[10px] flex justify-center items-center lg:hidden"
          onClick={menuToggle}
        >
          <Menu className="w-[30px] h-[30px] cursor-pointer" />
        </div>
        <h5 className="text-[13px] opacity-30 text-white">Solana Network: </h5>
        <h5 className="text-[13px] text-white relative">
          {" "}
          2413 TPS
          <span className="w-[5px] h-[5px] rounded-full bg-green absolute -top-1 -right-2"></span>
        </h5>
      </div>
      <div className="flex gap-[10px] items-center relative">
        <div className="flex items-center justify-center w-12 h-12 bg-[#0f0f0f] rounded-lg relative">
          <Ring className="w-5 h-5 cursor-pointer" onClick={toggle} />

          <div
            className="absolute bottom-0 right-0 flex flex-col-reverse bg-[#141414] translate-y-[100%] min-w-[280px] rounded-l-[10px] rounded-br-[10px] gap-[1px]"
            ref={MsgRef}
          >
            {open &&
              msg.map((item: any, index: number) => (
                <div
                  className="last:rounded-t-[10px] rounded-b-[10px] anim bg-[#141414] cursor-pointer hover:bg-[#1e1e1e] border-b-[1px] border-b-[#000]"
                  key={`msg-${index}`}
                >
                  <h3 className="flex items-center justify-start text-[15px] text-white gap-[6px] px-[14px] pt-[14px] pb-[5px]">
                    <span className="w-[5px] h-[5px] bg-[#ff0] rounded-full"></span>
                    {item.title}
                  </h3>
                  <p className="px-[14px] pb-[14px] text-[13px] text-[#fff9] ">
                    {item.header} <b className="text-white">{item.emphasis}</b>
                    {item.footer}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <button className="h-12 px-[13px] text-white cursor-pointer bg-[#0f0f0f] rounded-lg">
          Select Wallet
        </button>
      </div>
    </div>
  );
};

export default Header;
