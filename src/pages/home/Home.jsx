import React, { useEffect, useState } from "react";

import AddStudentModal from "../../components/AddStudentModal";
import { getStudents } from "../../services/students";

const Home = () => {
  const [studentss, setStudents] = useState([]);
  const [selectedCohort, setSelectedCohort] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [studentInfo] = useState({
    name: "Anshuman Kashyap",
    cohort: "AY 2024-25",
    courses: ["CBSE 9 Science", "CBSE 9 Math"],
  });
  const getRandomStatus = () => {
    return Math.random() < 0.5 ? "online" : "offline"; // 50% chance for "online" or "offline"
  };
 useEffect(() => {
  setIsLoading(true)
  getStudents().then(res=>{
    const transformedData = res.data.students.map(student => ({
      name: student.name,
      cohort: student.cohort,
      courses: student.courses,
      dateJoined: new Date(student.dateJoined).toLocaleDateString(), // Format date
      lastLogin: new Date(student.lastLogin).toLocaleString(), // Format lastLogin
      status: getRandomStatus(), // Assign random status
    })); 
  console.log('transformedData',transformedData)
  setStudents(transformedData)
  }).catch(error=>{
    console.log('error',err)
  })
  setIsLoading(false)
 }, [])
 

  const students = [
    {
      name: "Anshuman Kashyap",
      cohort: "AY 2024-25",
      courses: ["CBSE 9 Science", "CBSE 9 Math"],
      dateJoined: "17. Nov. 2024",
      lastLogin: "17. Nov. 2024 4:16 PM",
      status: "online",
      avatar: "https://via.placeholder.com/30", // Replace with actual image URL
    },
    {
      name: "Bansi Dadhaniya",
      cohort: "AY 2025-26",
      courses: ["CBSE 9 Science", "CBSE 9 Math"],
      dateJoined: "17. Nov. 2024",
      lastLogin: "17. Nov. 2024 4:16 PM",
      status: "offline",
      avatar: "https://via.placeholder.com/30", // Replace with actual image URL
    },
    // Adding a new student to test the filter logic
    {
      name: "Ravi Verma",
      cohort: "AY 2024-25",
      courses: ["CBSE 9 Math", "CBSE 9 English"],
      dateJoined: "18. Nov. 2024",
      lastLogin: "18. Nov. 2024 5:20 PM",
      status: "online",
      avatar: "https://via.placeholder.com/30", // Replace with actual image URL
    },
    {
      name: "Sneha Kumar",
      cohort: "AY 2024-25",
      courses: ["CBSE 9 Science", "CBSE 9 English"],
      dateJoined: "19. Nov. 2024",
      lastLogin: "19. Nov. 2024 2:30 PM",
      status: "offline",
      avatar: "https://via.placeholder.com/30", // Replace with actual image URL
    }
  ];
  
    const filteredStudents = studentss.filter(student => {
      const isInCohort = selectedCohort === "All" || student.cohort === selectedCohort;
      const isInCourse = selectedCourse === "All" || student.courses.includes(selectedCourse);
      return isInCohort && isInCourse;  // Only return students who meet both criteria
    });
  

  return(
    <div className="h-screen">
{isLoading==true?(<div>Loading...</div>):(<>
  <div className="overflow-x-auto justify-center h-[100%] items-center bg-white p-3 mt-[4rem] rounded-md">
    <div className="flex flex-col md:flex-row flex-wrap mt-[2rem] md:justify-between md:items-center  " >
      <div className="">
        <select
          value={selectedCohort}
          onChange={(e) => setSelectedCohort(e.target.value)}
          className="px-4 py-2  bg-[#E9EDF1] border border-gray-300 font-semibold rounded-md"
        >
              <option value="All">All</option>

          <option value="AY 2024-25">AY 2024-25</option>
          <option value="AY 2023-24">AY 2023-24</option>
          {/* Add more cohort years as needed */}
        </select>

        <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="px-4 py-2 bg-[#E9EDF1] border border-gray-300 rounded-md ml-4 font-semibold"
          >
                          <option value="All">All</option>
            <option value="BSE Math">BSE Math</option>
            <option value="CBSE 9 Science">CBSE 9 Science</option>
            <option value="CBSE 9 Mathe">CBSE 9 Mathe</option>

            {/* Add more courses as needed */}
          </select>
      </div>
      <div className='bg-[#E9EDF1] px-4 py-2 rounded-md font-semibold md:mt-0 mt-2 w-[30%] md:w-[11%]'>
      <button
              onClick={() => setIsModalOpen(true)}
            >
              Add New Student
            </button>      </div>

      </div>
      <AddStudentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

      {
        !isLoading &&filteredStudents.length===0?(         
           <div className="text-center mt-4 text-gray-600">No data matches the selected criteria.</div>
        ):( 
          <table className="min-w-full  text-sm mt-[5rem] ">
          <thead className="border-b border-gray-300">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600 font-medium">Student Name</th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium">Cohort</th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium">Courses</th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium">Date Joined</th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium">Last Login</th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
          {filteredStudents.map((student, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    {/* Student Name */}
                    <td className="px-4 py-2 flex items-center">
                      {student.name}
                    </td>
                    {/* Cohort */}
                    <td className="px-4 py-2">{student.cohort}</td>
                    {/* Courses */}
                    <td className="px-4 py-2">
                      <ul className="flex gap-2 items-center">
                        {student.courses.map((course, i) => (
                          <li key={i} className="bg-[#E9EDF1] text-gray-700 px-2 py-1 rounded-md text-xs">
                            {course}
                          </li>
                        ))}
                      </ul>
                    </td>
                    {/* Date Joined */}
                    <td className="px-4 py-2">{student.dateJoined}</td>
                    {/* Last Login */}
                    <td className="px-4 py-2">{student.lastLogin}</td>
                    {/* Status */}
                    <td className="px-4 py-2">
                      {student.status === "online" ? (
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      ) : (
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      )}
                    </td>
                  </tr>
                ))}
               
          </tbody>
        </table>
        )
      }
 
  </div></>)}

  
    </div>

  )
};


export default Home;

