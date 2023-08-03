import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/signup", {
        username,
        password,
      });
      console.log(response.data);
      navigate("/signin");
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <form onSubmit={handleSignup} className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">
          Username
        </label>
        <input
          type="text"
          className="w-full border rounded py-2 px-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          className="w-full border rounded py-2 px-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Sign Up
      </button>
      <span className="ml-10">
      Already a User{" "}
      <Link to="/signin" className="text-blue-500 underline-offset-auto">
        Sign In
      </Link>
    </span>
    </form>
  );
};

export default SignupForm;
