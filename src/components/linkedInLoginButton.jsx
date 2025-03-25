import React from 'react';

const LinkedInLoginButton = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/linkedin';
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold py-2 px-4 rounded flex items-center space-x-2 transition-all duration-300"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
        alt="LinkedIn"
        className="w-5 h-5"
      />
      <span>Login with LinkedIn</span>
    </button>
  );
};

export default LinkedInLoginButton;
