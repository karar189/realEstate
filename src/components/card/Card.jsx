import React from "react";
import styles from "../../style";
import homeImg from "../../assets/images/home1.jpg";

const Card = ({ data }) => {
  return (
    <>
      <div
        className={`${styles.marginX} card-container md:grid md:grid-cols-3 flex flex-wrap gap-20 w-full `}
      >
        {data.length > 0 ? (
          data.map((item) => (
            <div className={`  `} key={item.id}>
              <div className="card w-80">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="rounded-t-3xl h-48 w-full object-cover"
                />
                <div className="w-80  bg-white rounded-b-3xl shadow border border-sky-500 h-[300px]">
                  <h2 className=" text-lg font-bold px-6 py-4">{item.title}</h2>
                  <p className="px-6 ">{item.description}</p>
                  <br />
                  <p className="px-6 pb-4">${item.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No New Data Available</p>
        )}
      </div>
      {/* dummy data */}
      <div className="flex flex-wrap mb-60">
        <div className={`${styles.marginX} card-container flex flex-wrap`}>
          <div className={` ${styles.marginY} `}>
            <div className="card w-80">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="rounded-t-3xl h-48 w-full object-cover"
              />
              <div className="w-80  bg-white rounded-b-3xl shadow border border-sky-500 h-[300px]">
                <h2 className=" text-lg font-bold px-6 py-4">name</h2>
                <p className="px-6 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                  unde ipsum magni incidunt, esse soluta voluptates, accusantium
                  voluptatibus, suscipit odit vero accusamus velit repellat quo
                  eos quam porro doloremque atque.
                </p>
                <br />
                <p className="px-6 pb-4">$200</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.marginX} card-container flex  flex-wrap`}>
          <div className={` ${styles.marginY} `}>
            <div className="card w-80">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="rounded-t-3xl h-48 w-full object-cover"
              />
              <div className="w-80  bg-white rounded-b-3xl shadow border border-sky-500 h-[300px]">
                <h2 className=" text-lg font-bold px-6 py-4">name</h2>
                <p className="px-6 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                  unde ipsum magni incidunt, esse soluta voluptates, accusantium
                  voluptatibus, suscipit odit vero accusamus velit repellat quo
                  eos quam porro doloremque atque.
                </p>
                <br />
                <p className="px-6 pb-4">$200</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.marginX} card-container flex  flex-wrap h-[300px]`}
        >
          <div className={` ${styles.marginY} `}>
            <div className="card w-80">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="rounded-t-3xl h-48 w-full object-cover"
              />
              <div className="w-80  bg-white rounded-b-3xl shadow border border-sky-500">
                <h2 className=" text-lg font-bold px-6 py-4">name</h2>
                <p className="px-6 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                  unde ipsum magni incidunt, esse soluta voluptates, accusantium
                  voluptatibus, suscipit odit vero accusamus velit repellat quo
                  eos quam porro doloremque atque.
                </p>
                <br />
                <p className="px-6 pb-4">$200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
