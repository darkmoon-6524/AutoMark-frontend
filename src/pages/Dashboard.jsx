import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../components";
import axios from "axios";
import { server } from "../index.js";

const Dashboard = () => {
  const [joinedClasses, setJoinedClasses] = useState([]);
  const [createdClasses, setCreatedClasses] = useState([]);
  const [joinClassCode, setJoinClassCode] = useState("");
  const [createClassroomName, setCreateClassroomName] = useState("");
  const username = localStorage.getitem("username");
  const userType = localStorage.getitem("userType");

  useEffect(async () => {
    try {
      const response = await axios.get(`${server}/dashboard`);

      if(userType === "student") {
      setJoinedClasses(response.data.joinedClasses);
      } else {
        setCreatedClasses(response.data.createdClasses);
      }
    } catch (error) {
      console.error("Get dashboard error", error);
    }
  });

  const handleJoinClassroom = async () => {
    try {
      const response = await axios.post(`${server}/joinClassroom`, {
        code: joinClassCode,
        username: username,
      });
      // Handle successful join response
      console.log(response.data);
      // Update joined classes state
      setJoinedClasses(response.data.classroom);
    } catch (error) {
      // Handle error
      console.error("Join classroom error:", error);
    }
  };

  const handleCreateClassroom = async () => {
    try {
      const response = await axios.post(`${server}/addClassroom`, {
        username: username,
        name: createClassroomName,
      });
      // Handle successful creation response
      console.log(response.data);
      // Update created classes state
      setCreatedClasses(response.data.classroom);
    } catch (error) {
      // Handle error
      console.error("Create classroom error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Dashboard</h1>
        <hr />
        <div className="row my-4 h-100">
          {userType === "student" && (
            <div className="col vh-100">
              <h4>Joined Classes</h4>
              <input
                type="text"
                placeholder="Enter Class Code"
                value={joinClassCode}
                onChange={(e) => setJoinClassCode(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-dark"
                onClick={handleJoinClassroom}
              >
                Join
              </button>
              <br />
              <hr />
              <div>
                <h6>Joined Classes: </h6>
                <ul>
                  {joinedClasses?.map((classItem) => (
                    <li key={classItem.id}>
                      {classItem.id} {classItem.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {userType === "teacher" && (
            <div className="col vh-100">
              <h4>Created Classes</h4>
              <input
                type="text"
                placeholder="Enter Class Name"
                value={createClassroomName}
                onChange={(e) => setCreateClassroomName(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-dark"
                onClick={handleCreateClassroom}
              >
                Create
              </button>
              <br />
              <hr />
              <div>
                <h6>Created Classes: </h6>
                <ul>
                  {createdClasses?.map((classItem) => (
                    <li key={classItem.id}>
                      {classItem.id} {classItem.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
