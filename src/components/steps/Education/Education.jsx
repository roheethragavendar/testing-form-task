// import React from 'react';
// import StepperControl from '../../StepperControl'; 
// import { useContext, useState,useEffect } from "react";
// import { StepperContext } from "../../contexts/StepperContext";

// const Education = ({handleClick,currentStep,steps}) => {
//   const { userData, setUserData } = useContext(StepperContext);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//       handleClick("next",true);
//   };
//   return (
//     <div className="flex flex-col">
//       <table className="table-auto  border border-slate-500">
//           <thead>
//             <tr>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">College/Universities</th>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">City/State</th>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Dates Attended</th>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Degree and Graduation date</th>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Major</th>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Minor</th>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Overall GPA</th>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">GPA in major</th>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Number of hours worked</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             </tr>
//             <tr>
//               <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             </tr>
//             <tr>
//               <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             </tr>
//           </tbody>
//         </table>

//         <table className="table-auto  border border-slate-500 mt-9">
//           <thead>
//             <tr>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Course</th>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">School</th>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Credits Hours</th>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Grade</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             </tr>
//             <tr>
//               <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             </tr>
//             <tr>
//               <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             </tr>
//             <tr>
//               <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             </tr>
//             <tr>
//               <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             </tr>
//           </tbody>
//         </table>

//         <table className="table-auto  border border-slate-500 mt-9">
//           <thead>
//             <tr>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">SAT Verbal</th>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">GRE Verbal</th>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">ACT</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             </tr>
//           </tbody>
//         </table>

//         <table className="table-auto  border border-slate-500 mt-9">
//           <thead>
//             <tr>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">SAT Math</th>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">GRE Math</th>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">LSAT</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             </tr>
          
//           </tbody>
//         </table>

//         <table className="table-auto  border border-slate-500 mt-9">
//           <thead>
//             <tr>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">SAT Total</th>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">GRE Total</th>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">GmAT</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             </tr>
//           </tbody>
//         </table>

//         <table className="table-auto  border border-slate-500 mt-9">
//           <thead>
//             <tr>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Parts taken,passed</th>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">State</th>
//               <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">License Number</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             </tr>
//           </tbody>
//         </table>
        
//         <div className="flex gap-5 items-center">
//           <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Active Status</div>
//             <div className="flex gap-3 justify-center items-baseline mt-3">
//               <div className="font-bold h-6 text-gray-500 text-xs leading-5 uppercase">yes</div>
//                 <div><input type="checkbox" className="mb-4"/></div>
//               </div>

//               <div className="flex gap-3 justify-center items-baseline mt-3">
//                 <div className="font-bold h-6 text-gray-500 text-xs leading-5 uppercase">No
//               </div>
//               <div><input  type="checkbox"  className="mb-4"/></div>
//               </div>
//         </div>

//       <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps}/>
// </div>
//   )
// }

// export default Education


// import React from 'react';
// import StepperControl from '../../StepperControl'; 
// import { useContext, useState, useEffect } from "react";
// import { StepperContext } from "../../contexts/StepperContext";

// const NUMBER_OF_ROWS = 3;

// const Education = ({handleClick, currentStep, steps}) => {
//   const { userData, setUserData } = useContext(StepperContext);
  
//   // Initialize state from userData if it exists, otherwise create new rows
//   const [educationData, setEducationData] = useState(() => {
//     if (userData.education && userData.education.length > 0) {
//       return userData.education;
//     }
//     return Array.from({ length: NUMBER_OF_ROWS }, (_, index) => ({
//       id: index + 1,
//       college: '',
//       city: '',
//       datesAttended: '',
//       degree: '',
//       major: '',
//       minor: '',
//       overallGPA: '',
//       gpaInMajor: '',
//       noOfHoursWorked: ''
//     }));
//   });

//   const handleInputChange = (id, field, value) => {
//     const updatedData = educationData.map(row =>
//       row.id === id ? { ...row, [field]: value } : row
//     );
//     setEducationData(updatedData);
    
//     // Update userData context whenever educationData changes
//     setUserData(prevData => ({
//       ...prevData,
//       education: updatedData
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleClick("next", true);
//   };

//   return (
//     <div className="flex flex-col">
//       <table className="table-auto border border-slate-500">
//         <thead>
//           <tr>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">College/Universities</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">City/State</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Dates Attended</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Degree and Graduation date</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Major</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Minor</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Overall GPA</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">GPA in major</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Number of hours worked</th>
//           </tr>
//         </thead>
//         <tbody>
//           {educationData.map(row => (
//             <tr key={row.id}>
//               {Object.keys(row).filter(key => key !== 'id').map(field => (
//                 <td key={field} className="border border-gray-300">
//                   <input
//                     type="text"
//                     value={row[field]}
//                     onChange={(e) => handleInputChange(row.id, field, e.target.value)}
//                     className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
//                   />
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps}/>
//     </div>
//   )
// }

// export default Education;


import React from 'react';
import StepperControl from '../../StepperControl'; 
import { useContext, useState } from "react";
import { StepperContext } from "../../contexts/StepperContext";

