// FormSection.jsx
import React from "react";
import styles from "../../style";

const Form = ({ uploadInput, setUploadInput, handleUpload }) => {
  return (
    <div className="formSection mt-20">
      <div
        id="upload"
        className={`data-upload-form ${styles.marginX} ${styles.marginY}  flex justify-between `}
      >
        <form onSubmit={handleUpload} className="flex flex-col ">
          <h1 className={`${styles.subheading} text-amber-400 mb-4 font-bold`}>
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
  );
};

export default Form;
