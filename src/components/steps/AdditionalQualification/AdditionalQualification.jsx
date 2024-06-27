import React from 'react';
import StepperControl from '../../StepperControl'; 

const AdditionalQualification = ({handleClick,currentStep,steps}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
      handleClick("next",true);
  };
  return (
    <div className="flex flex-col">
      <h1>Previous experience</h1>
      <StepperControl
        handleClick={handleClick}
        handleSubmit={handleSubmit}
        currentStep={currentStep}
        steps={steps}
      />
    </div>
   
     
  )
}

export default AdditionalQualification
