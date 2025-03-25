import React, { useEffect, useState } from 'react';
import ExperienceForm from './components/ExperienceForm';
import LinkedInConnect from './components/LinkedInConnect';
import GenerateResumeButton from './components/GenerateResumeButton';

const App = () => {
  const [linkedInUser, setLinkedInUser] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userParam = params.get('user');

    if (userParam) {
      const user = JSON.parse(decodeURIComponent(userParam));
      console.log('LinkedIn User:', user);
      setLinkedInUser(user);
    }
  }, []);


  // -----------------------------

  const [experience, setExperience] = useState('');

  useEffect(() => {
    // Dynamically load html2pdf.js (fixes import issue)
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
    script.onload = () => console.log('html2pdf.js loaded');
    document.body.appendChild(script);
  }, []);

  const handleChange = (e) => {
    setExperience(e.target.value);
  };

  const handleGenerateResume = () => {
    if (!linkedInUser) {
      alert('Please connect LinkedIn first!');
      return;
    }

    const resumeContent = `
      <div style="font-family: Arial; padding: 20px;">
        <h1>${linkedInUser.displayName}'s Resume</h1>
        <p><strong>Email:</strong> ${linkedInUser.emails?.[0]?.value || 'N/A'}</p>
        <h2>Experience</h2>
        <p>${experience || 'No additional experience provided.'}</p>
      </div>
    `;

    const opt = {
      margin: 0.5,
      filename: `${linkedInUser.displayName.replace(' ', '_')}_Resume.pdf`,
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Use `window.html2pdf` to avoid import issues
    window.html2pdf().set(opt).from(resumeContent).save();
  };


  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-800 text-white p-8">
      <h1 className="text-6xl text-indigo-500 font-bold mb-3">AI Resume Builder</h1>
      <p className='mb-8 text-xl tracking-wider'>Transform Your Carier with Our Intelligent Resume Generator</p>

      {linkedInUser && (
        <div className="bg-slate-700 p-4 rounded-lg mb-6 w-full max-w-lg">
          <p><strong>Name:</strong> {linkedInUser.displayName}</p>
          <p><strong>Email:</strong> {linkedInUser.emails?.[0]?.value || 'Not available'}</p>
        </div>
      )}
<div className='w-[90%] h-auto p-3 border border-gray-300 bg-gray-700 flex flex-col justify-center items-center rounded-lg'>

<div className="space-y-6 w-[95%] p-3">
      <ExperienceForm
        experience={experience}
        handleChange={setExperience}
      />
    </div>
</div>
    <div className="w-fit m-3"> 
       <GenerateResumeButton
        linkedInUser={linkedInUser}
        experience={experience}
        onClick={handleGenerateResume}
      />
</div>
    </div>
  );
};

export default App;
