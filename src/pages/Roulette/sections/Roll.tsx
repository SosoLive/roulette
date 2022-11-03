import React, { useEffect, useState } from "react";

import { ReactComponent as ArrowUp } from "assets/svg/arrow-up.svg";

const Roll = () => {
  const [angle, setAngle] = useState(0);
  const rotate = () => {
    setAngle(parseInt(`${Math.random() * 10000 + 9}`));
  };

  useEffect(() => {
    console.log(angle);
  }, [angle]);

  return (
    <div className="w-[650px] flex items-center justify-center relative -mt-[325px] rounded-full anim">
      <img
        src="images/roulette.png"
        alt="roulette"
        className="w-full transition-all duration-[6000] ease-in"
        style={{
          transform: `rotateZ(${angle}deg)`,
          transition: "all 3s ease-in-out",
        }}
      />
      <div className="absolute text-2xl mt-[300px] flex flex-col items-center justify-center text-white">
        Select your bet
      </div>
      <div className="absolute flex items-center text-[33px] leading-[33px] justify-center -bottom-[42px]">
        <ArrowUp
          className="w-[33px] h-[33px] cursor-pointer"
          onClick={rotate}
        />
      </div>
    </div>
  );
};

export default Roll;
