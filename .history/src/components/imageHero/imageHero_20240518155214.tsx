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
        }, 3000); // Change image every 5 seconds

        return () => clearInterval(interval); // Clear the interval on component unmount
    }, [currentImageIndex, images.length]);

    return (
        <header className="flex w-screen flex flex-col  relative">
            <h1 className="text-3xl">Pheasant Cove</h1>
            <p>Place address Here</p>

            <div className="image-container h-[80vh] relative">
                {/* {images.map((image, index) => ( */}
                    <img
                        // key={index}
                        src={images[0]}
                        // alt={`Image ${index}`}
                        className={` w-full h-full top-0 object-cover `}
                    />
                {/* ))} */}
            </div>
        </header>
    );
};

export default ImageHero;
