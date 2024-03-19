import React from "react";
import spinner from "./Images/spinner.gif";
import "./css/style.css"

export default function Spinner() {
  return (
    <div className="text-center" id="spinner">
      <img src={spinner} alt="spinner" />
    </div>
  );
}
