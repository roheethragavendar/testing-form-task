import React from 'react';
import StepperControl from '../../StepperControl'; 

const Education = ({handleClick,currentStep,steps}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
      handleClick("next",true);
  };
  return (
    <div className="flex flex-col">
 <table className="table-auto  border border-slate-500">
    <thead>
      <tr>
        <th className="border border-slate-600">College/Universities</th>
        <th className="border border-slate-600">City/State</th>
        <th className="border border-slate-600">Dates Attended</th>
        <th className="border border-slate-600">Degree and Graduation date</th>
        <th className="border border-slate-600">Major</th>
        <th className="border border-slate-600">Minor</th>
        <th className="border border-slate-600">Overall GPA</th>
        <th className="border border-slate-600">GPA in major</th>
        <th className="border border-slate-600">Number of hours worked</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
      </tr>
      <tr>
        <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
      </tr>
      <tr>
        <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
      </tr>
    </tbody>
  </table>
  <table className="table-auto  border border-slate-500 mt-9">
    <thead>
      <tr>
        <th className="border border-slate-600">Course</th>
        <th className="border border-slate-600">School</th>
        <th className="border border-slate-600">Credits Hours</th>
        <th className="border border-slate-600">Grade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
      </tr>
      <tr>
        <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
      </tr>
      <tr>
        <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
      </tr>
      <tr>
        <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
      </tr>
      <tr>
        <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
      </tr>
    </tbody>
  </table>

  <table className="table-auto  border border-slate-500 mt-9">
    <thead>
      <tr>
        <th className="border border-slate-600">SAT Verbal</th>
        <th className="border border-slate-600">GRE Verbal</th>
        <th className="border border-slate-600">ACT</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
      </tr>
    </tbody>
  </table>

  <table className="table-auto  border border-slate-500 mt-9">
    <thead>
      <tr>
        <th className="border border-slate-600">SAT Math</th>
        <th className="border border-slate-600">GRE Math</th>
        <th className="border border-slate-600">LSAT</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
      </tr>
     
    </tbody>
  </table>

  <table className="table-auto  border border-slate-500 mt-9">
    <thead>
      <tr>
        <th className="border border-slate-600">SAT Total</th>
        <th className="border border-slate-600">GRE Total</th>
        <th className="border border-slate-600">GmAT</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
      </tr>
    </tbody>
  </table>

  <table className="table-auto  border border-slate-500 mt-9">
    <thead>
      <tr>
        <th className="border border-slate-600">Parts taken,passed</th>
        <th className="border border-slate-600">State</th>
        <th className="border border-slate-600">License Number</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
        <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
      </tr>
    </tbody>
  </table>
  <div className="flex gap-5 items-center">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Active Status
        </div>
        <div className="flex gap-3 justify-center items-baseline mt-3">
          <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
            yes
          </div>
          <div>
            <input
              type="checkbox"
              className="mb-4"
            />
          </div>
        </div>

        <div className="flex gap-3 justify-center items-baseline mt-3">
          <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
            No
          </div>
          <div>
            <input
               type="checkbox"
               className="mb-4"
            />
          </div>
        </div>
      </div>
      <StepperControl
        handleClick={handleClick}
        handleSubmit={handleSubmit}
        currentStep={currentStep}
        steps={steps}
      />
    </div>
   
     
  )
}

export default Education
