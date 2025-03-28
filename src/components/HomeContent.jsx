import React from 'react'
import { Link } from 'react-router-dom'
const HomeContent = () => {
  return (
    <div className='w-full min-h-[300px] flex flex-col items-end justify-between'>
        <h1 className="text-8xl p-3 text-white font-semibold uppercase mb-3 tracking-wide text-end">AI Resume <span className='px-3'>-</span> Maker</h1>
        <p className='mb-8 text-2xl tracking-wider '>Make your resume in 5 min</p>
        <Link className="btn-animation mt-10" to="/"><i className="fas fa-arrow-right" /> <span>Coming soon</span></Link>
        {/* {linkedInUser && (
          <div className="bg-slate-700 p-4 rounded-lg mb-6 w-full max-w-lg">
            <p><strong>Name:</strong> {linkedInUser.displayName}</p>
            <p><strong>Email:</strong> {linkedInUser.emails?.[0]?.value || 'Not available'}</p>
          </div>
        )} */}
  {/* <div className='w-[90%] h-auto p-3 border border-gray-300 bg-gray-700 flex flex-col justify-center items-center rounded-lg'>
  
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
  </div> */}
      
    </div>
  )
}

export default HomeContent
