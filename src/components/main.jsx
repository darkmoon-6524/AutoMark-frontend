import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">Welcome to our Attendance System</h5>
              <div>
                <h6>Key features</h6>
                <ul>
                  <li>Automated attendance tracking using face recognition</li><br></br>
                  <li>User-friendly interface for both teachers and students</li><br></br>
                  <li>Real-time attendance monitoring and reporting</li>
                </ul>
              </div>


              <section id="get-started">
                <Link to="/login" className="get-started-btn">Get Started</Link>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
