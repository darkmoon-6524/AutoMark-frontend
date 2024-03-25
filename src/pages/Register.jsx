import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Footer, Navbar } from "../components";
import { server } from "../index.js";
import Student from "../components/Registration/Student.jsx";
import Teacher from "../components/Registration/Teacher.jsx";

const Register = () => {
  const [activeForm, setActiveForm] = useState("student");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">Select user type</div>
          <select value={activeForm} className="col-md-4 col-lg-4 col-sm-8 mx-auto" onChange={(e) => setActiveForm(e.target.value)}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          <div>
            {activeForm === "student" && <Student />}
            {activeForm === "teacher" && <Teacher />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
