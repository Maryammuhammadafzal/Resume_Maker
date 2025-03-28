import React, { useEffect, useState } from 'react';
import ExperienceForm from './components/ExperienceForm';
import LinkedInConnect from './components/LinkedInConnect';
import GenerateResumeButton from './components/GenerateResumeButton';
import Home from './Pages/Home';
import "./App.css"

const App = () => {
  


  return (
  <>
  <div className="w-full min-h-screen relative flex justify-center items-center">
    <div id='bgImage' className="bgImage w-full h-screen absolute top-0"></div>
    <div className="home w-full h-screen absolute top-0 left-0 z-10">
      <Home />
    </div>
  </div>
  </>
  );
};

export default App;
