import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">Note</div>
        <div className="card-body">
          <h5 className="card-title">Please Wait 3 seconds after making any changes in website</h5>
          <p className="card-text">
            Image are provides by Pexels. A very good images library.
          </p>
          <a href="https://www.pexels.com" className="btn btn-outline-primary" target="_blank">
            Pexels
          </a>
        </div>
      </div>
    </div>
  );
}
