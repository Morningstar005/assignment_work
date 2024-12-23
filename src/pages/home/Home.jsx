import React, { useEffect, useState } from "react";

import AddStudentModal from "../../components/AddStudentModal";
import { deleteStudent, getStudents } from "../../services/students";
import EditStudentModal from "../../components/editStudentModal";
import { CiEdit } from "react-icons/ci";
import { cohortYears, courses } from "../../constant";
import { toast } from 'react-toastify'
import { MdDelete } from "react-icons/md";

const Home = () => {
  const [studentss, setStudents] = useState([]);
  const [selectedCohort, setSelectedCohort] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editModal, setEditModal] = useState(false);

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setEditModal(true);
  };
  const closeModal = () => {
    setEditModal(false);
    setSelectedStudent(null);
  };
  const getRandomStatus = () => {
    return Math.random() < 0.5 ? "online" : "offline"; // 50% chance for "online" or "offline"
  };

  const deleteModal = (student) => {
    deleteStudent(student.id).then(res=>{
              window.location.reload(); // Optional: Reload to fetch the updated data

      // toast.error(`delete student ${student.name}`)
    }).catch(error=>{
      // toast.error(`can't delete student ${student.name}`)

    })
  };
  useEffect(() => {
    setIsLoading(true);
    getStudents()
      .then((res) => {
        const transformedData = res.data.students.map((student) => ({
          id: student.id,
          name: student.name,
          cohort: student.cohort,
          courses: student.courses,
          dateJoined: new Date(student.dateJoined).toLocaleDateString(), // Format date
          lastLogin: new Date(student.lastLogin).toLocaleString(), // Format lastLogin
          status: getRandomStatus(), // Assign random status
        }));
        setStudents(transformedData);
      })
      .catch((error) => {
      });
    setIsLoading(false);
  }, []);

  const filteredStudents = studentss.filter((student) => {
    const isInCohort =
      selectedCohort === "All" || student.cohort === selectedCohort;
    const isInCourse =
      selectedCourse === "All" || student.courses.includes(selectedCourse);
    return isInCohort && isInCourse; // Only return students who meet both criteria
  });

  return (
    <div className="h-screen">
      {isLoading == true ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="overflow-x-auto justify-center h-[100%] items-center bg-white p-3 mt-[4rem] rounded-md">
            <div className="flex flex-col md:flex-row flex-wrap mt-[2rem] md:justify-between md:items-center">
              <div className="">
                <select
                  value={selectedCohort}
                  onChange={(e) => setSelectedCohort(e.target.value)}
                  className="px-4 py-2 bg-[#E9EDF1] border border-gray-300 rounded-md ml-1 md:ml-4 font-semibold mt-2 md:pt-0"
                >
                  {cohortYears.map((cohort) => (
                    <option key={cohort} value={cohort}>
                      {cohort}
                    </option>
                  ))}

                  {/* Add more cohort years as needed */}
                </select>

                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="px-4 py-2 bg-[#E9EDF1] border border-gray-300 rounded-md ml-1 md:ml-4 font-semibold mt-2 md:pt-0"
                >
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>
              <div className="bg-[#E9EDF1] px-4 py-2 rounded-md font-semibold md:mt-0 mt-2 w-[70%] md:w-[16%]">
                <button onClick={() => setIsModalOpen(true)} className="text-[15px]">
                  Add New Student
                </button>{" "}
              </div>
            </div>
            <AddStudentModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />

            {!isLoading && filteredStudents.length === 0 ? (
              <div className="text-center mt-4 text-gray-600">
                No data matches the selected criteria.
              </div>
            ) : (
              <div className="overflow-x-auto">
                     <table className="min-w-full text-sm mt-[5rem] table-auto">
                <thead className="border-b border-gray-300">
                  <tr>
                    <th className="px-4 py-2 text-left text-gray-600 font-medium">
                      Student Name
                    </th>
                    <th className="px-4 py-2 text-left text-gray-600 font-medium">
                      Cohort
                    </th>
                    <th className="px-4 py-2 text-left text-gray-600 font-medium">
                      Courses
                    </th>
                    <th className="px-4 py-2 text-left text-gray-600 font-medium">
                      Date Joined
                    </th>
                    <th className="px-4 py-2 text-left text-gray-600 font-medium">
                      Last Login
                    </th>
                    <th className="px-4 py-2 text-left text-gray-600 font-medium">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student, index) => {
                    return (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        {/* Student Name */}

                        <td className="px-4 py-2 flex items-center justify-start gap-2">
                       
                          <span>{student.name}</span>
                          <button
                            onClick={() => handleEditClick(student)}
                            className="text-blue-500"
                          >
                            <CiEdit />
                          </button>
                          <button
                            className="text-blue-900"
                            onClick={() => deleteModal(student)}
                        >
                          <MdDelete />
                        </button>
                        </td>
                        {/* Cohort */}
                        <td className="px-4 py-2">{student.cohort}</td>
                        {/* Courses */}
                        <td className="px-4 py-2">
                          <ul className="flex gap-2 items-center">
                            {student.courses.map((course, i) => (
                              <li
                                key={i}
                                className="bg-[#E9EDF1] text-gray-700 px-2 py-1 rounded-md text-xs"
                              >
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
                    );
                  })}
                </tbody>
              </table>
              </div>
         
            )}
            <EditStudentModal
              isOpen={editModal}
              onClose={closeModal}
              student={selectedStudent}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
