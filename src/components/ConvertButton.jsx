import React from "react";
import PropTypes from "prop-types";

const ConvertButton = ({ onClick }) => {
  return <button onClick={onClick}>Converter</button>;
};

ConvertButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ConvertButton;
