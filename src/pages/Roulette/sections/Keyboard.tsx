import React, { useEffect, useState } from "react";

import { keyboard } from "config/variable";

const Keyboard = () => {
  const [keyboardList, setKeyboardList] = useState<any>([]);

  useEffect(() => {
    setKeyboardList(keyboard);
  }, []);

  const defaultStatus = () => {
    setKeyboardList(keyboard);
  };

  const selectLine = async (firstNum: number) => {
    let temp = keyboard;

    let sel: number[] = [];
    sel[0] = firstNum;
    for (let i = 1; i < 12; i++) {
      sel[i] = sel[i - 1] + 3;
    }

    const newArr = await Promise.all(
      temp.map(async (element: any, index: number) => {
        if (parseInt(element.value) === sel[Math.floor(index / 3)]) {
          return { ...element, status: "selected" };
        }
        return { ...element, status: "noselected" };
      })
    );
    setKeyboardList(newArr);
  };

  const selectRow = async (firstNum: number, lastNum: number) => {
    let temp = keyboard;
    const newArr = await Promise.all(
      temp.map(async (element: any, index: number) => {
        if (
          parseInt(element.value) >= firstNum &&
          parseInt(element.value) <= lastNum
        ) {
          return { ...element, status: "selected" };
        }
        return { ...element, status: "noselected" };
      })
    );
    setKeyboardList(newArr);
  };

  const selectEven = async () => {
    let temp = keyboard;
    const newArr = await Promise.all(
      temp.map(async (element: any, index: number) => {
        if (parseInt(element.value) % 2 === 0) {
          return { ...element, status: "selected" };
        }
        return { ...element, status: "noselected" };
      })
    );
    setKeyboardList(newArr);
  };

  const selectOdd = async () => {
    let temp = keyboard;
    const newArr = await Promise.all(
      temp.map(async (element: any, index: number) => {
        if (parseInt(element.value) % 2 === 1) {
          return { ...element, status: "selected" };
        }
        return { ...element, status: "noselected" };
      })
    );
    setKeyboardList(newArr);
  };

  const selectColor = async (color: string) => {
    let temp = keyboard;
    const newArr = await Promise.all(
      temp.map(async (element: any, index: number) => {
        if (element.color === color) {
          return { ...element, status: "selected" };
        }
        return { ...element, status: "noselected" };
      })
    );
    setKeyboardList(newArr);
  };

  return (
    <div className="flex flex-col items-center justify-start mt-[50px]">
      <div className="flex items-center justify-center ">
        <div className="w-[25px] md:w-12 xl:w-[60px] h-[75px] md:h-[150px] lg:h-[160px] xl:h-[195px] bg-[#67b753] md:p-5 rounded-l-[10px] md:rounded-[10px] flex justify-center items-center text-xl text-white md:mr-[2px] lg:mr-[5px]">
          0
        </div>
        <div className="flex items-end justify-start flex-wrap flex-col-reverse h-[75px] md:h-[160px] lg:h-[170px] xl:h-[205px] w-[300px] md:w-[624px] lg:w-[675px] xl:w-[825px]">
          {keyboardList.map((item: any, index: number) => (
            <div
              className={`m-0 md:m-[2px] lg:m-1 w-[25px] md:w-12 xl:w-[60px] h-[25px] md:h-12 xl:h-[60px] md:rounded-[10px] cursor-pointer flex justify-center items-center text-white hover:opacity-60 hover:scale-90 transition-all duration-150 ease-in-out ${
                item.color === "pink" ? "bg-pink" : "bg-darkBlue"
              } ${item.status === "selected" && "scale-105"} ${
                item.status === "noselected" && "opacity-30"
              }`}
              key={`number-${item.value}`}
            >
              {item.value}
            </div>
          ))}
        </div>
        <div className="md:h-[205px] flex items-center justify-center flex-col">
          <div
            className="w-[25px] md:w-12 xl:w-[60px] h-[25px] md:h-12 xl:h-[60px] border-2 border-[#1e1e1e] md:rounded-[10px] cursor-pointer anim flex justify-center items-center text-white hover:bg-[#1e1e1e] m-0 md:m-[2px] lg:m-1 rounded-tr-[10px]"
            onMouseEnter={() => selectLine(3)}
            onMouseLeave={defaultStatus}
          >
            2:1
          </div>
          <div
            className="w-[25px] md:w-12 xl:w-[60px] h-[25px] md:h-12 xl:h-[60px] border-2 border-[#1e1e1e] md:rounded-[10px] cursor-pointer anim flex justify-center items-center text-white hover:bg-[#1e1e1e] m-0 md:m-[2px] lg:m-1"
            onMouseEnter={() => selectLine(2)}
            onMouseLeave={defaultStatus}
          >
            2:1
          </div>
          <div
            className="w-[25px] md:w-12 xl:w-[60px] h-[25px] md:h-12 xl:h-[60px] border-2 border-[#1e1e1e] md:rounded-[10px] cursor-pointer anim flex justify-center items-center text-white hover:bg-[#1e1e1e] m-0 md:m-[2px] lg:m-1 rounded-br-[10px]"
            onMouseEnter={() => selectLine(1)}
            onMouseLeave={defaultStatus}
          >
            2:1
          </div>
        </div>
      </div>

      <div className="w-[350px] md:w-[630px] lg:w-[670px] xl:w-[820px] flex items-center justify-center text-sm md:text-base">
        <div
          className="w-[33.33%] h-[40px] md:h-12 xl:h-[60px] border-b-4 border-2 border-[#1e1e1e] m-0 md:m-[2px] lg:m-1 md:rounded-[10px] anim flex justify-center items-center text-white cursor-pointer hover:bg-[#1e1e1e]"
          onMouseEnter={() => selectRow(1, 12)}
          onMouseLeave={defaultStatus}
        >
          1 to 12
        </div>
        <div
          className="w-[33.33%] h-[40px] md:h-12 xl:h-[60px] border-b-4 border-2 border-[#1e1e1e] m-0 md:m-[2px] lg:m-1 md:rounded-[10px] anim flex justify-center items-center text-white cursor-pointer hover:bg-[#1e1e1e]"
          onMouseEnter={() => selectRow(13, 24)}
          onMouseLeave={defaultStatus}
        >
          13 to 24
        </div>
        <div
          className="w-[33.33%] h-[40px] md:h-12 xl:h-[60px] border-b-4 border-2 border-[#1e1e1e] m-0 md:m-[2px] lg:m-1 md:rounded-[10px] anim flex justify-center items-center text-white cursor-pointer hover:bg-[#1e1e1e]"
          onMouseEnter={() => selectRow(25, 36)}
          onMouseLeave={defaultStatus}
        >
          25 to 36
        </div>
      </div>

      <div className="w-[350px] md:w-[630px] lg:w-[670px] xl:w-[820px] flex items-center justify-center text-sm md:text-base">
        <div
          className="w-[16.66%] h-[40px] md:h-12 xl:h-[60px] border-b-4 border-2 border-[#1e1e1e] m-0 md:m-[2px] lg:m-1 md:rounded-[10px] cursor-pointer anim hover:bg-[#1e1e1e] flex justify-center items-center text-white"
          onMouseEnter={() => selectRow(1, 18)}
          onMouseLeave={defaultStatus}
        >
          1 to 18
        </div>
        <div
          className="w-[16.66%] h-[40px] md:h-12 xl:h-[60px] border-b-4 border-2 border-[#1e1e1e] m-0 md:m-[2px] lg:m-1 md:rounded-[10px] cursor-pointer anim hover:bg-[#1e1e1e] flex justify-center items-center text-white"
          onMouseEnter={selectEven}
          onMouseLeave={defaultStatus}
        >
          Even
        </div>
        <div
          className="w-[16.66%] h-[40px] md:h-12 xl:h-[60px] m-0 md:m-[2px] lg:m-1 md:rounded-[10px] cursor-pointer anim bg-pink flex justify-center items-center text-white"
          onMouseEnter={() => selectColor("pink")}
          onMouseLeave={defaultStatus}
        ></div>
        <div
          className="w-[16.66%] h-[40px] md:h-12 xl:h-[60px] m-0 md:m-[2px] lg:m-1 md:rounded-[10px] cursor-pointer anim bg-darkBlue flex justify-center items-center text-white"
          onMouseEnter={() => selectColor("darkBlue")}
          onMouseLeave={defaultStatus}
        ></div>
        <div
          className="w-[16.66%] h-[40px] md:h-12 xl:h-[60px] border-b-4 border-2 border-[#1e1e1e] m-0 md:m-[2px] lg:m-1 md:rounded-[10px] cursor-pointer anim hover:bg-[#1e1e1e] flex justify-center items-center text-white"
          onMouseEnter={selectOdd}
          onMouseLeave={defaultStatus}
        >
          Odd
        </div>
        <div
          className="w-[16.66%] h-[40px] md:h-12 xl:h-[60px] border-b-4 border-2 border-[#1e1e1e] m-0 md:m-[2px] lg:m-1 md:rounded-[10px] cursor-pointer anim hover:bg-[#1e1e1e] flex justify-center items-center text-white"
          onMouseEnter={() => selectRow(19, 36)}
          onMouseLeave={defaultStatus}
        >
          19 to 36
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
