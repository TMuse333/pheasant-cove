
import pheasant from '../../media/pure-pheasant.png'



export const Welcome = () => {

    return (
        <>
        <div className="w-screen
            md:w-[45vw]
           w-[90vw] pr-4 pl-4
           md:pl-0 pr-0
          
        mb-4 md:mb-0
        md:h-[68vw]
             mr-auto 
             ml-auto
          md:max-w-[500px]
            max-h-[600px]
           mt-auto
           bg-gradient-to-b from-blue-300 to-blue-800
mb-auto           
            
            ">
          <h1 className="font-arima text-black text-5xl md:text-6xl
          mt-8 md:mt-[4rem] md:pl-8 md:pr-6">Welcome to pheasant cove</h1>
                <img src={pheasant}
            className='object-contain w-[80vw]
            md:w-[45vw]
            ml-auto mr-auto 
           
            mt-auto
            sm:scale-[1]
            max-w-[475px] max-h-[311px]
            h-[50vw]'/> 
            </div>
            </>
    )
}

export const BottomWelcomeText = () => {

    return (
        <div className='w-screen max-w-[1200px] '>

        
        <p className='text-2xl mt-3
        sm:text-3xl 
         font-arima
        pt-3 pb-3 bg-gradient-to-b from-blue-500 to-blue-800
       
         '>
            The backyard suite at Pheasant Cove is now offered for a one-year,
            fixed-term lease.
        </p>
        </div>
    )
}


export const LuxuryLiving = () => {

    return (
        <div className="w-screen
        mt-4 md:mt-0
        md:w-[50vw]
       
      
    mb-4 md:mb-0
    md:h-[68vw]
        ml-auto mr-auto 
      flex
        max-h-[600px]
       md:mt-auto
       bg-gradient-to-b from-blue-300 to-blue-800
mb-auto
max-w-[500px]            
        
        ">
        <p className='font-arima mt-auto mb-auto text-2xl p-3
        text-black md:text-4xl mt-5 ml-auto mr-auto'>Executive luxury living
            in a natural setting less than a 15-minute 
            drive from the amenities of the Bayers Lake shopping malls and the Bayers Lake Community Outpatient Centre
        </p>
        </div>
    )
}

export const BottomText2 = () => {

    return (

    <div className='flex 
   items-center 
    w-[95vw]
    bg-gradient-to-b from-blue-500 to-blue-800
    ml-auto mr-auto  
        max-w-[1200px] 
     '>
        <img src={pheasant}
        className='w-[20vw] object-cover
         '/>
        <p className='text-sm text-left sm:text-lg 
    
        max-w-[1500px] '>A backyard suite is an independent dwelling
            of not more than 80 square metres located
            on the same PID as the main house </p>
    </div>
    )
}
