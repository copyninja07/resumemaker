import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaCode,
  //   FaLaptopCode,
  //   FaDatabase,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Resume = () => {
  const skills = localStorage.getItem("skills");
  console.log(skills);
  var match = skills.split(", ");

  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
      });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    });
  };

  return (
    <>
      <div className="App">
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#DP">
              <img
                src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="DP"
                width="30"
                height="30"
                // width="480"
                // height="480"
                className="d-inline-block align-text-top rounded-circle me-2"
              />
              {localStorage.getItem("name")}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex me-5">
              <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#intro"
                    >
                      intro
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#aboutme">
                      about me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skills">
                      skills
                    </a>
                  </li>
                </ul>
                <Link to="/template">
                  <button type="button" className="btn btn-dark">
                    Back
                  </button>
                </Link>
                <Link to="/">
                  <button type="button" className="btn btn-dark mx-2">
                    Home
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-dark mx-2"
                  onClick={() => printDocument()}
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div id="divToPrint">
          <div>
            <div className="container-fluid p-3 pb-5 about" id="intro">
              <div className="d-inline-block align-text-top rounded-circle me-2">
                <h1>{localStorage.getItem("name")}</h1>
              </div>
              <div className="row">
                <div className="col-xl-6 text-center pt-5">
                  <img
                    src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="DP"
                    width="380"
                    height="380"
                    id="DP"
                  />
                </div>
                <div className="col-xl-6 pt-5 ">
                  <span className="home-title">Hi There!</span>
                  <div>
                    <p>
                      {/* "A final year Information Technology graduate student at MBM
                    Engineering College, Jodhpur with an interest in Android App
                    Development and Backend Engineering." */}
                      {localStorage.getItem("about")}
                    </p>
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-center mt-3">
                    <a
                      className="btn btn-outline-dark btn-small me-5"
                      href="https://www.linkedin.com/signup"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      className="btn btn-outline-dark btn-small me-5"
                      href="https://www.instagram.com/?hl=en"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      className="btn btn-outline-dark btn-small me-5"
                      href=" https://www.facebook.com/"
                    >
                      <FaFacebookF />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container-fluid  text-center p-5 aboutme"
            id="aboutme"
          >
            <div>
              <h1> about me.</h1>
              <hr width="50%" className="underline" />
            </div>
            <div className="row">
              <div className="col-6 vertical-line ">
                <h1>education</h1>
                <ul>
                  <li>
                    <div className="d-flex">
                      {/* B.E. in Information Technology */}
                      {localStorage.getItem("collageUniversity")}
                    </div>
                    <div className="d-flex"> Aug, 2018 - May, 2022 </div>
                    <div className="d-flex">
                      {/* I took courses on Data structures, Algorithms, DBMS,
                    Operating Systems, Computer Networks, AI. */}
                    </div>
                    {/* {match.map((skill) => (
                      <span className="badge bg-info text-dark me-2 mt-2 ">
                        {skill}
                      </span>
                    ))} */}
                    {/* <span className="badge bg-info text-dark me-2 mt-2 ">
                    JavaScript
                  </span>
                  <span className="badge bg-info text-dark  mt-2    ">
                    React
                  </span>
                  <span className="badge bg-info text-dark  ms-2 mt-2  ">
                    MongoDB
                  </span> */}
                  </li>
                </ul>
              </div>
              <div className="col-6 vertical-line">
                <h1>expireance</h1>
                <ul>
                  <li>
                    <div className="d-flex">
                      {/* Mugneeram Bangur Memorial Engineering College, Jodhpur{" "} */}
                      {localStorage.getItem("experience1")}
                    </div>
                    <div className="d-flex">
                      {localStorage.getItem("experience2")}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="container-fluid text-center p-5 pb-5 skills"
            id="skills"
          >
            <div>
              <h1> skills.</h1>
              <hr width="50%" className="underline" />
            </div>
            <div className="row justify-content-center">
              <div className="col-4 pt-3">
                <FaCode size="70px" />
                {match.map((skill, index) => (
                  <div className="pt-2" key={index}>
                    {skill}{" "}
                  </div>
                ))}
                <hr width="50%" className="underline" />
                {/* <span className="title3">
                  Python, Kotlin, Java, C, C++, SQL
                </span> */}
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
          <div className="container-fluid d-flex justify-content-around py-3   footer">
            <div>© 2021 Copyright: {localStorage.getItem("name")}</div>

            <div className="d-flex ">
              <a
                className="btn btn-outline-dark btn-small me-5
            "
                href="https://www.linkedin.com/signup"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="btn btn-outline-dark btn-small me-5"
                href="https://www.instagram.com/?hl=en"
              >
                <FaInstagram />
              </a>

              <a
                className="btn btn-outline-dark btn-link btn-small me-5"
                href=" https://www.facebook.com/"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Resume;
