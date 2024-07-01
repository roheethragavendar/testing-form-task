// import React from 'react';
// import StepperControl from '../../StepperControl';

// const PreviousExperience = ({ handleClick, currentStep, steps }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleClick("next", true);
//   };
//   return (
//     <div className="flex flex-col">
//       <h1 className="font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Previous Experience (Start with current or most recent employer)</h1>
//       <table className="table-auto  border border-slate-500 mt-9">
//         <thead>
//           <tr>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">From (Month/Year)</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Firm Name</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Phone</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Starting Salary</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//           </tr>
//         </tbody>
//       </table>
//       <table className="table-auto  border border-slate-500 mt-9">
//         <thead>
//           <tr>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">To (Month/Year)</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Street</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">City</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Zip</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">State</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Job Title</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Supervisor's Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//           </tr>
//         </tbody>
//       </table>
//       <table className="table-auto  border border-slate-500 mt-9">
//         <thead>
//           <tr>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Job Title</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Supervisor's Name</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Supervisor's Title</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//           </tr>
//         </tbody>
//       </table>
//       <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase"> Responsibilities:</div>
//       <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
//         <input type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
//         <input type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
//       </div>
//       <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Reason For Leaving:</div>
//       <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
//         <input type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
//         <input type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
//       </div>

//       <div className="flex gap-5 items-center">
//         <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">May we contact the above employer?</div>
//         <div className="flex gap-3 justify-center items-baseline mt-3">
//           <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> yes</div>
//           <div> <input type="radio" name="contactRadio" className="mb-4" /></div>
//         </div>

//         <div className="flex gap-3 justify-center items-baseline mt-3">
//           <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> No</div>
//           <div><input type="radio"  name="contactRadio" className="mb-4" /></div>
//         </div>
//       </div>

//       <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps} />
//     </div>


//   )
// }

// export default PreviousExperience


import React, { useState } from 'react';
import StepperControl from '../../StepperControl';

const PreviousExperience = ({ handleClick, currentStep, steps }) => {
  const [formData, setFormData] = useState({
    table1: { from: '', firmName: '', phone: '', startingSalary: '' },
    table2: { to: '', street: '', city: '', zip: '', state: '', jobTitle: '', supervisorName: '' },
    table3: { jobTitle: '', supervisorName: '', supervisorTitle: '' },
    responsibilities: '',
    reasonForLeaving: '',
    contactEmployer: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (table, field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [table]: { ...prevData[table], [field]: value }
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    const tableNames = {
      table1: "First Table (From, Firm Name, Phone, Starting Salary)",
      table2: "Second Table (To, Street, City, Zip, State, Job Title, Supervisor's Name)",
      table3: "Third Table (Job Title, Supervisor's Name, Supervisor's Title)"
    };

    // Check if all tables are empty
    const allTablesEmpty = Object.keys(tableNames).every(table => 
      Object.values(formData[table]).every(value => value === '')
    );

    if (allTablesEmpty) {
      newErrors.general = "Please fill in at least one table";
      isValid = false;
    } else {
      // Check each table
      Object.entries(tableNames).forEach(([table, name]) => {
        const tableValues = Object.values(formData[table]);
        if (tableValues.some(value => value !== '') && tableValues.some(value => value === '')) {
          newErrors[table] = `${name}: Please fill all fields in this table`;
          isValid = false;
        }
      });
    }

    // Check responsibilities and reason for leaving
    if (formData.responsibilities === '') {
      newErrors.responsibilities = "Please fill in the responsibilities";
      isValid = false;
    }
    if (formData.reasonForLeaving === '') {
      newErrors.reasonForLeaving = "Please fill in the reason for leaving";
      isValid = false;
    }
    if (formData.contactEmployer === '') {
      newErrors.contactEmployer = "Please select whether we can contact the employer";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleClick("next", true);
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Previous Experience (Start with current or most recent employer)</h1>
      
      {errors.general && <div className="text-red-500 text-sm mt-2">{errors.general}</div>}

      <table className="table-auto border border-slate-500 mt-9">
        <thead>
          <tr>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">From (Month/Year)</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Firm Name</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Phone</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Starting Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {['from', 'firmName', 'phone', 'startingSalary'].map(field => (
              <td key={field} className="border border-gray-300">
                <input
                  type="text"
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
                  value={formData.table1[field]}
                  onChange={(e) => handleChange('table1', field, e.target.value)}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {errors.table1 && <div className="text-red-500 text-sm mt-2">{errors.table1}</div>}

      {/* Repeat similar structure for table2 and table3 */}

      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Responsibilities:</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input
          type="text"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          value={formData.responsibilities}
          onChange={(e) => setFormData({...formData, responsibilities: e.target.value})}
        />
      </div>
      {errors.responsibilities && <div className="text-red-500 text-sm mt-2">{errors.responsibilities}</div>}

      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Reason For Leaving:</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input
          type="text"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          value={formData.reasonForLeaving}
          onChange={(e) => setFormData({...formData, reasonForLeaving: e.target.value})}
        />
      </div>
      {errors.reasonForLeaving && <div className="text-red-500 text-sm mt-2">{errors.reasonForLeaving}</div>}

      <div className="flex gap-5 items-center">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">May we contact the above employer?</div>
        <div className="flex gap-3 justify-center items-baseline mt-3">
          <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> Yes</div>
          <div>
            <input
              type="radio"
              name="contactRadio"
              className="mb-4"
              value="yes"
              checked={formData.contactEmployer === 'yes'}
              onChange={(e) => setFormData({...formData, contactEmployer: e.target.value})}
            />
          </div>
        </div>
        <div className="flex gap-3 justify-center items-baseline mt-3">
          <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> No</div>
          <div>
            <input
              type="radio"
              name="contactRadio"
              className="mb-4"
              value="no"
              checked={formData.contactEmployer === 'no'}
              onChange={(e) => setFormData({...formData, contactEmployer: e.target.value})}
            />
          </div>
        </div>
      </div>
      {errors.contactEmployer && <div className="text-red-500 text-sm mt-2">{errors.contactEmployer}</div>}

      <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps} />
    </div>
  );
};

export default PreviousExperience;




