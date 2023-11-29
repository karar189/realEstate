import React, { useState } from "react";

import styles from "../../style";

const Header = () => {
  return (
    <>
      {/* desktop */}
      <div className="hidden sm:block ">
        <div className={`${styles.marginX} flex justify-between my-10`}>
          {/* logo section */}
          <div className={` `}>
            <h1 className={`${styles.logo} text-black font-bold `}>Logo</h1>
          </div>
          {/* contact section */}
          <div className="flex justify-between w-[300px]">
            <p
              className={`text-sm ${styles.paragraph} hover:text-[#073a55] font-medium`}
            >
              Upload
            </p>
            <p
              className={`text-sm ${styles.paragraph} hover:text-[#073a55] font-medium`}
            >
              About
            </p>
            <p
              className={`text-sm ${styles.paragraph} hover:text-[#073a55] font-medium`}
            >
              Help
            </p>
            <p
              className={`text-sm ${styles.paragraph} hover:text-[#073a55] font-medium`}
            >
              Contact Us
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
