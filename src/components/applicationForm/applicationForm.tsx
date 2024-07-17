import Navbar from "../navbar/navbar"
// import { useState } from "react"
import InputForm from "../inputForm/inputForm";
import {generalLeaseTerms,applicationQuestions,
    applicationQuestions2, currentAddressQuestions,
    employmentQuestions,otherSourcesOfIncomeQuestions,
    proofOfIncomeQuestions,characterQuestions,
    emergencyQuestions,occupantsQuestions

} from '../../data/data'

import Footer from "../footer/footer";
import axios from 'axios'
import { useGeneralContext } from "../../context/context";

const ApplicationForm = () => {

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
    const {applicationFormState} = useGeneralContext()
    // const [missingFields, setMissingFields] = useState<string[]>([]);
    // useEffect(() => {
    //     const initialMissing = requiredFields.filter(field => {
    //         const isRequired = applicationQuestions.find(q => q.question === field)?.required;
    //         return isRequired; // Start with all required fields
    //     });
    
    //     const missing = initialMissing.filter(field => {
    //         const value = applicationFormState[field]?.trim();
    //         return !value; // Check for empty values
    //     });
    
    //     setMissingFields(missing);
    //     console.log('The missing fields', missing);
    // }, [applicationFormState]);
    



// const requiredFields = [
//     'Applicant name',
//     'Date of birth',
//     'Applicant email',
//     'Telephone number',
//     'Work phone',
//     'Present address',
//     'For how long?',
//     'Make of model',
//     'Year',
//     'License plate',
//     'Color',
//     'Current address',
//     'How long at this current address',
//     'Name of current landlord',
//     'Phone number of current landlord',
//     'Name of previous landlord',
//     'Phone number of previous landlord',
//     'Employment status',
//     'Present employer',
//     'Years employed',
//     'Employer’s address',
//     'Position / work performed',
//     'Supervisor’s name',
//     'Phone number',
//     'Date hired',
//     'Monthly income',
//     // Add other required fields as necessary
// ];

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('the data sent',applicationFormState)

    try {
        const response = await axios.post('/.netlify/functions/sendApplication', { formData: applicationFormState });
        console.log(response.data);
        alert('Application submitted successfully!');
    } catch (error) {
        console.error('Error submitting application:', error);
        alert('Failed to submit application.');
    }
};
    return (
        <>
            <Navbar
    links={navLinks}
    />
 
        <section className="absolute top-[5%] left-0  bg-radial-gradient from-blue-500 to-blue-900
        w-screen overflow-x-hidden pt-8
        font-arima
       " >


            <section className="ml-auto
            mr-auto pt-5 text-center">

          
            <h1 className="text-white text-3xl md:text-5xl">Submit an application</h1>
            <h2 className="text-white w-[80vw] ml-auto mr-auto
            mt-5 md:text-xl">Fill out the following for to
            see if you're a good fit for us</h2>
              </section>

<section className="flex flex-col lg:flex-row w-[90vw]
lg:w-screen
 ml-auto mr-auto
">


              <section className="lg:w-[50vw]
              flex flex-col justify-center items-center
             ">

             

              <h1 className="text-white text-4xl mb-4 mt-4">General Lease Terms</h1>

              <div className="w-[99vw] lg:w-[45vw] border border-black ml-auto mr-auto
             bg-gradient-to-b from-blue-300 to-blue-500 rounded-xl  max-w-[800px]
             border border-black ">

                <ul className="pt-5 ml-auto mr-auto
                bg-gradient-to-b from-blue-300 to-blue-500
                mb-auto ">
                    {generalLeaseTerms.map((term, index) => (
                        
                            <div 
                            key={index}
                            className={`w-full flex justify-between
                            mb-5 ${index % 2 !== 0 ? 'bg-blue-300' : ''}`}>
                                <p className="w-[40%]">{term.term}</p>
                                <p className="w-[60%]">{term.condition}</p>
                            </div>
                       
                    ))}
                </ul>
              </div>
              </section>
<div className="lg:w-[50vw] h-screen overflow-y-scroll
border border-black rounded-md mt-6
mb-8">


              <InputForm
                questions={applicationQuestions}
title='Applicant information'
                />
             

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
title="Character reference"
questions={characterQuestions}
/>

<InputForm
title="Proof of income"
description="This application requires proof of income. Acceptable proof includes but is not limited to an employer’s or bank
manager’s confirmation of the applicant’s ability to meet the monthly rent requirements, a copy of an official
Equifax personal credit score or copies of the applicant’s previous year’s tax return."
questions={proofOfIncomeQuestions}
/>

<InputForm
title="Nearest Friend or Relative incase of Emergency"
questions={emergencyQuestions}
/>

<InputForm
title="Other occupants"
questions={occupantsQuestions}
/>

<button onClick={handleSubmit}
 className="mt-5 w-[150px] ml-0 bg-orange-400 rounded-none
 p-2 border-2 border-white text-white
 hover:scale-[1.05] hover:border-orange-400
 hover:bg-white hover:text-orange-400 
 transition-all">
    Submit Application
</button>
</div>
</section>

{/* <section className="text-white w-[90vw] max-w-[1400px] ml-auto mr-auto
">



<h1 className="text-3xl mb-6 sm:text-4xl">Declaration and authorization</h1>

<p className="text-lg mb-6 text-left ml-4">I declare that the information I have provided is true and correct and contains no misrepresentations.
If misrepresentations are found after a residential lease agreement is entered into between the
landlord and Applicant, the Landlord shall have the option to terminate the residential lease
agreement and seek all available remedies.</p>

<p className="text-lg mb-6 text-left ml-4">
The Applicant authorizes the Landlord to verify all references and facts, including but not limited to
current and previous landlords, employers and personal references. The Applicant understands that
incomplete or incorrect information provided in the application may cause a delay in processing or
may result in the denial of the application.
</p>

<h2 className="text-xl text-left ml-5">Applicants name</h2>
<div className=" mt-8 w-[95vw] mr-auto ml-4 h-[3px] bg-black
max-w-[700px]"></div>

<h2 className="text-xl text-left ml-5 mt-7">Applicants Signature</h2>
<div className=" mt-8 w-[95vw] mr-auto ml-4  h-[3px] bg-black mb-8
max-w-[700px]"></div>
</section> */}








<Footer
links={navLinks}

/>     

        </section>


        </>
    )
}

export default ApplicationForm