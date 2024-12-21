import React, { useState } from "react";
import { createStudent } from "../services/students";

const AddStudentModal = ({ isOpen, onClose }) => {
  const [newStudent, setNewStudent] = useState({
    name: "",
    cohort: "",
    courses: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddStudent = () => {
    console.log("Adding new student:", newStudent);

    // Call the createStudent API
    createStudent(newStudent)
      .then((createdStudent) => {
        console.log("New student added successfully:", createdStudent);
        window.location.reload();

        // Close the modal or reset state as needed
        onClose();
      })
      .catch((error) => {
        console.error("Error adding student:", error);
      });
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 backdrop-blur-sm w-[20]">
        <div className="bg-white p-9 rounded-md shadow-md w-[50%] ">
          <h2 className="text-xl font-semibold mb-4">Add New Student</h2>

          <div className="mb-4">
            <label className="block font-medium mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={newStudent.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 px-2 py-1 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Cohort:</label>
            <select
              name="cohort"
              value={newStudent.cohort}
              onChange={handleInputChange}
              className="w-full border border-gray-300 px-2 py-1 rounded-md"
            >
              <option value="AY 2024-25">AY 2024-25</option>
              <option value="AY 2023-24">AY 2023-24</option>
              {/* Add more cohort years as needed */}
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Courses:</label>
            <input
              type="text"
              name="courses"
              value={newStudent.courses.join(", ")}
              onChange={(e) =>
                setNewStudent((prevState) => ({
                  ...prevState,
                  courses: e.target.value
                    .split(",")
                    .map((course) => course.trim()),
                }))
              }
              className="w-full border border-gray-300 px-2 py-1 rounded-md"
            />
          </div>

          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 mr-2 bg-gray-200 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={handleAddStudent}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Add Student
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default AddStudentModal;
