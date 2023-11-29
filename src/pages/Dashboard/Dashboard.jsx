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
            <div className="searchbar mt-20 shadow-xl">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search Property"
                className="px-4 py-6 w-[800px] rounded-xl absolute z-10"
              />
            </div>
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
      <div className="formSection">
        <div
          className={`data-upload-form ${styles.marginX} ${styles.marginY} py-20 `}
        >
          <form onSubmit={handleUpload} className="flex flex-col ">
            <h1
              className={`${styles.subheading} text-amber-500 mb-4 font-semibold`}
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
              className="px-4 py-3 w-[400px] rounded-xl"
            />
            <br />
            <textarea
              value={uploadInput.description}
              onChange={(e) =>
                setUploadInput({ ...uploadInput, description: e.target.value })
              }
              placeholder="Enter description"
              className="px-4 py-3 w-[400px] rounded-xl"
            />
            <br />
            <input
              type="text"
              value={uploadInput.price}
              onChange={(e) =>
                setUploadInput({ ...uploadInput, price: e.target.value })
              }
              placeholder="Enter price"
              className="px-4 py-3 w-[400px] rounded-xl"
            />
            <br />
            <button
              className="px-4 py-3 w-[400px] rounded-xl bg-amber-500 text-white"
              type="submit"
            >
              Upload Data
            </button>
          </form>
        </div>
      </div>
      <div className="cardSection">
        <Card data={filteredData} />
      </div>
    </div>
  );
};

export default Dashboard;
