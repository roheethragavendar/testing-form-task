import React from 'react';
import StepperControl from '../../StepperControl'; 

const AdditionalQualification = ({handleClick,currentStep,steps}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
      handleClick("next",true);
  };
  return (
    <div className="flex flex-col">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Please identify any additional knowledge, skills, qualifications, 
      or awards that will be helpful to us in considering your application for employment.</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"/>
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"/>
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"/>
      </div>
      <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps}
      />
    </div>
   
     
  )
}

export default AdditionalQualification
