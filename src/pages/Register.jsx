import React, { useState } from "react";
import axios from "axios";
import { server } from "../index.js";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Student = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("student"); // Default to "student"
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (userType === "student") {
        const response = await axios.post(`${server}/auth/registerstudent`, {
          username: name,
          email,
          password,
        });
      } else {
        const response = await axios.post(`${server}/auth/registerteacher`, {
          username: name,
          email,
          password,
        });
      }

      localStorage.setItem("name", name);

      console.log("Registration successful:");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form my-3">
            <label htmlFor="Name">User Name</label>
            <input
              type="text"
              className="form-control"
              id="Name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form my-3">
            <label htmlFor="Email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="Email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form my-3">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              className="form-control"
              id="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form my-3">
            <label>User Type</label>
            <div>
              <label>
                <input
                  type="radio"
                  value="student"
                  checked={userType === "student"}
                  onChange={() => setUserType("student")}
                />
                Student
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="teacher"
                  checked={userType === "teacher"}
                  onChange={() => setUserType("teacher")}
                />
                Teacher
              </label>
            </div>
          </div>
          {error && <p className="text-danger">{error}</p>}
          <div className="my-3">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-underline text-info">
                Login
              </Link>{" "}
            </p>
          </div>
          <div className="text-center">
            <button className="my-2 mx-auto btn btn-dark" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Student;
