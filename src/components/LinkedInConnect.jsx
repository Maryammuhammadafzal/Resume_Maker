import React from 'react';

const LinkedInConnect = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/linkedin';
  };

  return (
    <div className="mb-6 w-[95%]">
      <label className="block mb-2 font-medium">Connect your LinkedIn Account</label>
     <div className="w-auto">
     <button
        onClick={handleLogin}
        className="flex items-center justify-center w-fit py-3 px-6 text-white bg-blue-500 hover:bg-blue-700 rounded-md transition"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5C1.12 6 0 4.881 0 3.5S1.12 1 2.5 1s2.48 1.119 2.48 2.5zM.5 8h4v12h-4V8zm7.5 0h3.72v1.713h.053c.519-.981 1.789-2.013 3.684-2.013 3.94 0 4.66 2.593 4.66 5.963V20h-4v-5.555c0-1.326-.027-3.033-1.85-3.033-1.851 0-2.135 1.446-2.135 2.94V20h-4V8z"/>
        </svg>
        Connect with LinkedIn
      </button>
     </div>
    </div>
  );
};

export default LinkedInConnect;
