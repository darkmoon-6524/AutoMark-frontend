import React, { useState } from 'react'
import { Footer, Navbar } from '../components'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import {server} from '../index.js'

const Classroom = () => {
    const { classId } = useParams();


    const [className, setClassName] = useState('abcd')
    const [host, setHost] = useState('')
    const [studentList, setStudentList] = useState([{
        id:101,
        name: 'Student', 
        present: false
    }])

    const handleStartAttendance = async()=>{
        await axios.get(`${server}/classroom/autoMark`);

    }

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Classroom: {className}, Code: {classId}</h1>
                <button onClick={handleStartAttendance}>Start Attendance</button>
                <br /><br />
                <hr />
                <br /><br />
                <div class="col vh-100">
                    <br />
                    <hr />
                    <div>
                        <h6>Student List: </h6>
                        <ul>
                            {studentList?.map(classItem => (
                                <li key={classItem.id}>{classItem.id}  {classItem.name}
                                <input type="checkbox" name="" id="" checked={classItem.present} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button type="submit">Save</button>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Classroom
