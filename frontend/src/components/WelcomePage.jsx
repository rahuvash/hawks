import React from 'react';

const WelcomePage = ({ username }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Welcome, {username}!</h2>
      <p>You are now signed in.</p>
    </div>
  );
};

export default WelcomePage;
