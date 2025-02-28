import React from "react";
import PropTypes from "prop-types";
import currencies from "../utils/currencies";

const ResultDisplay = ({ resultado, moedaDestino }) => {
  if (!resultado) return null;

  return (
    <div className="resultado">
      <img
        src={currencies[moedaDestino].flag}
        alt={moedaDestino}
        className="flag"
      />
      <p>
        {currencies[moedaDestino].symbol} {resultado}
      </p>
    </div>
  );
};

ResultDisplay.propTypes = {
  resultado: PropTypes.string,
  moedaDestino: PropTypes.string.isRequired,
};

export default ResultDisplay;
