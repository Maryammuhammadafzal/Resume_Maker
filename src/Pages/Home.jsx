import React, { useState, useEffect } from "react";
import ExperienceForm from "../components/ExperienceForm";
import LinkedInConnect from "../components/LinkedInConnect";
import GenerateResumeButton from "../components/GenerateResumeButton";
import HomeContent from "../components/HomeContent";
import HomeForm from "../components/HomeForm";

const Home = () => {
//   const [linkedInUser, setLinkedInUser] = useState(null);

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const userParam = params.get("user");

//     if (userParam) {
//       const user = JSON.parse(decodeURIComponent(userParam));
//       console.log("LinkedIn User:", user);
//       setLinkedInUser(user);
//     }
//   }, []);

  // -----------------------------

  const [experience, setExperience] = useState("");

//   useEffect(() => {
//     // Dynamically load html2pdf.js (fixes import issue)
//     const script = document.createElement("script");
//     script.src =
//       "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
//     script.onload = () => console.log("html2pdf.js loaded");
//     document.body.appendChild(script);
//   }, []);

//   const handleChange = (e) => {
//     setExperience(e.target.value);
//   };

//   const handleGenerateResume = () => {
//     if (!linkedInUser) {
//       alert("Please connect LinkedIn first!");
//       return;
//     }

//     const resumeContent = `
//       <div style="font-family: Arial; padding: 20px;">
//         <h1>${linkedInUser.displayName}'s Resume</h1>
//         <p><strong>Email:</strong> ${
//           linkedInUser.emails?.[0]?.value || "N/A"
//         }</p>
//         <h2>Experience</h2>
//         <p>${experience || "No additional experience provided."}</p>
//       </div>
//     `;

//     const opt = {
//       margin: 0.5,
//       filename: `${linkedInUser.displayName.replace(" ", "_")}_Resume.pdf`,
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
//     };

    // Use `window.html2pdf` to avoid import issues
//     window.html2pdf().set(opt).from(resumeContent).save();
//   };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-white p-8">
      {/* Left Content */}
      <div className="homeContent w-[50%] h-auto p-3">
        <HomeContent />
      </div>
      {/* Right Content */}
      <div className="homeForm w-[50%] h-auto p-3">
        <HomeForm experience={experience} setExperience={setExperience}/>
      </div>
    </div>
  );
};

export default Home;