const Education = ({handleClick, currentStep, steps}) => {
  const { userData, setUserData } = useContext(StepperContext);
  
  const [educationData, setEducationData] = useState(() => {
    return userData.education || Array(3).fill({
      college: '', city: '', datesAttended: '', degree: '', major: '', minor: '', 
      overallGPA: '', gpaInMajor: '', noOfHoursWorked: ''
    });
  });

  const [coursesData, setCoursesData] = useState(() => {
    return userData.courses || Array(5).fill({
      course: '', school: '', creditHours: '', grade: ''
    });
  });

  const [testScores, setTestScores] = useState(() => {
    return userData.testScores || {
      satVerbal: '', greVerbal: '', act: '',
      satMath: '', greMath: '', lsat: '',
      satTotal: '', greTotal: '', gmat: ''
    };
  });

  const [licenseData, setLicenseData] = useState(() => {
    return userData.license || {
      partsTakenPassed: '', state: '', licenseNumber: ''
    };
  });

  const [activeStatus, setActiveStatus] = useState(userData.activeStatus || '');

  const handleInputChange = (tableType, id, field, value) => {
    switch(tableType) {
      case 'education':
        setEducationData(prev => prev.map((row, index) => 
          index === id ? { ...row, [field]: value } : row
        ));
        break;
      case 'courses':
        setCoursesData(prev => prev.map((row, index) => 
          index === id ? { ...row, [field]: value } : row
        ));
        break;
      case 'testScores':
        setTestScores(prev => ({ ...prev, [field]: value }));
        break;
      case 'license':
        setLicenseData(prev => ({ ...prev, [field]: value }));
        break;
      default:
        break;
    }
  };

  const handleActiveStatusChange = (value) => {
    setActiveStatus(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(prevData => ({
      ...prevData,
      education: educationData,
      courses: coursesData,
      testScores: testScores,
      license: licenseData,
      activeStatus: activeStatus
    }));
    handleClick("next", true);
  };

  return (
    <div className="flex flex-col">
       {/* Education Table */}
    <table className="table-auto border border-slate-500">
      <thead>
        <tr>
          <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">College/Universities</th>
          <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">City/State</th>
          <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Dates Attended</th>
          <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Degree and Graduation date</th>
          <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Major</th>
          <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Minor</th>
          <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Overall GPA</th>
          <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">GPA in major</th>
          <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Number of hours worked</th>
        </tr>
      </thead>
      <tbody>
        {educationData.map((row, index) => (
          <tr key={index}>
            {Object.keys(row).map(field => (
              <td key={field} className="border border-gray-300">
                <input
                  type="text"
                  value={row[field]}
                  onChange={(e) => handleInputChange('education', index, field, e.target.value)}
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

    {/* Courses Table */}
    <table className="table-auto border border-slate-500 mt-9">
      <thead>
        <tr>
          <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Course</th>
          <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">School</th>
          <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Credits Hours</th>
          <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Grade</th>
        </tr>
      </thead>
      <tbody>
        {coursesData.map((row, index) => (
          <tr key={index}>
            {Object.keys(row).map(field => (
              <td key={field} className="border border-gray-300">
                <input
                  type="text"
                  value={row[field]}
                  onChange={(e) => handleInputChange('courses', index, field, e.target.value)}
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

      {/* Test Scores Tables */}
      {['SAT/GRE/ACT', 'SAT/GRE/LSAT', 'SAT/GRE/GMAT'].map((group, groupIndex) => (
        <table key={groupIndex} className="table-auto border border-slate-500 mt-9">
          <thead>
            <tr>
              {group.split('/').map((test, index) => (
                <th key={index} className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">
                  {test} {['Verbal', 'Math', 'Total'][groupIndex]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {group.split('/').map((test, index) => (
                <td key={index} className="border border-gray-300">
                  <input
                    type="text"
                    value={testScores[`${test.toLowerCase()}${['Verbal', 'Math', 'Total'][groupIndex]}`]}
                    onChange={(e) => handleInputChange('testScores', 0, `${test.toLowerCase()}${['Verbal', 'Math', 'Total'][groupIndex]}`, e.target.value)}
                    className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      ))}

      {/* License Table */}
      <table className="table-auto border border-slate-500 mt-9">
        {/* ... (table header) ... */}
        <tbody>
          <tr>
            {Object.keys(licenseData).map(field => (
              <td key={field} className="border border-gray-300">
                <input
                  type="text"
                  value={licenseData[field]}
                  onChange={(e) => handleInputChange('license', 0, field, e.target.value)}
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      
      {/* Active Status */}
      <div className="flex gap-5 items-center mt-9">
        <div className="font-bold h-6 text-gray-500 text-xs leading-5 uppercase">Active Status</div>
        <div className="flex gap-3 justify-center items-baseline">
          <div className="font-bold h-6 text-gray-500 text-xs leading-5 uppercase">Yes</div>
          <input 
            type="checkbox" 
            checked={activeStatus === 'yes'} 
            onChange={() => handleActiveStatusChange('yes')}
            className="mb-4"
          />
        </div>
        <div className="flex gap-3 justify-center items-baseline">
          <div className="font-bold h-6 text-gray-500 text-xs leading-5 uppercase">No</div>
          <input 
            type="checkbox" 
            checked={activeStatus === 'no'} 
            onChange={() => handleActiveStatusChange('no')}
            className="mb-4"
          />
        </div>
      </div>

      <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps}/>
    </div>
  )
}

export default Education;