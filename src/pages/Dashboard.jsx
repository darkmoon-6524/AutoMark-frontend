import React, { useState } from 'react'
import { Footer, Navbar } from '../components'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const [joinedClasses, setJoinedClasses] = useState([])
    const [createdClasses, setCreatedClasses] = useState([])
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Dashboard</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div class="col vh-100">
                        <h4>Joined Classes</h4>
                        <input type="text" placeholder='Enter Class Code' />
                        <button type='submit' class="btn btn-dark">Join</button>
                        <br />
                        <hr />
                        <div>
                            <h6>Joined Classes: </h6>
                            <ul>
                                {joinedClasses?.map(classItem => (
                                    <li key={classItem.id}>{classItem.id}  {classItem.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <br /><br />
                    <div class="col vh-100">
                        <h4>Created Classes</h4>
                        <input type="text" placeholder='Enter Class Name' />
                        <button type='submit' class="btn btn-dark">Create</button>
                        <br />
                        <hr />
                        <div>
                            <h6>Created Classes: </h6>
                            <ul>
                                {createdClasses?.map(classItem => (
                                    <li key={classItem.id}>{classItem.id}  {classItem.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dashboard
