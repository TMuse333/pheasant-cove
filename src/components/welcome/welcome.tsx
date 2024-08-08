
import pheasant from '../../media/pure-pheasant.png'



export const Welcome = () => {

    return (
        <>
        <div className="w-screen
            md:w-[45vw]
           flex flex-col
            md:h-[45vw]
           w-[90vw] 
          md:max-w-[500px]
            max-h-[500px]
           mt-auto
           md:bg-gradient-to-b from-blue-300 to-blue-800
mb-auto      pr-4 pl-4
md:pl-0 pr-0

mb-4 md:mb-0
relative
  mr-auto 
  ml-auto 
  fancy-font    
            
            ">
          <h1 className="text-black text-5xl md:text-6xl
          mt-8 md:mt-[4rem] md:pl-8 md:pr-6 font-arima">
            Welcome to Pheasant Cove</h1>
           
                <img src={pheasant}
            className='object-contain w-[40vw]
            md:w-[35vw] 
            ml-auto mr-auto 
          md:translate-x-[7rem]
          relative z-[40]
            mt-auto
            sm:scale-[1]
            max-w-[475px] max-h-[311px]
            mt-auto
            '/> 
            </div>
            </>
    )
}

export const BottomWelcomeText = () => {

    return (
        <div className='w-screen max-w-[1200px] '>

        
        <p className='text-lg mt-3
        sm:text-lg 
         fancy-font
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
        <div className="
        mt-4 md:mt-0
        w-screen
        md:w-[45vw]
       mr-auto ml-auto
        md:h-[45vw]
       w-[90vw] 
      md:max-w-[500px]
        max-h-[500px]
       mt-auto
       bg-gradient-to-b from-blue-300 to-blue-800
mb-auto
max-w-[500px]            
        
        ">
            <h2 className='fancy-font text-xl md:text-3xl mt-0 mb-1
            text-left pl-8 text-black '>Features</h2>
        <ul style={{ listStyleType: 'disc' }} 
        className=' font-helvetica mt-0 mb-auto text-sm 
        text-white md:text-[1rem] bs:text-lg mt-5 ml-auto mr-auto text-left
        pl-8'>
            <li className='pr-4 mb-2 bs:mb-0'>
            One bedroom, executive apartment in an
            independent building
            </li>
            <li className='mb-2 bs:mb-0'>
            New construction, new furnishings and appliances

            </li>
            <li className='mb-2 bs:mb-0'>
            Large, second storey deck, abundant light and
            windows, interesting woodland views 
            </li>
            <li className='mb-2 md:mb-0'>
            New appliances and high-end finishes and fixtures
            </li>
            <li className='mb-2 md:mb-0'>Heat pump for year-around heating/cooling

            </li>
            <li className='mb-2 md:mb-0'>
            Gas fireplace/stove for back-up heat and cosy
atmosphere
            </li>
            <li className='mb-2 md:mb-0'>
            Large, heated garage bay for indoor parking and
extra storage
            </li>
            <li className='mb-2 md:mb-0'>
            Garage-level laundry facility with new stacked
washer/dryer
            </li>
            <li className='mb-2 md:mb-0'>
            Less than a 15-minute drive from the Bayers Lake
shopping malls and amenities
            </li>
        </ul>
        </div>
    )
}

const handleScroll = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

export const BottomText2 = () => {

    return (

    <div className='flex  fancy-font
   items-center 
    w-[95vw]
    bg-gradient-to-b from-blue-500 to-blue-800
    ml-auto mr-auto  
        max-w-[1200px] 
     '>
        <img src={pheasant}
        className='w-[20vw] object-cover
        hover:scale-[1.05] transition-transform
        
         '
         onClick={handleScroll}/>
        <p className='text-sm text-left sm:text-lg 
    
        max-w-[1500px] '>A backyard suite is an independent dwelling
            of not more than 80 square metres located
            on the same PID as the main house. </p>
    </div>
    )
}
