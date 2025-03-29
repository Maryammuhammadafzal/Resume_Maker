import React from 'react'
import ExperienceForm from './ExperienceForm'

const HomeForm = ({experience , setExperience}) => {
  return (
    <div className='w-full h-auto p-6 flex flex-col shadow-sm shadow-neutral-500 rounded-lg -inset-9 items-center inset-shadow-neutral-500 justify-center items-center'>
   <ExperienceForm
          experience={experience}
          handleChange={setExperience}
        />
    </div>
  )
}

export default HomeForm


  
        // {linkedInUser && (
        //   <div className="bg-slate-700 p-4 rounded-lg mb-6 w-full max-w-lg">
        //     <p><strong>Name:</strong> {linkedInUser.displayName}</p>
        //     <p><strong>Email:</strong> {linkedInUser.emails?.[0]?.value || 'Not available'}</p>
        //   </div>
        // )}
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