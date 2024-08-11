import React, { useState } from "react";

interface NavbarProps {
    links: {
        name: string,
        destination: string
    }[]
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const [subMenuClicked, setSubMenuClicked] = useState(false);

    // function handleSubmenuClick() {
    //     setSubMenuClicked(!subMenuClicked);
    // }

    function scrollToSection(destination: string) {
        const element = document.getElementById(destination);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <nav className="fixed top-0 z-[200] w-screen left-0 bg-gradient-to-b from-blue-900 to-blue-800 h-[50px] flex justify-between items-center text-white">
            <div className="relative flex justify-between items-center w-screen ml-auto mr-auto sm:justify-center font-arima">
                
                    {/* <div className="sm:hidden w-[140px] sm:w-auto flex flex-col justify-center items-center">
                        <div className="h-[3px] bg-white w-[20px] mb-1" />
                        <div className="h-[3px] bg-white w-[20px] mb-1" />
                        <div className="h-[3px] bg-white w-[20px]" />
                    </div> */}
                    <ul
                        className={`
                         w-screen relative max-w-[1400px] mt-4
                          overflow-auto top-auto right-auto flex flex-row justify-around text-center `}
                    >
                        {links.map((link, index) => (
                            <li key={index} className="text-sm sm:text-lg mb-2 pl-2 pr-2 sm:mb-0 hover:text-orange-400 border border-white bg-blue-800 sm:pr-6 sm:pl-6">
                                <button onClick={() => scrollToSection(link.destination)}>
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
 
        </nav>
    );
};

export default Navbar;
