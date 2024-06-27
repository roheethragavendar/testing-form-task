import React, { useState } from 'react';
import './App.css';
import { StepperContext } from './components/contexts/StepperContext';
import Stepper from './components/Stepper';
import GeneralInformation from './components/steps/GeneralInformation/GeneralInformation';
import Education from './components/steps/Education/Education';
import PreviousExperience from './components/steps/PreviousExperience/PreviousExperience';
import AdditionalQualification from './components/steps/AdditionalQualification/AdditionalQualification';
import References from './components/steps/References/References';
import BackGroundData from './components/steps/BackGroundData/BackGroundData';
import ApplicantsCertification from './components/steps/ApplicantsCertification/ApplicantsCertification';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const steps = [
    "General Information", "Education", "Previous Experience", "Additional Qualification",
    "References", "Background Data", "Applicants Certification", "Final"
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <GeneralInformation handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 2:
        return <Education handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 3:
        return <PreviousExperience handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 4:
        return <AdditionalQualification handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 5:
        return <References handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 6:
        return <BackGroundData handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 7:
        return <ApplicantsCertification handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 8:
        return <Final />;
      default:
        return null;
    }
  };

  const handleClick = (direction, skipValidation = false) => {
    let newStep = currentStep;
    if (direction === "next") {
      newStep++;
    } else if (direction === "previous") {
      newStep--;
    }
    // check if steps are within bounds
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };

  return (
    <div className="max-w-full max-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* stepper */}
      <div className='container horizontal mt-5'>
        <Stepper 
          steps={steps}
          currentStep={currentStep}
        />
        {/* Display Components */}
        <div className='my-10 p-10'>
          <StepperContext.Provider value={{ userData, setUserData, finalData, setFinalData }}>
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>
      {/* Navigation Controls */}
    </div>
  );
}

export default App;
