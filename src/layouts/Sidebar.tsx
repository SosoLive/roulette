import React, { useContext } from "react";
import { LayoutContext } from "./Root";

import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { ReactComponent as Twitter } from "assets/svg/twitter.svg";
import { ReactComponent as Discord } from "assets/svg/discord.svg";
import { ReactComponent as Setting } from "assets/svg/setting.svg";

import { menu } from "config/variable";

const Sidebar = () => {
  const ctx = useContext(LayoutContext);
  const { navWidth } = ctx;

  console.log();

  return (
    <div
      className="w-[248px] flex flex-col h-full bg-black border-r-[3px] border-r-line border-r-[#141414]"
      style={{ width: navWidth, height: "100%", overflow: "overlay" }}
    >
      <header className="flex justify-center px-5 py-[10px] items-center just">
        <Logo className="w-[100px] h-full cursor-pointer" />
      </header>
      <div className="flex flex-col">
        {menu.map((item: any, index: number) => (
          <div className="flex items-center" key={`sidebar-${index}`}>
            <div
              className={`w-[5px] h-[25px] ${
                item.title === "Roulette" ? "bg-[#ff0]" : "bg-[#000]"
              }  rounded-r-lg`}
            />
            <div
              className="flex items-center gap-[7px] pr-[10px] pl-[20px] py-[10px] group cursor-pointer w-full"
              key={`menu-${index}`}
            >
              <img
                src={item.svg}
                alt="svg"
                className="w-[18px] h-[18px] fill-mainback"
              />
              <h4
                className={`${!item.active && "opacity-30"} text-base ${
                  item.title === "Roulette" ? "text-[#ff0]" : "text-white"
                }  group-hover:text-[#cfcdcd] anim`}
              >
                {item.title}
              </h4>
              {item.status !== "" && (
                <span className="bg-[#ff0] text-black ml-auto text-[10px] px-1 pt-[1px] rounded-[4px] hover:bg-[#b1b143] anim">
                  {item.status}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-auto pl-5 pr-[10px] mb-[15px]">
        <div className="flex items-center">
          <div className="flex w-10 h-10 items-center justify-center cursor-pointer">
            <Twitter className="w-5 g-5" />
          </div>
          <div className="flex w-10 h-10 items-center justify-center cursor-pointer">
            <Discord className="w-5 g-5" />
          </div>
        </div>
        <div className="w-[45px] h-[45px] hover:bg-[#191919] rounded-lg cursor-pointer flex justify-center items-center">
          <Setting className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
