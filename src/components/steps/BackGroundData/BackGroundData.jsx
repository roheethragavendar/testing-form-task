import React from 'react';
import StepperControl from '../../StepperControl'; 

const BackGroundData = ({handleClick,currentStep,steps}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
      handleClick("next",true);
  };

  return (
    <div className="flex flex-col">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Background data</div>
    <table className="table-auto  border border-slate-500 mt-[20px]">
    <thead>
      <tr>
        <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">First Name:</th>
        <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Last Name:</th>
        <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">M.I:</th>
        <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Social Security Number:</th>
        <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Other Names Used:</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
      </tr>
    </tbody>
  </table>

  <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Please list addresses of places you have lived over the previous five years: (attach a separate page, if needed)</div>
    <table className="table-auto  border border-slate-500 mt-[20px]">
    <thead>
      <tr>
        <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Street</th>
        <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">City</th>
        <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">State</th>
        <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Zip</th>
        <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Dates (From-To)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
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

export default BackGroundData
