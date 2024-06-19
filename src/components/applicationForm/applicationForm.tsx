import Navbar from "../navbar/navbar"


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

    const generalLeaseTerms = [
        {
            term:'Type of accommodation',
            condition:'Independent building on same property as owner'
        },
        {
            term:'Property address',
            condition:'106 Ashley Court, Hubley B3Z 1P6'
        },
        {
            term:'Parking',
            condition:'Ample outdoor parking space and one large, heated garage stall'
        },
        {
            term:'Storage',
            condition:"Ample space for storage in garage stall"
        },
        {
            term:'Type of lease',
            condition:'One-year fixed term beginning June 1, 2025'
        },
        {
            term:'Monthly rent payment:',
            condition:'$2,600 payable on or before the 1st of each month',

        },
        {
            term:'Initial security deposit:',
            condition:'$1,300 payable prior to initial occupancy'
        },
        {
            term:'Pets:',
            condition:'Pets are not permitted'
        },
        {
            term:'Smoking:',
            condition:'Smoking or vaping of tobacco, cannabis or other controlled substances is not permitted'

           
        }
    ]


    const applicationQuestions = [
       {
        question:'Applicant name',
        // placeholder:'Enter name here'
       },
       {
        question:'Date of birth'
       },
       {
        question:"Email"
       },
       {
        question:'Telephone number'
       },
       {
        question:'Work phone'
       },
       {
        question:'Present address'
       }
    ]

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
                        <li key={index} className="mb-4">
                            <label className="block text-white text-left mb-2">
                                {question.question}
                            </label>
                            <input
                                type="text"
                                placeholder={`Enter ${question.question.toLowerCase()} here`}
                                className="w-full p-2 rounded"
                            />
                        </li>
                    ))}
                </ul>




            

        </section>
        </>
    )
}

export default ApplicationForm