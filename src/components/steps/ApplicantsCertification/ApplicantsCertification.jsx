import React from 'react';
import StepperControl from '../../StepperControl';

const ApplicantsCertification = ({ handleClick, currentStep, steps }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick("next", true);
  };
  return (
    <div className="flex flex-col">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-4 uppercase">
        I hereby certify that all statements made in this application and in the pre-employment process are true and correct to the best of my knowledge and belief. I understand and agree that any
        misrepresentation or omission of facts in my application or in the pre-employment process may result in rejection of my application, or termination of employment.
      </div>

     <div className="font-bold h-6 mt-10 text-gray-500 text-xs leading-4 uppercase">
        I understand an employee of SB & Company, LLC may make an investigation as to my character and general reputation. I authorize all current and past employers, schools, persons,
        and organizations having relevant information or knowledge to provide it to SB & Company, LLC or its designee, whether or not it is on their records. I hereby release SB & Company, LLC, its representatives and all such employers, schools, persons and organizations from all liability in making or responding to inquiries connected with my application.
      </div>

       <div className="font-bold h-6 mt-[60px] text-gray-500 text-xs leading-4 uppercase">
        I understand that an employment relationship is established, my employment can be terminated at any time, with or without notice or cause, at the option of SB & Company, LLC or myself. I further understand that nothing contained in this
        application or in the interview and communication process between me and SB & Company, LLC or any SB & Company, LLC representative stated or implied, is intended to create an employment contract or any other binding obligation on SB & Company, LLC.
      </div>

     <div className="font-bold h-6 mt-[60px] text-gray-500 text-xs leading-4 uppercase">
        Further, if granted a position with SB & Company, LLC, I will comply with all of SB & Company, LLC policies and procedures, a copy of which will be provided to me at the time of my first week of employment.
      </div>

      <div className="font-bold h-6 mt-[30px] text-gray-500 text-xs leading-4 uppercase">
        Under Maryland law, an employer may not require or demand, as a condition of employment, perspective employment, or continued employment, that an individual submit to or take a lie detector or similar test. An employer who violates this law is guilty of a
        misdemeanor and subject to a fine not exceeding $100.
      </div>

       <div className="font-bold h-6 mt-[40px] text-gray-500 text-xs leading-4 uppercase">
        In signing this form, I certify that I understand all the questions and statements in this application.
      </div>

      <div className="font-bold h-6 mt-5 text-gray-500 text-xs leading-4 uppercase">Acknowledge:</div>
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-4 uppercase">Signature of Applicant:</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
      </div>
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-4 uppercase">Date:</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input type="date" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
      </div>

      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-4 uppercase">
        EEO Statement: SB & Company, LLC is an equal opportunity employer and will not discriminate against any application for employment on the basis of race, color, religion, sex, age, national origin, veteran status,
        disability, or any other basis prohibited by law.
      </div>
      <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps} />
    </div>

  )
}

export default ApplicantsCertification
