import React, { useState } from "react";

interface NavbarProps {
    links: {
        name: string,
        destination: string
    }[]
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const [subMenuClicked, setSubMenuClicked] = useState(false);

    function handleSubmenuClick() {
        setSubMenuClicked(!subMenuClicked);
    }

    function scrollToSection(destination: string) {
        const element = document.getElementById(destination);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <nav className="fixed top-0 z-[200] w-screen left-0 bg-gradient-to-b from-blue-900 to-blue-800 h-[50px] flex justify-between items-center text-white">
            <div className="relative flex justify-between items-center w-screen ml-auto mr-auto sm:justify-center font-arima">
                <div
                    className={`fixed right-[5%] top-[15px] flex flex-col justify-center items-center sm:relative sm:top-auto sm:right-auto`}
                    onClick={handleSubmenuClick}
                >
                    <div className="sm:hidden w-[140px] sm:w-auto flex flex-col justify-center items-center">
                        <div className="h-[3px] bg-white w-[20px] mb-1" />
                        <div className="h-[3px] bg-white w-[20px] mb-1" />
                        <div className="h-[3px] bg-white w-[20px]" />
                    </div>
                    <ul
                        className={`text-left fixed right-[5%] top-[70px] overflow-hidden transition-[height] flex flex-col items-center justify-center rounded-lg w-[140px]
                         sm:w-screen sm:relative sm:max-w-[1400px]
                          sm:overflow-auto sm:top-auto sm:right-auto sm:flex-row justify-around sm:text-center ${subMenuClicked ? 'h-[100px] bg-radial-gradient from-blue-500 to-blue-900 p-0' : 'h-[0px] p-0 sm:h-auto'}`}
                    >
                        {links.map((link, index) => (
                            <li key={index} className="text-lg mb-2 pl-2 pr-2 sm:mb-0 hover:text-orange-400 sm:border sm:border-white sm:bg-blue-800 sm:pr-6 sm:pl-6">
                                <button onClick={() => scrollToSection(link.destination)}>
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
