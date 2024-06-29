import React from 'react';
import StepperControl from '../../StepperControl'; 

const References = ({handleClick,currentStep,steps}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
      handleClick("next",true);
  };
  return (
    <div className="flex flex-col">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Please provide the names of three professional references, not related to you, who can best provide pertinent information as to your 
      character and capabilities for the position you are applying or being considered for SBC.</div>

    <table className="table-auto  border border-slate-500 mt-[70px]">
    <thead>
      <tr>
        <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Name/Title:</th>
        <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Organization:</th>
        <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Relationship:</th>
        <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Telephone number:</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
      </tr>
    </tbody>
  </table>
  <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps}/>

    </div>

  )
}

export default References
