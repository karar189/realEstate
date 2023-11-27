import React from "react";
import styles from "../../style";
import homeImg from "../../assets/images/home1.jpg";

const Card = ({ data }) => {
  return (
    <div className={`${styles.marginX} card-container flex  flex-wrap`}>
      {data.length > 0 ? (
        data.map((item) => (
          <div className={` ${styles.marginY} mr-20`} key={item.id}>
            <div className="card w-80">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="rounded-t-3xl h-48 w-full object-cover"
              />
              <div className="w-80  bg-white rounded-b-3xl shadow border border-sky-500">
                <h2 className=" text-lg font-bold px-6 py-4">
                  {item.detail}
                  {/* {data[0].name} */}
                </h2>
                <p className="px-6 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  quisquam incidunt velit aliquam deleniti id ea!
                  {/* {item.description} */}
                </p>
                <br />
                <p className="px-6 pb-4">
                  {/* {data[0].price} */}
                  $400
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No Data Available</p>
      )}
    </div>
  );
};

export default Card;
