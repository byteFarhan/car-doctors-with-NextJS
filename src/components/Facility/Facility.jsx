import React from "react";

const Facility = ({ facility }) => {
  const { name, details } = facility;
  return (
    <div className="rounded-lg bg-[#F3F3F3] border-t-2 border-primary p-8 space-y-2">
      <h5 className="text-[#444]">{name}</h5>
      <p>{details}</p>
    </div>
  );
};

export default Facility;
