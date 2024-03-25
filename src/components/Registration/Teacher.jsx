import React from "react";
import { useState } from "react";
import axios from "axios";
import { server } from "../../index.js";
import { Link } from "react-router-dom";


const Teacher = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
          `${server}/auth/registerteacher`,
          { name, password, email }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Registration error:", error);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="form my-3">
          <label for="Name">User Name</label>
          <input
            type="text"
            class="form-control"
            id="Name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div class="form my-3">
          <label for="Email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="Email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div class="form  my-3">
          <label for="Password">Password</label>
          <input
            type="password"
            class="form-control"
            id="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
          <button class="my-2 mx-auto btn btn-dark" type="submit">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default Teacher;