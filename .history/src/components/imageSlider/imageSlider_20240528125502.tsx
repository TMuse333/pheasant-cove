import { useState,useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import './imageSlider.css'

interface props{
    images:{
        url:string,
        alt:string
    }[]
}

const ImageSlider:React.FC<props> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);
//   const [isFullHeight, setIsFullHeight] = useState(false);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 565)

  const [itemClicked, setItemClicked] = useState<number | null>(null)

    const [desktopExpanded, setDesktopExpanded] = useState(false)

    const [mobileExpanded, setMobileExpanded] = useState(false)

    useEffect(()=>{
      console.log('the slider images',
      images)
    },[])



  const handleItemClick = (index:number) => {

    console.log('item clicked')

    // if(itemClicked !== null){
        setItemClicked(index)
        setImageIndex(index)
        if(isDesktop){
            setDesktopExpanded(true)
        }
        else{
            setMobileExpanded(true)
            console.log('mobile expanded')
        }
  }

  

  useEffect(()=> {
    
    const handleResize = () => {
        if(window.innerWidth >= 565){
            setIsDesktop(true)
            console.log('desktop is true!')
        }
        else{
            setIsDesktop(false)
        }


    }

    window.addEventListener('resize',handleResize)

    return () => {
        window.removeEventListener('resize',handleResize)
    }
  },[])

  const showNextImage = () => {
    setImageIndex(index => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex(index => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

//   const toggleImageHeight = () => {
//     setIsFullHeight(prevState => !prevState);

    
//   };





const handleExpansion = () => {

    if(isDesktop) {
        setDesktopExpanded(false)
    }
    else{
        setMobileExpanded(!mobileExpanded)
    }
}

const [hovered, setHovered] = useState<number | null>(null)

const handleMouseEnter = (index:number) => {
    setHovered(index)
}

const handleMouseLeave = () => {
    setHovered(null)
}

const style = (index:number) => {
    const selected = index === hovered

    return {
        opacity: selected ? '0.8' : '1',
        transform: selected ? 'scale(1.05)' : 'scale(1)',
        transition: 'all 0.3s ease-in-out',
       
    }
}

  return (
    <>

{!isDesktop && !mobileExpanded && (
    <div>


            <h1>{images.length} Photos</h1>
            <p>Cick on the expand button to zoom in</p>
            </div>
        )}

        <div className="slider-container">

       

    {!isDesktop  || (itemClicked !== null && desktopExpanded) ? (
        <section
       
        id='photo-gallery'
        aria-label="Image Slider"
        style={{ width: "100vw",
         position:  desktopExpanded || mobileExpanded ? 'fixed' :"relative",
         backgroundColor:'black',
         height: desktopExpanded || mobileExpanded? '100vh' : 'auto',
         top: desktopExpanded || mobileExpanded?'0': 'auto',
         left:desktopExpanded || mobileExpanded?'0': 'auto',
       

         zIndex:10
  
   }}
      >
       
        <a href="#after-image-slider-controls" className="skip-link">
          Skip Image Slider Controls
        </a>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
            alignItems:'center',
           

         
          }}
        >
          {images.map((image, index) => (
            <img
            loading="lazy"
              key={index}
              src={image.url}
              alt={image.alt}
              aria-hidden={imageIndex !== index}
              className="img-slider-img"
              style={{ transform: `translateX(${-100 * imageIndex}%)`, 
         
            //   maxWidth:'1200px',
              height: !isDesktop && mobileExpanded ? '100vh' : 'auto',
            //   marginLeft:'auto'
            //   height:  "500px",
              
             
          }}
          onClick={()=>handleItemClick(index)}
            />
          ))}
        </div>
        <button
          onClick={showPrevImage}
          className="img-slider-btn"
          style={{ left: 0 }}
          aria-label="View Previous Image"
        >
          <ArrowBigLeft aria-hidden />
        </button>
        <button
          onClick={showNextImage}
          className="img-slider-btn"
          style={{ right: 0 }}
          aria-label="View Next Image"
        >
          <ArrowBigRight aria-hidden />
        </button>
        <div
          style={{
            position: "absolute",
           bottom:'0.5rem',
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: ".25rem",
          }}
        >
          {images.map((_, index) => (
            <button
  
              key={index}
              className="img-slider-dot-btn"
              aria-label={`View Image ${index + 1}`}
              onClick={() => setImageIndex(index)}
  
            >
              {index === imageIndex ? (
                <CircleDot aria-hidden />
              ) : (
                <Circle aria-hidden />
              )}
            </button>
          ))}
        </div>
        <div id="after-image-slider-controls" />
        <button onClick={handleExpansion} className="toggle-height-btn"
        style={{
          position: desktopExpanded || mobileExpanded? 'fixed' : 'absolute',
          top: desktopExpanded || mobileExpanded? 'auto' : '100%',
          left:'50%',
          transform:'translateX(-50%)',
          zIndex:'5',
       
          bottom:desktopExpanded || mobileExpanded? '10%' : " auto"
        }}>
  
          {desktopExpanded || mobileExpanded? "Collapse" : "Expand"}
        </button>
      </section>
    ) : (
        <section
        className="images-grid"
        id='photo-gallery'>
            {images.map((image, index)=> (
                <img src={image.url}
                key={index}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={style(index)}
                alt={image.alt}
                onClick={()=> handleItemClick(index)}
                className='desktop-image'></img>
            ))}
          
        </section>
    )}
     </div>

</>
  
  );
};

export default ImageSlider;