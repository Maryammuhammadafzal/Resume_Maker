import React from 'react';
import LinkedInConnect from './LinkedInConnect';

const ExperienceForm = ({ experience, handleChange }) => {
  return (
 <>
    <div className="mb-6 w-full ">
      <label className="block mb-2 font-medium">Tell us about your experience</label>
      <textarea
        className="w-full p-4 rounded-lg border-2 border-gray-400  text-white placeholder:text-white bg-gray-600 focus:ring focus:ring-indigo-500"
        rows="5"
        placeholder="Share your achievements, experience, and career highlights..."
      ></textarea>
    </div>
    
    <LinkedInConnect/>

     <div className="w-full space-y-4">
     <label htmlFor="jobUrl" className='font-semibold '>
             Job Posting Url
   <input
     onChange={handleChange}
     value={experience}
     type='url'
     placeholder="Add more experience, achievements, etc."
     className="w-full p-4 mt-3 border-2 border-gray-400 bg-gray-600 rounded-md text-white placeholder:text-white focus:ring focus:ring-indigo-500"
   />
     </label>

   
 </div>
 </>
  );
};

export default ExperienceForm;
