import React, { useState } from "react";

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
    <div className="dashboard h-screen">
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

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search data"
        />
      </div>

      {/* Data Cards */}
      <div className="data-cards">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="data-card">
              <p>{item.detail}</p>
              {/* Optional: Add Edit/Delete buttons here */}
            </div>
          ))
        ) : (
          <p>No Results Found</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
