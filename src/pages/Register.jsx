// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { Footer, Navbar } from "../components";
// import { server } from "../index.js";
// import Student from "../components/Registration/Student.jsx";
// import Teacher from "../components/Registration/Teacher.jsx";

// const Register = () => {
//   const [activeForm, setActiveForm] = useState("student");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container my-3 py-3">
//         <h1 className="text-center">Register</h1>
//         <hr />
//         <div class="row my-4 h-100">
//           <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">Select user type</div>
//           <select value={activeForm} className="col-md-4 col-lg-4 col-sm-8 mx-auto" onChange={(e) => setActiveForm(e.target.value)}>
//             <option value="student">Student</option>
//             <option value="teacher">Teacher</option>
//           </select>
//           <div>
//             {activeForm === "student" && <Student />}
//             {activeForm === "teacher" && <Teacher />}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Register;

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
          name,
          email,
          password,
        });
      } else {
        const response = await axios.post(`${server}/auth/registerteacher`, {
          name,
          email,
          password,
        });
      }

      console.log("Registeration successful:");
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
