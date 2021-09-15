import React from "react";

const AirLineTile = ({ airline }) => {
  return (
    <div className="airline-tile" key={airline?.code}>
      <div>
        <img
          src={airline.logoURL}
          classname="airline-logo"
          alt="airline-logo"
        />
      </div>

      <div>
        <p className="airline-name">{airline?.name}</p>
      </div>
    </div>
  );
};

export default AirLineTile;
