import React, { useEffect, useRef } from "react";

import styles from "../../style";
import "./style.css";

const Header = () => {
  const buttonContainerRef = useRef(null);
  const overlayRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const buttonContainer = buttonContainerRef.current;
    const overlay = overlayRef.current;
    const body = bodyRef.current;

    const toggleClass = () => {
      buttonContainer.classList.toggle("active");
      overlay.classList.toggle("open");
      body.classList.toggle("active");
    };

    buttonContainer.addEventListener("click", toggleClass);

    // Clean up the event listener when the component unmounts
    return () => {
      buttonContainer.removeEventListener("click", toggleClass);
    };
  }, []);
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
      <div className="sm:hidden block ">
        <div className="flex justify-between w-full px-12 mt-10">
          <a href="/" className="-ml-6">
            <p className={`${styles.logo} text-[#073A55] font-bold`}>Logo</p>
          </a>
          <div id="menuToggle absolute z-10">
            <div ref={buttonContainerRef} class="button_container1 ">
              <span class="top1"></span>
              <span class="middle"></span>
              <span class="bottom1"></span>
            </div>

            <div ref={overlayRef} class="overlay mt-0">
              <div class="nav">
                <div className="flex justify-end px-10 w-full text-white">
                  <div className="col2 text-right">
                    {" "}
                    <ul>
                      <div className="nav-para text-xl mb-4 mt-20">
                        <a className="lala  relative " href="/anarchy">
                          Upload{" "}
                        </a>
                      </div>
                      <div className="nav-para  text-xl mb-4 mx">
                        <a className="lala  " href="/about">
                          About
                        </a>
                      </div>

                      <div className="nav-para  text-xl mb-4 mx">
                        <a className="lala  " href="/career">
                          Help
                        </a>
                      </div>
                      <div className="nav-para  text-xl  mx">
                        <a className="lala  " href="/career">
                          Contact Us
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
