import Navbar from "../navbar/navbar"
import { useState } from "react"
import InputForm from "../inputForm/inputForm";
import {generalLeaseTerms,applicationQuestions,
    applicationQuestions2, currentAddressQuestions,
    employmentQuestions,otherSourcesOfIncomeQuestions,
    proofOfIncomeQuestions,characterQuestions,
    emergencyQuestions,occupantsQuestions

} from '../../data/data'
const ApplicationForm = () => {

    interface MaritalStatus {
        single: boolean;
        married: boolean;
        commonLaw: boolean;
        other: boolean;
    }


    const navLinks = [
        {
            name:'Home',
            destination:'/'
        },
        {
            name:'View Property',
            destination:'/display'
        }
    ]


    const [maritalStatus, setMaritalStatus] = useState({
        single: false,
        married: false,
        commonLaw: false,
        other: false
    });
    const [otherStatus, setOtherStatus] = useState('');

    const handleMaritalStatusChange = (status: keyof MaritalStatus) => {
        setMaritalStatus((prevStatus) => ({
            ...prevStatus,
            [status]: !prevStatus[status]
        }));
    };





    return (
        <>
            <Navbar
    links={navLinks}
    />
 
        <section className="absolute top-[13%] left-0  bg-radial-gradient from-blue-500 to-blue-900
        w-screen
        
       " >


            <section className="ml-auto
            mr-auto pt-5 text-center">

          
            <h1 className="text-white text-3xl ">Submit an application</h1>
            <h2 className="text-white w-[80vw] ml-auto mr-auto
            mt-5">Fill out the following for to
            see if you're a good fit for us</h2>
              </section>

              <h1 className="text-white text-4xl mb-4 mt-4">General Lease Terms</h1>

              <div className="w-[99vw] border border-black ml-auto mr-auto
              bg-gray-400 rounded-xl">

                <ul className="pt-5">
                    {generalLeaseTerms.map((term, index) => (
                        
                            <div 
                            key={index}
                            className={`w-full flex justify-between
                            mb-5 ${index % 2 !== 0 ? 'bg-gray-500' : ''}`}>
                                <p className="w-[40%]">{term.term}</p>
                                <p className="w-[60%]">{term.condition}</p>
                            </div>
                       
                    ))}
                </ul>
              </div>

              <h1 className="text-white text-4xl mb-4 mt-4">Applicant Information</h1>

              <ul className="pt-5">
                    {applicationQuestions.map((question, index) => (
                        <li key={index} className="mb-4 w-[90vw] ml-auto mr-auto">
                            <label className="block text-white text-left mb-2">
                                {question.question}
                            </label>
                            <input
                                type="text"
                                placeholder={question.placeholder}
                                className="w-full p-2 rounded"
                            />
                        </li>
                    ))}

                    <h2 className="text-white text-2xl text-left ml-5 mb-3">Marital Status</h2>

                    <div className="w-full  ml-5">

                    

<div className="flex items-center mb-2 ">
                                <input
                                    type="checkbox"
                                    checked={maritalStatus.single}
                                    onChange={() => handleMaritalStatusChange('single')}
                                />
                                <label className="text-white ml-2">Single</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    checked={maritalStatus.married}
                                    onChange={() => handleMaritalStatusChange('married')}
                                />
                                <label className="text-white ml-2">Married</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    checked={maritalStatus.commonLaw}
                                    onChange={() => handleMaritalStatusChange('commonLaw')}
                                />
                                <label className="text-white ml-2">Common-Law</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    checked={maritalStatus.other}
                                    onChange={() => handleMaritalStatusChange('other')}
                                />
                                <label className="text-white ml-2 ">Other</label>
                                {maritalStatus.other && (
                                    <input
                                        type="text"
                                        value={otherStatus}
                                        onChange={(e) => setOtherStatus(e.target.value)}
                                        placeholder="Please specify"
                                        className="ml-2 p-2 rounded"
                                    />
                                )}
                            </div>
                            </div>
                </ul>

                <InputForm
                questions={applicationQuestions2}
                description='Enter the make of your car down below '
                />

                <InputForm
                questions={employmentQuestions}
                title='Current employment'
                />

                <InputForm
                questions={currentAddressQuestions}
                title='Current address'
                />

                <InputForm
                questions={otherSourcesOfIncomeQuestions}
                title='Other sources of income'
                />


<InputForm
questions={proofOfIncomeQuestions}
title='Proof of income'
description="This application requires proof of income. Acceptable proof includes but is not limited to an employer’s or bank
manager’s confirmation of the applicant’s ability to meet the monthly rent requirements, a copy of an official
Equifax personal credit score or copies of the applicant’s previous year’s tax return."
/>

<InputForm
questions={characterQuestions}
/>

<InputForm
questions={proofOfIncomeQuestions}
/>

<InputForm
questions={emergencyQuestions}
/>

<InputForm
questions={occupantsQuestions}
/>









            

        </section>
        </>
    )
}

export default ApplicationForm