import React, { useState } from "react";
import styles from "../../style";

import Card from "../../components/card/Card";
import Hero from "../../components/Hero/Hero";
import Form from "../../components/Form/Form";

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
        <Hero searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>
      <div className="cardSection flex flex-wrap mt-20">
        <h1
          className={`${styles.subheading} ${styles.marginX} text-[#073a55] mb-4 font-bold`}
        >
          All Listings
        </h1>
        <Card data={filteredData} />
      </div>
      <div className="formSection mt-20">
        <Form
          uploadInput={uploadInput}
          setUploadInput={setUploadInput}
          handleUpload={handleUpload}
        />
      </div>
    </div>
  );
};

export default Dashboard;
