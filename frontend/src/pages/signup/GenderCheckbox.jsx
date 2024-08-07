import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div>
      <div className="flex gap-3">
        <div className="form-control">
          <label
            htmlFor=""
            className={`label gap-2 cursor-pointer ${
              selectedGender === "male" ? "selected" : ""
            }`}
          >
            <span className="label-text">Male</span>
            <input
              type="checkbox"
              className="checkbox border-white"
              checked={selectedGender === "male"}
              onChange={() => onCheckboxChange("male")}
            />
          </label>
        </div>
        <div className="form-control">
          <label
            htmlFor=""
            className={`label gap-2 cursor-pointer ${
              selectedGender === "male" ? "selected" : ""
            }`}
          >
            <span className="label-text">Female</span>
            <input
              type="checkbox"
              className="checkbox border-white"
              checked={selectedGender === "female"}
              onChange={() => onCheckboxChange("female")}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default GenderCheckbox;
