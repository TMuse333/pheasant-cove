import React from "react";
import Carousel from '../carousel/carosuel'

interface CarouselProps {
  images: {
    url: string;
    title: string;
    description: string;
    link: string;
  }[];
  hasDescription?: boolean;
  content: React.ReactNode;
  bottomContent: React.ReactNode;
  reverse?: boolean;
  id:string
}

const ContentCarousel: React.FC<CarouselProps> = ({ images, content, bottomContent, reverse,
id }) => {
  return (
    <>
    <section
     id={id}>

  
      <section
      className={`mt-[3rem] md:mt-[6rem] ml-auto mr-auto w-screen flex ${reverse ? 'flex-col-reverse' : 'flex-col'} 
      md:flex-row   justify-center items-center
      md:max-h-[500px] max-w-[1200px]`}>
        {content}
        <Carousel images={images} />
      </section>
      {bottomContent}
      </section>
    </>
  );
}

export default ContentCarousel;
