import React, { useState } from 'react';
import axios from 'axios';

const SigninForm = ({ onSignin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/auth/signin', {
        username,
        password,
      });
      if (response.status === 200) {
        const { token } = response.data;
        onSignin(token);
      } 
    } catch (error) {
      console.error('Signin error:', error);
    }
  };

  return (
    <form onSubmit={handleSignin} className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">Username</label>
        <input
          type="text"
          className="w-full border rounded py-2 px-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          className="w-full border rounded py-2 px-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Sign In
      </button>
    </form>
  );
};

export default SigninForm;
