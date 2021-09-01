import React from "react";

export default function Button({ content, handleButtonClick }) {
  return <button onClick={() => handleButtonClick(content)}>{content}</button>;
}
