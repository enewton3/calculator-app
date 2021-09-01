import React from "react";

export default function Input({ calcString, setCalcString }) {
  const handleChange = (e) => {
    setCalcString(e.target.value);
  };

  return <input value={calcString} onChange={(e) => handleChange(e)} />;
}
