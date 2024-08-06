import React from "react";

const GenderCheckbox = () => {
  return (
    <div>
      <div className="flex gap-3">
        <div className="form-control">
          <label htmlFor="" className="label gap-2 cursor-pointer">
            <span className="label-text">Male</span>
            <input type="checkbox" className="checkbox border-white" />
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="" className="label gap-2 cursor-pointer">
            <span className="label-text">Female</span>
            <input type="checkbox" className="checkbox border-white" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default GenderCheckbox;
