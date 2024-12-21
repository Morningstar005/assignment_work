// router.post("student/", verifyJWT, createStudent);
// router.get("student/", verifyJWT, getAllStudents);
// router.get("student/:id", verifyJWT, getStudentById);
// router.put("student/:id", verifyJWT, updateStudent);
// router.delete("student/:id", verifyJWT, deleteStudent);

import api, { baseAPI } from "../baseUrl";

export async function getStudents() {
  try {
    const response = await api.get("student/");

    return response.data;
  } catch (error) {
    console.error("Error fetching student data:", error);
    throw error;
  }
}

export async function createStudent(studentData) {
  try {
    const response = await api.post("student/", studentData); // Use the `api` instance for the POST request

    return response.data; // Return the created student data
  } catch (error) {
    console.error("Error creating student:", error);
  }
}
