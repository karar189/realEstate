import React, { useState } from "react";
import styles from "../../style";

import hero from "../../assets/images/hero.avif";
import Card from "../../components/card/Card";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [uploadInput, setUploadInput] = useState("");

  const handleUpload = (event) => {
    event.preventDefault();
    if (uploadInput) {
      setData([...data, { id: data.length, detail: uploadInput }]);
      setUploadInput("");
      alert("Data uploaded successfully!"); // Simple confirmation message
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.detail.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard">
      {/* Search Bar */}
      {/* <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search data"
        />
      </div> */}

      {/* Data Cards */}
      {/* <div className="data-cards">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="data-card">
              <p>{item.detail}</p>
            </div>
          ))
        ) : (
          <p>No Results Found</p>
        )}
      </div> */}
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
        {" "}
        {/* Data Upload Form */}
        <div className="data-upload-form">
          <form onSubmit={handleUpload}>
            <input
              type="text"
              value={uploadInput}
              onChange={(e) => setUploadInput(e.target.value)}
              placeholder="Enter data"
            />
            <button type="submit">Upload Data</button>
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
