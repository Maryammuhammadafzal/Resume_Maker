import React from 'react';

const Privacy_Policy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-700">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy for AI Resume Builder</h1>
      <p className="mb-4"><strong>Effective Date:</strong> March 24, 2025</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">1. Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>LinkedIn Profile Data (Name, Email, Profile Picture, Headline, etc.).</li>
        <li>Manual Inputs (Experience, Skills, etc.).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">To create a customized resume. We do NOT share your data with third parties.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">3. Data Storage and Security</h2>
      <p className="mb-4">No data is stored on our servers. All processing happens in-memory.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Contact Us</h2>
      <p className="mb-4">Email: your-email@gmail.com</p>
    </div>
  );
};

export default Privacy_Policy;
