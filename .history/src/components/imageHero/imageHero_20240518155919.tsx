import React, { useState, useEffect } from "react";

interface HeroProps {
    images: string[];
}

const ImageHero: React.FC<HeroProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Calculate the index of the next image
            const nextImageIndex = (currentImageIndex + 1) % images.length;
            setCurrentImageIndex(nextImageIndex);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clear the interval on component unmount
    }, [currentImageIndex, images.length]);

    return (
        <header className="flex w-screen flex flex-col relative
        md:flex-row
        ">
            <div className="md:w-[50vw] relative">

          <p>A newly built home that has never been used before</p>
            <h1 className="text-4xl">Pheasant Cove</h1>
            <p className="text-2xl">Place address Here</p>
            </div>

            <div className="image-container h-[80vh] relative
            md:w-[50vw]">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index}`}
                        className={`w-full h-full top-0 object-cover absolute opacity-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : ''}`}
                    />
                ))}
            </div>
        </header>
    );
};

export default ImageHero;
