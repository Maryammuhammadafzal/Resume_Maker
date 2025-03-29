import React from 'react';
import LinkedInConnect from './LinkedInConnect';

const ExperienceForm = ({ experience, handleChange }) => {
  return (
 <>
    <div className="mb-6 w-full flex flex-col  bg-transparent ">
      <label className="block mb-2 text-sm font-medium">Tell us about your experience</label>
     <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-2 rounded-md border-gray-400 w-[80%]">
     <textarea
        className="w-full text-md p-4 rounded-lg focus:ring-0 focus:border-0 focus:outline-0 text-white placeholder:text-white bg-transparent"
        rows="5"
        placeholder="Share your achievements, experience, and career highlights..."
      ></textarea>
     </div>
    </div>
    
    <LinkedInConnect/>

     <div className="w-full space-y-4">
     <label htmlFor="jobUrl" className='font-medium text-sm'>
             Job Posting Url
             <div className="bg-gradient-to-br mt-2 from-neutral-900 to-neutral-800 border-2 rounded-md border-gray-400 w-[80%]">
   <input
     onChange={handleChange}
     value={experience}
     type='url'
     placeholder="Add more experience, achievements, etc."
     className="w-full p-4  rounded-md text-white placeholder:text-white focus:ring focus:ring-indigo-500"
   />
   </div>
     </label>

   
 </div>
 </>
  );
};

export default ExperienceForm;
