import React from "react";
import spinner from "./Images/spinner.gif"

export default function Spinner() {
  return (
    <div className='text-center' style={{margin: "100px"}}>
        <img src={spinner} alt="spinner" />
    </div>
  );
}
