import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/auth";
import { toast } from 'react-toastify'

const SignForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",  // Make sure this is consistent
  });

  const [error,setError] = useState('')
  const [errordiv,setErrordiv] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = form;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setErrordiv(true);
      return;
    }

    registerUser(name,email,password).then(res=>{
      toast.success('complete')
      navigate('/login');
    }).catch(err=>{
      setError(err.response.data.message)
    setErrordiv(true)
    })
  };

  return (
    <div className="max-w-md mx-auto  p-8 rounded-lg ">
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
           Name
          </label>
          <input
            type="text"
            id="name"
            name="name" // Add name attribute
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
            value={form.name}
            onChange={handleChange}
          />
        </div>
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
        <div className="mb-4">
  <label
    htmlFor="confirmPassword"
    className="block text-sm font-medium text-gray-700 mb-1"
  >
    Confirm Password
  </label>
  <input
    type="password"
    id="confirmPassword"
    name="confirmPassword"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    placeholder="Enter your Confirm Password"
    value={form.confirmPassword}  // Corrected reference
    onChange={handleChange}
  />
</div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-2 flex justify-end gap-2">
        <span className="font-semibold">Do you have an account?</span>

        <Link to="/login" className="font-bold">
          Sign In
        </Link>
      </div>
    </div>
  );
  
};

export default SignForm;
