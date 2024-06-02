import { mapText } from "@/data/data";
import Accordion from "../accordion/accordion";

export const Map = () => {

    const iframeStyles = {
        border: '0',
    };

    return (
        <>
            <section id='map'
                className={`w-[100vw] max-w-[1400px]
                ml-auto mr-auto flex flex-col md:flex-row 
                md:flex-row-reverse
                
                `}>
                <div className="mb-12
                    md:w-[40vw]">

                   <Accordion
                   hasIntro={true}
                   intro={mapText.title}
                   description={mapText.description}
                   text={mapText.text}
                   />
                </div>
                <iframe className="ml-auto mr-auto
                    w-[80vw] sm:w-[50vw] max-w-[500px]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.7289756911973!2d-63.797375223044796!3d44.663888686478685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b598b35aeb5502d%3A0x51fb359b501c93a4!2sAshley%20Ct%2C%20Hubley%2C%20NS!5e0!3m2!1sen!2sca!4v1717271378025!5m2!1sen!2sca"
                    width="600"
                    height="450"
                    style={iframeStyles}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </section>

            <div className={` h-[5px]
                w-[60vw] max-w-[800px] ml-auto mr-auto mt-5
                mb-8 bg-gray-300`} />
        </>
    );
};
