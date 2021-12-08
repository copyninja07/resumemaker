import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFileCode } from "react-icons/fa";

const ResumeData = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [collageUniversity, setCollageUniversity] = useState();
  const [qualification, setQualification] = useState();
  const [experience1, setExpreience1] = useState();
  const [experience2, setExpreience2] = useState();
  const [skills, setSkills] = useState([]);
  const [about, setAbout] = useState();
  localStorage.setItem("name", name);
  localStorage.setItem("mail", mail);
  localStorage.setItem("phoneNumber", phoneNumber);
  localStorage.setItem("collageUniversity", collageUniversity);
  localStorage.setItem("qualification", qualification);
  localStorage.setItem("experience1", experience1);
  localStorage.setItem("experience2", experience2);
  localStorage.setItem("skills", skills);
  localStorage.setItem("about", about);

  // console.log(localStorage.getItem("name"));
  // console.log(localStorage.getItem("mail"));

  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand mx-3 px-3" href="#/">
            <FaFileCode
              width="30"
              height="30"
              class="d-inline-block align-text-top mx-2 mt-1"
            />
            {/* <img
              src="https://cdn.pixabay.com/photo/2017/10/31/00/23/portfolio-2903909__340.png"
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top mx-2"
            /> */}
            ResumeMaker
          </a>
        </div>
      </nav>
      <div class="container mt-3 ">
        <div class="row text-start">
          <div class="col">
            <form>
              <div className="mb-3">
                <label for="firstName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control  "
                  id="exampleInputName"
                  size="50px"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(event) => {
                    setMail(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label for="firstName" className="form-label">
                  PhoneNumber
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPhoneNumber"
                  onChange={(event) => {
                    setPhoneNumber(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label for="aboutYou" className="form-label">
                  About You
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputaboutYou"
                  onChange={(event) => {
                    setAbout(event.target.value);
                  }}
                />
              </div>
            </form>
          </div>
          <div className="col">
            <form>
              <div className="mb-3">
                <label for="firstName" className="form-label">
                  CollageUniversity
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputCollageUniversity"
                  onChange={(event) => {
                    setCollageUniversity(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label for="firstName" className="form-label">
                  Qualification
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputQualification"
                  onChange={(event) => {
                    setQualification(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label for="firstName" className="form-label">
                  Experience1
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputExperience1"
                  onChange={(event) => {
                    setExpreience1(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label for="firstName" className="form-label">
                  Experience2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputExperience2"
                  onChange={(event) => {
                    setExpreience2(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label for="firstName" className="form-label">
                  Skills
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputSkills"
                  onChange={(event) => {
                    setSkills(event.target.value);
                  }}
                />
              </div>
            </form>
          </div>
        </div>
        <Link to="/template">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Link>
      </div>
    </>
  );
};

export default ResumeData;
