import React from "react";

import { keyboard } from "config/variable";

const Keyboard = () => {
  return (
    <div className="flex flex-col items-center justify-start mt-[50px]">
      <div className="flex items-center justify-center ">
        <div className="w-[60px] h-[195px] bg-[#67b753] p-5 rounded-[10px] flex justify-center items-center text-xl text-white mr-[5px]">
          0
        </div>
        <div className="flex items-end justify-start flex-wrap flex-col-reverse h-[205px] w-[825px]">
          {keyboard.map((item: any, index: number) => (
            <div
              className={`m-1 w-[60px] h-[60px] rounded-[10px] cursor-pointer flex justify-center items-center text-white hover:opacity-60 hover:scale-90 anim ${
                item.color === "pink" ? "bg-pink" : "bg-darkBlue"
              }`}
              key={`number-${item.value}`}
            >
              {item.value}
            </div>
          ))}
        </div>
        <div className="h-[205px] flex items-center justify-center flex-col">
          <div className="w-[60px] h-[60px] border-2 border-[#1e1e1e] rounded-[10px] cursor-pointer anim flex justify-center items-center text-white hover:bg-[#1e1e1e] m-1">
            2:1
          </div>
          <div className="w-[60px] h-[60px] border-2 border-[#1e1e1e] rounded-[10px] cursor-pointer anim flex justify-center items-center text-white hover:bg-[#1e1e1e] m-1">
            2:1
          </div>
          <div className="w-[60px] h-[60px] border-2 border-[#1e1e1e] rounded-[10px] cursor-pointer anim flex justify-center items-center text-white hover:bg-[#1e1e1e] m-1">
            2:1
          </div>
        </div>
      </div>

      <div className="w-[820px] flex items-center justify-center">
        <div className="w-[33.33%] h-[60px] border-b-4 border-2 border-[#1e1e1e] m-1 rounded-[10px] anim flex justify-center items-center text-white cursor-pointer hover:bg-[#1e1e1e]">
          1 to 12
        </div>
        <div className="w-[33.33%] h-[60px] border-b-4 border-2 border-[#1e1e1e] m-1 rounded-[10px] anim flex justify-center items-center text-white cursor-pointer hover:bg-[#1e1e1e]">
          1 to 12
        </div>
        <div className="w-[33.33%] h-[60px] border-b-4 border-2 border-[#1e1e1e] m-1 rounded-[10px] anim flex justify-center items-center text-white cursor-pointer hover:bg-[#1e1e1e]">
          1 to 12
        </div>
      </div>

      <div className="w-[820px] flex items-center justify-center">
        <div className="w-[16.66%] h-[60px] border-b-4 border-2 border-[#1e1e1e] m-1 rounded-[10px] cursor-pointer anim hover:bg-[#1e1e1e] flex justify-center items-center text-white">
          1 to 18
        </div>
        <div className="w-[16.66%] h-[60px] border-b-4 border-2 border-[#1e1e1e] m-1 rounded-[10px] cursor-pointer anim hover:bg-[#1e1e1e] flex justify-center items-center text-white">
          Even
        </div>
        <div className="w-[16.66%] h-[60px] m-1 rounded-[10px] cursor-pointer anim bg-pink flex justify-center items-center text-white"></div>
        <div className="w-[16.66%] h-[60px] m-1 rounded-[10px] cursor-pointer anim bg-darkBlue flex justify-center items-center text-white"></div>
        <div className="w-[16.66%] h-[60px] border-b-4 border-2 border-[#1e1e1e] m-1 rounded-[10px] cursor-pointer anim hover:bg-[#1e1e1e] flex justify-center items-center text-white">
          Odd
        </div>
        <div className="w-[16.66%] h-[60px] border-b-4 border-2 border-[#1e1e1e] m-1 rounded-[10px] cursor-pointer anim hover:bg-[#1e1e1e] flex justify-center items-center text-white">
          19 to 36
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
