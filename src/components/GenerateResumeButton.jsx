import React, { useState, useEffect } from 'react';

const GenerateResumeButton = ({ onClick }) => {
 
  return (
        <button
        onClick={onClick}
        className="w-full py-3 px-6 text-white bg-gradient-to-br from-indigo-600 to-indigo-400 hover:bg-indigo-700 rounded-md transition"
      >
        Generate Resume PDF
      </button>
  );
};

export default GenerateResumeButton;
