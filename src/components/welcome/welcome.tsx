
import pheasant from '../../media/pheasant-removebg-preview.png'



export const Welcome = () => {

    return (
        <>
        <div className="w-[75vw]
            md:w-[50vw]
           
          
        mb-4 md:mb-0
        md:h-[68vw]
            ml-auto mr-auto 
          
            max-h-[600px]
           mt-auto
           bg-gradient-to-b from-blue-300 to-blue-500
mb-auto           
            
            ">
          <h1 className="font-arima text-black text-5xl md:text-7xl">Welcome to pheasant cove</h1>
                <img src={pheasant}
            className='object-contain w-[40vw]
            ml-auto mr-auto 
            scale-[2]
            mb-[3rem]
            sm:scale-[1]
            max-w-[475px] max-h-[311px]
            h-[50vw]'/> 
            </div>
            </>
    )
}

export const BottomWelcomeText = () => {

    return (
        <p className='text-2xl mt-3
        sm:text-3xl sm:pr-4 sm:pl-4
         font-arima
        pt-3 pb-3 bg-gradient-to-b from-blue-500 to-blue-800'>
            The backyard suite at Pheasant Cove is now offered for a one-year,
            fixed term lease
        </p>
    )
}


export const LuxuryLiving = () => {

    return (
        <div className="w-[75vw]
        md:w-[50vw]
       
      
    mb-4 md:mb-0
    md:h-[68vw]
        ml-auto mr-auto 
      flex
        max-h-[600px]
       mt-auto
       bg-gradient-to-b from-blue-300 to-blue-500
mb-auto           
        
        ">
        <p className='font-arima mt-auto mb-auto text-2xl p-3
        text-black md:text-4xl mt-5'>Executive luxury living
            in a natural setting less than a 15-minute 
            drive from the amenities of the Bayers Lake shopping malls and the Bayers Lake Community Outpatient Centre
        </p>
        </div>
    )
}

export const BottomText2 = () => {

    return (

    <div className='flex max-w-[1200px] items-center '>
        <img src={pheasant}
        className='w-[20vw] object-cover'/>
        <p className='text-sm text-left'>A backyard suite is an independent dwelling
            of not more than 80 square metres located
            on the same PID as the main house </p>
    </div>
    )
}
