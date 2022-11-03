import React from "react";
import Layout from "../../layouts/Layout";
import Keyboard from "./sections/Keyboard";
import Recent from "./sections/Recent";
import Roll from "./sections/Roll";

const Roulette = () => {
  return (
    <Layout title="dashboard">
      <div className="flex flex-col relative items-center justify-start">
        <Roll />
        <Keyboard />
        <button className="mt-[15px] min-w-[150px] m-[5px] bg-[#0f0f0f] anim text-white text-[15px] px-[13px] h-12 flex cursor-pointer items-center justify-start rounded-l-[10px] rounded-tr-[3px] rounded-br-[10px] hover:bg-[#141414]">
          Select Wallet
        </button>
        <Recent />
      </div>
    </Layout>
  );
};

export default Roulette;
