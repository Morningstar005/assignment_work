import React, { useState, useEffect } from "react";
import { editStudent } from "../services/students";
import { cohortYears } from "../constant";
// import { updateStudent } from "../services/students"; // API to update a student

const EditStudentModal = ({ isOpen, onClose, student }) => {
  const [updatedStudent, setUpdatedStudent] = useState({
    name: "",
    cohort: "",
    courses: [],
  });

  useEffect(() => {
    if (student) {
      setUpdatedStudent({
        name: student.name || "",
        cohort: student.cohort || "",
        courses: student.courses || [],
      });
    }
  }, [student]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdateStudent = () => {

    editStudent(student.id, updatedStudent)
      .then((response) => {
        window.location.reload(); // Optional: Reload to fetch the updated data
        onClose();
      })
      .catch((error) => {
        console.error("Error updating student:", error);
      });
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 backdrop-blur-sm ">
        <div className="bg-white p-9 rounded-md shadow-md w-[70%] md:w-[40%]">
          <h2 className="text-xl font-semibold mb-4">Edit Student</h2>

          <div className="mb-4">
            <label className="block font-medium mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={updatedStudent.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 px-2 py-1 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Cohort:</label>
            <select
              name="cohort"
              value={updatedStudent.cohort}
              onChange={handleInputChange}
              className="w-full border border-gray-300 px-2 py-1 rounded-md"
            >
              {cohortYears.map((cohort) => (
                                <option key={cohort} value={cohort}>
                                  {cohort}
                                </option>
                              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Courses:</label>
            <input
              type="text"
              name="courses"
              value={updatedStudent.courses.join(", ")}
              onChange={(e) =>
                setUpdatedStudent((prevState) => ({
                  ...prevState,
                  courses: e.target.value
                    .split(",")
                    .map((course) => course.trim()),
                }))
              }
              className="w-full border border-gray-300 px-2 py-1 rounded-md"
            />
             <p className="text-gray-500 mt-2">
    Separate multiple courses with a comma (e.g., "Course 1, Course 2").
  </p>
          </div>

          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 mr-2 bg-gray-200 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdateStudent}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Update Student
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default EditStudentModal;
