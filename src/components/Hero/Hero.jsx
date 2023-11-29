import React, { useState } from "react";
import styles from "../../style";

import hero from "../../assets/images/hero.avif";

const Hero = ({ searchTerm, handleSearch }) => {
  return (
    <div>
      <div className="heroSection ">
        <div
          className={`bg-[#073a55] flex justify-between ${styles.marginX}  ${styles.paddingX} ${styles.paddingY} h-[80vh] rounded-3xl `}
        >
          <div className="texts">
            <h1 className={`${styles.heading} text-white`}>
              Explore Your Dream Home
            </h1>
            <p className={`${styles.subheading} text-white mt-10`}>
              Embark on captivating tours to discover the <br /> perfect
              residence for you and your family
            </p>
            <div className="searchbar mt-10 shadow-xl">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search Property"
                className="px-4 py-6 w-[800px] rounded-xl absolute z-10"
              />
            </div>
            <a href="#upload">
              {" "}
              <p
                className={`${styles.subheading} text-[#073a55] mt-40 bg-amber-400 rounded-xl py-3 w-96 px-4`}
              >
                <b>Or,</b> Add Your Own Listing Today!
              </p>
            </a>
          </div>
          <div className="image  relative">
            <div className="bg-white  rounded-2xl shadow-2xl">
              <img
                src={hero}
                alt="image"
                className=" w-[30rem] h-[40rem] mx-auto p-2 rounded-2xl "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
