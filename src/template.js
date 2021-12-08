import React from "react";
import { Link } from "react-router-dom";

const Template = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt11506505_quantized.png"
              className="card-img-top"
              alt="#/"
              width="500"
              height="500"
            />
            <div className="card-body justify-content-center ">
              {/* <h5 className="card-title"> </h5> */}
              <a href="/resume" className="btn btn-primary mx-3">
                Resume Design 1
              </a>
              <Link to="/">
                <button type="button" className="btn btn-dark">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt11506505_quantized.png"
              className="card-img-top"
              alt="#/"
              width="500"
              height="500"
            />
            <div className="card-body">
              {/* <h5 className="card-title">Resume Design 2</h5> */}
              <a href="/resume2" className="btn btn-primary mx-3">
                Resume Design 2
              </a>
              <Link to="/">
                <button type="button" className="btn btn-dark">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
