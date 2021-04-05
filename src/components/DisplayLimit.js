import React from "react";
import { func, oneOfType, number, string } from "prop-types";

const DisplayLimit = ({ setLimit, limit }) => {
  const onChange = (event) => {
    const { value } = event.target;

    setLimit(value);
  };

  const limits = [10, 25, 35, 50];

  const renderLimits = () => {
    return limits.map((limit) => {
      return (
        <option key={limit} value={limit}>
          {limit}
        </option>
      );
    });
  };

  return (
    <div>
      <select onChange={onChange} value={limit}>
        {renderLimits()}
      </select>
      {limit}
    </div>
  );
};

DisplayLimit.propTypes = {
  setLimit: func.isRequired,
  limit: oneOfType([number, string]).isRequired,
};

export default DisplayLimit;
