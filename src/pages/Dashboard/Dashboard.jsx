import React, { useState } from "react";
import styles from "../../style";

import hero from "../../assets/images/hero.avif";
import Card from "../../components/card/Card";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [uploadInput, setUploadInput] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handleUpload = (event) => {
    event.preventDefault();
    if (uploadInput.title && uploadInput.description && uploadInput.price) {
      setData([...data, { id: data.length, ...uploadInput }]);
      setUploadInput({ title: "", description: "", price: "" });
      alert("Data uploaded successfully!");
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard">
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
            <p
              className={`${styles.subheading} text-[#073a55] mt-40 bg-amber-400 rounded-xl py-3 w-96 px-4`}
            >
              <b>Or,</b> Add Your Own Listing Today!
            </p>
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
      <div className="cardSection flex flex-wrap mt-20">
        <h1
          className={`${styles.subheading} ${styles.marginX} text-[#073a55] mb-4 font-bold`}
        >
          All Listings
        </h1>
        <Card data={filteredData} />
        {/* dummy data */}
        <div className="flex">
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Hic unde ipsum magni incidunt, esse soluta voluptates,
                    accusantium voluptatibus, suscipit odit vero accusamus velit
                    repellat quo eos quam porro doloremque atque.
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Hic unde ipsum magni incidunt, esse soluta voluptates,
                    accusantium voluptatibus, suscipit odit vero accusamus velit
                    repellat quo eos quam porro doloremque atque.
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Hic unde ipsum magni incidunt, esse soluta voluptates,
                    accusantium voluptatibus, suscipit odit vero accusamus velit
                    repellat quo eos quam porro doloremque atque.
                  </p>
                  <br />
                  <p className="px-6 pb-4">$200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="formSection mt-20">
        <div
          className={`data-upload-form ${styles.marginX} ${styles.marginY}  flex justify-between `}
        >
          <form onSubmit={handleUpload} className="flex flex-col ">
            <h1
              className={`${styles.subheading} text-amber-400 mb-4 font-bold`}
            >
              Upload Property
            </h1>
            <input
              type="text"
              value={uploadInput.title}
              onChange={(e) =>
                setUploadInput({ ...uploadInput, title: e.target.value })
              }
              placeholder="Enter title"
              className="px-4 py-3 w-[500px] rounded-xl"
              required
            />
            <br />
            <textarea
              value={uploadInput.description}
              onChange={(e) =>
                setUploadInput({ ...uploadInput, description: e.target.value })
              }
              placeholder="Enter description"
              className="px-4 py-3 w-[500px] rounded-xl"
              maxLength="250"
              required
            />
            <br />
            <input
              type="number"
              value={uploadInput.price}
              onChange={(e) =>
                setUploadInput({ ...uploadInput, price: e.target.value })
              }
              placeholder="Enter price"
              className="px-4 py-3 w-[500px] rounded-xl"
              required
            />
            <br />
            <button
              className="px-4 py-3 w-[500px] rounded-xl bg-amber-400 text-black font-bold"
              type="submit"
            >
              Upload Data
            </button>
          </form>
          <div className="pr-32">
            {" "}
            <div className="image-section flex flex-col  divide-y divide-amber-400">
              <div className="flex w-full  divide-x divide-amber-400">
                <div className="  px-[68px]  py-12 flex flex-col">
                  <h2 className={`${styles.logo} saonara`}>$ 3Bn + </h2>
                  <p className={`${styles.paragraph} text-white`}>
                    Combined <br />
                    assets managed
                  </p>
                </div>
                <div className=" px-12 py-12 flex flex-col">
                  <h2 className={`${styles.logo} saonara`}>6 cities</h2>
                  <p className={`${styles.paragraph} text-white`}>
                    Across the world
                  </p>
                </div>
              </div>
              <div className="flex w-full divide-x divide-amber-400">
                <div className="  px-12 py-12 flex flex-col">
                  <h2 className={`${styles.logo} saonara`}>100yrs+</h2>
                  <p className={`${styles.paragraph} text-white`}>
                    {" "}
                    Combined Experience{" "}
                  </p>
                </div>
                <div className=" px-12 py-12 flex flex-col">
                  <h2 className={`${styles.logo} saonara`}>125 +</h2>
                  <p className={`${styles.paragraph} text-white`}>
                    Transactions Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
