import React from "react";

import PROFILE_PIC from "../Components/Assests/img 4.jpeg";
import ICON_1 from "../Components/Assests/html.gif";
import ICON_2 from "../Components/Assests/js.gif";
import ICON_3 from "../Components/Assests/react.gif";
import ICON_4 from "../Components/Assests/img 6.jpeg";

const Hero = () => {
  return (
    <section id="hero" className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px] matti">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-2xl font-medium text-black">
            {" "}
            Hi I'm Jaya Prakash
          </h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-to-r from-[#0052D4] via-[#65C7F7] to-[#9CECFB] bg-clip-text text-transparent">
            Passionate Web Developer on a Mission to Make the Web Better
          </h1>
          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
            A creative web developer who loves building clean, user-friendly,
            and impactful web experiences
          </p>

          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim">
              View My Work
            </button>
            <button className="flex-1 md:flex-none action-btn btn-scale-anim">
              Download Resume
            </button>
          </div>
        </div>

        <div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px]  rounded-3xl relative order-1 lg:order-2 ">
          <img src={PROFILE_PIC} alt="Profile Pic" className="profile-pic rounded-xl mt-5 "  />

          <img
            src={ICON_1}
            alt="Icon 1"
            className="icon-img -left-10 bottom-20 rotate-[1.75deg] w-[200px] h-auto"
          />

          <img src={ICON_2} 
          alt="Icon 2" 
          className="icon-img size-24 left-8 md:left-10  -bottom-2 rotate-[1.75deg]" />

          <img src={ICON_3} 
          alt="Icon 3" 
          className="icon-img size-24 left-[215px] md:left-[265px] -bottom-2 rotate-[1.75deg]" />

          <img src={ICON_4} 
          alt="Icon 4" 
          className="icon-img size-24  -right-10 bottom-20 rotate-[1.75deg] ]" />
        </div>
      </div>

      <div>Hero</div>
    </section>
  );
};

export default Hero;
