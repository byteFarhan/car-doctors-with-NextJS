import React from "react";

const Facility = ({ facility }) => {
  const { name, details } = facility;
  return (
    <div className="p-8 space-y-2 border-t-2 rounded-lg bg-light-gray border-primary">
      <h5 className="text-[#444]">{name}</h5>
      <p>{details}</p>
    </div>
  );
};

export default Facility;
