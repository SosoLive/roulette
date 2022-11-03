import React from "react";

import { recent } from "config/variable";

const Recent = () => {
  return (
    <div className="flex flex-col relative items-center justify-center mt-[138px]">
      <h2 className="text-white font-bold text-[1.5em]">RECENT PLAYS</h2>
      <div className="mt-10 mb-[100px] w-[660px] border-2 border-[#1e1e1e] p-2 rounded-[20px] flex flex-col-reverse items-start justify-start">
        {recent.map((item: any, index: number) => (
          <div
            className="my-[10px] flex flex-col w-full relative border-2 border-[#1e1e1e] rounded-[14px]"
            key={`recent-${index}`}
          >
            <div className="flex justify-between bg-[#1E1E1E] rounded-t-[10px]">
              <div className="flex items-center text-white text-[13px] p-3 cursor-pointer w-full relative">
                <span className="px-2 mr-[5px] rounded-[5px] bg-[#0f0f0f] flex items-center text-white">
                  {item.who}
                </span>
                bet
                <span className="flex bg-[#0f0f0f] rounded-[5px] mx-[5px] items-center py-1 px-[7px] gap-1">
                  <img
                    src={item.img}
                    className="w-5 h-5 rounded-full"
                    alt="vault"
                  />
                  {item.bet}
                </span>
                and
                <span className="text-[#ff0] ml-[5px]">{item.result}</span>
                <div
                  className={`absolute z-10 min-w-[28px] py-1 px-[6px] rounded-[5px] -left-[26px] flex justify-center items-center ${
                    item.color === "pink" ? "bg-[#da355c]" : "bg-[#222645]"
                  }`}
                >
                  {item.number}
                </div>
              </div>
              <div className="text-[#ff0] p-[10px] min-w-[120px] flex justify-center items-center text-[14px] bg-black rounded-tr-[10px]">
                {item.obtained}
              </div>
            </div>

            <div className="flex flex-col w-full items-end justify-end border-t-2 border-t-[#1e1e1e]">
              <div className="flex items-center justify-end text-xs pl-[5px] w-full ">
                <div className="text-[#ff0] border-r-2 border-r-[#1e1e1e] p-2">
                  {item.result}:
                </div>
                <div className="flex p-2 items-center text-[#ff0]">
                  <span>{item.collect}</span>
                  <span className="ml-[5px]">{item.about}</span>
                </div>
              </div>
              <div className="flex items-center justify-end border-t-2 border-t-[#1e1e1e] text-xs text-[#555555] w-full relative">
                <div className="p-2">bets:</div>
                {item.log.map((subitem: any, subindex: number) => (
                  <div
                    className="flex p-2 items-center border-l-2 border-l-[#1e1e1e]"
                    key={`sublog-${subindex}`}
                  >
                    <span>{subitem.collect}</span>
                    <span className="ml-[5px]">{subitem.about}</span>
                  </div>
                ))}

                <div className="absolute -bottom-[17px] left-[5px] bg-black rounded-[10px] border-2 border-[#1e1e1e] py-[5px] px-[10px] text-[11px] leading-[11px]">
                  {item.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recent;
