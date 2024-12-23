import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    loginUser(email, password)
      .then((res) => {
        localStorage.setItem("accessToken", `${res.data.data.accessToken}`);
        localStorage.setItem("refreshToken", `${res.data.data.refreshToken}`);
        localStorage.setItem("name", `${res.data.data.user.name}`);

        navigate("/home");
      })
      .catch((err) => {
      });
  };

  return (
    <div className="max-w-md mx-auto  p-8 rounded-lg ">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email" // Add name attribute
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password" // Add name attribute
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Sign In
        </button>
      </form>
      <div className="mt-2 flex justify-end gap-2">
        <span className="font-semibold">Don’t have an account?</span>

        <Link to="/signup" className="font-bold">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
