import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
// import { Link } from 'react-router-dom';
// import logo from '../../media/q3-words.png'

// import bg from '../../media/contact-bg.jpg'
// interface Link {
//   dest: string;
//   name: string;
// }

import house from '../../media/Front-of-building.jpg'
import Navbar from '../navbar/navbar';


interface InputField {
  placeholder: string;
  name: string;
}

const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(true);
  const form = useRef<HTMLFormElement>(null);



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

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = 'service_32u1f5x';
    const templateId = 'template_ubgz5ef';
    const userId = 'CN_-9JmkFRgjxgmrg';

    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, form.current, userId)
        .then((result) => {
          console.log(result.text);
          setSubmitted(true);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  useEffect(() => {
    // Scroll to the top when the "submitted" state changes
    if (submitted) {
      window.scrollTo(0, 0);
    }
  }, [submitted]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const inputFields: InputField[] = [
    { placeholder: 'Email', name: 'user_email' },
    { placeholder: 'First Name', name: 'first_Name' },
    { placeholder: 'Last Name', name: 'last_Name' },
    // { placeholder: 'Company name (if applicable)', name: 'company_Name' },
    { placeholder: 'Phone number', name: 'phone_Number' },
    { placeholder: 'Your Message', name: 'project_Details' },
  ];

  // const links: Link[] = [
  //   { dest: '/', name: 'Home' },
  //   { dest: '/why-us', name: 'Why Us' },
  //   { dest: '/about', name: 'About Us' },
  // ];



  return (
    <>
     
    <Navbar
    links={navLinks}
    />



   
    
      <div className='w-screen h-screen flex justify-center items-center absolute top-10 left-0
     bg-[#35465E]'
    //   style={{
    //     backgroundImage:`url(${bg})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition:'center'
       
    //   }}
      >

      <div className='hidden md:block
      md:w-[50vw]  
     
      max-w-[650px] ml-auto
      bg-black pt-3 pb-3 bg-opacity-70
      rounded-3xl '>
       <h1 className='text-white
       text-4xl mb-4'>Pheasant Cove</h1>
        
  <img src={house}
  className='w-[50vw] object-cover'
  />

  <p className='mt-4 text-3xl'>A lovely Home</p>
          
        </div>
        <div className='text-center ml-auto
        mr-auto 
        md:w-[50vw]
        max-w-[400px]
        '
        >
         <h1>Pheasant Cove</h1>
          <h2 className='text-white text-2xl mt-5 pl-3 pr-3'>You have made an excellent choice</h2>
          <p className="w-4/5 ml-auto mr-auto">Let's get in contact so we can see if you're a good fit!</p>
          <form onSubmit={sendEmail} ref={form}>
            <div className="mt-8 flex flex-col justify-center items-center
            bg-gray-900 bg-opacity-100 pt-6 pb-6
             rounded-3xl">
            {inputFields.map((inputField, index) => (
  index === inputFields.length - 1 ? (
    <textarea
      key={index}
      className=' border border-blue-400 bg-black rounded-xl text-white
      focus:placeholder-gray-300 p-2 mb-3
      w-[80vw] max-w-[400px]'
      placeholder={inputField.placeholder}
      name={inputField.name}
    />
  ) : (
    <input
      key={index}
      className=' border border-blue-400 bg-black rounded-xl text-white
      focus:placeholder-gray-300 p-2 mb-3
      w-[80vw] max-w-[400px]'
      type="text"
      placeholder={inputField.placeholder}
      name={inputField.name}
    />
  )
))}

            </div>
          </form>

        <p className='pl-5 pr-5 mb-5'>
            *Insert an inspirational quote here*
            (optional)
        </p>
        <button>Send Message</button>

        </div>
  {/* <div className='absolute bottom-[-30%]'>


        <Footer
      links={links}
      />
        </div> */}
      </div>

  

    
      
     
     
    </>
  );
};

export default Booking;